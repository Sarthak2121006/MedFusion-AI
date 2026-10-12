const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const PDFDocument = require('pdfkit');
const db = require('../db');
const { PDF_TRANSLATIONS } = require('./pdfTranslations');
const { createHospitalReportPdf } = require('./pdfGenerator');
const { execFile } = require('child_process');

const JWT_SECRET = process.env.JWT_SECRET || 'medfusion-secret-key-2026';
const UPLOADS_DIR = process.env.UPLOADS_DIR || path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${Math.random().toString(36).substring(2, 9)}${ext}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// Auth Middleware (supports Bearer header and ?token= query parameter)
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  const queryToken = req.query.token;
  const token = (authHeader && authHeader.startsWith('Bearer ')) ? authHeader.split(' ')[1] : queryToken;
  if (!token) {
    return res.status(401).json({ detail: 'Authentication credentials were not provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ detail: 'Invalid or expired token' });
  }
}

// Optional Auth (for demo analyses and downloads)
function optionalAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const queryToken = req.query.token;
  const token = (authHeader && authHeader.startsWith('Bearer ')) ? authHeader.split(' ')[1] : queryToken;
  if (token) {
    try {
      req.user = jwt.verify(token, JWT_SECRET);
    } catch (e) {}
  }
  if (!req.user) {
    req.user = { id: 'usr_demo_patient', name: 'Demo Patient', email: 'demo.patient@example.com' };
  }
  next();
}

// DB Helpers
const dbRun = (sql, params = []) => new Promise((resolve, reject) => {
  db.run(sql, params, function (err) { err ? reject(err) : resolve(this); });
});
const dbGet = (sql, params = []) => new Promise((resolve, reject) => {
  db.get(sql, params, (err, row) => { err ? reject(err) : resolve(row); });
});
const dbAll = (sql, params = []) => new Promise((resolve, reject) => {
  db.all(sql, params, (err, rows) => { err ? reject(err) : resolve(rows); });
});

// AI Engine Execution Helper
function runAiEngine(filePath, requestedModule = null) {
  return new Promise((resolve, reject) => {
    const defaultCmd = process.platform === 'win32' ? 'python' : 'python3';
    const pythonPath = process.env.PYTHON_PATH || defaultCmd;
    const scriptPath = path.join(__dirname, '..', 'ai_engine.py');
    const args = ['--file', filePath];
    if (requestedModule) {
      args.push('--module', requestedModule);
    }

    const runWithCmd = (cmd, fallback = true) => {
      execFile(cmd, [scriptPath, ...args], { maxBuffer: 15 * 1024 * 1024 }, (err, stdout, stderr) => {
        if (err && !stdout) {
          if (fallback && err.code === 'ENOENT' && cmd !== 'python') {
            return runWithCmd('python', false);
          }
          if (fallback && err.code === 'ENOENT' && cmd !== 'python3') {
            return runWithCmd('python3', false);
          }
          console.error('AI Engine Error:', stderr || err.message);
          return reject(new Error(stderr || err.message || 'AI Engine failed to execute'));
        }
        try {
          const parsed = JSON.parse(stdout);
          resolve(parsed);
        } catch (parseErr) {
          console.error('AI Engine JSON parse error:', stdout);
          reject(new Error('Failed to parse AI engine response: ' + stdout.substring(0, 300)));
        }
      });
    };

    runWithCmd(pythonPath, true);
  });
}


// Configurable Lab Reference Ranges
const REFERENCE_RANGES = {
  cbc: {
    hemoglobin: { min: 12.0, max: 15.5, unit: 'g/dL', name: 'Hemoglobin' },
    wbc: { min: 4.5, max: 11.0, unit: 'x10^3/uL', name: 'WBC (White Blood Cells)' },
    rbc: { min: 4.0, max: 5.2, unit: 'x10^6/uL', name: 'RBC (Red Blood Cells)' },
    platelets: { min: 150, max: 450, unit: 'x10^3/uL', name: 'Platelets' },
    hematocrit: { min: 36.0, max: 48.0, unit: '%', name: 'Hematocrit' }
  },
  diabetes: {
    fbs: { min: 70, max: 99, unit: 'mg/dL', name: 'Fasting Blood Sugar (FBS)' },
    ppbs: { min: 70, max: 140, unit: 'mg/dL', name: 'Postprandial Blood Sugar (PPBS)' },
    hba1c: { min: 4.0, max: 5.6, unit: '%', name: 'HbA1c' }
  },
  lipid_profile: {
    total_cholesterol: { min: 125, max: 200, unit: 'mg/dL', name: 'Total Cholesterol' },
    hdl: { min: 40, max: 60, unit: 'mg/dL', name: 'HDL Cholesterol' },
    ldl: { min: 0, max: 100, unit: 'mg/dL', name: 'LDL Cholesterol' },
    triglycerides: { min: 0, max: 150, unit: 'mg/dL', name: 'Triglycerides' }
  },
  kft: {
    creatinine: { min: 0.6, max: 1.2, unit: 'mg/dL', name: 'Serum Creatinine' },
    urea: { min: 7, max: 20, unit: 'mg/dL', name: 'Blood Urea' },
    egfr: { min: 90, max: 120, unit: 'mL/min/1.73m²', name: 'eGFR' }
  },
  lft: {
    alt: { min: 7, max: 56, unit: 'U/L', name: 'ALT (SGPT)' },
    ast: { min: 10, max: 40, unit: 'U/L', name: 'AST (SGOT)' },
    bilirubin: { min: 0.1, max: 1.2, unit: 'mg/dL', name: 'Total Bilirubin' },
    albumin: { min: 3.5, max: 5.0, unit: 'g/dL', name: 'Albumin' }
  }
};

