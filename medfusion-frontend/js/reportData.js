/**
 * MedFusion AI - Multilingual Clinical Report Data Generator
 * Provides structured report findings in English (en), Hindi (hi), and Marathi (mr).
 */

export const MULTILINGUAL_REPORTS = {
  en: {
    meta: {
      report_title: 'MedFusion AI Clinical Summary',
      report_subtitle: 'AI-Assisted Multimodal Personal Health Report',
      confidential_tag: 'Confidential Health Timeline',
      non_prescriptive: 'Non-Prescriptive AI Intelligence',
      patient_info_header: '1. PATIENT INFORMATION & SESSION DETAILS',
      patient_name: 'Patient Name:',
      report_date: 'Analysis Date:',
      record_id: 'Record ID:',
      report_time: 'Analysis Time:',
      email: 'Email:',
      data_source: 'Data Source:',
      data_source_val: 'Uploaded Scans & Blood Panels',
      overall_assessment: 'OVERALL ASSESSMENT',
      status_review: 'REVIEW RECOMMENDED',
      status_normal: 'MOSTLY NORMAL',
      review_sub: 'Specific findings in one or more modules warrant clinician follow-up.',
      normal_sub: 'All uploaded parameters appear within baseline boundaries.',
      modular_breakdown: '2. MODULAR ANALYSIS BREAKDOWN',
      parameter_eval: '3. DETAILED PARAMETER EVALUATIONS',
      th_param: 'PARAMETER',
      th_result: 'RESULT / OBSERVATION',
      th_range: 'REFERENCE RANGE',
      th_status: 'STATUS',
      key_observations: '4. KEY CLINICAL OBSERVATIONS',
      recommended_steps: '5. RECOMMENDED NEXT STEPS',
      steps: [
        'Share this correlated summary with your primary care physician during your next consultation.',
        'Discuss borderline parameters with your clinician to establish individualized target ranges.',
        'Download the generated clinical PDF report for official offline record archiving.'
      ],
      disclaimer: 'Clinical Notice: MedFusion AI is an AI-assisted informational intelligence tool designed to organize patient health summaries. It does not replace independent clinical evaluation or licensed medical treatment decisions.'
    },
    fusion_summary: {
      overall_status: 'Review Recommended',
      overall_findings: 'Multimodal correlation across uploaded health modules identified 1 imaging area of interest and 1 laboratory parameter variation.',
      important_abnormalities: [
        'Chest Radiograph: Slight shadow detected in lower right lung region (density evaluation).',
        'Laboratory Panel: Mild variation in WBC parameter count (11.8 x10^9/L).'
      ],
      cross_report_observations: [
        'Combined findings reflect a possible mild respiratory irritation or localized inflammatory response.',
        'Bone, skin, renal, and hepatic metrics remain completely intact and within normal bounds.'
      ]
    },
    modules: {
      chest_xray: {
        title: 'CHEST X-RAY RADIOGRAPH ANALYSIS',
        badge: 'Needs Review',
        isNormal: false,
        bullets: [
          'No major focal consolidation detected.',
          'Lungs appear clear in upper and mid zones.',
          'Slight shadow (cloudiness) in lower right lung region.',
          'No obvious pleural effusion.'
        ],
        params: [
          { param: 'Lung fields', result: 'Clear upper/mid' },
          { param: 'Consolidation', result: 'Not detected' },
          { param: 'Pleural effusion', result: 'Not detected' },
          { param: 'Cardiac size', result: 'Normal' },
          { param: 'Primary Finding', result: 'Slight shadow (lower right)' }
        ],
        keyFinding: 'Chest X-ray: No major abnormality detected. Slight shadow in lower right lung region may indicate mild congestion.'
      },
      bone_xray: {
        title: 'BONE FRACTURE RADIOGRAPH ANALYSIS',
        badge: 'Mostly Normal',
        isNormal: true,
        bullets: [
          'Bone alignment and joint spacing appear within normal limits.',
          'No cortical fracture line or acute bone disruption identified.',
          'Soft tissue structures appear symmetric.',
          'No dislocation or joint effusion.'
        ],
        params: [
          { param: 'Bone alignment', result: 'Normal' },
          { param: 'Cortical continuity', result: 'Intact' },
          { param: 'Joint space', result: 'Preserved' },
          { param: 'Fracture line', result: 'Not detected' },
          { param: 'Primary Finding', result: 'No acute fracture detected' }
        ],
        keyFinding: 'Bone X-ray: Cortical alignment intact with no visible fracture lines.'
      },
      skin_image: {
        title: 'SKIN / LESION DERMOSCOPIC ANALYSIS',
        badge: 'Mostly Normal',
        isNormal: true,
        bullets: [
          'Symmetrical border and uniform pigmentation observed.',
          'Lesion features consistent with common benign skin mole.',
          'No irregular asymmetry or color variation detected.',
          'Low risk classification.'
        ],
        params: [
          { param: 'Symmetry', result: 'Symmetrical' },
          { param: 'Border outline', result: 'Regular / Smooth' },
          { param: 'Color uniformity', result: 'Uniform brown' },
          { param: 'Diameter', result: '< 6 mm' },
          { param: 'Primary Classification', result: 'Benign Nevus (Mole)' }
        ],
        keyFinding: 'Skin Analysis: Lesion features are symmetrical and low risk, consistent with a benign skin mole.'
      },
      cbc: {
        title: 'COMPLETE BLOOD COUNT (CBC)',
        badge: 'Needs Review',
        isNormal: false,
        bullets: [
          'Hemoglobin: 11.2 g/dL (Slightly Low)',
          'WBC: 11.8 x10^9/L (Slightly High)',
          'RBC, Platelets: Within normal range.',
          'Suggests possible mild infection or inflammatory response.'
        ],
        params: [
          { param: 'Hemoglobin', result: '11.2 g/dL', range: '12.0 - 15.5', status: 'Low' },
          { param: 'WBC', result: '11.8 x10^9/L', range: '4.5 - 11.0', status: 'High' },
          { param: 'RBC', result: '4.5 x10^12/L', range: '4.0 - 5.2', status: 'Normal' },
          { param: 'Platelets', result: '245 x10^9/L', range: '150 - 450', status: 'Normal' }
        ],
        keyFinding: 'CBC: WBC is slightly elevated (11.8 x10^9/L), which may suggest a mild infection or inflammatory response.'
      },
      diabetes: {
        title: 'GLUCOSE & METABOLIC PANEL',
        badge: 'Needs Review',
        isNormal: false,
        bullets: [
          'Fasting Glucose: 115 mg/dL (Slightly High)',
          'Post-Meal Glucose: 160 mg/dL (Slightly High)',
          'HbA1c: 6.1% (Borderline High / Prediabetes Threshold)',
          'Lifestyle and dietary review recommended.'
        ],
        params: [
          { param: 'Fasting Glucose', result: '115 mg/dL', range: '70 - 99', status: 'High' },
          { param: 'PP Blood Sugar', result: '160 mg/dL', range: '70 - 140', status: 'High' },
          { param: 'HbA1c', result: '6.1%', range: '4.0 - 5.6', status: 'High' }
        ],
        keyFinding: 'Metabolic Panel: Fasting glucose and HbA1c are slightly high, indicating prediabetes risk.'
      },
      lipid_profile: {
        title: 'LIPID / CARDIOVASCULAR PANEL',
        badge: 'Needs Review',
        isNormal: false,
        bullets: [
          'Total Cholesterol: 215 mg/dL (Borderline High)',
          'HDL Cholesterol: 45 mg/dL (Normal Good Level)',
          'LDL Cholesterol: 130 mg/dL (Slightly High)',
          'Triglycerides: 165 mg/dL (Mild Elevation)'
        ],
        params: [
          { param: 'Total Cholesterol', result: '215 mg/dL', range: '125 - 200', status: 'High' },
          { param: 'HDL Cholesterol', result: '45 mg/dL', range: '40 - 60', status: 'Normal' },
          { param: 'LDL Cholesterol', result: '130 mg/dL', range: '0 - 100', status: 'High' },
          { param: 'Triglycerides', result: '165 mg/dL', range: '0 - 150', status: 'High' }
        ],
        keyFinding: 'Lipid Profile: Total cholesterol and LDL are borderline high. Dietary modifications recommended.'
      },
      kft: {
        title: 'KIDNEY FUNCTION PANEL (KFT)',
        badge: 'Mostly Normal',
        isNormal: true,
        bullets: [
          'Serum Creatinine: 0.9 mg/dL (Normal)',
          'Blood Urea: 15 mg/dL (Normal)',
          'eGFR: 105 mL/min (Normal Healthy Filtration)',
          'Kidney filtration markers within normal limits.'
        ],
        params: [
          { param: 'Creatinine', result: '0.9 mg/dL', range: '0.6 - 1.2', status: 'Normal' },
          { param: 'Blood Urea', result: '15 mg/dL', range: '7 - 20', status: 'Normal' },
          { param: 'eGFR', result: '105 mL/min', range: '90 - 120', status: 'Normal' }
        ],
        keyFinding: 'Kidney Function: All parameters are within normal healthy limits.'
      },
      lft: {
        title: 'LIVER FUNCTION PANEL (LFT)',
        badge: 'Mostly Normal',
        isNormal: true,
        bullets: [
          'ALT (SGPT): 28 U/L (Normal)',
          'AST (SGOT): 25 U/L (Normal)',
          'Bilirubin: 0.8 mg/dL (Normal)',
          'Liver enzyme and protein levels within normal limits.'
        ],
        params: [
          { param: 'ALT (SGPT)', result: '28 U/L', range: '7 - 56', status: 'Normal' },
          { param: 'AST (SGOT)', result: '25 U/L', range: '10 - 40', status: 'Normal' },
          { param: 'Bilirubin', result: '0.8 mg/dL', range: '0.1 - 1.2', status: 'Normal' },
          { param: 'Albumin', result: '4.2 g/dL', range: '3.5 - 5.0', status: 'Normal' }
        ],
        keyFinding: 'Liver Function: All liver enzymes and proteins are within normal limits.'
      }
    }
  },

  hi: {
    meta: {
      report_title: 'मेडफ्यूजन एआई क्लिनिकल सारांश',
      report_subtitle: 'एआई-सहायता प्राप्त मल्टीमॉडल व्यक्तिगत स्वास्थ्य रिपोर्ट',
      confidential_tag: 'गोपनीय स्वास्थ्य टाइमलाइन',
      non_prescriptive: 'गैर-प्रिस्क्रिप्शन एआई बुद्धिमत्ता',
      patient_info_header: '1. रोगी की जानकारी और सत्र विवरण',
      patient_name: 'रोगी का नाम:',
      report_date: 'विश्लेषण तिथि:',
      record_id: 'रिकॉर्ड आईडी:',
      report_time: 'विश्लेषण समय:',
      email: 'ईमेल:',
      data_source: 'डेटा स्रोत:',
      data_source_val: 'अपलोड किए गए मेडिकल स्कैन और रक्त परीक्षण',
      overall_assessment: 'समग्र मूल्यांकन',
      status_review: 'समीक्षा अनुशंसित',
      status_normal: 'सामान्य स्थिति',
      review_sub: 'एक या अधिक मॉड्यूल में विशिष्ट निष्कर्ष डॉक्टर से परामर्श की मांग करते हैं।',
      normal_sub: 'सभी अपलोड किए गए पैरामीटर मानक सीमा के भीतर हैं।',
      modular_breakdown: '2. मॉड्यूलर विश्लेषण विवरण',
      parameter_eval: '3. विस्तृत पैरामीटर मूल्यांकन',
      th_param: 'पैरामीटर',
      th_result: 'परिणाम / अवलोकन',
      th_range: 'संदर्भ सीमा',
      th_status: 'स्थिति',
      key_observations: '4. मुख्य नैदानिक अवलोकन',
      recommended_steps: '5. अनुशंसित अगले कदम',
      steps: [
        'अपनी अगली यात्रा के दौरान इस सहसंबंधित सारांश को अपने प्राथमिक चिकित्सक के साथ साझा करें।',
        'व्यक्तिगत लक्ष्य सीमाएं स्थापित करने के लिए अपने डॉक्टर के साथ सीमांत मापदंडों पर चर्चा करें।',
        'आधिकारिक ऑफ़लाइन रिकॉर्ड संग्रह के लिए जनरेट की गई नैदानिक पीडीएफ रिपोर्ट डाउनलोड करें।'
      ],
      disclaimer: 'नैदानिक अस्वीकरण: मेडफ्यूजन एआई एक एआई-सहायता प्राप्त सूचनात्मक स्वास्थ्य उपकरण है। यह पेशेवर डॉक्टर के परामर्श या निदान का विकल्प नहीं है।'
    },
    fusion_summary: {
      overall_status: 'समीक्षा अनुशंसित',
      overall_findings: 'अपलोड किए गए स्वास्थ्य मॉड्यूलों के मल्टीमॉडल सहसंबंध ने 1 इमेजिंग क्षेत्र और 1 प्रयोगशाला पैरामीटर में बदलाव की पहचान की।',
      important_abnormalities: [
        'चेस्ट एक्स-रे: निचले दाहिने फेफड़े के क्षेत्र में हल्की छाया (धुंधलापन) पाई गई।',
        'प्रयोगशाला पैनल: डब्ल्यूबीसी (WBC) गणना में हल्की वृद्धि (11.8 x10^9/L)।'
      ],
      cross_report_observations: [
        'संयुक्त निष्कर्ष हल्के श्वसन संबंधी तनाव या स्थानीय सूजन का संकेत दे सकते हैं।',
        'हड्डी, त्वचा, गुर्दे और यकृत के मापदंड पूरी तरह से सामान्य पाए गए।'
      ]
    },
    modules: {
      chest_xray: {
        title: 'चेस्ट एक्स-रे रेडियोग्राफ विश्लेषण',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        bullets: [
          'कोई बड़ा फोकल समेकन (कंसॉलिडेशन) नहीं देखा गया।',
          'फेफड़े ऊपरी और मध्य क्षेत्रों में साफ दिखाई दे रहे हैं।',
          'निचले दाहिने फेफड़े के क्षेत्र में हल्की छाया (धुंधलापन) देखी गई।',
          'कोई स्पष्ट फुफ्फुस बहाव (प्लूरल इफ्यूजन) नहीं मिला।'
        ],
        params: [
          { param: 'फेफड़े के क्षेत्र', result: 'ऊपरी/मध्य साफ' },
          { param: 'कंसॉलिडेशन', result: 'अनुपस्थित' },
          { param: 'प्लूरल इफ्यूजन', result: 'अनुपस्थित' },
          { param: 'हृदय का आकार', result: 'सामान्य' },
          { param: 'प्राथमिक निष्कर्ष', result: 'हल्की छाया (निचला दाहिना भाग)' }
        ],
        keyFinding: 'चेस्ट एक्स-रे: कोई बड़ी विकृति नहीं मिली। निचले दाहिने फेफड़े में हल्की छाया हल्के संकुलन (कंजेशन) का संकेत हो सकती है।'
      },
      bone_xray: {
        title: 'अस्थि एक्स-रे / फ्रैक्चर विश्लेषण',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'हड्डी का संरेखण और जोड़ों का स्थान सामान्य सीमाओं के भीतर प्रतीत होता है।',
          'कोई कॉर्टिकल फ्रैक्चर लाइन या हड्डी का टूटना नहीं मिला।',
          'कोमल ऊतक संरचनाएं सममित दिखाई देती हैं।',
          'जोड़ों का विस्थापन या सूजन नहीं है।'
        ],
        params: [
          { param: 'हड्डी संरेखण', result: 'सामान्य' },
          { param: 'कॉर्टिकल निरंतरता', result: 'अखंड' },
          { param: 'जोड़ों का स्थान', result: 'सुरक्षित' },
          { param: 'फ्रैक्चर रेखा', result: 'अनुपस्थित' },
          { param: 'प्राथमिक निष्कर्ष', result: 'कोई गंभीर फ्रैक्चर नहीं' }
        ],
        keyFinding: 'अस्थि एक्स-रे: कॉर्टिकल संरेखण बरकरार है और कोई फ्रैक्चर रेखा नहीं मिली।'
      },
      skin_image: {
        title: 'त्वचा / तिल डर्मोस्कोपिक विश्लेषण',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'सममित सीमा और एक समान रंजकता (पिगमेंटेशन) देखी गई।',
          'लक्षण सामान्य सौम्य तिल के अनुरूप हैं।',
          'कोई अनियमित विषमता या रंग परिवर्तन नहीं मिला।',
          'कम जोखिम श्रेणी।'
        ],
        params: [
          { param: 'समरूपता', result: 'सममित' },
          { param: 'सीमा रूपरेखा', result: 'नियमित / चिकनी' },
          { param: 'रंग एकरूपता', result: 'समान भूरा' },
          { param: 'व्यास', result: '< 6 मिमी' },
          { param: 'प्राथमिक वर्गीकरण', result: 'सौम्य तिल (नेवस)' }
        ],
        keyFinding: 'त्वचा विश्लेषण: घाव के लक्षण सममित और कम जोखिम वाले हैं, जो सामान्य तिल के अनुरूप हैं।'
      },
      cbc: {
        title: 'सीबीसी (पूर्ण रक्त गणना परीक्षण)',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        bullets: [
          'हीमोग्लोबिन: 11.2 g/dL (हल्का कम)',
          'डब्ल्यूबीसी: 11.8 x10^9/L (हल्का अधिक)',
          'आरबीसी, प्लेटलेट्स: सामान्य श्रेणी के भीतर।',
          'हल्के संक्रमण या सूजन की प्रतिक्रिया का संकेत हो सकता है।'
        ],
        params: [
          { param: 'हीमोग्लोबिन', result: '11.2 g/dL', range: '12.0 - 15.5', status: 'कम' },
          { param: 'डब्ल्यूबीसी (WBC)', result: '11.8 x10^9/L', range: '4.5 - 11.0', status: 'उच्च' },
          { param: 'आरबीसी (RBC)', result: '4.5 x10^12/L', range: '4.0 - 5.2', status: 'सामान्य' },
          { param: 'प्लेटलेट्स', result: '245 x10^9/L', range: '150 - 450', status: 'सामान्य' }
        ],
        keyFinding: 'सीबीसी: डब्ल्यूबीसी गणना थोड़ी बढ़ी हुई है (11.8 x10^9/L), जो हल्के संक्रमण का संकेत हो सकती है।'
      },
      diabetes: {
        title: 'ग्लूकोज और चयापचय पैनल',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        bullets: [
          'फास्टिंग ग्लूकोज: 115 mg/dL (हल्का उच्च)',
          'भोजन के बाद ग्लूकोज: 160 mg/dL (हल्का उच्च)',
          'एचबीए1सी: 6.1% (प्री-डायबिटीज सीमा)',
          'जीवनशैली और आहार समीक्षा अनुशंसित है।'
        ],
        params: [
          { param: 'फास्टिंग ग्लूकोज', result: '115 mg/dL', range: '70 - 99', status: 'उच्च' },
          { param: 'पीपी रक्त शर्करा', result: '160 mg/dL', range: '70 - 140', status: 'उच्च' },
          { param: 'एचबीए1सी (HbA1c)', result: '6.1%', range: '4.0 - 5.6', status: 'उच्च' }
        ],
        keyFinding: 'चयापचय पैनल: फास्टिंग ग्लूकोज और एचबीए1सी थोड़े अधिक हैं, जो प्री-डायबिटीज जोखिम दर्शाते हैं।'
      },
      lipid_profile: {
        title: 'लिपिड / कोलेस्ट्रॉल पैनल',
        badge: 'समीक्षा आवश्यक',
        isNormal: false,
        bullets: [
          'कुल कोलेस्ट्रॉल: 215 mg/dL (सीमांत उच्च)',
          'एचडीएल कोलेस्ट्रॉल: 45 mg/dL (सामान्य अच्छा स्तर)',
          'एलडीएल कोलेस्ट्रॉल: 130 mg/dL (हल्का उच्च)',
          'ट्राइग्लिसराइड्स: 165 mg/dL (हल्की वृद्धि)'
        ],
        params: [
          { param: 'कुल कोलेस्ट्रॉल', result: '215 mg/dL', range: '125 - 200', status: 'उच्च' },
          { param: 'एचडीएल', result: '45 mg/dL', range: '40 - 60', status: 'सामान्य' },
          { param: 'एलडीएल', result: '130 mg/dL', range: '0 - 100', status: 'उच्च' },
          { param: 'ट्राइग्लिसराइड्स', result: '165 mg/dL', range: '0 - 150', status: 'उच्च' }
        ],
        keyFinding: 'लिपिड प्रोफाइल: कुल कोलेस्ट्रॉल और एलडीएल सीमांत उच्च हैं। आहार संशोधन अनुशंसित हैं।'
      },
      kft: {
        title: 'गुर्दा कार्य परीक्षण (केएफटी)',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'सीरम क्रिएटिनिन: 0.9 mg/dL (सामान्य)',
          'ब्लड यूरिया: 15 mg/dL (सामान्य)',
          'ईजीएफआर (eGFR): 105 mL/min (स्वस्थ निस्पंदन)',
          'गुर्दा निस्पंदन पैरामीटर सामान्य सीमा में हैं।'
        ],
        params: [
          { param: 'क्रिएटिनिन', result: '0.9 mg/dL', range: '0.6 - 1.2', status: 'सामान्य' },
          { param: 'ब्लड यूरिया', result: '15 mg/dL', range: '7 - 20', status: 'सामान्य' },
          { param: 'ईजीएफआर', result: '105 mL/min', range: '90 - 120', status: 'सामान्य' }
        ],
        keyFinding: 'गुर्दा कार्य: सभी पैरामीटर सामान्य स्वस्थ सीमाओं के भीतर हैं।'
      },
      lft: {
        title: 'यकृत कार्य परीक्षण (एलएफटी)',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'एएलटी (एसजीपीटी): 28 U/L (सामान्य)',
          'एएसटी (एसजीओटी): 25 U/L (सामान्य)',
          'बिलीरुबिन: 0.8 mg/dL (सामान्य)',
          'यकृत एंजाइम और प्रोटीन स्तर सामान्य हैं।'
        ],
        params: [
          { param: 'एएलटी (SGPT)', result: '28 U/L', range: '7 - 56', status: 'सामान्य' },
          { param: 'एएसटी (SGOT)', result: '25 U/L', range: '10 - 40', status: 'सामान्य' },
          { param: 'बिलीरुबिन', result: '0.8 mg/dL', range: '0.1 - 1.2', status: 'सामान्य' },
          { param: 'एल्ब्यूमिन', result: '4.2 g/dL', range: '3.5 - 5.0', status: 'सामान्य' }
        ],
        keyFinding: 'यकृत कार्य: सभी यकृत एंजाइम और प्रोटीन सामान्य सीमा में हैं।'
      }
    }
  },

  mr: {
    meta: {
      report_title: 'मेडफ्युजन एआय वैद्यकीय सारांश अहवाल',
      report_subtitle: 'एआय-सहाय्यित मल्टीमॉडल वैयक्तिक आरोग्य अहवाल',
      confidential_tag: 'गोपनीय आरोग्य टाइमलाइन',
      non_prescriptive: 'गैर-प्रिस्क्रिप्शन एआय माहिती',
      patient_info_header: '1. रुग्णाची माहिती आणि तपशील',
      patient_name: 'रुग्णाचे नाव:',
      report_date: 'विश्लेषण तारीख:',
      record_id: 'नोंदणी आयडी:',
      report_time: 'विश्लेषण वेळ:',
      email: 'ईमेल:',
      data_source: 'माहिती स्त्रोत:',
      data_source_val: 'अपलोड केलेले स्कॅन आणि रक्त तपासणी अहवाल',
      overall_assessment: 'सर्वसमावेशक मूल्यमापन',
      status_review: 'तपासणी आवश्यक',
      status_normal: 'सामान्य स्थिती',
      review_sub: 'काही चाचण्यांमध्ये डॉक्टरांचा सल्ला घेणे आवश्यक असल्याचे आढळले आहे.',
      normal_sub: 'सर्व तपासलेले घटक सामान्य मर्यादेत आहेत.',
      modular_breakdown: '2. चाचणीनिहाय तपशीलवार निकाल',
      parameter_eval: '3. घटक मूल्यमापन तक्ता',
      th_param: 'घटक / पॅरामीटर',
      th_result: 'निकाल / निरीक्षण',
      th_range: 'संदर्भ मर्यादा',
      th_status: 'स्थिती',
      key_observations: '4. महत्त्वाचे वैद्यकीय निष्कर्ष',
      recommended_steps: '5. पुढील शिफारसी',
      steps: [
        'तुमच्या पुढील भेटीदरम्यान हा एकत्रित अहवाल तुमच्या डॉक्टरांना दाखवा.',
        'वैयक्तिक आरोग्य उद्दिष्टे ठरवण्यासाठी मर्यादेबाहेरील घटकांविषयी डॉक्टरांशी चर्चा करा.',
        'ऑफलाइन नोंदीसाठी तयार केलेला वैद्यकीय पीडीएफ अहवाल डाउनलोड करा.'
      ],
      disclaimer: 'वैद्यकीय अस्वीकरण: मेडफ्युजन एआय हे एआय-सहाय्यित माहिती देणारे साधन आहे. हे पात्र डॉक्टरांच्या निदानाची किंवा उपचारांची जागा घेत नाही.'
    },
    fusion_summary: {
      overall_status: 'तपासणी आवश्यक',
      overall_findings: 'अपलोड केलेल्या आरोग्य चाचण्यांच्या मल्टीमॉडल सहसंबंधाने 1 स्कॅन क्षेत्र आणि 1 रक्त चाचणी घटकामध्ये बदल नोंदवला आहे.',
      important_abnormalities: [
        'छातीचा एक्स-रे: उजव्या फुफ्फुसाच्या खालच्या भागात हलकी सावली (धुसरपणा) आढळली.',
        'प्रयोगशाळा चाचणी: पांढऱ्या पेशींच्या संख्येत (WBC) किंचित वाढ (11.8 x10^9/L).'
      ],
      cross_report_observations: [
        'एकत्रित निष्कर्ष सौम्य श्वसनदाह किंवा स्थानिक जंतुसंसर्गाची शक्यता दर्शवतात.',
        'हाडे, त्वचा, मूत्रपिंड आणि यकृत यासंबंधीचे सर्व निकाल पूर्णपणे सामान्य आहेत.'
      ]
    },
    modules: {
      chest_xray: {
        title: 'छातीचा क्ष-किरण (एक्स-रे) विश्लेषण',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        bullets: [
          'कोणतीही मोठी फोकल कन्सॉलिडेशन विकृती आढळली नाही.',
          'फुफ्फुसांचे वरचे आणि मध्य भाग स्पष्ट दिसत आहेत.',
          'उजव्या फुफ्फुसाच्या खालच्या भागात हलकी सावली (धुसरपणा) आढळली.',
          'प्लूरल इफ्यूजन (द्रव साचणे) चे कोणतेही लक्षण नाही.'
        ],
        params: [
          { param: 'फुफ्फुसाचे क्षेत्र', result: 'वरचा/मध्य भाग स्पष्ट' },
          { param: 'कन्सॉलिडेशन', result: 'आढळले नाही' },
          { param: 'प्लूरल इफ्यूजन', result: 'आढळले नाही' },
          { param: 'हृदयाचा आकार', result: 'सामान्य' },
          { param: 'प्राथमिक निष्कर्ष', result: 'हलकी सावली (खालचा उजवा भाग)' }
        ],
        keyFinding: 'छातीचा एक्स-रे: कोणतीही गंभीर विकृती आढळली नाही. उजव्या फुफ्फुसाच्या खालच्या भागात हलकी सावली सौम्य कफ किंवा जळजळीचे संकेत असू शकते.'
      },
      bone_xray: {
        title: 'हाडांचा क्ष-किरण (एक्स-रे) / फ्रॅक्चर विश्लेषण',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'हाडांची रचना आणि सांध्यांमधील अंतर सामान्य मर्यादेत आहे.',
          'कोणतीही कॉर्टिकल फ्रॅक्चर रेषा किंवा हाड मोडल्याचे आढळले नाही.',
          'स्नायू आणि ऊतींची रचना सममित दिसत आहे.',
          'सांधे निसटणे किंवा सूज आढळली नाही.'
        ],
        params: [
          { param: 'हाडांची रचना', result: 'सामान्य' },
          { param: 'कॉर्टिकल अखंडता', result: 'अखंड' },
          { param: 'सांध्यांमधील जागा', result: 'सुरक्षित' },
          { param: 'फ्रॅक्चर रेषा', result: 'आढळली नाही' },
          { param: 'प्राथमिक निष्कर्ष', result: 'गंभीर फ्रॅक्चर नाही' }
        ],
        keyFinding: 'हाडांचा एक्स-रे: हाडांची रचना अखंड असून कोणतीही फ्रॅक्चर रेषा आढळलेली नाही.'
      },
      skin_image: {
        title: 'त्वचा / तीळ डर्मोस्कोपिक विश्लेषण',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'सममित सीमा आणि एकसमान रंगद्रव्य (पिगमेंटेशन) आढळले.',
          'लक्षणे सामान्य सौम्य तिळाशी सुसंगत आहेत.',
          'कोणतीही अनियमित विषमता किंवा रंगात बदल आढळला नाही.',
          'कमी जोखीम श्रेणी.'
        ],
        params: [
          { param: 'सममिती', result: 'सममित' },
          { param: 'सीमेची रचना', result: 'नियमित / गुळगुळीत' },
          { param: 'रंग एकसमानता', result: 'एकसारखा तपकिरी' },
          { param: 'व्यास', result: '< 6 मिमी' },
          { param: 'प्राथमिक वर्गीकरण', result: 'सौम्य तीळ (नेव्हस)' }
        ],
        keyFinding: 'त्वचा विश्लेषण: तिळाची रचना सममित आणि कमी जोखमीची असून सामान्य तिळाशी सुसंगत आहे.'
      },
      cbc: {
        title: 'सीबीसी (संपूर्ण रक्त चाचणी)',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        bullets: [
          'हिमोग्लोबिन: 11.2 g/dL (किंचित कमी)',
          'पांढऱ्या पेशी (WBC): 11.8 x10^9/L (किंचित जास्त)',
          'आरबीसी, प्लेटलेट्स: सामान्य मर्यादेत.',
          'सौम्य संसर्ग किंवा जंतुसंसर्गाची शक्यता दर्शवते.'
        ],
        params: [
          { param: 'हिमोग्लोबिन', result: '11.2 g/dL', range: '12.0 - 15.5', status: 'कमी' },
          { param: 'पांढऱ्या पेशी (WBC)', result: '11.8 x10^9/L', range: '4.5 - 11.0', status: 'जास्त' },
          { param: 'तांबड्या पेशी (RBC)', result: '4.5 x10^12/L', range: '4.0 - 5.2', status: 'सामान्य' },
          { param: 'प्लेटलेट्स', result: '245 x10^9/L', range: '150 - 450', status: 'सामान्य' }
        ],
        keyFinding: 'सीबीसी: पांढऱ्या पेशींची संख्या किंचित वाढलेली आहे (11.8 x10^9/L), जी सौम्य संसर्गाचे लक्षण असू शकते.'
      },
      diabetes: {
        title: 'ग्लुकोज आणि चयापचय पॅनेल',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        bullets: [
          'उपाशीपोटी साखर: 115 mg/dL (किंचित जास्त)',
          'जेवणानंतरची साखर: 160 mg/dL (किंचित जास्त)',
          'एचबीए1सी: 6.1% (मधुमेहपूर्व स्थिती)',
          'आहार आणि जीवनशैलीत बदल करण्याची शिफारस.'
        ],
        params: [
          { param: 'उपाशीपोटी साखर', result: '115 mg/dL', range: '70 - 99', status: 'जास्त' },
          { param: 'जेवणानंतरची साखर', result: '160 mg/dL', range: '70 - 140', status: 'जास्त' },
          { param: 'एचबीए1सी (HbA1c)', result: '6.1%', range: '4.0 - 5.6', status: 'जास्त' }
        ],
        keyFinding: 'चयापचय पॅनेल: उपाशीपोटी साखर आणि एचबीए1सी थोडे जास्त असून मधुमेहपूर्व स्थिती दर्शवतात.'
      },
      lipid_profile: {
        title: 'लिपिड / कोलेस्टेरॉल पॅनेल',
        badge: 'तपासणी आवश्यक',
        isNormal: false,
        bullets: [
          'एकूण कोलेस्टेरॉल: 215 mg/dL (मर्यादेपेक्षा थोडे जास्त)',
          'एचडीएल (चांगले कोलेस्टेरॉल): 45 mg/dL (सामान्य चांगले स्तर)',
          'एलडीएल (वाईट कोलेस्टेरॉल): 130 mg/dL (किंचित जास्त)',
          'ट्रायग्लिसराइड्स: 165 mg/dL (सौम्य वाढ)'
        ],
        params: [
          { param: 'एकूण कोलेस्टेरॉल', result: '215 mg/dL', range: '125 - 200', status: 'जास्त' },
          { param: 'एचडीएल', result: '45 mg/dL', range: '40 - 60', status: 'सामान्य' },
          { param: 'एलडीएल', result: '130 mg/dL', range: '0 - 100', status: 'जास्त' },
          { param: 'ट्रायग्लिसराइड्स', result: '165 mg/dL', range: '0 - 150', status: 'जास्त' }
        ],
        keyFinding: 'लिपिड प्रोफाइल: एकूण कोलेस्टेरॉल आणि एलडीएल किंचित जास्त आहेत. आहारात सुधारणा आवश्यक आहे.'
      },
      kft: {
        title: 'मूत्रपिंड कार्य चाचणी (केएफटी)',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'सीरम क्रिएटिनिन: 0.9 mg/dL (सामान्य)',
          'ब्लड युरिया: 15 mg/dL (सामान्य)',
          'ईजीएफआर (eGFR): 105 mL/min (निरोगी गाळण क्षमता)',
          'मूत्रपिंडाचे सर्व निर्देशांक सामान्य मर्यादेत आहेत.'
        ],
        params: [
          { param: 'क्रिएटिनिन', result: '0.9 mg/dL', range: '0.6 - 1.2', status: 'सामान्य' },
          { param: 'ब्लड युरिया', result: '15 mg/dL', range: '7 - 20', status: 'सामान्य' },
          { param: 'ईजीएफआर', result: '105 mL/min', range: '90 - 120', status: 'सामान्य' }
        ],
        keyFinding: 'मूत्रपिंड कार्य: सर्व निर्देशांक निरोगी सामान्य मर्यादेत आहेत.'
      },
      lft: {
        title: 'यकृत कार्य चाचणी (एलएफटी)',
        badge: 'सामान्य',
        isNormal: true,
        bullets: [
          'एएलटी (एसजीपीटी): 28 U/L (सामान्य)',
          'एएसटी (एसजीओटी): 25 U/L (सामान्य)',
          'बिलिरुबिन: 0.8 mg/dL (सामान्य)',
          'यकृतातील विकर (एंझाईम्स) आणि प्रथिनांचे प्रमाण सामान्य आहे.'
        ],
        params: [
          { param: 'एएलटी (SGPT)', result: '28 U/L', range: '7 - 56', status: 'सामान्य' },
          { param: 'एएसटी (SGOT)', result: '25 U/L', range: '10 - 40', status: 'सामान्य' },
          { param: 'बिलिरुबिन', result: '0.8 mg/dL', range: '0.1 - 1.2', status: 'सामान्य' },
          { param: 'अल्ब्युमिन', result: '4.2 g/dL', range: '3.5 - 5.0', status: 'सामान्य' }
        ],
        keyFinding: 'यकृत कार्य: सर्व यकृत एन्झाईम्स आणि प्रथिने सामान्य मर्यादेत आहेत.'
      }
    }
  }
};
