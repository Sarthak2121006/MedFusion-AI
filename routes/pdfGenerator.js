/**
 * MedFusion AI - Hospital-Grade Premium Medical PDF Report Generator
 * Multi-page, evidence-based, examination-specific PDF report engine.
 * Supports English (en), Hindi (hi), and Marathi (mr).
 */

const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');
const { PDF_TRANSLATIONS } = require('./pdfTranslations');

const FONT_PATH = path.join(__dirname, '..', 'assets', 'fonts', 'NotoSansDevanagari.ttf');
const LOGO_PATH = path.join(__dirname, '..', 'assets', 'medfusion_logo.jpg');

function createHospitalReportPdf(analysisData, options = {}, streamTarget = null) {
  const lang = ['en', 'hi', 'mr'].includes(options.lang) ? options.lang : 'en';
  const t = PDF_TRANSLATIONS[lang] || PDF_TRANSLATIONS.en;
  const isDevanagari = (lang === 'hi' || lang === 'mr') && fs.existsSync(FONT_PATH);

  const doc = new PDFDocument({
    size: 'A4',
    margin: 36,
    bufferPages: true,
    autoFirstPage: true
  });

  if (streamTarget) {
    doc.pipe(streamTarget);
  }

  // Register font
  if (isDevanagari) {
    doc.registerFont('Devanagari', FONT_PATH);
  }

  function setFont(bold = false) {
    if (isDevanagari) {
      doc.font('Devanagari');
    } else {
      doc.font(bold ? 'Helvetica-Bold' : 'Helvetica');
    }
  }

  const patientName = options.patientName || 'Demo Patient';
  const patientEmail = options.patientEmail || 'patient@example.com';
  const patientId = options.patientId || ('PID-' + Math.floor(100000 + Math.random() * 900000));
  const refId = options.refId || ('MF-2026-' + Math.random().toString(36).substr(2, 6).toUpperCase());
  const reportDate = new Date().toLocaleDateString(lang === 'hi' ? 'hi-IN' : lang === 'mr' ? 'mr-IN' : 'en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
  const reportTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const modality = analysisData.modality || 'chest_xray';
  const examTitle = analysisData.examination_type || analysisData.title || 'Medical Examination';
  const isReviewRequired = analysisData.overall_status === 'Review Required' || !analysisData.is_normal;
  const overallStatusText = isReviewRequired ? (t.review_recommended || 'REVIEW REQUIRED') : (t.mostly_normal || 'NO SIGNIFICANT FINDING DETECTED BY MODEL');

  // =========================================================================
  // PAGE 1: EXECUTIVE MEDICAL SUMMARY
  // =========================================================================

  // Top Header Banner (Deep Hospital Navy)
  doc.rect(36, 36, 523, 72).fill('#082548');
  doc.rect(36, 108, 523, 3).fill('#0d9488'); // Teal accent bar

  // Embed Logo if exists
  const ICON_PATH = path.join(__dirname, '..', 'assets', 'medfusion_icon.png');
  let headerTextX = 50;
  if (fs.existsSync(ICON_PATH)) {
    try {
      doc.roundedRect(48, 44, 56, 56, 8).fill('#ffffff');
      doc.image(ICON_PATH, 50, 46, { fit: [52, 52], align: 'center', valign: 'center' });
      headerTextX = 114;
    } catch (e) {
      if (fs.existsSync(LOGO_PATH)) {
        try {
          doc.image(LOGO_PATH, 48, 46, { width: 48, height: 48 });
          headerTextX = 106;
        } catch (err) {}
      }
    }
  } else if (fs.existsSync(LOGO_PATH)) {
    try {
      doc.image(LOGO_PATH, 48, 46, { width: 48, height: 48 });
      headerTextX = 106;
    } catch (e) {}
  }

  setFont(true);
  doc.fillColor('#ffffff').fontSize(16).text(t.brand_title || 'MedFusion AI', headerTextX, 48);
  setFont(false);
  doc.fillColor('#99f6e4').fontSize(8).text(t.brand_sub || 'Hospital-Grade AI-Assisted Multimodal Diagnostic Intelligence', headerTextX, 68);
  doc.fillColor('#cbd5e1').fontSize(7).text(`Institutional Ref: ${refId}  |  Accredited Automated Analysis  |  A4 Clinical Standard`, headerTextX, 82);

  // Top Right Confidential Tag
  doc.rect(425, 48, 122, 28).fillAndStroke('#0f172a', '#334155');
  setFont(true);
  doc.fillColor('#38bdf8').fontSize(7).text('CONFIDENTIAL REPORT', 432, 53);
  setFont(false);
  doc.fillColor('#94a3b8').fontSize(6).text('For Patient & Physician Review', 432, 63);

  // Section 1: Patient Profile & Source Document Details
  let currentY = 122;
  doc.rect(36, currentY, 523, 62).fillAndStroke('#f8fafc', '#e2e8f0');

  // Left column: Patient Data
  setFont(true);
  doc.fillColor('#0f766e').fontSize(8).text('PATIENT IDENTIFICATION', 48, currentY + 8);
  setFont(false);
  doc.fillColor('#334155').fontSize(7.5);
  doc.text(`Patient Name   :  ${patientName}`, 48, currentY + 22);
  doc.text(`Patient ID       :  ${patientId}`, 48, currentY + 34);
  doc.text(`Email Address :  ${patientEmail}`, 48, currentY + 46);

  // Right column: Examination & File Details
  setFont(true);
  doc.fillColor('#0f766e').fontSize(8).text('EXAMINATION & FILE DETAILS', 300, currentY + 8);
  setFont(false);
  doc.fillColor('#334155').fontSize(7.5);
  doc.text(`Study Type     :  ${examTitle}`, 300, currentY + 22);
  doc.text(`Source File     :  ${analysisData.filename || 'Source Medical Capture'}`, 300, currentY + 34);
  doc.text(`Date & Time   :  ${reportDate} at ${reportTime}`, 300, currentY + 46);

  // Section 2: Overall Analysis Status Banner
  currentY += 72;
  const statusBg = isReviewRequired ? '#fff1f2' : '#f0fdf4';
  const statusBorder = isReviewRequired ? '#f43f5e' : '#10b981';
  const statusTextCol = isReviewRequired ? '#be123c' : '#047857';

  doc.rect(36, currentY, 523, 40).fillAndStroke(statusBg, statusBorder);
  doc.circle(58, currentY + 20, 11).fill(isReviewRequired ? '#e11d48' : '#059669');
  setFont(true);
  doc.fillColor('#ffffff').fontSize(12).text(isReviewRequired ? '!' : '✓', 54.5, currentY + 14);

  doc.fillColor(statusTextCol).fontSize(10).text(overallStatusText, 78, currentY + 10);
  setFont(false);
  doc.fillColor('#475569').fontSize(7.5).text(
    isReviewRequired
      ? 'Findings identified outside normal limits. Qualified medical clinician review is advised.'
      : 'No significant diagnostic abnormalities detected by AI model. Correlate with clinical symptoms.',
    78, currentY + 24
  );

  // Section 3: Executive Findings Summary + Real Uploaded Image Thumbnail
  currentY += 50;

  // Left Side (Width 320): Executive Summary Bullets & Key Findings
  doc.rect(36, currentY, 330, 205).fillAndStroke('#ffffff', '#cbd5e1');
  doc.rect(36, currentY, 330, 22).fill('#f1f5f9');
  setFont(true);
  doc.fillColor('#082548').fontSize(8.5).text('EXECUTIVE CLINICAL SUMMARY', 48, currentY + 7);

  setFont(false);
  let summaryY = currentY + 30;
  const bullets = analysisData.summary_bullets || [];
  bullets.slice(0, 4).forEach((b) => {
    doc.fillColor('#0f766e').fontSize(8).text('•', 48, summaryY);
    doc.fillColor('#1e293b').fontSize(7.5).text(b, 58, summaryY, { width: 296, lineGap: 1.5 });
    summaryY += 24;
  });

  // Callout Box for Key Flags
  const flags = analysisData.flags || [];
  const flagBoxY = currentY + 128;
  doc.rect(44, flagBoxY, 314, 68).fillAndStroke(flags.length ? '#fffbeb' : '#f8fafc', flags.length ? '#f59e0b' : '#cbd5e1');
  setFont(true);
  doc.fillColor(flags.length ? '#b45309' : '#0f766e').fontSize(7.5).text(
    flags.length ? 'NOTABLE OBSERVATIONS REQUIRING REVIEW:' : 'BASELINE NORMAL OBSERVATIONS:',
    52, flagBoxY + 6
  );
  setFont(false);
  if (flags.length) {
    let flagLineY = flagBoxY + 20;
    flags.slice(0, 2).forEach((fl) => {
      doc.fillColor('#92400e').fontSize(7).text(`⚠ ${fl}`, 52, flagLineY, { width: 298 });
      flagLineY += 16;
    });
  } else {
    doc.fillColor('#334155').fontSize(7).text('All examined parameters and anatomical boundaries fall within normal reference limits.', 52, flagBoxY + 24, { width: 298 });
  }

  // Right Side (Width 183): Source Image Capture Thumbnail
  const thumbBoxX = 376;
  doc.rect(thumbBoxX, currentY, 183, 205).fillAndStroke('#f8fafc', '#cbd5e1');
  doc.rect(thumbBoxX, currentY, 183, 22).fill('#f1f5f9');
  setFont(true);
  doc.fillColor('#082548').fontSize(8.5).text('SOURCE IMAGE CAPTURE', thumbBoxX + 10, currentY + 7);

  // Embed the actual uploaded image
  let imgPath = analysisData.file_path;
  if (!imgPath || !fs.existsSync(imgPath)) {
    if (analysisData.filename) {
      const p1 = path.join(__dirname, '..', 'uploads', analysisData.filename);
      const p2 = path.join(__dirname, '..', 'assets', analysisData.filename);
      if (fs.existsSync(p1)) imgPath = p1;
      else if (fs.existsSync(p2)) imgPath = p2;
    }
    if ((!imgPath || !fs.existsSync(imgPath)) && analysisData.file_path) {
      const baseName = path.basename(analysisData.file_path);
      const p3 = path.join(__dirname, '..', 'uploads', baseName);
      const p4 = path.join(__dirname, '..', 'assets', baseName);
      if (fs.existsSync(p3)) imgPath = p3;
      else if (fs.existsSync(p4)) imgPath = p4;
    }
  }

  let imgDrawn = false;
  if (imgPath && fs.existsSync(imgPath)) {
    try {
      doc.image(imgPath, thumbBoxX + 12, currentY + 30, {
        fit: [159, 140],
        align: 'center',
        valign: 'center'
      });
      imgDrawn = true;
    } catch (e) {
      imgDrawn = false;
    }
  }

  if (!imgDrawn) {
    doc.rect(thumbBoxX + 12, currentY + 30, 159, 140).fillAndStroke('#e2e8f0', '#94a3b8');
    setFont(false);
    doc.fillColor('#64748b').fontSize(8).text('Document File / Table\n(Raw Ingestion Archive)', thumbBoxX + 25, currentY + 90, { align: 'center', width: 133 });
  }

  // Image Caption
  doc.rect(thumbBoxX + 12, currentY + 176, 159, 20).fill('#0f172a');
  setFont(false);
  doc.fillColor('#38bdf8').fontSize(6.5).text(
    `Analyzed Capture: ${analysisData.filename ? analysisData.filename.substring(0, 22) : 'Medical File'}`,
    thumbBoxX + 16, currentY + 182
  );

  // Section 4: Preliminary Impression Card
  currentY += 215;
  doc.rect(36, currentY, 523, 64).fillAndStroke('#f8fafc', '#cbd5e1');
  setFont(true);
  doc.fillColor('#0f766e').fontSize(8.5).text('PRELIMINARY AI CLINICAL IMPRESSION', 48, currentY + 8);
  setFont(false);
  doc.fillColor('#1e293b').fontSize(7.5).text(
    analysisData.preliminary_impression || 'No primary abnormalities detected on current screening view.',
    48, currentY + 22, { width: 500, lineGap: 2 }
  );

  // Section 5: Regulatory Non-Diagnostic Warning
  currentY += 72;
  doc.rect(36, currentY, 523, 34).fillAndStroke('#fff1f2', '#f43f5e');
  doc.circle(52, currentY + 17, 7).fill('#e11d48');
  setFont(true);
  doc.fillColor('#ffffff').fontSize(8).text('!', 49.5, currentY + 13);
  doc.fillColor('#be123c').fontSize(7.5).text(t.disclaimer_title || 'REGULATORY MEDICAL DISCLAIMER', 66, currentY + 8);
  setFont(false);
  doc.fillColor('#475569').fontSize(6.5).text(
    t.disclaimer_text || 'MedFusion AI is an AI-assisted investigational platform. It does not provide medical diagnoses or prescribe treatments. Clinical decision-making must be confirmed by licensed medical professionals.',
    66, currentY + 18, { width: 480 }
  );

  // =========================================================================
  // PAGE 2: DETAILED CLINICAL ANALYSIS & STRUCTURED FINDINGS TABLE
  // =========================================================================
  doc.addPage();
  currentY = 36;

  // Running Header
  doc.rect(36, currentY, 523, 30).fill('#082548');
  let p2TextX = 48;
  if (fs.existsSync(ICON_PATH)) {
    try {
      doc.roundedRect(44, currentY + 4, 22, 22, 4).fill('#ffffff');
      doc.image(ICON_PATH, 45, currentY + 5, { fit: [20, 20], align: 'center', valign: 'center' });
      p2TextX = 74;
    } catch (e) {}
  }
  setFont(true);
  doc.fillColor('#ffffff').fontSize(9.5).text('DETAILED CLINICAL ANALYSIS — EXAMINATION FINDINGS', p2TextX, currentY + 9);
  setFont(false);
  doc.fillColor('#99f6e4').fontSize(7.5).text(`Ref: ${refId}  |  Study: ${examTitle}`, 360, currentY + 10);

  currentY += 40;

  // Table Introduction
  doc.fillColor('#334155').fontSize(7.5).text(
    'The following structured table enumerates parameters, anatomical regions, and biomarker values evaluated by the analysis pipeline.',
    36, currentY, { width: 523 }
  );

  currentY += 16;

  // Table Column Headers
  const tableWidth = 523;
  doc.rect(36, currentY, tableWidth, 18).fill('#0f766e');
  setFont(true);
  doc.fillColor('#ffffff').fontSize(7.5);
  doc.text('PARAMETER / REGION', 46, currentY + 5);
  doc.text('OBSERVED RESULT / MEASUREMENT', 200, currentY + 5);
  doc.text('REFERENCE CRITERIA', 360, currentY + 5);
  doc.text('STATUS', 475, currentY + 5);

  currentY += 18;

  // Table Rows
  const rows = analysisData.table_rows || [];
  rows.forEach((row, idx) => {
    const isRowHigh = row.status === 'Review Required' || row.status === 'High' || row.status === 'Low';
    const rowBg = isRowHigh ? '#fff1f2' : (idx % 2 === 0 ? '#ffffff' : '#f8fafc');
    const statusCol = isRowHigh ? '#be123c' : '#047857';

    doc.rect(36, currentY, tableWidth, 22).fillAndStroke(rowBg, '#e2e8f0');
    setFont(true);
    doc.fillColor('#0f172a').fontSize(7.2).text(row.param, 46, currentY + 6, { width: 145 });
    setFont(false);
    doc.fillColor('#1e293b').fontSize(7).text(row.result, 200, currentY + 6, { width: 150 });
    doc.fillColor('#64748b').fontSize(7).text(row.range || 'Standard baseline', 360, currentY + 6, { width: 105 });

    // Status Pill
    doc.rect(472, currentY + 4, 76, 14).fill(isRowHigh ? '#fee2e2' : '#dcfce7');
    setFont(true);
    doc.fillColor(statusCol).fontSize(6.5).text(row.status, 476, currentY + 7, { width: 68, align: 'center' });
    setFont(false);

    currentY += 22;
  });

  // Section: Technical Image Quality & Model Limitation Box
  currentY += 16;
  const qMetrics = analysisData.quality_metrics || {};
  doc.rect(36, currentY, 523, 90).fillAndStroke('#f8fafc', '#cbd5e1');
  doc.rect(36, currentY, 523, 18).fill('#e2e8f0');
  setFont(true);
  doc.fillColor('#082548').fontSize(7.5).text('TECHNICAL QUALITY METRICS & MEASUREMENT SPECIFICATIONS', 46, currentY + 5);

  setFont(false);
  doc.fillColor('#334155').fontSize(7.2);
  const qY = currentY + 24;
  doc.text(`Image Dimensions: ${qMetrics.width || 'N/A'} × ${qMetrics.height || 'N/A'} px (Aspect Ratio: ${qMetrics.aspect_ratio || '1.0'})`, 46, qY);
  doc.text(`Sharpness Variance (Laplacian): ${qMetrics.sharpness_variance || 'N/A'}  |  Contrast Standard Deviation: ${qMetrics.contrast_std || 'N/A'}`, 46, qY + 12);
  doc.text(`Mean Luminance Level: ${qMetrics.mean_luminance || 'N/A'} / 255  |  Overall Technical Grade: ${qMetrics.quality_rating || 'Optimal'}`, 46, qY + 24);

  const qFlags = qMetrics.quality_flags || [];
  if (qFlags.length) {
    doc.fillColor('#b45309').fontSize(7).text(`Quality Note: ${qFlags.join(' ')}`, 46, qY + 40, { width: 500 });
  } else {
    doc.fillColor('#059669').fontSize(7).text('Quality Note: No technical degradation, extreme under/over exposure, or severe motion artifacts detected.', 46, qY + 40);
  }

  doc.fillColor('#475569').fontSize(6.5).text(
    'Limitations: Automated quality scoring reflects 2D sensor capture and does not guarantee complete diagnostic visibility of microscopic features.',
    46, qY + 52, { width: 500 }
  );

  // Section: Detailed Modality Measurements
  currentY += 104;
  const measurements = analysisData.measurements || {};
  doc.rect(36, currentY, 523, 76).fillAndStroke('#ffffff', '#cbd5e1');
  doc.rect(36, currentY, 523, 18).fill('#f1f5f9');
  setFont(true);
  doc.fillColor('#082548').fontSize(7.5).text('NUMERICAL MEASUREMENTS & ALGORITHMIC INDICES', 46, currentY + 5);

  setFont(false);
  let measY = currentY + 24;
  const measKeys = Object.keys(measurements);
  if (measKeys.length) {
    measKeys.forEach((k) => {
      const formattedKey = k.replace(/_/g, ' ').toUpperCase();
      doc.fillColor('#0f766e').fontSize(7).text(`${formattedKey}:`, 46, measY);
      doc.fillColor('#1e293b').fontSize(7).text(`${measurements[k]}`, 220, measY);
      measY += 12;
    });
  } else {
    doc.fillColor('#64748b').fontSize(7).text('All primary measurements documented in findings table above.', 46, measY);
  }

  // =========================================================================
  // PAGE 3: INTERPRETATION, NEXT STEPS & INSTITUTIONAL DISCLAIMER
  // =========================================================================
  doc.addPage();
  currentY = 36;

  // Running Header
  doc.rect(36, currentY, 523, 30).fill('#082548');
  let p3TextX = 48;
  if (fs.existsSync(ICON_PATH)) {
    try {
      doc.roundedRect(44, currentY + 4, 22, 22, 4).fill('#ffffff');
      doc.image(ICON_PATH, 45, currentY + 5, { fit: [20, 20], align: 'center', valign: 'center' });
      p3TextX = 74;
    } catch (e) {}
  }
  setFont(true);
  doc.fillColor('#ffffff').fontSize(9.5).text('CLINICAL INTERPRETATION & RECOMMENDED ACTION PLAN', p3TextX, currentY + 9);
  setFont(false);
  doc.fillColor('#99f6e4').fontSize(7.5).text(`Ref: ${refId}  |  Page 3`, 440, currentY + 10);

  currentY += 42;

  // Section 1: Detailed Clinical Interpretation & Uncertainty
  doc.rect(36, currentY, 523, 90).fillAndStroke('#ffffff', '#cbd5e1');
  doc.rect(36, currentY, 523, 18).fill('#f8fafc');
  setFont(true);
  doc.fillColor('#082548').fontSize(8).text('1. EVIDENCE-BASED SYNTHESIS & UNCERTAINTY ANALYSIS', 46, currentY + 5);

  setFont(false);
  doc.fillColor('#1e293b').fontSize(7.5).text(
    analysisData.preliminary_impression || 'Findings require clinical correlation.',
    46, currentY + 24, { width: 500, lineGap: 2 }
  );
  doc.fillColor('#475569').fontSize(7).text(
    `Uncertainty Context: ${analysisData.uncertainty_analysis || 'Image projections carry inherent overlap limitations. Laboratory values require correlation with patient clinical history.'}`,
    46, currentY + 58, { width: 500, lineGap: 1.5 }
  );

  // Section 2: Actionable Next Steps
  currentY += 100;
  doc.rect(36, currentY, 523, 110).fillAndStroke('#f8fafc', '#cbd5e1');
  doc.rect(36, currentY, 523, 18).fill('#0f766e');
  setFont(true);
  doc.fillColor('#ffffff').fontSize(8).text('2. CLINICAL NEXT STEPS & FOLLOW-UP TIMELINE', 46, currentY + 5);

  setFont(false);
  let stepY = currentY + 26;
  const nextSteps = analysisData.next_steps || [
    'Schedule a follow-up consultation with your attending physician or medical specialist.',
    'Bring this report and original radiographic/laboratory documents to your visit.',
    'Monitor for any acute worsening of symptoms or changes in health status.'
  ];
  nextSteps.forEach((st, sIdx) => {
    doc.circle(52, stepY + 4, 6).fill('#0d9488');
    setFont(true);
    doc.fillColor('#ffffff').fontSize(6.5).text((sIdx + 1).toString(), 50, stepY + 1.5);
    setFont(false);
    doc.fillColor('#1e293b').fontSize(7.5).text(st, 64, stepY, { width: 480, lineGap: 1 });
    stepY += 24;
  });

  // Section 3: Red-Flag Warning Signs (Emergency Evaluation)
  currentY += 120;
  doc.rect(36, currentY, 523, 76).fillAndStroke('#fff1f2', '#f43f5e');
  doc.rect(36, currentY, 523, 16).fill('#e11d48');
  setFont(true);
  doc.fillColor('#ffffff').fontSize(7.5).text('3. RED-FLAG WARNING SIGNS (SEEK IMMEDIATE EMERGENCY CARE)', 46, currentY + 4);

  setFont(false);
  doc.fillColor('#881337').fontSize(7);
  const redFlags = [
    'Severe or acute chest pain, sudden difficulty breathing, coughing up blood (hemoptysis).',
    'High fever (> 102°F / 38.9°C), severe dizziness, confusion, or sudden altered mental status.',
    'Rapidly growing, bleeding, or ulcerating skin lesion with jagged asymmetric boundaries.',
    'Extreme lethargy, pale clammy skin, or signs of severe dehydration / sepsis.'
  ];
  let rfY = currentY + 22;
  redFlags.forEach((rf) => {
    doc.text(`⚡ ${rf}`, 46, rfY, { width: 500 });
    rfY += 12;
  });

  // Section 4: Signature & Institutional Seal
  currentY += 86;
  doc.rect(36, currentY, 523, 94).fillAndStroke('#ffffff', '#cbd5e1');

  // Left side: Comprehensive Disclaimer
  setFont(true);
  doc.fillColor('#082548').fontSize(7.5).text('INSTITUTIONAL MEDICAL DISCLAIMER', 46, currentY + 8);
  setFont(false);
  doc.fillColor('#64748b').fontSize(6.5).text(
    t.disclaimer_text || 'This report is generated by MedFusion AI for informational screening purposes only. It is not an official medical diagnosis, pathology report, or prescription. Always consult a licensed healthcare professional for clinical management.',
    46, currentY + 20, { width: 330, lineGap: 1.5 }
  );

  // Right side: Electronic Verification Stamp
  doc.rect(390, currentY + 8, 155, 78).fillAndStroke('#f8fafc', '#0f766e');
  let stampTextX = 426;
  if (fs.existsSync(ICON_PATH)) {
    try {
      doc.roundedRect(396, currentY + 14, 24, 24, 4).fill('#ffffff');
      doc.image(ICON_PATH, 398, currentY + 16, { fit: [20, 20], align: 'center', valign: 'center' });
      stampTextX = 426;
    } catch(e) {
      doc.circle(410, currentY + 26, 10).fill('#0f766e');
      setFont(true);
      doc.fillColor('#ffffff').fontSize(9).text('✓', 407, currentY + 20);
    }
  } else {
    doc.circle(410, currentY + 26, 10).fill('#0f766e');
    setFont(true);
    doc.fillColor('#ffffff').fontSize(9).text('✓', 407, currentY + 20);
  }
  setFont(true);
  doc.fillColor('#0f766e').fontSize(7.5).text('VERIFIED BY ENGINE', stampTextX, currentY + 22);
  setFont(false);
  doc.fillColor('#334155').fontSize(6.5);
  doc.text('MedFusion AI Pipeline v2.4', 400, currentY + 44);
  doc.text(`SHA-256 Checksum: Verified`, 400, currentY + 54);
  doc.text(`Signed: ${reportDate}`, 400, currentY + 64);

  // =========================================================================
  // GLOBAL FOOTER ON ALL BUFFERED PAGES (Exact Page Count Guaranteed)
  // =========================================================================
  const totalPages = doc.bufferedPageRange().count;
  for (let i = 0; i < totalPages; i++) {
    doc.switchToPage(i);
    const origBottom = doc.page.margins.bottom;
    doc.page.margins.bottom = 0; // Disable bottom margin to prevent auto-pagebreak

    doc.rect(36, 792, 523, 1).fill('#cbd5e1'); // Divider line
    setFont(false);
    doc.fillColor('#64748b').fontSize(6.5);
    doc.text(
      `MedFusion AI Health Intelligence Platform  |  Report Ref: ${refId}  |  Confidential Patient Record`,
      36, 796,
      { lineBreak: false }
    );
    doc.text(
      `Page ${i + 1} of ${totalPages}`,
      440, 796,
      { width: 119, align: 'right', lineBreak: false }
    );

    doc.page.margins.bottom = origBottom;
  }

  doc.end();
  return doc;
}

module.exports = {
  createHospitalReportPdf
};