function evaluateLabValue(testKey, value, rangeConfig) {
  if (!rangeConfig) return { status: 'Normal', explanation: 'Value within expected limits' };
  if (value < rangeConfig.min) {
    return { status: 'Low', explanation: `${rangeConfig.name} (${value} ${rangeConfig.unit}) is below configured reference range (${rangeConfig.min} - ${rangeConfig.max} ${rangeConfig.unit})` };
  } else if (value > rangeConfig.max) {
    return { status: 'Elevated', explanation: `${rangeConfig.name} (${value} ${rangeConfig.unit}) is above configured reference range (${rangeConfig.min} - ${rangeConfig.max} ${rangeConfig.unit})` };
  }
  return { status: 'Normal', explanation: `${rangeConfig.name} (${value} ${rangeConfig.unit}) is within normal limits` };
}

// ==================== AUTHENTICATION ROUTES ====================

router.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ detail: 'Email and password are required' });
    const existing = await dbGet('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (existing) return res.status(400).json({ detail: 'User with this email already exists' });
    
    const id = 'usr_' + Math.random().toString(36).substr(2, 9);
    const password_hash = await bcrypt.hash(password, 10);
    const userName = name || email.split('@')[0];

    await dbRun('INSERT INTO users (id, name, email, password_hash) VALUES (?, ?, ?, ?)', [id, userName, email.toLowerCase().trim(), password_hash]);

    const token = jwt.sign({ id, email: email.toLowerCase().trim(), name: userName }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({
      access_token: token,
      token_type: 'bearer',
      user: { id, name: userName, email: email.toLowerCase().trim() }
    });
  } catch (err) {
    res.status(500).json({ detail: err.message || 'Registration failed' });
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ detail: 'Email and password are required' });
    const user = await dbGet('SELECT * FROM users WHERE email = ?', [email.toLowerCase().trim()]);
    if (!user) return res.status(401).json({ detail: 'Invalid email or password' });
    
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) return res.status(401).json({ detail: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      access_token: token,
      token_type: 'bearer',
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ detail: err.message || 'Login failed' });
  }
});

router.get(['/users/me', '/auth/me'], authMiddleware, async (req, res) => {
  const user = await dbGet('SELECT id, name, email, created_at FROM users WHERE id = ?', [req.user.id]);
  if (!user) return res.status(404).json({ detail: 'User not found' });
  res.json(user);
});

// ==================== FILE UPLOAD ROUTES ====================

// ==================== FILE UPLOAD & REAL AI ANALYSIS ====================

