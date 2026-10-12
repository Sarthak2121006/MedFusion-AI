/**
 * MedFusion AI - PDF Multilingual Translation Dictionary
 * Contains structured clinical report translations in English (en), Hindi (hi), and Marathi (mr).
 */

const PDF_TRANSLATIONS = {
  en: {
    brand_title: 'MedFusion AI',
    brand_sub: 'AI-Assisted Personal Health Summary Report',
    confidential_note: 'Confidential Health Report\nDemo Version - Not for Clinical Use',
    patient_info_title: 'PATIENT INFORMATION & REPORT DETAILS',
    patient_name_label: 'Patient Name  :  ',
    patient_id_label: 'Patient ID    :  ',
    email_label: 'Email         :  ',
    report_date_label: 'Report Date  :  ',
    report_time_label: 'Report Time  :  ',
    data_source_label: 'Data Source  :  Uploaded Medical Reports',
    overall_status_label: 'OVERALL STATUS',
    review_recommended: 'REVIEW RECOMMENDED',
    mostly_normal: 'MOSTLY NORMAL',
    review_sub: 'finding(s) need clinician review.',
    normal_sub: 'All uploaded tests look within baseline bounds.',
    doctor_note: 'Please review with a qualified doctor.',
    analysis_results_title: 'ANALYSIS RESULTS',
    analysis_results_desc: 'Your uploaded reports were analyzed using MedFusion AI. Below are the results for each test.',
    detailed_results_title: 'DETAILED TEST RESULTS',
    col_param: 'TEST PARAMETER',
    col_result: 'RESULT',
    col_range: 'REFERENCE RANGE',
    col_status: 'STATUS',
    key_findings_title: 'KEY FINDINGS',
    recommended_actions_title: 'RECOMMENDED ACTIONS',
    actions: [
      'Share this report with your doctor during your next visit.',
      'Discuss the flagged results with your doctor.',
      'Monitor for symptoms such as cough, fever, or fatigue.',
      'Consider a repeat test if advised by your healthcare provider.',
      'Maintain a healthy diet, regular exercise, and adequate hydration.'
    ],
    disclaimer_title: 'IMPORTANT MEDICAL DISCLAIMER',
    disclaimer_text: 'MedFusion AI provides AI-assisted personal health informational analysis. It does not provide medical diagnosis, prescribe treatments, or replace a doctor. Always consult a qualified medical professional for health decisions. This is a demo report with synthetic/example data.',
    modules: {
      chest_xray: {
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
      }
    }
  },

  hi: {
    brand_title: 'मेडफ्यूजन एआई (MedFusion AI)',
    brand_sub: 'एआई-सहायता प्राप्त व्यक्तिगत स्वास्थ्य सारांश रिपोर्ट',
    confidential_note: 'गोपनीय स्वास्थ्य रिपोर्ट\nक्लिनिकल उपयोग के लिए नहीं',
    patient_info_title: 'रोगी की जानकारी और रिपोर्ट विवरण',
    patient_name_label: 'रोगी का नाम     :  ',
    patient_id_label: 'रोगी आईडी       :  ',
    email_label: 'ईमेल पता        :  ',
    report_date_label: 'रिपोर्ट तिथि     :  ',
    report_time_label: 'रिपोर्ट समय     :  ',
    data_source_label: 'डेटा स्रोत      :  अपलोड की गई मेडिकल रिपोर्ट',
    overall_status_label: 'समग्र स्थिति',
    review_recommended: 'समीक्षा अनुशंसित',
    mostly_normal: 'सामान्य स्थिति',
    review_sub: 'निष्कर्षों पर डॉक्टर की समीक्षा आवश्यक है।',
    normal_sub: 'सभी परीक्षण सामान्य सीमा के भीतर हैं।',
    doctor_note: 'कृपया किसी योग्य डॉक्टर से परामर्श लें।',
    analysis_results_title: 'विश्लेषण परिणाम',
    analysis_results_desc: 'मेडफ्यूजन एआई द्वारा आपकी अपलोड की गई रिपोर्टों का विश्लेषण किया गया है।',
    detailed_results_title: 'विस्तृत परीक्षण परिणाम',
    col_param: 'परीक्षण पैरामीटर',
    col_result: 'परिणाम',
    col_range: 'संदर्भ सीमा',
    col_status: 'स्थिति',
    key_findings_title: 'मुख्य नैदानिक निष्कर्ष',
    recommended_actions_title: 'अनुशंसित अगले कदम',
    actions: [
      'अपनी अगली यात्रा के दौरान इस रिपोर्ट को अपने डॉक्टर के साथ साझा करें।',
      'सीमांत या असामान्य परिणामों पर अपने डॉक्टर से चर्चा करें।',
      'खांसी, बुखार या थकान जैसे लक्षणों पर नजर रखें।',
      'यदि डॉक्टर सलाह दें तो दोबारा परीक्षण कराने पर विचार करें।',
      'स्वस्थ आहार, नियमित व्यायाम और पर्याप्त जलयोजन बनाए रखें।'
    ],
    disclaimer_title: 'महत्वपूर्ण चिकित्सा अस्वीकरण',
    disclaimer_text: 'मेडफ्यूजन एआई व्यक्तिगत स्वास्थ्य सूचनात्मक विश्लेषण प्रदान करता है। यह चिकित्सा निदान प्रदान नहीं करता, उपचार निर्धारित नहीं करता, या डॉक्टर की जगह नहीं लेता। स्वास्थ्य निर्णयों के लिए हमेशा योग्य डॉक्टर से परामर्श लें।',
    modules: {
      chest_xray: {
        title: 'चेस्ट एक्स-रे विश्लेषण',
        type: 'image',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        summaryBullets: [
          'कोई बड़ा फोकल समेकन (कंसॉलिडेशन) नहीं देखा गया।',
          'फेफड़े ऊपरी और मध्य क्षेत्रों में साफ दिखाई दे रहे हैं।',
          'निचले दाहिने फेफड़े में हल्की छाया (धुंधलापन) देखा गया।',
          'कोई स्पष्ट फुफ्फुस बहाव (इफ्यूजन) नहीं मिला।'
        ],
        tableParams: [
          { param: 'फेफड़े के क्षेत्र', result: 'ऊपरी/मध्य साफ' },
          { param: 'कंसॉलिडेशन', result: 'अनुपस्थित' },
          { param: 'प्लूरल इफ्यूजन', result: 'अनुपस्थित' },
          { param: 'हृदय का आकार', result: 'सामान्य' },
          { param: 'प्राथमिक निष्कर्ष', result: 'हल्की छाया (निचला दाहिना)' }
        ],
        keyFinding: 'चेस्ट एक्स-रे: कोई बड़ी विकृति नहीं मिली। निचले दाहिने फेफड़े में हल्की छाया हल्के संकुलन का संकेत हो सकती है।'
      },
      bone_xray: {
        title: 'अस्थि एक्स-रे / फ्रैक्चर विश्लेषण',
        type: 'image',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'हड्डी संरेखण और जोड़ों का स्थान सामान्य सीमा में है।',
          'कोई फ्रैक्चर लाइन या हड्डी का टूटना नहीं मिला।',
          'कोमल ऊतक संरचनाएं सममित दिखाई देती हैं।',
          'जोड़ों का विस्थापन या सूजन नहीं है।'
        ],
        tableParams: [
          { param: 'हड्डी संरेखण', result: 'सामान्य' },
          { param: 'कॉर्टिकल निरंतरता', result: 'अखंड' },
          { param: 'जोड़ों का स्थान', result: 'सुरक्षित' },
          { param: 'फ्रैक्चर रेखा', result: 'अनुपस्थित' },
          { param: 'प्राथमिक निष्कर्ष', result: 'कोई फ्रैक्चर नहीं' }
        ],
        keyFinding: 'अस्थि एक्स-रे: कॉर्टिकल संरेखण बरकरार है और कोई फ्रैक्चर रेखा नहीं मिली।'
      },
      skin_image: {
        title: 'त्वचा / तिल विश्लेषण',
        type: 'image',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'सममित सीमा और एकसमान रंजकता देखी गई।',
          'लक्षण सामान्य सौम्य तिल के अनुरूप हैं।',
          'कोई अनियमित विषमता या रंग परिवर्तन नहीं मिला।',
          'कम जोखिम श्रेणी।'
        ],
        tableParams: [
          { param: 'समरूपता', result: 'सममित' },
          { param: 'सीमा रूपरेखा', result: 'नियमित' },
          { param: 'रंग एकरूपता', result: 'समान भूरा' },
          { param: 'व्यास', result: '< 6 मिमी' },
          { param: 'प्राथमिक वर्गीकरण', result: 'सौम्य तिल (नेवस)' }
        ],
        keyFinding: 'त्वचा विश्लेषण: घाव के लक्षण सममित और कम जोखिम वाले हैं, जो सामान्य तिल के अनुरूप हैं।'
      },
      cbc: {
        title: 'सीबीसी (रक्त परीक्षण)',
        type: 'lab',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        summaryBullets: [
          'हीमोग्लोबिन: 11.2 g/dL (हल्का कम)',
          'डब्ल्यूबीसी (WBC): 11.8 x10^9/L (हल्का अधिक)',
          'आरबीसी, प्लेटलेट्स: सामान्य श्रेणी के भीतर।',
          'हल्के संक्रमण या सूजन की प्रतिक्रिया का संकेत हो सकता है।'
        ],
        labRows: [
          { test: 'हीमोग्लोबिन', result: '11.2 g/dL', range: '12.0 - 15.5', status: 'कम' },
          { test: 'डब्ल्यूबीसी (WBC)', result: '11.8 x10^9/L', range: '4.5 - 11.0', status: 'उच्च' },
          { test: 'आरबीसी (RBC)', result: '4.5 x10^12/L', range: '4.0 - 5.2', status: 'सामान्य' },
          { test: 'प्लेटलेट्स', result: '245 x10^9/L', range: '150 - 450', status: 'सामान्य' }
        ],
        keyFinding: 'सीबीसी: डब्ल्यूबीसी गणना थोड़ी बढ़ी हुई है (11.8), जो हल्के संक्रमण का संकेत हो सकती है।'
      },
      diabetes: {
        title: 'ग्लूकोज और चयापचय पैनल',
        type: 'lab',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        summaryBullets: [
          'फास्टिंग ग्लूकोज: 115 mg/dL (हल्का उच्च)',
          'पीपी ग्लूकोज: 160 mg/dL (हल्का उच्च)',
          'एचबीए1सी: 6.1% (प्री-डायबिटीज सीमा)',
          'जीवनशैली और आहार समीक्षा अनुशंसित है।'
        ],
        labRows: [
          { test: 'फास्टिंग ग्लूकोज', result: '115 mg/dL', range: '70 - 99', status: 'उच्च' },
          { test: 'पीपी रक्त शर्करा', result: '160 mg/dL', range: '70 - 140', status: 'उच्च' },
          { test: 'एचबीए1सी (HbA1c)', result: '6.1%', range: '4.0 - 5.6', status: 'उच्च' }
        ],
        keyFinding: 'चयापचय पैनल: फास्टिंग ग्लूकोज और एचबीए1सी थोड़े अधिक हैं, जो प्री-डायबिटीज जोखिम दर्शाते हैं।'
      },
      lipid_profile: {
        title: 'लिपिड / कोलेस्ट्रॉल पैनल',
        type: 'lab',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        summaryBullets: [
          'कुल कोलेस्ट्रॉल: 215 mg/dL (सीमांत उच्च)',
          'एचडीएल: 45 mg/dL (सामान्य अच्छा स्तर)',
          'एलडीएल: 130 mg/dL (हल्का उच्च)',
          'ट्राइग्लिसराइड्स: 165 mg/dL (हल्की वृद्धि)'
        ],
        labRows: [
          { test: 'कुल कोलेस्ट्रॉल', result: '215 mg/dL', range: '125 - 200', status: 'उच्च' },
          { test: 'एचडीएल', result: '45 mg/dL', range: '40 - 60', status: 'सामान्य' },
          { test: 'एलडीएल', result: '130 mg/dL', range: '0 - 100', status: 'उच्च' },
          { test: 'ट्राइग्लिसराइड्स', result: '165 mg/dL', range: '0 - 150', status: 'उच्च' }
        ],
        keyFinding: 'लिपिड प्रोफाइल: कुल कोलेस्ट्रॉल और एलडीएल सीमांत उच्च हैं। आहार संशोधन अनुशंसित हैं।'
      },
      kft: {
        title: 'गुर्दा कार्य परीक्षण (केएफटी)',
        type: 'lab',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'सीरम क्रिएटिनिन: 0.9 mg/dL (सामान्य)',
          'ब्लड यूरिया: 15 mg/dL (सामान्य)',
          'ईजीएफआर (eGFR): 105 mL/min (स्वस्थ निस्पंदन)',
          'गुर्दा निस्पंदन पैरामीटर सामान्य सीमा में हैं।'
        ],
        labRows: [
          { test: 'क्रिएटिनिन', result: '0.9 mg/dL', range: '0.6 - 1.2', status: 'सामान्य' },
          { test: 'ब्लड यूरिया', result: '15 mg/dL', range: '7 - 20', status: 'सामान्य' },
          { test: 'ईजीएफआर', result: '105 mL/min', range: '90 - 120', status: 'सामान्य' }
        ],
        keyFinding: 'गुर्दा कार्य: सभी पैरामीटर सामान्य स्वस्थ सीमाओं के भीतर हैं।'
      },
      lft: {
        title: 'यकृत कार्य परीक्षण (एलएफटी)',
        type: 'lab',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'एएलटी (एसजीपीटी): 28 U/L (सामान्य)',
          'एएसटी (एसजीओटी): 25 U/L (सामान्य)',
          'बिलीरुबिन: 0.8 mg/dL (सामान्य)',
          'यकृत एंजाइम और प्रोटीन स्तर सामान्य हैं।'
        ],
        labRows: [
          { test: 'एएलटी (SGPT)', result: '28 U/L', range: '7 - 56', status: 'सामान्य' },
          { test: 'एएसटी (SGOT)', result: '25 U/L', range: '10 - 40', status: 'सामान्य' },
          { test: 'बिलीरुबिन', result: '0.8 mg/dL', range: '0.1 - 1.2', status: 'सामान्य' },
          { test: 'एल्ब्यूमिन', result: '4.2 g/dL', range: '3.5 - 5.0', status: 'सामान्य' }
        ],
        keyFinding: 'यकृत कार्य: सभी यकृत एंजाइम और प्रोटीन सामान्य सीमा में हैं।'
      },
      urinalysis: {
        title: 'मूत्र विश्लेषण (यूरिनालिसिस)',
        type: 'lab',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'रंग: पीला (Yellow)',
          'पीएच (pH): 6.0 (सामान्य)',
          'विशिष्ट घनत्व: 1.020 (सामान्य)',
          'प्रोटीन, ग्लूकोज, रक्त: नकारात्मक (Negative)',
          'नमूने में संक्रमण का कोई संकेत नहीं।'
        ],
        labRows: [
          { test: 'रंग', result: 'पीला', range: 'पीला / एम्बर', status: 'सामान्य' },
          { test: 'पीएच (pH)', result: '6.0', range: '4.5 - 8.0', status: 'सामान्य' },
          { test: 'विशिष्ट घनत्व', result: '1.020', range: '1.005 - 1.030', status: 'सामान्य' },
          { test: 'प्रोटीन', result: 'नकारात्मक', range: 'नकारात्मक', status: 'सामान्य' },
          { test: 'ग्लूकोज', result: 'नकारात्मक', range: 'नकारात्मक', status: 'सामान्य' },
          { test: 'रक्त', result: 'नकारात्मक', range: 'नकारात्मक', status: 'सामान्य' }
        ],
        keyFinding: 'मूत्र विश्लेषण: सभी पैरामीटर सामान्य स्वस्थ सीमा के भीतर हैं।'
      }
    }
  },

  mr: {
    brand_title: 'मेडफ्युजन एआय (MedFusion AI)',
    brand_sub: 'एआय-सहाय्यित वैयक्तिक आरोग्य सारांश अहवाल',
    confidential_note: 'गोपनीय आरोग्य अहवाल\nवैद्यकीय वापरासाठी नाही',
    patient_info_title: 'रुग्णाची माहिती आणि अहवाल तपशील',
    patient_name_label: 'रुग्णाचे नाव    :  ',
    patient_id_label: 'रुग्ण आयडी      :  ',
    email_label: 'ईमेल पत्ता      :  ',
    report_date_label: 'अहवाल तारीख   :  ',
    report_time_label: 'अहवाल वेळ     :  ',
    data_source_label: 'माहिती स्त्रोत :  अपलोड केलेले वैद्यकीय अहवाल',
    overall_status_label: 'एकूण स्थिती',
    review_recommended: 'तपासणी आवश्यक',
    mostly_normal: 'सामान्य स्थिती',
    review_sub: 'निष्कर्षांवर डॉक्टरांचा सल्ला घेणे आवश्यक आहे.',
    normal_sub: 'सर्व चाचण्या सामान्य मर्यादेत आहेत.',
    doctor_note: 'कृपया तज्ज्ञ डॉक्टरांचा सल्ला घ्या.',
    analysis_results_title: 'विश्लेषण निकाल',
    analysis_results_desc: 'मेडफ्युजन एआय द्वारे तुमच्या अपलोड केलेल्या अहवालांचे विश्लेषण केले गेले आहे.',
    detailed_results_title: 'सविस्तर चाचणी निकाल',
    col_param: 'चाचणी घटक / पॅरामीटर',
    col_result: 'निकाल',
    col_range: 'संदर्भ मर्यादा',
    col_status: 'स्थिती',
    key_findings_title: 'महत्त्वाचे वैद्यकीय निष्कर्ष',
    recommended_actions_title: 'पुढील शिफारसी',
    actions: [
      'तुमच्या पुढील भेटीदरम्यान हा अहवाल तुमच्या डॉक्टरांना दाखवा.',
      'मर्यादेबाहेरील चाचणी निकालांवर डॉक्टरांशी सविस्तर चर्चा करा.',
      'खोकला, ताप किंवा थकवा यासारख्या लक्षणांवर लक्ष ठेवा.',
      'डॉक्टरांनी सल्ला दिल्यास पुन्हा चाचणी करण्याचा विचार करा.',
      'पौष्टिक आहार, नियमित व्यायाम आणि पुरेसे पाणी पिण्याची काळजी घ्या.'
    ],
    disclaimer_title: 'महत्त्वाचे वैद्यकीय अस्वीकरण',
    disclaimer_text: 'मेडफ्युजन एआय हे वैयक्तिक आरोग्य माहिती विश्लेषण साधन आहे. हे वैद्यकीय निदान, उपचार किंवा डॉक्टरांच्या सल्ल्याची जागा घेत नाही. आरोग्य निर्णयांसाठी नेहमी पात्र वैद्यकीय तज्ज्ञांचा सल्ला घ्या.',
    modules: {
      chest_xray: {
        title: 'छातीचा क्ष-किरण (एक्स-रे) विश्लेषण',
        type: 'image',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        summaryBullets: [
          'कोणतीही मोठी फोकल कन्सॉलिडेशन विकृती आढळली नाही.',
          'फुफ्फुसांचे वरचे आणि मध्य भाग स्पष्ट दिसत आहेत.',
          'उजव्या फुफ्फुसाच्या खालच्या भागात हलकी सावली (धुसरपणा) आढळली.',
          'प्लूरल इफ्यूजन (द्रव साचणे) चे कोणतेही लक्षण नाही.'
        ],
        tableParams: [
          { param: 'फुफ्फुसाचे क्षेत्र', result: 'वरचा/मध्य भाग स्पष्ट' },
          { param: 'कन्सॉलिडेशन', result: 'आढळले नाही' },
          { param: 'प्लूरल इफ्यूजन', result: 'आढळले नाही' },
          { param: 'हृदयाचा आकार', result: 'सामान्य' },
          { param: 'प्राथमिक निष्कर्ष', result: 'हलकी सावली (खालचा उजवा)' }
        ],
        keyFinding: 'छातीचा एक्स-रे: कोणतीही गंभीर विकृती आढळली नाही. उजव्या फुफ्फुसाच्या खालच्या भागात हलकी सावली सौम्य कफ किंवा जळजळीचे संकेत असू शकते.'
      },
      bone_xray: {
        title: 'हाडांचा क्ष-किरण (एक्स-रे) विश्लेषण',
        type: 'image',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'हाडांची रचना आणि सांध्यांमधील अंतर सामान्य मर्यादेत आहे.',
          'कोणतीही कॉर्टिकल फ्रॅक्चर रेषा किंवा हाड मोडल्याचे आढळले नाही.',
          'स्नायू आणि ऊतींची रचना सममित दिसत आहे.',
          'सांधे निसटणे किंवा सूज आढळली नाही.'
        ],
        tableParams: [
          { param: 'हाडांची रचना', result: 'सामान्य' },
          { param: 'कॉर्टिकल अखंडता', result: 'अखंड' },
          { param: 'सांध्यांमधील जागा', result: 'सुरक्षित' },
          { param: 'फ्रॅक्चर रेषा', result: 'आढळली नाही' },
          { param: 'प्राथमिक निष्कर्ष', result: 'फ्रॅक्चर नाही' }
        ],
        keyFinding: 'हाडांचा एक्स-रे: हाडांची रचना अखंड असून कोणतीही फ्रॅक्चर रेषा आढळलेली नाही.'
      },
      skin_image: {
        title: 'त्वचा / तीळ विश्लेषण',
        type: 'image',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'सममित सीमा आणि एकसमान रंगद्रव्य आढळले.',
          'लक्षणे सामान्य सौम्य तिळाशी सुसंगत आहेत.',
          'कोणतीही अनियमित विषमता किंवा रंगात बदल आढळला नाही.',
          'कमी जोखीम श्रेणी.'
        ],
        tableParams: [
          { param: 'सममिती', result: 'सममित' },
          { param: 'सीमेची रचना', result: 'नियमित' },
          { param: 'रंग एकसमानता', result: 'एकसारखा तपकिरी' },
          { param: 'व्यास', result: '< 6 मिमी' },
          { param: 'प्राथमिक वर्गीकरण', result: 'सौम्य तीळ (नेव्हस)' }
        ],
        keyFinding: 'त्वचा विश्लेषण: तिळाची रचना सममित आणि कमी जोखमीची असून सामान्य तिळाशी सुसंगत आहे.'
      },
      cbc: {
        title: 'सीबीसी (रक्त चाचणी)',
        type: 'lab',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        summaryBullets: [
          'हिमोग्लोबिन: 11.2 g/dL (किंचित कमी)',
          'पांढऱ्या पेशी (WBC): 11.8 x10^9/L (किंचित जास्त)',
          'आरबीसी, प्लेटलेट्स: सामान्य मर्यादेत.',
          'सौम्य संसर्ग किंवा जंतुसंसर्गाची शक्यता दर्शवते.'
        ],
        labRows: [
          { test: 'हिमोग्लोबिन', result: '11.2 g/dL', range: '12.0 - 15.5', status: 'कमी' },
          { test: 'पांढऱ्या पेशी (WBC)', result: '11.8 x10^9/L', range: '4.5 - 11.0', status: 'जास्त' },
          { test: 'तांबड्या पेशी (RBC)', result: '4.5 x10^12/L', range: '4.0 - 5.2', status: 'सामान्य' },
          { test: 'प्लेटलेट्स', result: '245 x10^9/L', range: '150 - 450', status: 'सामान्य' }
        ],
        keyFinding: 'सीबीसी: पांढऱ्या पेशींची संख्या किंचित वाढलेली आहे (11.8 x10^9/L), जी सौम्य संसर्गाचे लक्षण असू शकते.'
      },
      diabetes: {
        title: 'ग्लुकोज आणि चयापचय पॅनेल',
        type: 'lab',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        summaryBullets: [
          'उपाशीपोटी साखर: 115 mg/dL (किंचित जास्त)',
          'जेवणानंतरची साखर: 160 mg/dL (किंचित जास्त)',
          'एचबीए1सी: 6.1% (मधुमेहपूर्व स्थिती)',
          'आहार आणि जीवनशैलीत बदल करण्याची शिफारस.'
        ],
        labRows: [
          { test: 'उपाशीपोटी साखर', result: '115 mg/dL', range: '70 - 99', status: 'जास्त' },
          { test: 'जेवणानंतरची साखर', result: '160 mg/dL', range: '70 - 140', status: 'जास्त' },
          { test: 'एचबीए1सी (HbA1c)', result: '6.1%', range: '4.0 - 5.6', status: 'जास्त' }
        ],
        keyFinding: 'चयापचय पॅनेल: उपाशीपोटी साखर आणि एचबीए1सी थोडे जास्त असून मधुमेहपूर्व स्थिती दर्शवतात.'
      },
      lipid_profile: {
        title: 'लिपिड / कोलेस्टेरॉल पॅनेल',
        type: 'lab',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        summaryBullets: [
          'एकूण कोलेस्टेरॉल: 215 mg/dL (मर्यादेपेक्षा थोडे जास्त)',
          'एचडीएल: 45 mg/dL (सामान्य चांगले स्तर)',
          'एलडीएल: 130 mg/dL (किंचित जास्त)',
          'ट्रायग्लिसराइड्स: 165 mg/dL (सौम्य वाढ)'
        ],
        labRows: [
          { test: 'एकूण कोलेस्टेरॉल', result: '215 mg/dL', range: '125 - 200', status: 'जास्त' },
          { test: 'एचडीएल', result: '45 mg/dL', range: '40 - 60', status: 'सामान्य' },
          { test: 'एलडीएल', result: '130 mg/dL', range: '0 - 100', status: 'जास्त' },
          { test: 'ट्रायग्लिसराइड्स', result: '165 mg/dL', range: '0 - 150', status: 'जास्त' }
        ],
        keyFinding: 'लिपिड प्रोफाइल: एकूण कोलेस्टेरॉल आणि एलडीएल किंचित जास्त आहेत. आहारात सुधारणा आवश्यक आहे.'
      },
      kft: {
        title: 'मूत्रपिंड कार्य चाचणी (केएफटी)',
        type: 'lab',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'सीरम क्रिएटिनिन: 0.9 mg/dL (सामान्य)',
          'ब्लड युरिया: 15 mg/dL (सामान्य)',
          'ईजीएफआर (eGFR): 105 mL/min (निरोगी गाळण क्षमता)',
          'मूत्रपिंडाचे सर्व निर्देशांक सामान्य मर्यादेत आहेत.'
        ],
        labRows: [
          { test: 'क्रिएटिनिन', result: '0.9 mg/dL', range: '0.6 - 1.2', status: 'सामान्य' },
          { test: 'ब्लड युरिया', result: '15 mg/dL', range: '7 - 20', status: 'सामान्य' },
          { test: 'ईजीएफआर', result: '105 mL/min', range: '90 - 120', status: 'सामान्य' }
        ],
        keyFinding: 'मूत्रपिंड कार्य: सर्व निर्देशांक निरोगी सामान्य मर्यादेत आहेत.'
      },
      lft: {
        title: 'यकृत कार्य चाचणी (एलएफटी)',
        type: 'lab',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'एएलटी (एसजीपीटी): 28 U/L (सामान्य)',
          'एएसटी (एसजीओटी): 25 U/L (सामान्य)',
          'बिलिरुबिन: 0.8 mg/dL (सामान्य)',
          'यकृतातील विकर आणि प्रथिनांचे प्रमाण सामान्य आहे.'
        ],
        labRows: [
          { test: 'एएलटी (SGPT)', result: '28 U/L', range: '7 - 56', status: 'सामान्य' },
          { test: 'एएसटी (SGOT)', result: '25 U/L', range: '10 - 40', status: 'सामान्य' },
          { test: 'बिलिरुबिन', result: '0.8 mg/dL', range: '0.1 - 1.2', status: 'सामान्य' },
          { test: 'अल्ब्युमिन', result: '4.2 g/dL', range: '3.5 - 5.0', status: 'सामान्य' }
        ],
        keyFinding: 'यकृत कार्य: सर्व यकृत एन्झाईम्स आणि प्रथिने सामान्य मर्यादेत आहेत.'
      },
      urinalysis: {
        title: 'मूत्र विश्लेषण (युरिनालिसिस)',
        type: 'lab',
        badge: 'सामान्य',
        isNormal: true,
        summaryBullets: [
          'रंग: पिवळा (Yellow)',
          'सामू (pH): 6.0 (सामान्य)',
          'विशिष्ट गुरुत्व: 1.020 (सामान्य)',
          'प्रथिने, ग्लुकोज, रक्त: नकारात्मक (Negative)',
          'नमुन्यामध्ये संसर्गाची कोणतीही चिन्हे नाहीत.'
        ],
        labRows: [
          { test: 'रंग', result: 'पिवळा', range: 'पिवळा / अंबर', status: 'सामान्य' },
          { test: 'सामू (pH)', result: '6.0', range: '4.5 - 8.0', status: 'सामान्य' },
          { test: 'विशिष्ट गुरुत्व', result: '1.020', range: '1.005 - 1.030', status: 'सामान्य' },
          { test: 'प्रथिने', result: 'नकारात्मक', range: 'नकारात्मक', status: 'सामान्य' },
          { test: 'ग्लुकोज', result: 'नकारात्मक', range: 'नकारात्मक', status: 'सामान्य' },
          { test: 'रक्त', result: 'नकारात्मक', range: 'नकारात्मक', status: 'सामान्य' }
        ],
        keyFinding: 'मूत्र विश्लेषण: सर्व मूत्र निर्देशांक निरोगी सामान्य मर्यादेत आहेत.'
      }
    }
  }
};

module.exports = { PDF_TRANSLATIONS };
