/**
 * MedFusion AI - Main Single-Port Express Server
 * Serves the static frontend application and provides integrated backend API routes on a single URL and port.
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_DIR = path.join(__dirname, 'medfusion-frontend');
const UPLOADS_DIR = process.env.UPLOADS_DIR || path.join(__dirname, 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static assets (logos, icons, fonts)
app.use('/assets', express.static(path.join(FRONTEND_DIR, 'assets')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve static uploaded files with database fallback resolution
app.use('/uploads', express.static(UPLOADS_DIR));
app.get('/uploads/:filename', (req, res, next) => {
  const reqName = path.basename(req.params.filename);
  const directPath = path.join(UPLOADS_DIR, reqName);
  if (fs.existsSync(directPath)) return res.sendFile(directPath);

  // Fallback 1: Check if reqName is an original filename in database
  const db = require('./db');
  db.get('SELECT filepath FROM uploads WHERE filename = ? ORDER BY created_at DESC LIMIT 1', [reqName], (err, row) => {
    if (row && row.filepath) {
      const storedPath = path.join(UPLOADS_DIR, path.basename(row.filepath));
      if (fs.existsSync(storedPath)) return res.sendFile(storedPath);
    }
    // Fallback 2: Check assets directory
    const assetPath = path.join(__dirname, 'assets', reqName);
    if (fs.existsSync(assetPath)) return res.sendFile(assetPath);

    next();
  });
});


// Mount Backend API Router
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Base Health Check
app.get(['/health', '/api/health'], (req, res) => {
  res.json({
    status: 'ok',
    app: process.env.APP_NAME || 'MedFusion AI',
    version: '1.0.0',
    singlePort: true,
    timestamp: new Date().toISOString()
  });
});

// Serve Frontend Static Assets
app.use(express.static(FRONTEND_DIR));

// HTML Page Routing Fallback (for extensionless clean URLs or HTML pages)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/') || req.path.startsWith('/uploads/')) {
    return next();
  }

  // Try direct file path
  let requestedFile = path.join(FRONTEND_DIR, req.path);
  if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
    return res.sendFile(requestedFile);
  }

  // Try appending .html
  let htmlFile = requestedFile + '.html';
  if (fs.existsSync(htmlFile) && fs.statSync(htmlFile).isFile()) {
    return res.sendFile(htmlFile);
  }

  // Default fallback to index.html
  const indexPath = path.join(FRONTEND_DIR, 'index.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  res.status(404).send('Page not found');
});

// Start Single-Port Server
const HOST = process.env.HOST || '0.0.0.0';
const server = app.listen(PORT, HOST, () => {
  console.log(`====================================================`);
  console.log(`🚀 MedFusion AI Single-Port Server is active!`);
  console.log(`📍 Web Application: http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`);
  console.log(`📡 Integrated API:  http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/api/health`);
  console.log(`====================================================`);
});

module.exports = app;