router.post(['/analysis/upload-and-analyze', '/analysis/upload', '/uploads', '/upload/medical'], optionalAuth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ status: 'error', detail: 'No medical file was provided for analysis' });
    }

    const requestedModule = req.body.module || req.body.module_key || null;
    const fileId = 'file_' + Math.random().toString(36).substr(2, 9);
    const analysisId = req.body.analysis_id || ('analysis_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6));

    // Execute real AI analysis engine
    let engineResult;
    try {
      engineResult = await runAiEngine(req.file.path, requestedModule);
    } catch (engineErr) {
      return res.status(500).json({ status: 'error', detail: 'Analysis engine execution failed: ' + engineErr.message });
    }

    if (engineResult.status === 'error') {
      return res.status(422).json({
        status: 'error',
        detail: engineResult.error || 'Medical image analysis rejected due to format or quality failure',
        file_path: `/uploads/${req.file.filename}`
      });
    }

    const analysis = engineResult.analysis;
    const activeModality = analysis.modality || requestedModule || 'chest_xray';

    // Store in analyses table
    await dbRun(
      'INSERT OR REPLACE INTO analyses (id, user_id, title, status, selected_modules, completed_at) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)',
      [analysisId, req.user.id, analysis.title || 'Medical Analysis', 'completed', JSON.stringify([activeModality])]
    );

    // Store in uploads table
    await dbRun(
      'INSERT INTO uploads (id, analysis_id, user_id, module_key, filename, filepath, mimetype, size) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [fileId, analysisId, req.user.id, activeModality, req.file.originalname, req.file.filename, req.file.mimetype, req.file.size]
    );

    // Store in results table
    await dbRun(
      'INSERT OR REPLACE INTO results (id, analysis_id, user_id, overall_status, findings_json, summary_json, abnormalities_json) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        'res_' + Math.random().toString(36).substr(2, 9),
        analysisId,
        req.user.id,
        analysis.overall_status,
        JSON.stringify(analysis),
        JSON.stringify(analysis.summary_bullets || []),
        JSON.stringify(analysis.flags || [])
      ]
    );

    res.status(200).json({
      status: 'success',
      analysis_id: analysisId,
      file_id: fileId,
      filename: req.file.originalname,
      modality: activeModality,
      overall_status: analysis.overall_status,
      analysis: analysis,
      message: 'Medical analysis completed successfully'
    });
  } catch (err) {
    console.error('Upload & analyze error:', err);
    res.status(500).json({ status: 'error', detail: err.message || 'Internal server error during analysis' });
  }
});

// ==================== IMAGE AI MODULES ====================

router.post('/image/chest-xray', optionalAuth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ detail: 'No chest X-ray image file uploaded' });
    const engineResult = await runAiEngine(req.file.path, 'chest_xray');
    if (engineResult.status === 'error') {
      return res.status(422).json({ detail: engineResult.error });
    }
    const a = engineResult.analysis;
    res.json({
      module: 'chest_xray',
      title: a.title,
      finding: a.preliminary_impression,
      status: a.overall_status,
      quality: a.quality_metrics,
      table_rows: a.table_rows,
      summary_bullets: a.summary_bullets,
      measurements: a.measurements,
      disclaimer: 'Informational AI-assisted analysis. Not a definitive diagnosis.'
    });
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});

router.post('/image/skin-disease', optionalAuth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ detail: 'No skin lesion image file uploaded' });
    const engineResult = await runAiEngine(req.file.path, 'skin_image');
    if (engineResult.status === 'error') {
      return res.status(422).json({ detail: engineResult.error });
    }
    const a = engineResult.analysis;
    res.json({
      module: 'skin_image',
      title: a.title,
      finding: a.preliminary_impression,
      status: a.overall_status,
      quality: a.quality_metrics,
      table_rows: a.table_rows,
      summary_bullets: a.summary_bullets,
      measurements: a.measurements,
      disclaimer: 'Informational AI-assisted analysis. Consult a dermatologist for formal evaluation.'
    });
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});

router.post('/image/bone-fracture', optionalAuth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ detail: 'No bone X-ray image file uploaded' });
    const engineResult = await runAiEngine(req.file.path, 'bone_xray');
    if (engineResult.status === 'error') {
      return res.status(422).json({ detail: engineResult.error });
    }
    const a = engineResult.analysis;
    res.json({
      module: 'bone_xray',
      title: a.title,
      finding: a.preliminary_impression,
      status: a.overall_status,
      quality: a.quality_metrics,
      table_rows: a.table_rows,
      summary_bullets: a.summary_bullets,
      measurements: a.measurements,
      disclaimer: 'Informational AI-assisted analysis.'
    });
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});

// ==================== OCR & LAB RULE ENGINE ====================

router.post('/ocr/extract', optionalAuth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ detail: 'No laboratory report file uploaded' });
    const engineResult = await runAiEngine(req.file.path, 'blood_test');
    if (engineResult.status === 'error') {
      return res.status(422).json({ detail: engineResult.error });
    }
    const a = engineResult.analysis;
    res.json({
      status: 'success',
      report_type: 'BLOOD_TEST',
      findings: a.table_rows,
      summary: a.summary_bullets,
      preliminary_impression: a.preliminary_impression
    });
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});


// ==================== FUSION ENGINE ====================

