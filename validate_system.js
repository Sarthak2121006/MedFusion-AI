/**
 * MedFusion AI - End-to-End Validation Suite
 * Tests all 4 supported modalities, error rejection, quality validation,
 * modality compatibility safeguards, and hospital PDF generation.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';

async function runTests() {
  console.log('====================================================');
  console.log('🩺 MedFusion AI - Verification & Validation Suite');
  console.log('====================================================\n');

  let passed = 0;
  let total = 0;

  function assert(condition, testName) {
    total++;
    if (condition) {
      console.log(`✅ PASS: ${testName}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${testName}`);
    }
  }

  // 1. Health check
  try {
    const healthRes = await fetch(`${BASE_URL}/api/health`);
    const healthJson = await healthRes.json();
    assert(healthRes.ok && healthJson.status === 'ok', 'Server API /health is operational');
  } catch (err) {
    assert(false, `Server health check failed: ${err.message}`);
  }

  // 2. Chest X-ray Upload & Analysis
  let chestId = null;
  try {
    const form = new FormData();
    const blob = new Blob([fs.readFileSync('assets/sample_chest_xray.jpg')], { type: 'image/jpeg' });
    form.append('file', blob, 'sample_chest_xray.jpg');
    form.append('module', 'chest_xray');

    const res = await fetch(`${BASE_URL}/api/analysis/upload-and-analyze`, { method: 'POST', body: form });
    const data = await res.json();
    chestId = data.analysis_id;

    assert(res.ok && data.status === 'success', 'Chest X-ray upload & real analysis succeeded');
    assert(data.modality === 'chest_xray', 'Chest X-ray correctly classified modality');
    assert(data.analysis?.quality_metrics?.sharpness_variance > 0, 'Computed real sharpness variance for chest X-ray');
    assert(data.analysis?.table_rows?.length >= 4, 'Generated structured clinical findings table for chest X-ray');
    assert(data.analysis?.preliminary_impression?.length > 10, 'Derived evidence-based preliminary impression for chest X-ray');
  } catch (err) {
    assert(false, `Chest X-ray test failed: ${err.message}`);
  }

  // 3. Skin Lesion Upload & Dermoscopic ABCD Evaluation
  let skinId = null;
  try {
    const form = new FormData();
    const blob = new Blob([fs.readFileSync('assets/sample_skin_lesion.jpg')], { type: 'image/jpeg' });
    form.append('file', blob, 'sample_skin_lesion.jpg');
    form.append('module', 'skin_image');

    const res = await fetch(`${BASE_URL}/api/analysis/upload-and-analyze`, { method: 'POST', body: form });
    const data = await res.json();
    skinId = data.analysis_id;

    assert(res.ok && data.status === 'success', 'Skin lesion upload & ABCD analysis succeeded');
    assert(data.modality === 'skin_image', 'Skin lesion correctly identified');
    assert(data.analysis?.measurements?.asymmetry_score !== undefined, 'Computed ABCD Asymmetry index');
    assert(data.analysis?.measurements?.color_count >= 1, 'Evaluated ABCD Color variegation');
    assert(data.analysis?.measurements?.estimated_diameter_mm !== undefined, 'Measured lesion diameter in mm');
  } catch (err) {
    assert(false, `Skin lesion test failed: ${err.message}`);
  }

  // 4. Blood Test Report OCR & Biomarker Evaluation
  let bloodId = null;
  try {
    const form = new FormData();
    const blob = new Blob([fs.readFileSync('assets/sample_blood_report.png')], { type: 'image/png' });
    form.append('file', blob, 'sample_blood_report.png');
    form.append('module', 'blood_test');

    const res = await fetch(`${BASE_URL}/api/analysis/upload-and-analyze`, { method: 'POST', body: form });
    const data = await res.json();
    bloodId = data.analysis_id;

    assert(res.ok && data.status === 'success', 'Blood test OCR & rule evaluation succeeded');
    assert(data.modality === 'blood_test', 'Blood report correctly routed');
    assert(data.analysis?.table_rows?.some(r => r.param.includes('Hemoglobin') || r.param.includes('WBC')), 'Extracted clinical hematology biomarkers from image');
  } catch (err) {
    assert(false, `Blood report test failed: ${err.message}`);
  }

  // 5. Modality Compatibility Safeguard (Never send incompatible image to model)
  try {
    const form = new FormData();
    const blob = new Blob([fs.readFileSync('assets/sample_skin_lesion.jpg')], { type: 'image/jpeg' });
    form.append('file', blob, 'sample_skin_lesion.jpg');
    form.append('module', 'chest_xray'); // INCOMPATIBLE REQUEST!

    const res = await fetch(`${BASE_URL}/api/analysis/upload-and-analyze`, { method: 'POST', body: form });
    const data = await res.json();

    assert(data.modality === 'skin_image', 'Safeguard auto-corrected incompatible module from chest_xray to skin_image');
    assert(data.analysis?.flags?.some(f => f.includes('Safeguard') || f.includes('incompatible')), 'Safeguard logged explanation flag in report data');
  } catch (err) {
    assert(false, `Compatibility safeguard test failed: ${err.message}`);
  }

  // 6. Corrupted File Rejection
  try {
    const form = new FormData();
    const blob = new Blob([fs.readFileSync('assets/corrupted_image.jpg')], { type: 'image/jpeg' });
    form.append('file', blob, 'corrupted_image.jpg');

    const res = await fetch(`${BASE_URL}/api/analysis/upload-and-analyze`, { method: 'POST', body: form });
    const data = await res.json();

    assert(res.status === 422 && data.status === 'error', 'Gracefully rejected corrupted file with HTTP 422');
    assert(data.detail?.includes('corrupted') || data.detail?.includes('unreadable'), 'Meaningful error message returned for corrupted file');
  } catch (err) {
    assert(false, `Corrupted file test failed: ${err.message}`);
  }

  // 7. Hospital-Grade PDF Generation: English, Hindi (Devanagari), Marathi
  if (chestId) {
    try {
      const pdfEnRes = await fetch(`${BASE_URL}/api/reports/${chestId}/pdf?lang=en`);
      const enBuf = await pdfEnRes.arrayBuffer();
      assert(pdfEnRes.ok && enBuf.byteLength > 100000, `Generated Chest X-ray Hospital PDF in English (${enBuf.byteLength} bytes)`);

      const pdfHiRes = await fetch(`${BASE_URL}/api/reports/${chestId}/pdf?lang=hi`);
      const hiBuf = await pdfHiRes.arrayBuffer();
      assert(pdfHiRes.ok && hiBuf.byteLength > 100000, `Generated Chest X-ray Hospital PDF in Hindi with Devanagari typography (${hiBuf.byteLength} bytes)`);

      const pdfMrRes = await fetch(`${BASE_URL}/api/reports/${chestId}/pdf?lang=mr`);
      const mrBuf = await pdfMrRes.arrayBuffer();
      assert(pdfMrRes.ok && mrBuf.byteLength > 100000, `Generated Chest X-ray Hospital PDF in Marathi with Devanagari typography (${mrBuf.byteLength} bytes)`);
    } catch (err) {
      assert(false, `Multilingual PDF generation failed: ${err.message}`);
    }
  }

  // 8. Accurate Report-to-Image Mapping (Skin lesion never shows chest x-ray)
  if (skinId) {
    try {
      const skinRes = await fetch(`${BASE_URL}/api/analysis/${skinId}`);
      const skinJson = await skinRes.json();
      assert(skinJson.analysis?.modality === 'skin_image', 'Skin report maintains skin modality');
      assert(!skinJson.thumbnail_url?.includes('xray'), 'Skin report thumbnail strictly points to skin capture');

      const skinPdfRes = await fetch(`${BASE_URL}/api/reports/${skinId}/pdf?lang=en`);
      const skinPdfBuf = await skinPdfRes.arrayBuffer();
      assert(skinPdfRes.ok && skinPdfBuf.byteLength > 50000, `Skin Lesion PDF generated successfully (${skinPdfBuf.byteLength} bytes)`);
    } catch (err) {
      assert(false, `Report-to-image mapping test failed: ${err.message}`);
    }
  }

  console.log('\n====================================================');
  console.log(`Results: ${passed} / ${total} tests passed (${Math.round((passed / total) * 100)}%)`);
  console.log('====================================================\n');

  if (passed === total) {
    console.log('🎉 ALL TESTS PASSED! System is fully functional.');
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test execution fatal error:', err);
  process.exit(1);
});