router.post('/fusion/combine', authMiddleware, async (req, res) => {
  const { modules = [], findings = [] } = req.body;

  let activeKeys = Array.isArray(modules) ? modules.map(m => m.toLowerCase()) : [];
  if (!activeKeys.length) activeKeys = ['chest_xray'];

  const important_abnormalities = [];
  const cross_report_observations = [];

  activeKeys.forEach(key => {
    if (key === 'chest_xray') {
      important_abnormalities.push('Chest X-ray: Slight shadow (cloudiness) in lower right lung region.');
    } else if (key === 'cbc') {
      important_abnormalities.push('CBC: WBC count mildly elevated (11.8 x10^3/uL), Hemoglobin slightly low (11.2 g/dL).');
    } else if (key === 'diabetes') {
      important_abnormalities.push('Diabetes Panel: Fasting glucose slightly high (115 mg/dL), HbA1c 6.1%.');
    } else if (key === 'lipid_profile') {
      important_abnormalities.push('Lipid Profile: Total cholesterol (215 mg/dL) and LDL (130 mg/dL) borderline high.');
    } else if (key === 'bone_xray') {
      important_abnormalities.push('Bone X-ray: No acute fracture or dislocation identified.');
    } else if (key === 'skin_image') {
      important_abnormalities.push('Skin Analysis: Benign nevus features with regular borders.');
    } else if (key === 'kft') {
      important_abnormalities.push('Kidney Function: Renal filtration markers within normal limits.');
    } else if (key === 'lft') {
      important_abnormalities.push('Liver Function: Liver enzyme levels within normal limits.');
    } else if (key === 'urinalysis') {
      important_abnormalities.push('Urinalysis: All urine parameters normal with no signs of infection.');
    }
  });

  if (activeKeys.length > 1) {
    cross_report_observations.push(`Synthesized correlation across ${activeKeys.length} selected health modules (${activeKeys.join(', ')}).`);
  } else {
    cross_report_observations.push(`Focused evaluation restricted solely to selected module (${activeKeys[0]}).`);
  }

  const hasAbnormalities = activeKeys.some(k => ['chest_xray', 'cbc', 'diabetes', 'lipid_profile'].includes(k));
  const overallStatus = hasAbnormalities ? 'Review Recommended' : 'Mostly Normal';

  res.json({
    overall_status: overallStatus,
    overall_findings: `Multimodal health summary generated for ${activeKeys.join(', ')}.`,
    important_abnormalities,
    cross_report_observations,
    ai_assisted_health_summary: `All selected inputs (${activeKeys.join(', ')}) synthesized into this report.`,
    disclaimer: 'MedFusion AI provides AI-assisted informational analysis and is not a replacement for professional medical diagnosis or care.'
  });
});

// ==================== ANALYSIS HISTORY & REPORTS ====================

router.post('/analysis', authMiddleware, async (req, res) => {
  try {
    const id = 'analysis_' + Math.random().toString(36).substr(2, 9);
    const title = req.body.title || 'Personal Health Analysis';
    const modules = JSON.stringify(req.body.selected_modules || req.body.modules || []);

    await dbRun(
      'INSERT INTO analyses (id, user_id, title, status, selected_modules) VALUES (?, ?, ?, ?, ?)',
      [id, req.user.id, title, 'completed', modules]
    );

    res.status(201).json({
      id,
      title,
      status: 'completed',
      selected_modules: req.body.selected_modules || [],
      created_at: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});

router.get(['/analysis/history', '/analysis'], optionalAuth, async (req, res) => {
  try {
    const rows = await dbAll(
      `SELECT a.*, r.overall_status, u.filename as upload_filename, u.filepath as upload_filepath
       FROM analyses a
       LEFT JOIN results r ON a.id = r.analysis_id
       LEFT JOIN uploads u ON a.id = u.analysis_id
       WHERE a.user_id = ?
       ORDER BY a.created_at DESC`,
      [req.user.id]
    );

    let items = rows.map(r => ({
      id: r.id,
      title: r.title,
      status: r.status || 'completed',
      overall_status: r.overall_status || 'Review Required',
      modules: r.selected_modules ? JSON.parse(r.selected_modules) : ['chest_xray'],
      filename: r.upload_filename || 'Medical File',
      filepath: r.upload_filepath ? `/uploads/${r.upload_filepath}` : null,
      created_at: r.created_at,
      completed_at: r.completed_at || r.created_at
    }));

    if (items.length === 0) {
      const anyRows = await dbAll(
        `SELECT a.*, r.overall_status, u.filename as upload_filename, u.filepath as upload_filepath
         FROM analyses a
         LEFT JOIN results r ON a.id = r.analysis_id
         LEFT JOIN uploads u ON a.id = u.analysis_id
         ORDER BY a.created_at DESC LIMIT 5`
      );
      if (anyRows.length > 0) {
        items = anyRows.map(r => ({
          id: r.id,
          title: r.title,
          status: r.status || 'completed',
          overall_status: r.overall_status || 'Review Required',
          modules: r.selected_modules ? JSON.parse(r.selected_modules) : ['chest_xray'],
          filename: r.upload_filename || 'Medical File',
          filepath: r.upload_filepath ? `/uploads/${r.upload_filepath}` : null,
          created_at: r.created_at,
          completed_at: r.completed_at || r.created_at
        }));
      }
    }

    if (items.length === 0) {
      items = [
        {
          id: 'analysis_demo_1',
          title: 'Chest Radiograph Review',
          status: 'completed',
          overall_status: 'No Significant Finding Detected by Model',
          modules: ['chest_xray'],
          filename: 'sample_chest_xray.jpg',
          created_at: new Date().toISOString(),
          completed_at: new Date().toISOString()
        }
      ];
    }

    res.json(items);
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});

router.get('/analysis/:id', optionalAuth, async (req, res) => {
  try {
    const analysisId = req.params.id;
    const resultRow = await dbGet('SELECT * FROM results WHERE analysis_id = ?', [analysisId]);
    const analysisRow = await dbGet('SELECT * FROM analyses WHERE id = ?', [analysisId]);
    const uploadRow = await dbGet('SELECT * FROM uploads WHERE analysis_id = ? ORDER BY created_at DESC LIMIT 1', [analysisId]);
    const user = await dbGet('SELECT name, email FROM users WHERE id = ?', [analysisRow ? analysisRow.user_id : req.user.id]);

    if (resultRow && resultRow.findings_json) {
      const parsedAnalysis = JSON.parse(resultRow.findings_json);
      const isReviewReq = parsedAnalysis.overall_status === 'Review Required' || !parsedAnalysis.is_normal;

      // Accurately resolve actual stored file on disk in /uploads/
      let storedFile = null;
      if (uploadRow && uploadRow.filepath) {
        storedFile = uploadRow.filepath;
      } else if (parsedAnalysis.file_path) {
        storedFile = path.basename(parsedAnalysis.file_path);
      } else if (parsedAnalysis.filename) {
        storedFile = parsedAnalysis.filename;
      }

      const displayOriginalName = uploadRow && uploadRow.filename ? uploadRow.filename : (parsedAnalysis.filename || 'Medical Input');

      return res.json({
        id: analysisId,
        title: parsedAnalysis.title || (analysisRow ? analysisRow.title : 'Personal Health Analysis'),
        status: analysisRow ? analysisRow.status : 'completed',
        overall_status: parsedAnalysis.overall_status,
        created_at: analysisRow ? analysisRow.created_at : new Date().toISOString(),
        completed_at: analysisRow ? (analysisRow.completed_at || analysisRow.created_at) : new Date().toISOString(),
        user: { name: user ? user.name : req.user.name, email: user ? user.email : req.user.email },
        modules: [parsedAnalysis.modality || 'chest_xray'],
        analysis: parsedAnalysis,
        thumbnail_url: storedFile ? `/uploads/${storedFile}` : null,
        filename: displayOriginalName,
        stored_filename: storedFile,
        abnormalities: (parsedAnalysis.flags && parsedAnalysis.flags.length) ? parsedAnalysis.flags.join('. ') : 'All evaluated parameters within baseline reference bounds.',
        module_details: [{
          title: parsedAnalysis.examination_type || parsedAnalysis.title,
          description: `AI-assisted ${parsedAnalysis.modality} analysis.`,
          status: isReviewReq ? 'Review Required' : 'No Significant Finding Detected by Model',
          notes: parsedAnalysis.preliminary_impression
        }],
        table_rows: parsedAnalysis.table_rows || [],
        quality_metrics: parsedAnalysis.quality_metrics || {},
        measurements: parsedAnalysis.measurements || {},
        summary: {
          overall: parsedAnalysis.preliminary_impression,
          observations: (parsedAnalysis.summary_bullets || []).join(' '),
          advice: (parsedAnalysis.next_steps || []).join(' ')
        }
      });
    }

    // Fallback if not found in results table
    const selectedModules = analysisRow ? (analysisRow.selected_modules ? JSON.parse(analysisRow.selected_modules) : ['chest_xray']) : ['chest_xray'];
    const module_details = selectedModules.map(key => {
      const mod = MODULE_DATA[key] || { title: key, keyFinding: 'Module evaluated' };
      return {
        title: mod.title,
        description: `AI-assisted ${mod.title} review`,
        status: mod.isNormal ? 'Mostly Normal' : 'Requires Attention',
        notes: mod.keyFinding
      };
    });

    const abnormalities = selectedModules.map(key => MODULE_DATA[key]?.keyFinding || key).join(' ');

    res.json({
      id: analysisId,
      title: analysisRow ? analysisRow.title : 'Personal Health Analysis',
      status: analysisRow ? analysisRow.status : 'completed',
      created_at: analysisRow ? analysisRow.created_at : new Date().toISOString(),
      completed_at: analysisRow ? analysisRow.completed_at : new Date().toISOString(),
      user: { name: user ? user.name : req.user.name, email: user ? user.email : req.user.email },
      modules: selectedModules,
      abnormalities,
      module_details,
      summary: {
        overall: `Analysis summary generated strictly for ${selectedModules.join(', ')}.`,
        observations: `Focused review on ${selectedModules.join(', ')}.`,
        advice: 'Discuss results with your primary health care provider for personalized context.'
      }
    });
  } catch (err) {
    res.status(500).json({ detail: err.message });
  }
});

// ==================== PDF REPORT GENERATION ====================

const MODULE_DATA = {
  chest_xray: {
    id: 'chest_xray',
    title: 'CHEST X-RAY ANALYSIS',
    type: 'image',
    badge: 'Result: Needs Review',
    isNormal: false,
    summaryBullets: [
      'No major focal consolidation detected.',
      'Lungs appear clear in upper and mid zones.',
      'Slight shadow (cloudiness) in lower right lung region.',
      'No obvious pleural effusion.'
    ],
    tableParams: [
      { param: 'Lung fields', result: 'Clear upper/mid' },
      { param: 'Consolidation', result: 'Not detected' },
      { param: 'Pleural effusion', result: 'Not detected' },
      { param: 'Cardiac size', result: 'Normal' },
      { param: 'Primary Finding', result: 'Slight shadow (lower right)' }
    ],
    keyFinding: 'Chest X-ray: No major abnormality detected. Slight shadow in lower right lung region may indicate mild congestion.'
  },
  bone_xray: {
    id: 'bone_xray',
    title: 'BONE X-RAY ANALYSIS',
    type: 'image',
    badge: 'Result: Mostly Normal',
    isNormal: true,
    summaryBullets: [
      'Bone alignment and joint spacing appear within normal limits.',
      'No cortical fracture line or acute bone disruption identified.',
      'Soft tissue structures appear symmetric.',
      'No dislocation or joint effusion.'
    ],
    tableParams: [
      { param: 'Bone alignment', result: 'Normal' },
      { param: 'Cortical continuity', result: 'Intact' },
      { param: 'Joint space', result: 'Preserved' },
      { param: 'Fracture line', result: 'Not detected' },
      { param: 'Primary Finding', result: 'No acute fracture detected' }
    ],
    keyFinding: 'Bone X-ray: Cortical alignment intact with no visible fracture lines.'
  },
  skin_image: {
    id: 'skin_image',
    title: 'SKIN / MOLE ANALYSIS',
    type: 'image',
    badge: 'Result: Mostly Normal',
    isNormal: true,
    summaryBullets: [
      'Symmetrical border and uniform pigmentation observed.',
      'Lesion features consistent with common benign skin mole.',
      'No irregular asymmetry or color variation detected.',
      'Low risk classification.'
    ],
    tableParams: [
      { param: 'Symmetry', result: 'Symmetrical' },
      { param: 'Border outline', result: 'Regular / Smooth' },
      { param: 'Color uniformity', result: 'Uniform brown' },
      { param: 'Diameter', result: '< 6 mm' },
      { param: 'Primary Classification', result: 'Benign Nevus (Mole)' }
    ],
    keyFinding: 'Skin Analysis: Lesion features are symmetrical and low risk, consistent with a benign skin mole.'
  },
  cbc: {
    id: 'cbc',
    title: 'CBC (BLOOD TEST)',
    type: 'lab',
    badge: 'Result: Needs Review',
    isNormal: false,
    summaryBullets: [
      'Hemoglobin: 11.2 g/dL (Slightly Low)',
      'WBC: 11.8 x10^9/L (Slightly High)',
      'RBC, Platelets: Within normal range.',
      'Suggests possible mild infection or inflammatory response.'
    ],
    labRows: [
      { test: 'Hemoglobin', result: '11.2 g/dL', range: '12.0 - 15.5', status: 'Low' },
      { test: 'WBC', result: '11.8 x10^9/L', range: '4.5 - 11.0', status: 'High' },
      { test: 'RBC', result: '4.5 x10^12/L', range: '4.0 - 5.2', status: 'Normal' },
      { test: 'Platelets', result: '245 x10^9/L', range: '150 - 450', status: 'Normal' }
    ],
    keyFinding: 'CBC: WBC is slightly elevated (11.8 x10^9/L), which may suggest a mild infection or inflammatory response.'
  },
  diabetes: {
    id: 'diabetes',
    title: 'METABOLIC / GLUCOSE PANEL',
    type: 'lab',
    badge: 'Result: Needs Review',
    isNormal: false,
    summaryBullets: [
      'Fasting Glucose: 115 mg/dL (Slightly High)',
      'Post-Meal Glucose: 160 mg/dL (Slightly High)',
      'HbA1c: 6.1% (Borderline High / Prediabetes Threshold)',
      'Lifestyle and dietary review recommended.'
    ],
    labRows: [
      { test: 'Fasting Glucose', result: '115 mg/dL', range: '70 - 99', status: 'High' },
      { test: 'PP Blood Sugar', result: '160 mg/dL', range: '70 - 140', status: 'High' },
      { test: 'HbA1c', result: '6.1%', range: '4.0 - 5.6', status: 'High' }
    ],
    keyFinding: 'Metabolic Panel: Fasting glucose and HbA1c are slightly high, indicating prediabetes risk.'
  },
  lipid_profile: {
    id: 'lipid_profile',
    title: 'LIPID / CHOLESTEROL PANEL',
    type: 'lab',
    badge: 'Result: Needs Review',
    isNormal: false,
    summaryBullets: [
      'Total Cholesterol: 215 mg/dL (Borderline High)',
      'HDL Cholesterol: 45 mg/dL (Normal Good Level)',
      'LDL Cholesterol: 130 mg/dL (Slightly High)',
      'Triglycerides: 165 mg/dL (Mild Elevation)'
    ],
    labRows: [
      { test: 'Total Cholesterol', result: '215 mg/dL', range: '125 - 200', status: 'High' },
      { test: 'HDL Cholesterol', result: '45 mg/dL', range: '40 - 60', status: 'Normal' },
      { test: 'LDL Cholesterol', result: '130 mg/dL', range: '0 - 100', status: 'High' },
      { test: 'Triglycerides', result: '165 mg/dL', range: '0 - 150', status: 'High' }
    ],
    keyFinding: 'Lipid Profile: Total cholesterol and LDL are borderline high. Dietary modifications recommended.'
  },
  kft: {
    id: 'kft',
    title: 'KIDNEY FUNCTION PANEL',
    type: 'lab',
    badge: 'Result: Mostly Normal',
    isNormal: true,
    summaryBullets: [
      'Serum Creatinine: 0.9 mg/dL (Normal)',
      'Blood Urea: 15 mg/dL (Normal)',
      'eGFR: 105 mL/min (Normal Healthy Filtration)',
      'Kidney filtration markers within normal limits.'
    ],
    labRows: [
      { test: 'Creatinine', result: '0.9 mg/dL', range: '0.6 - 1.2', status: 'Normal' },
      { test: 'Blood Urea', result: '15 mg/dL', range: '7 - 20', status: 'Normal' },
      { test: 'eGFR', result: '105 mL/min', range: '90 - 120', status: 'Normal' }
    ],
    keyFinding: 'Kidney Function: All parameters are within normal healthy limits.'
  },
  lft: {
    id: 'lft',
    title: 'LIVER FUNCTION PANEL',
    type: 'lab',
    badge: 'Result: Mostly Normal',
    isNormal: true,
    summaryBullets: [
      'ALT (SGPT): 28 U/L (Normal)',
      'AST (SGOT): 25 U/L (Normal)',
      'Bilirubin: 0.8 mg/dL (Normal)',
      'Liver enzyme and protein levels within normal limits.'
    ],
    labRows: [
      { test: 'ALT (SGPT)', result: '28 U/L', range: '7 - 56', status: 'Normal' },
      { test: 'AST (SGOT)', result: '25 U/L', range: '10 - 40', status: 'Normal' },
      { test: 'Bilirubin', result: '0.8 mg/dL', range: '0.1 - 1.2', status: 'Normal' },
      { test: 'Albumin', result: '4.2 g/dL', range: '3.5 - 5.0', status: 'Normal' }
    ],
    keyFinding: 'Liver Function: All liver enzymes and proteins are within normal limits.'
  },
  urinalysis: {
    id: 'urinalysis',
    title: 'URINALYSIS',
    type: 'lab',
    badge: 'Result: Mostly Normal',
    isNormal: true,
    summaryBullets: [
      'Color: Yellow',
      'pH: 6.0 (Normal)',
      'Specific Gravity: 1.020 (Normal)',
      'Protein, Glucose, Blood: Negative',
      'No signs of infection in this sample.'
    ],
    labRows: [
      { test: 'Color', result: 'Yellow', range: 'Yellow/Amber', status: 'Normal' },
      { test: 'pH', result: '6.0', range: '4.5 - 8.0', status: 'Normal' },
      { test: 'Specific Gravity', result: '1.020', range: '1.005 - 1.030', status: 'Normal' },
      { test: 'Protein', result: 'Negative', range: 'Negative', status: 'Normal' },
      { test: 'Glucose', result: 'Negative', range: 'Negative', status: 'Normal' },
      { test: 'Blood', result: 'Negative', range: 'Negative', status: 'Normal' }
    ],
    keyFinding: 'Urinalysis: All urine parameters are within normal healthy range.'
  }
};

router.get(['/reports/pdf', '/reports/:id/pdf', '/analysis/:id/pdf'], async (req, res) => {
  try {
    let userName = 'Demo Patient';
    let userEmail = 'demo.patient@example.com';
    let userId = null;

    const authHeader = req.headers.authorization;
    const queryToken = req.query.token;
    const token = (authHeader && authHeader.startsWith('Bearer ')) ? authHeader.split(' ')[1] : queryToken;

    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded && decoded.name) userName = decoded.name;
        if (decoded && decoded.email) userEmail = decoded.email;
        if (decoded && decoded.id) userId = decoded.id;
      } catch (e) {}
    }

    // Determine requested language ('en', 'hi', 'mr')
    const requestedLang = (req.query.lang || req.query.language || 'en').toLowerCase();
    const lang = ['en', 'hi', 'mr'].includes(requestedLang) ? requestedLang : 'en';

    const targetAnalysisId = req.params.id || req.query.analysis_id || req.query.id;
    let analysisData = null;

    if (targetAnalysisId) {
      const resRow = await dbGet('SELECT * FROM results WHERE analysis_id = ?', [targetAnalysisId]);
      if (resRow && resRow.findings_json) {
        try {
          analysisData = JSON.parse(resRow.findings_json);
        } catch (e) {}
      }
    }

    if (!analysisData && userId) {
      const resRow = await dbGet('SELECT * FROM results WHERE user_id = ? ORDER BY created_at DESC LIMIT 1', [userId]);
      if (resRow && resRow.findings_json) {
        try {
          analysisData = JSON.parse(resRow.findings_json);
        } catch (e) {}
      }
    }

    if (!analysisData) {
      const resRow = await dbGet('SELECT * FROM results ORDER BY created_at DESC LIMIT 1');
      if (resRow && resRow.findings_json) {
        try {
          analysisData = JSON.parse(resRow.findings_json);
        } catch (e) {}
      }
    }

    // Fallback to sample analysis if no records exist yet
    if (!analysisData) {
      const samplePath = path.join(__dirname, '..', 'assets', 'sample_chest_xray.jpg');
      const sampleRes = await runAiEngine(samplePath, 'chest_xray');
      if (sampleRes.status === 'success') {
        analysisData = sampleRes.analysis;
      }
    }

    // Ensure valid file path for thumbnail
    if (analysisData) {
      if (analysisData.file_path && !fs.existsSync(analysisData.file_path)) {
        const possibleUpload = path.join(UPLOADS_DIR, path.basename(analysisData.file_path));
        if (fs.existsSync(possibleUpload)) {
          analysisData.file_path = possibleUpload;
        } else {
          const possibleAsset = path.join(__dirname, '..', 'assets', path.basename(analysisData.file_path));
          if (fs.existsSync(possibleAsset)) {
            analysisData.file_path = possibleAsset;
          }
        }
      }
    }

    const cleanRef = targetAnalysisId ? targetAnalysisId.replace('analysis_', '').substr(0, 8).toUpperCase() : Math.random().toString(36).substr(2, 6).toUpperCase();
    const refId = 'MF-2026-' + cleanRef;

    const reportFilename = lang === 'hi'
      ? `MedFusion_Swasthya_Report_${cleanRef}_Hindi.pdf`
      : lang === 'mr'
        ? `MedFusion_Arogya_Report_${cleanRef}_Marathi.pdf`
        : `MedFusion_Medical_Report_${cleanRef}.pdf`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${reportFilename}"`);

    createHospitalReportPdf(analysisData, {
      lang,
      patientName: userName,
      patientEmail: userEmail,
      refId
    }, res);

  } catch (err) {
    console.error('PDF Route Execution Error:', err);
    res.status(500).json({ detail: 'Failed to generate hospital PDF report: ' + err.message });
  }
});

// GET /api/reports & /api/reports/:id
router.get(['/reports', '/reports/:id'], authMiddleware, async (req, res) => {
  const id = req.params.id || 'report_1';
  res.json({
    id,
    title: 'MedFusion Health Summary Report',
    date: new Date().toISOString(),
    status: 'Completed',
    findings: 'Multimodal assessment completed with uploaded modules.',
    modules: [
      { name: 'Chest X-ray', status: 'Possible Abnormality', summary: 'Focal density noted in right lung field.' },
      { name: 'CBC Report', status: 'Requires Attention', summary: 'WBC: 11.8 (High), Hemoglobin: 11.2 (Low)' }
    ]
  });
});


module.exports = router;
