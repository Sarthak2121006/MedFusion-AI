/**
 * MedFusion AI - Multilingual Internationalization (i18n) Engine
 * Supported Languages: English (en), Hindi (hi), Marathi (mr)
 */

export const TRANSLATIONS = {
  en: {
    // Brand & General
    app_name: 'MedFusion AI',
    app_tagline: 'Health Intelligence',
    app_subtitle: 'AI-Assisted Multimodal Personal Health Intelligence Platform',
    back_to_home: '← Back to Home',
    close: 'Close',
    save_changes: 'Save Changes',
    cancel: 'Cancel',
    sign_out: 'Sign Out',
    loading: 'Loading...',

    // Navigation
    nav_dashboard: 'Dashboard',
    nav_new_analysis: 'New Analysis',
    nav_history: 'History',
    nav_profile: 'Profile',
    nav_settings: 'Settings',

    // Dashboard
    dash_welcome_back: 'WELCOME BACK',
    dash_overview_suffix: 'Here is your personal health overview.',
    dash_greeting_morning: 'Good morning',
    dash_greeting_afternoon: 'Good afternoon',
    dash_greeting_evening: 'Good evening',
    dash_title: 'Your personal health analysis, all in one place.',
    dash_desc: 'AI-assisted diagnostic summary report synthesized across your uploaded health modules.',
    dash_btn_new: 'Start New Analysis',
    stat_total_analyses: 'Total Analyses',
    stat_last_analysis: 'Last Analysis',
    stat_reports_saved: 'Reports Saved',
    stat_attention_required: 'Attention Required',
    stat_no_tests: 'No tests yet',
    dash_recent_title: 'Analysis Activity',
    dash_recent_subtitle: 'Recent Analyses',
    dash_view_all: 'View All →',
    dash_modules_available: 'Available Diagnostic Modules',
    dash_modules_sub: '8 Specialized AI Analyzers & Laboratory Panels',
    dash_loading_activity: 'Loading your personal health analyses...',
    dash_timeline_subtitle: 'Personal Health Timeline',
    dash_timeline_title: 'Key Milestones',
    dash_timeline_date: 'Personal Milestones',
    dash_timeline_empty: 'No health milestones recorded yet. Run your first health analysis to start tracking your timeline.',
    dash_timeline_item_title: 'Health Analysis Completed',
    dash_timeline_item_desc: 'AI diagnostic evaluation completed for uploaded medical examination.',
    dash_quick_actions: 'Quick Actions',
    dash_quick_new: 'New Analysis',
    dash_quick_history: 'View History',
    dash_quick_reports: 'Saved Reports',
    dash_quick_profile: 'Profile',
    dash_ai_badge: 'AI-Assisted Intelligence',
    dash_ai_title: 'Ready for Your Health Analysis',
    dash_ai_body: 'Upload chest X-rays, skin lesions, bone radiographs, or laboratory blood tests to generate unified AI health summaries.',
    dash_ai_disclaimer: 'This is an AI-assisted informational review and does not replace clinical diagnosis.',
    dash_ai_btn: 'View Latest Analysis →',
    dash_badge_review: 'Needs Review',
    dash_badge_normal: 'Normal',
    dash_self_analysis: 'Patient Self Analysis',
    dash_btn_view: 'View',

    // Home Page Navigation
    home_nav_about: 'About',
    home_nav_workflow: 'Workflow',
    home_nav_imaging: 'Medical Imaging',
    home_nav_labs: 'Lab Reports',
    home_nav_fusion: 'Fusion Engine',
    home_nav_features: 'Features',
    home_nav_safety: 'Safety',
    home_nav_login: 'Login',
    home_nav_get_started: 'Get Started',
    home_nav_free: 'Get Started Free',

    // Hero Section
    hero_badge: 'Multimodal Personal Health Intelligence',
    hero_title_1: 'Upload Everything.',
    hero_title_2: 'Get One Health Summary.',
    hero_desc: 'MedFusion AI is a patient-facing health system that unifies medical imaging (X-rays, skin photos) and laboratory blood reports into one understandable, explainable health summary.',
    hero_login_btn: 'Login to Dashboard',
    hero_create_btn: 'Create Free Account',
    hero_dashboard_btn: 'Open My Dashboard',
    hero_start_new: '+ Start New Analysis',

    // Key Stats
    stat_3_modalities: '3 Modalities',
    stat_3_desc: 'Chest, Bone & Skin AI',
    stat_5_labs: '5 Lab Panels',
    stat_5_desc: 'CBC, Sugar, Lipid, KFT, LFT',
    stat_1_file: '1 Unified File',
    stat_1_desc: 'Clinical PDF Export',

    // Demo Mockup
    mockup_badge: 'INTERACTIVE PLATFORM DEMO',
    mockup_title: 'Multimodal Health Assessment Preview',
    mockup_sample_tag: 'Sample Demonstration',
    mockup_mode_label: 'Mode',
    mockup_mode_val: 'Sample Case',
    mockup_data_label: 'Patient Data',
    mockup_data_val: 'De-Identified',
    mockup_format_label: 'Report Format',
    mockup_format_val: 'PDF Ready',
    mockup_flag_label: 'Flagged Items',
    mockup_flag_val: '1 Item',
    mockup_fusion_title: 'Multimodal Health Fusion',
    mockup_fusion_badge: 'Correlated Finding',
    mockup_fusion_desc: 'Correlated pulmonary shadow with elevated WBC. Physician review recommended.',
    mockup_chest_tag: 'CHEST X-RAY',
    mockup_chest_title: 'Pneumonia Evaluation',
    mockup_chest_desc: 'Subtle density noted in lower right field · ResNet-18',
    mockup_lab_tag: 'LABORATORY OCR',
    mockup_lab_title: 'Complete Blood Count (CBC)',
    mockup_lab_desc: 'WBC: <span class="text-rose-400 font-semibold">11.8 High</span> &bull; Hemoglobin: <span class="text-rose-400 font-semibold">11.2 Low</span>',
    mockup_lab_status: 'Evaluated',
    mockup_scope: 'Personal Patient Scope · Single Port',
    mockup_open_dash: 'Open Full Dashboard →',

    // About Section
    about_eyebrow: 'ABOUT MEDFUSION AI',
    about_title: 'Not 8 Separate Tools. One Unified Multimodal Fusion Engine.',
    about_desc: 'Healthcare information is traditionally fragmented across isolated documents — an X-ray here, a blood report there. MedFusion AI solves this with <strong>Multimodal Health Intelligence</strong>.',
    about_card1_title: 'Single Individual Scope',
    about_card1_desc: 'Designed specifically for the individual patient. Upload your own health information, review findings, and download reports without the clutter of complex hospital management systems.',
    about_card2_title: 'Cross-Report Correlation',
    about_card2_desc: 'Findings from medical images and laboratory blood panels are linked using clinically verified templates and rule engines — never inventing unsupported medical conclusions.',
    about_card3_title: 'Dynamic Card Display',
    about_card3_desc: 'If you upload only a Chest X-ray and a CBC report, the system displays only those relevant cards. No empty cards or distractions for modules you did not upload.',

    // Workflow Section
    wf_eyebrow: 'THE PATIENT JOURNEY',
    wf_title: 'How MedFusion AI Works',
    wf_sub: 'Upload → Analyze → Understand → Fuse → Combined Summary → Save Report.',
    wf_step1_title: 'Upload Everything',
    wf_step1_desc: 'Drop chest/bone X-rays, skin photos, or PDF/image blood reports in a unified upload workflow.',
    wf_step2_title: 'AI & OCR Analysis',
    wf_step2_desc: 'Deep CNNs classify medical imaging; EasyOCR extracts machine-readable numerical lab parameters.',
    wf_step3_title: 'Rule Engine Eval',
    wf_step3_desc: 'Blood metrics are compared to configured clinical reference ranges and tagged: Low, Normal, or Elevated.',
    wf_step4_title: 'Multimodal Fusion',
    wf_step4_desc: 'The Fusion Engine cross-correlates multi-source abnormalities into one synthesized health status.',
    wf_step5_title: 'Export & Timeline',
    wf_step5_desc: 'Review your health summary, download a formatted PDF, and track historical milestones on your timeline.',

    // Imaging Section
    img_eyebrow: 'DEEP LEARNING VISION',
    img_title: '3 Medical Imaging Modules',
    img_desc: 'Transfer learning models trained on benchmark medical imaging datasets.',
    img_card1_tag: 'ResNet-18',
    img_card1_title: 'Chest X-ray',
    img_card1_desc: 'Evaluates pulmonary radiographs for pneumonia indicators versus clear normal findings.',
    img_card1_meta1: 'Dataset: ChestX-ray14',
    img_card1_meta2: 'Target: Normal vs Pneumonia detection',
    img_card1_meta3: 'Output: Probability score & parenchymal status',
    img_card2_tag: 'EfficientNet-B0',
    img_card2_title: 'Bone X-ray',
    img_card2_desc: 'Screens musculoskeletal radiographs for fractures and structural bone cortical continuity.',
    img_card2_meta1: 'Dataset: MURA (Musculoskeletal Radiographs)',
    img_card2_meta2: 'Regions: Hand, wrist, elbow, forearm, shoulder',
    img_card2_meta3: 'Output: Fractured vs Not Fractured screening',
    img_card3_tag: 'EfficientNet-B0',
    img_card3_title: 'Skin / Lesion Image',
    img_card3_desc: 'Analyzes skin photographs and dermoscopy for supported lesion classification categories.',
    img_card3_meta1: 'Dataset: HAM10000 / ISIC',
    img_card3_meta2: 'Classes: Melanocytic nevi, benign vs risk screening',
    img_card3_meta3: 'Output: Classification probabilities & advice',

    // Labs Section
    labs_eyebrow: 'OCR & RULE ENGINE',
    labs_title: '5 Laboratory Report Panels',
    labs_desc: 'A specialized CNN is not required for every lab type. Instead, MedFusion AI uses an <strong>OCR → Type Detection → Parameter Extraction → Rule Engine</strong> architecture with clinical reference ranges.',
    labs_card1_title: 'CBC Panel',
    labs_card1_sub: 'Complete Blood Count',
    labs_card1_desc: 'Extracts Hemoglobin, WBC, RBC, Platelets, and Hematocrit. Flags anemia or infection.',
    labs_card2_title: 'Diabetes Panel',
    labs_card2_sub: 'Glycemic Profile',
    labs_card2_desc: 'Evaluates Fasting Blood Sugar (FBS), Postprandial Blood Sugar (PPBS), and HbA1c values.',
    labs_card3_title: 'Lipid Profile',
    labs_card3_sub: 'Cardiovascular Risk',
    labs_card3_desc: 'Parses Total Cholesterol, HDL (good), LDL (bad), and Triglycerides against thresholds.',
    labs_card4_title: 'Kidney (KFT)',
    labs_card4_sub: 'Renal Function',
    labs_card4_desc: 'Checks Serum Creatinine, Blood Urea, and eGFR to evaluate kidney filtration health.',
    labs_card5_title: 'Liver (LFT)',
    labs_card5_sub: 'Hepatic Function',
    labs_card5_desc: 'Extracts ALT (SGPT), AST (SGOT), Total Bilirubin, and Albumin for hepatic status.',

    // Fusion Section
    fus_eyebrow: 'THE PRIMARY USP',
    fus_title: 'How the Fusion Engine Works',
    fus_desc: 'When multiple health files are submitted, MedFusion AI feeds each verified finding into our Multimodal Fusion Engine.',
    fus_p1_title: 'Overall Findings',
    fus_p1_desc: 'Synthesizes active imaging probabilities and blood statuses into one score.',
    fus_p2_title: 'Important Abnormalities',
    fus_p2_desc: 'Surfaces out-of-range lab metrics and abnormal imaging flags requiring attention.',
    fus_p3_title: 'Cross-Report Observations',
    fus_p3_desc: 'Example: Correlating high WBC counts with chest radiograph pneumonia indications.',
    fus_arch_title: 'Fusion Architecture',
    fus_box1_lbl: 'Available Inputs',
    fus_box1_val: 'Chest X-ray + CBC',
    fus_box2_lbl: 'Computed Status',
    fus_box2_val: 'Moderate Attention',
    fus_box3_title: 'AI-Assisted Health Summary Output',
    fus_box3_desc: '"Multiple findings were identified across uploaded inputs. Subtle density in the right lung field corresponds with elevated leukocytosis (WBC 11.8 x10³/µL). Recommend consulting your physician for evaluation."',
    fus_note: '* Note: If an unneeded module was not uploaded, no blank cards will be shown on the results screen.',

    // Features Section
    feat_eyebrow: 'FIVE STANDOUT CAPABILITIES',
    feat_title: 'Built for Real Patient Utility',
    feat_desc: 'Carefully engineered features defined in the project specification.',
    feat_f1_title: 'Multimodal Summary',
    feat_f1_desc: 'Brings multiple medical images and blood panels together into one clear summary.',
    feat_f2_title: 'Explainable Results',
    feat_f2_desc: 'Plain-language explanations detailing what was flagged and why it exceeds normal limits.',
    feat_f3_title: 'Health Timeline',
    feat_f3_desc: 'Review historical analyses and monitor blood trends and imaging milestones over time.',
    feat_f4_title: 'Next-Step Guidance',
    feat_f4_desc: 'General educational context to empower informed follow-up conversations with doctors.',
    feat_f5_title: 'Structured PDF',
    feat_f5_desc: 'Instantly generate a structured, print-ready PDF containing all findings and dates.',

    // Safety & Disclaimer
    safety_eyebrow: 'SAFETY & CLINICAL BOUNDARIES',
    safety_title: 'Strict Safety & Language Compliance',
    safety_desc: 'MedFusion AI strictly utilizes non-definitive language such as <em>"AI-assisted finding"</em>, <em>"outside configured reference range"</em>, and <em>"requires attention"</em>. It does not provide definitive medical diagnoses.',
    safety_box_title: 'WHAT MEDFUSION AI IS NOT (PER SPECIFICATION)',
    safety_not_doctor: 'Not a doctor replacement',
    safety_not_diagnosis: 'Not a definitive diagnosis',
    safety_not_prescription: 'Not a prescription system',
    safety_not_emergency: 'Not emergency care',
    safety_not_hospital: 'Not hospital software',
    safety_not_portal: 'Not a doctor portal',

    // Bottom CTA
    cta_title: 'Ready to Get Your Multimodal Summary?',
    cta_desc: 'Sign in or create your account to upload medical images and laboratory reports into your private health intelligence workspace.',
    cta_get_started: 'Get Started Free',
    cta_create_acc: 'Create Free Account →',
    cta_open_dash: 'Go to Your Dashboard →',
    footer_summary: 'Single-Port Architecture · SQLite · Multimodal Vision + OCR',
    footer_rights: '© 2026 MedFusion AI. All rights reserved.',

    // Modal & Nav
    modal_login_title: 'Login to MedFusion AI',
    modal_login_sub: 'Access Your Health Workspace',
    modal_demo_title: 'Quick Demo Account',
    modal_use_demo: 'Use Demo',
    modal_email_lbl: 'Email Address',
    modal_pwd_lbl: 'Password',
    modal_signin_btn: 'Sign In & Open Dashboard',
    modal_new_patient: 'New patient?',
    modal_create_acc: 'Create an account',
    nav_language: 'Language',

    // New Analysis
    new_analysis_eyebrow: 'ANALYSIS CONFIGURATION',
    new_analysis_title: 'Select Diagnostic Modules',
    new_analysis_desc: 'Choose medical scans and laboratory test panels to correlate in your multimodal health review.',
    new_analysis_continue: 'Continue to Upload',
    new_analysis_select_all: 'Select All',
    new_analysis_deselect_all: 'Deselect All',
    new_analysis_img_header: 'Image Analysis Modules',
    new_analysis_lab_header: 'Laboratory Blood & Metabolic Panels',
    new_analysis_hint: 'Multi-Module Advantage: MedFusion AI achieves higher diagnostic correlation when both imaging scans and laboratory panels are selected simultaneously.',

    // Upload
    upload_eyebrow: 'DOCUMENT INGESTION',
    upload_title: 'Upload Scans & Lab Documents',
    upload_desc: 'Attach medical imaging files and laboratory test reports for your active modules.',
    upload_modify_modules: '← Modify Modules',
    upload_start_btn: 'Start AI Fusion',
    upload_drag_label: 'Drag & drop your file here, or click to browse',
    upload_drag_hint: 'Max 25 MB per file',
    upload_attached_label: 'File attached. Click or drag to replace or add more.',
    upload_remove: 'Remove',
    upload_security_note: 'Local Security Guarantee: All medical images and lab reports are processed on your dedicated single-port local server.',

    // Processing
    proc_eyebrow: 'MULTIMODAL PIPELINE',
    proc_title: 'Synthesizing Multimodal Records',
    proc_desc: 'Processing medical imaging neural networks, OCR document extractors, and the Multimodal Fusion Engine.',
    proc_skip_btn: 'Skip to Results →',
    proc_exec_label: 'Pipeline Execution',
    proc_instant_finish: 'Complete now →',
    proc_step1_badge: 'Secure Ingestion',
    proc_step1_title: 'Document Ingestion',
    proc_step1_desc: 'Medical images and laboratory PDF files validated and staged in isolated session memory.',
    proc_step2_badge: 'Pre-processing',
    proc_step2_title: 'Image Standardization',
    proc_step2_desc: 'Grayscale normalization, CLAHE contrast adjustment, and affine calibration applied.',
    proc_step3_badge: 'Deep Learning',
    proc_step3_title: 'AI / CNN & OCR Extraction',
    proc_step3_desc: 'Deep models infer radiograph features; OCR parses laboratory blood test biomarkers.',
    proc_step4_badge: 'Reference Ranges',
    proc_step4_title: 'Clinical Calibration',
    proc_step4_desc: 'Extracted parameters compared against standard clinical reference boundaries.',
    proc_step5_badge: 'Fusion Core',
    proc_step5_title: 'Multimodal Fusion Engine',
    proc_step5_desc: 'Cross-modal correlation checks identify relationships between lab levels and scan markers.',
    proc_step6_badge: 'Synthesis',
    proc_step6_title: 'Health Summary Assembly',
    proc_step6_desc: 'Aggregated diagnostic observations structured into interactive cards and PDF generation.',

    // Results
    res_eyebrow: 'MULTIMODAL HEALTH INTELLIGENCE',
    res_title: 'Analysis Results & Health Summary',
    res_desc: 'Correlated AI findings synthesized across imaging scans and laboratory blood test panels.',
    res_toggle_report: 'Toggle Detailed Text Report',
    res_download_pdf: 'Download PDF Report',
    res_fusion_eyebrow: 'MULTIMODAL FUSION ENGINE',
    res_fusion_title: 'Holistic Diagnostic Overview',
    res_fusion_desc: 'Correlated health assessment across all processed imaging scans and laboratory panels.',
    res_findings: 'Synthesized Findings',
    res_abnormalities: 'Identified Abnormalities',
    res_observations: 'Cross-Report Observations',
    res_key_findings: 'KEY CLINICAL OBSERVATIONS',
    res_next_steps: 'RECOMMENDED NEXT STEPS',
    res_disclaimer_title: 'Clinical Disclaimer:',
    res_disclaimer_desc: 'MedFusion AI is an AI-assisted informational intelligence tool designed to organize patient health summaries. It does not replace independent clinical evaluation or licensed medical treatment decisions.',
    res_status_normal: 'Normal / Low Risk',
    res_status_review: 'Review Recommended',

    // History
    hist_eyebrow: 'PATIENT TIMELINE',
    hist_title: 'Analysis History & Past Reports',
    hist_desc: 'Historical log of all medical imaging scans, blood tests, and multimodal summaries.',
    hist_empty_title: 'No Analysis Records Found Yet',
    hist_empty_desc: 'Your uploaded test results, AI diagnostic observations, and clinical summaries will appear here in chronological order.',
    hist_first_run: 'Run Your First Analysis →',

    // Profile
    prof_eyebrow: 'PATIENT ACCOUNT',
    prof_title: 'Personal Profile & Credentials',
    prof_desc: 'Manage your personal identification details, contact email, and clinical session notes.',
    prof_full_name: 'Full Name',
    prof_email: 'Email Address',
    prof_notes: 'Personal Health Notes / Pre-existing Conditions',
    prof_save: 'Save Profile Changes',
    prof_discard: 'Discard Changes',

    // Settings
    sett_eyebrow: 'APPLICATION PREFERENCES',
    sett_title: 'System Settings & Privacy',
    sett_desc: 'Configure analysis execution timeouts, notifications, and security options.',
    sett_save: 'Save Preferences',
    sett_reset: 'Reset Defaults',
    sett_lang_label: 'Interface Language',
    sett_lang_sub: 'Preferred display language for reports and workspace',
    sett_timeout_label: 'Analysis Engine Timeout',
    sett_timeout_sub: 'Maximum processing wait time',
    sett_email_label: 'Email Health Summaries',
    sett_email_sub: 'Send PDF download link upon analysis completion'
  },

  hi: {
    // Brand & General
    app_name: 'मेडफ्यूजन एआई',
    app_tagline: 'स्वास्थ्य बुद्धिमत्ता',
    app_subtitle: 'एआई-संचालित मल्टीमॉडल व्यक्तिगत स्वास्थ्य बुद्धिमत्ता मंच',
    back_to_home: '← मुख्य पृष्ठ पर वापस जाएं',
    close: 'बंद करें',
    save_changes: 'परिवर्तन सहेजें',
    cancel: 'रद्द करें',
    sign_out: 'साइन आउट',
    loading: 'लोड हो रहा है...',

    // Navigation
    nav_dashboard: 'डैशबोर्ड',
    nav_new_analysis: 'नया विश्लेषण',
    nav_history: 'इतिहास',
    nav_profile: 'प्रोफ़ाइल',
    nav_settings: 'सेटिंग्स',

    // Dashboard
    dash_welcome_back: 'वापसी पर स्वागत है',
    dash_overview_suffix: 'यहाँ आपका व्यक्तिगत स्वास्थ्य अवलोकन है।',
    dash_greeting_morning: 'शुभ प्रभात',
    dash_greeting_afternoon: 'शुभ दोपहर',
    dash_greeting_evening: 'शुभ संध्या',
    dash_title: 'आपका व्यक्तिगत स्वास्थ्य विश्लेषण, एक ही स्थान पर।',
    dash_desc: 'आपके अपलोड किए गए स्वास्थ्य मॉड्यूलों से संश्लेषित एआई-सहायता प्राप्त नैदानिक सारांश रिपोर्ट।',
    dash_btn_new: 'नया विश्लेषण शुरू करें',
    stat_total_analyses: 'कुल विश्लेषण',
    stat_last_analysis: 'अंतिम विश्लेषण',
    stat_reports_saved: 'सहेजी गई रिपोर्ट',
    stat_attention_required: 'ध्यान देने योग्य',
    stat_no_tests: 'अभी कोई परीक्षण नहीं',
    dash_recent_title: 'विश्लेषण गतिविधि',
    dash_recent_subtitle: 'हालिया विश्लेषण',
    dash_view_all: 'सभी देखें →',
    dash_modules_available: 'उपलब्ध नैदानिक मॉड्यूल',
    dash_modules_sub: '8 विशेष एआई विश्लेषक और प्रयोगशाला पैनल',
    dash_loading_activity: 'आपके स्वास्थ्य विश्लेषण लोड हो रहे हैं...',
    dash_timeline_subtitle: 'व्यक्तिगत स्वास्थ्य कालक्रम',
    dash_timeline_title: 'प्रमुख उपलब्धियां',
    dash_timeline_date: 'व्यक्तिगत मील के पत्थर',
    dash_timeline_empty: 'अभी तक कोई स्वास्थ्य मील का पत्थर दर्ज नहीं किया गया है। अपनी टाइमलाइन ट्रैक करने के लिए अपना पहला विश्लेषण चलाएं।',
    dash_timeline_item_title: 'स्वास्थ्य विश्लेषण पूरा हुआ',
    dash_timeline_item_desc: 'अपलोड किए गए चिकित्सा परीक्षण का एआई नैदानिक मूल्यांकन पूरा हुआ।',
    dash_quick_actions: 'त्वरित क्रिया',
    dash_quick_new: 'नया विश्लेषण',
    dash_quick_history: 'इतिहास देखें',
    dash_quick_reports: 'सहेजी गई रिपोर्ट',
    dash_quick_profile: 'प्रोफ़ाइल',
    dash_ai_badge: 'एआई-सहायता प्राप्त बुद्धिमत्ता',
    dash_ai_title: 'आपके स्वास्थ्य विश्लेषण के लिए तैयार',
    dash_ai_body: 'एकीकृत एआई स्वास्थ्य सारांश प्राप्त करने के लिए छाती के एक्स-रे, त्वचा चित्र, या रक्त परीक्षण रिपोर्ट अपलोड करें।',
    dash_ai_disclaimer: 'यह एक एआई-सहायता प्राप्त सूचनात्मक समीक्षा है और नैदानिक निदान का विकल्प नहीं है।',
    dash_ai_btn: 'नवीनतम विश्लेषण देखें →',
    dash_badge_review: 'समीक्षा आवश्यक',
    dash_badge_normal: 'सामान्य',
    dash_self_analysis: 'रोगी का स्वयं-विश्लेषण',
    dash_btn_view: 'देखें',

    // Home Page Navigation
    home_nav_about: 'परिचय',
    home_nav_workflow: 'कार्यप्रणाली',
    home_nav_imaging: 'मेडिकल इमेजिंग',
    home_nav_labs: 'लैब रिपोर्ट',
    home_nav_fusion: 'फ़्यूज़न इंजन',
    home_nav_features: 'विशेषताएं',
    home_nav_safety: 'सुरक्षा',
    home_nav_login: 'लॉगिन',
    home_nav_get_started: 'शुरू करें',
    home_nav_free: 'निःशुल्क शुरू करें',

    // Hero Section
    hero_badge: 'मल्टीमॉडल व्यक्तिगत स्वास्थ्य बुद्धिमत्ता',
    hero_title_1: 'सब कुछ अपलोड करें।',
    hero_title_2: 'एक समग्र स्वास्थ्य सारांश प्राप्त करें।',
    hero_desc: 'मेडफ्यूजन एआई एक रोगी-केंद्रित स्वास्थ्य प्रणाली है जो मेडिकल इमेजिंग (एक्स-रे, त्वचा फोटो) और प्रयोगशाला रक्त रिपोर्ट को एक समझने योग्य, स्पष्ट स्वास्थ्य सारांश में एकीकृत करती है।',
    hero_login_btn: 'डैशबोर्ड में लॉगिन करें',
    hero_create_btn: 'निःशुल्क खाता बनाएं',
    hero_dashboard_btn: 'मेरा डैशबोर्ड खोलें',
    hero_start_new: '+ नया विश्लेषण शुरू करें',

    // Key Stats
    stat_3_modalities: '3 मोडैलिटीज',
    stat_3_desc: 'छाती, हड्डी और त्वचा एआई',
    stat_5_labs: '5 लैब पैनल',
    stat_5_desc: 'सीबीसी, शुगर, लिपिड, केएफटी, एलएफटी',
    stat_1_file: '1 एकीकृत फ़ाइल',
    stat_1_desc: 'नैदानिक पीडीएफ निर्यात',

    // Demo Mockup
    mockup_badge: 'इंटरैक्टिव प्लेटफ़ॉर्म डेमो',
    mockup_title: 'मल्टीमॉडल स्वास्थ्य मूल्यांकन पूर्वावलोकन',
    mockup_sample_tag: 'नमूना प्रदर्शन',
    mockup_mode_label: 'मोड',
    mockup_mode_val: 'नमूना केस',
    mockup_data_label: 'रोगी डेटा',
    mockup_data_val: 'अनाम/सुरक्षित',
    mockup_format_label: 'रिपोर्ट प्रारूप',
    mockup_format_val: 'पीडीएफ तैयार',
    mockup_flag_label: 'चिन्हांकित निष्कर्ष',
    mockup_flag_val: '1 निष्कर्ष',
    mockup_fusion_title: 'मल्टीमॉडल स्वास्थ्य संलयन',
    mockup_fusion_badge: 'सहसंबंधित निष्कर्ष',
    mockup_fusion_desc: 'बढ़े हुए डब्ल्यूबीसी के साथ फेफड़ों की छाया सहसंबंधित। डॉक्टर की समीक्षा अनुशंसित।',
    mockup_chest_tag: 'छाती का एक्स-रे',
    mockup_chest_title: 'निमोनिया मूल्यांकन',
    mockup_chest_desc: 'निचले दाहिने फेफड़े में सूक्ष्म घनत्व · ResNet-18',
    mockup_lab_tag: 'प्रयोगशाला ओसीआर',
    mockup_lab_title: 'कम्प्लीट ब्लड काउंट (सीबीसी)',
    mockup_lab_desc: 'डब्ल्यूबीसी: <span class="text-rose-400 font-semibold">11.8 उच्च</span> &bull; हीमोग्लोबिन: <span class="text-rose-400 font-semibold">11.2 कम</span>',
    mockup_lab_status: 'मूल्यांकित',
    mockup_scope: 'व्यक्तिगत रोगी दायरा · एकल पोर्ट',
    mockup_open_dash: 'पूरा डैशबोर्ड खोलें →',

    // About Section
    about_eyebrow: 'मेडफ्यूजन एआई के बारे में',
    about_title: '8 अलग उपकरण नहीं। एक एकीकृत मल्टीमॉडल फ़्यूज़न इंजन।',
    about_desc: 'स्वास्थ्य संबंधी जानकारी पारंपरिक रूप से अलग-अलग दस्तावेजों में बिखरी होती है — यहाँ एक एक्स-रे, वहाँ एक रक्त रिपोर्ट। मेडफ्यूजन एआई इसे <strong>मल्टीमॉडल स्वास्थ्य बुद्धिमत्ता</strong> के साथ हल करता है।',
    about_card1_title: 'एकल व्यक्ति का दायरा',
    about_card1_desc: 'विशेष रूप से व्यक्तिगत मरीज के लिए डिज़ाइन किया गया। जटिल अस्पताल प्रणालियों के बिना अपनी स्वास्थ्य जानकारी अपलोड करें, निष्कर्ष देखें और रिपोर्ट डाउनलोड करें।',
    about_card2_title: 'क्रॉस-रिपोर्ट सहसंबंध',
    about_card2_desc: 'मेडिकल इमेज और लैब रक्त पैनलों के निष्कर्षों को चिकित्सकीय रूप से सत्यापित टेम्पलेट्स और नियम इंजनों द्वारा जोड़ा जाता है — कभी भी निराधार निष्कर्ष नहीं निकाले जाते।',
    about_card3_title: 'गतिशील कार्ड प्रदर्शन',
    about_card3_desc: 'यदि आप केवल छाती का एक्स-रे और सीबीसी रिपोर्ट अपलोड करते हैं, तो केवल वही कार्ड प्रदर्शित होते हैं। बिना किसी खाली कार्ड या भ्रम के।',

    // Workflow Section
    wf_eyebrow: 'रोगी की यात्रा',
    wf_title: 'मेडफ्यूजन एआई कैसे काम करता है',
    wf_sub: 'अपलोड → विश्लेषण → समझ → संलयन → संयुक्त सारांश → रिपोर्ट सहेजें।',
    wf_step1_title: 'सब कुछ अपलोड करें',
    wf_step1_desc: 'एक एकीकृत अपलोड प्रक्रिया में छाती/हड्डी के एक्स-रे, त्वचा फोटो या पीडीएफ/इमेज रक्त रिपोर्ट डालें।',
    wf_step2_title: 'एआई और ओसीआर विश्लेषण',
    wf_step2_desc: 'डीप सीएनएन मेडिकल इमेजिंग का वर्गीकरण करते हैं; ओसीआर डिजिटल लैब मापदंडों को निकालता है।',
    wf_step3_title: 'नियम इंजन मूल्यांकन',
    wf_step3_desc: 'रक्त मापदंडों की तुलना नैदानिक संदर्भ श्रेणियों से की जाती है और टैग किया जाता है: कम, सामान्य या उच्च।',
    wf_step4_title: 'मल्टीमॉडल संलयन',
    wf_step4_desc: 'फ़्यूज़न इंजन कई स्रोतों की असामान्यताओं को एक संश्लेषित स्वास्थ्य स्थिति में जोड़ता है।',
    wf_step5_title: 'निर्यात और कालक्रम',
    wf_step5_desc: 'अपने स्वास्थ्य सारांश की समीक्षा करें, एक प्रारूपित पीडीएफ डाउनलोड करें और अपनी टाइमलाइन पर ऐतिहासिक उपलब्धियों को ट्रैक करें।',

    // Imaging Section
    img_eyebrow: 'डीप लर्निंग विज़न',
    img_title: '3 मेडिकल इमेजिंग मॉड्यूल',
    img_desc: 'मानक मेडिकल इमेजिंग डेटासेट पर प्रशिक्षित ट्रांसफर लर्निंग मॉडल।',
    img_card1_tag: 'ResNet-18',
    img_card1_title: 'छाती का एक्स-रे',
    img_card1_desc: 'निमोनिया संकेतकों बनाम स्पष्ट सामान्य निष्कर्षों के लिए पल्मोनरी रेडियोग्राफ का मूल्यांकन करता है।',
    img_card1_meta1: 'डेटासेट: ChestX-ray14',
    img_card1_meta2: 'लक्ष्य: सामान्य बनाम निमोनिया का पता लगाना',
    img_card1_meta3: 'आउटपुट: प्रायिकता स्कोर और फेफड़ों की स्थिति',
    img_card2_tag: 'EfficientNet-B0',
    img_card2_title: 'हड्डी का एक्स-रे',
    img_card2_desc: 'फ्रैक्चर और संरचनात्मक हड्डी कॉर्टिकल निरंतरता के लिए मस्कुलोस्केलेटल रेडियोग्राफ की जांच करता है।',
    img_card2_meta1: 'डेटासेट: MURA (मस्कुलोस्केलेटल रेडियोग्राफ)',
    img_card2_meta2: 'क्षेत्र: हाथ, कलाई, कोहनी, अग्रभाग, कंधा',
    img_card2_meta3: 'आउटपुट: फ्रैक्चर बनाम बिना फ्रैक्चर स्क्रीनिंग',
    img_card3_tag: 'EfficientNet-B0',
    img_card3_title: 'त्वचा / तिल की छवि',
    img_card3_desc: 'समर्थित घाव वर्गीकरण श्रेणियों के लिए त्वचा की तस्वीरों और डर्मोस्कोपी का विश्लेषण करता है।',
    img_card3_meta1: 'डेटासेट: HAM10000 / ISIC',
    img_card3_meta2: 'श्रेणियां: मेलेनोसाइटिक नेवी, सौम्य बनाम जोखिम स्क्रीनिंग',
    img_card3_meta3: 'आउटपुट: वर्गीकरण प्रायिकताएं और सलाह',

    // Labs Section
    labs_eyebrow: 'ओसीआर और नियम इंजन',
    labs_title: '5 प्रयोगशाला रिपोर्ट पैनल',
    labs_desc: 'प्रत्येक लैब प्रकार के लिए सीएनएन आवश्यक नहीं है। इसके बजाय, मेडफ्यूजन एआई <strong>ओसीआर → प्रकार पहचान → पैरामीटर निष्कर्षण → नियम इंजन</strong> वास्तुकला का उपयोग करता है।',
    labs_card1_title: 'सीबीसी पैनल',
    labs_card1_sub: 'कम्प्लीट ब्लड काउंट',
    labs_card1_desc: 'हीमोग्लोबिन, डब्ल्यूबीसी, आरबीसी, प्लेटलेट्स और हेमाटोक्रिट निकालता है। एनीमिया या संक्रमण को चिह्नित करता है।',
    labs_card2_title: 'डायबिटीज पैनल',
    labs_card2_sub: 'ग्लाइसेमिक प्रोफाइल',
    labs_card2_desc: 'फास्टिंग ब्लड शुगर (FBS), पोस्टप्रैन्डियल ब्लड शुगर (PPBS) और HbA1c मानों का मूल्यांकन करता है।',
    labs_card3_title: 'लिपिड प्रोफाइल',
    labs_card3_sub: 'हृदय जोखिम',
    labs_card3_desc: 'कुल कोलेस्ट्रॉल, एचडीएल (अच्छा), एलडीएल (खराब) और ट्राइग्लिसराइड्स की सीमाओं के विरुद्ध जांच करता है।',
    labs_card4_title: 'किडनी (केएफटी)',
    labs_card4_sub: 'गुर्दा कार्य',
    labs_card4_desc: 'गुर्दे के निस्पंदन स्वास्थ्य का मूल्यांकन करने के लिए सीरम क्रिएटिनिन, रक्त यूरिया और ईजीएफआर की जांच करता है।',
    labs_card5_title: 'लिवर (एलएफटी)',
    labs_card5_sub: 'यकृत कार्य',
    labs_card5_desc: 'यकृत की स्थिति के लिए एएलटी (एसजीपीटी), एएसटी (एसजीओटी), कुल बिलीरुबिन और एल्ब्यूमिन निकालता है।',

    // Fusion Section
    fus_eyebrow: 'प्राथमिक विशिष्टता',
    fus_title: 'फ़्यूज़न इंजन कैसे काम करता है',
    fus_desc: 'जब कई स्वास्थ्य फाइलें सबमिट की जाती हैं, तो मेडफ्यूजन एआई प्रत्येक सत्यापित निष्कर्ष को हमारे मल्टीमॉडल फ़्यूज़न इंजन में प्रस्तुत करता है।',
    fus_p1_title: 'समग्र निष्कर्ष',
    fus_p1_desc: 'सक्रिय इमेजिंग प्रायिकताओं और रक्त स्थितियों को एक स्कोर में संश्लेषित करता है।',
    fus_p2_title: 'महत्वपूर्ण असामान्यताएं',
    fus_p2_desc: 'सीमा से बाहर लैब मापदंडों और असामान्य इमेजिंग संकेतों को सामने लाता है जिन पर ध्यान देने की आवश्यकता है।',
    fus_p3_title: 'क्रॉस-रिपोर्ट अवलोकन',
    fus_p3_desc: 'उदाहरण: छाती के रेडियोग्राफ निमोनिया के संकेतों के साथ उच्च डब्ल्यूबीसी गणना का सहसंबंध।',
    fus_arch_title: 'फ़्यूज़न आर्किटेक्चर',
    fus_box1_lbl: 'उपलब्ध इनपुट',
    fus_box1_val: 'छाती का एक्स-रे + सीबीसी',
    fus_box2_lbl: 'परिकलित स्थिति',
    fus_box2_val: 'मध्यम ध्यान आवश्यक',
    fus_box3_title: 'एआई-सहायता प्राप्त स्वास्थ्य सारांश आउटपुट',
    fus_box3_desc: '"अपलोड किए गए इनपुट में कई निष्कर्षों की पहचान की गई। दाहिने फेफड़े के क्षेत्र में सूक्ष्म घनत्व बढ़े हुए ल्यूकोसाइटोसिस (WBC 11.8 x10³/µL) से मेल खाता है। मूल्यांकन के लिए अपने चिकित्सक से परामर्श करने की अनुशंसा की जाती है।"',
    fus_note: '* नोट: यदि किसी अप्रयुक्त मॉड्यूल को अपलोड नहीं किया गया था, तो परिणाम स्क्रीन पर कोई खाली कार्ड नहीं दिखाया जाएगा।',

    // Features Section
    feat_eyebrow: 'पांच उत्कृष्ट क्षमताएं',
    feat_title: 'रोगी की वास्तविक उपयोगिता के लिए निर्मित',
    feat_desc: 'परियोजना विनिर्देश में परिभाषित सावधानीपूर्वक तैयार की गई विशेषताएं।',
    feat_f1_title: 'मल्टीमॉडल सारांश',
    feat_f1_desc: 'कई मेडिकल छवियों और रक्त पैनलों को एक स्पष्ट सारांश में एक साथ लाता है।',
    feat_f2_title: 'व्याख्या योग्य परिणाम',
    feat_f2_desc: 'सरल भाषा में व्याख्या कि क्या चिह्नित किया गया था और यह सामान्य सीमाओं से अधिक क्यों है।',
    feat_f3_title: 'स्वास्थ्य कालक्रम',
    feat_f3_desc: 'ऐतिहासिक विश्लेषणों की समीक्षा करें और समय के साथ रक्त प्रवृत्तियों और इमेजिंग मील के पत्थरों की निगरानी करें।',
    feat_f4_title: 'अगले कदम का मार्गदर्शन',
    feat_f4_desc: 'डॉक्टरों के साथ सूचित अनुवर्ती बातचीत को सशक्त बनाने के लिए सामान्य शैक्षिक संदर्भ।',
    feat_f5_title: 'संरचित पीडीएफ',
    feat_f5_desc: 'सभी निष्कर्षों और तिथियों से युक्त एक संरचित, प्रिंट-तैयार पीडीएफ तुरंत बनाएं।',

    // Safety & Disclaimer
    safety_eyebrow: 'सुरक्षा और नैदानिक सीमाएं',
    safety_title: 'सख्त सुरक्षा और भाषा अनुपालन',
    safety_desc: 'मेडफ्यूजन एआई केवल गैर-निर्णायक भाषा का उपयोग करता है जैसे कि <em>"एआई-सहायता प्राप्त निष्कर्ष"</em>, <em>"कॉन्फ़िगर संदर्भ सीमा से बाहर"</em>, और <em>"ध्यान देने की आवश्यकता है"</em>। यह निश्चित नैदानिक निदान प्रदान नहीं करता है।',
    safety_box_title: 'मेडफ्यूजन एआई क्या नहीं है (विशिष्टता अनुसार)',
    safety_not_doctor: 'डॉक्टर का विकल्प नहीं',
    safety_not_diagnosis: 'निश्चित चिकित्सा निदान नहीं',
    safety_not_prescription: 'दवा पर्ची प्रणाली नहीं',
    safety_not_emergency: 'आपातकालीन चिकित्सा देखभाल नहीं',
    safety_not_hospital: 'अस्पताल प्रबंधन सॉफ्टवेयर नहीं',
    safety_not_portal: 'डॉक्टर पोर्टल नहीं',

    // Bottom CTA
    cta_title: 'क्या आप अपना मल्टीमॉडल सारांश प्राप्त करने के लिए तैयार हैं?',
    cta_desc: 'अपने निजी स्वास्थ्य बुद्धिमत्ता वर्कस्पेस में मेडिकल इमेज और लैब रिपोर्ट अपलोड करने के लिए साइन इन करें या अपना खाता बनाएं।',
    cta_get_started: 'निःशुल्क शुरू करें',
    cta_create_acc: 'निःशुल्क खाता बनाएं →',
    cta_open_dash: 'अपने डैशबोर्ड पर जाएं →',
    footer_summary: 'एकल-पोर्ट आर्किटेक्चर · SQLite · मल्टीमॉडल विज़न + ओसीआर',
    footer_rights: '© 2026 मेडफ्यूजन एआई। सर्वाधिकार सुरक्षित।',

    // Modal & Nav
    modal_login_title: 'मेडफ्यूजन एआई में लॉगिन करें',
    modal_login_sub: 'अपने स्वास्थ्य वर्कस्पेस तक पहुंचें',
    modal_demo_title: 'त्वरित डेमो खाता',
    modal_use_demo: 'डेमो उपयोग करें',
    modal_email_lbl: 'ईमेल पता',
    modal_pwd_lbl: 'पासवर्ड',
    modal_signin_btn: 'साइन इन करें और डैशबोर्ड खोलें',
    modal_new_patient: 'नया रोगी?',
    modal_create_acc: 'खाता बनाएं',
    nav_language: 'भाषा',

    // New Analysis
    new_analysis_eyebrow: 'विश्लेषण विन्यास',
    new_analysis_title: 'नैदानिक मॉड्यूल चुनें',
    new_analysis_desc: 'अपनी मल्टीमॉडल स्वास्थ्य समीक्षा में सहसंबंधित करने के लिए मेडिकल स्कैन और प्रयोगशाला परीक्षण पैनल चुनें।',
    new_analysis_continue: 'अपलोड पर आगे बढ़ें',
    new_analysis_select_all: 'सभी चुनें',
    new_analysis_deselect_all: 'सभी हटाएं',
    new_analysis_img_header: 'इमेज विश्लेषण मॉड्यूल',
    new_analysis_lab_header: 'प्रयोगशाला रक्त व चयापचय पैनल',
    new_analysis_hint: 'मल्टी-मॉड्यूल लाभ: जब इमेजिंग स्कैन और प्रयोगशाला पैनल दोनों एक साथ चुने जाते हैं, तो मेडफ्यूजन एआई उच्च नैदानिक सहसंबंध प्रदान करता है।',

    // Upload
    upload_eyebrow: 'दस्तावेज़ संचयन',
    upload_title: 'स्कैन और लैब दस्तावेज़ अपलोड करें',
    upload_desc: 'अपने सक्रिय मॉड्यूल के लिए मेडिकल इमेज फाइलें और प्रयोगशाला परीक्षण रिपोर्ट संलग्न करें।',
    upload_modify_modules: '← मॉड्यूल बदलें',
    upload_start_btn: 'एआई संलयन शुरू करें',
    upload_drag_label: 'फ़ाइल यहाँ खींचें और छोड़ें, या ब्राउज़ करने के लिए क्लिक करें',
    upload_drag_hint: 'अधिकतम 25 एमबी प्रति फ़ाइल',
    upload_attached_label: 'फ़ाइल संलग्न है। बदलने या जोड़ने के लिए क्लिक करें।',
    upload_remove: 'हटाएं',
    upload_security_note: 'स्थानीय सुरक्षा गारंटी: सभी मेडिकल इमेज और लैब रिपोर्ट आपके समर्पित स्थानीय सर्वर पर सुरक्षित रूप से संसाधित होती हैं।',

    // Processing
    proc_eyebrow: 'मल्टीमॉडल पाइपलाइन',
    proc_title: 'मल्टीमॉडल रिकॉर्ड्स का संश्लेषण',
    proc_desc: 'मेडिकल इमेजिंग न्यूरल नेटवर्क, ओसीआर दस्तावेज़ निष्कर्षण और मल्टीमॉडल फ़्यूज़न इंजन प्रसंस्करण जारी है।',
    proc_skip_btn: 'परिणामों पर जाएं →',
    proc_exec_label: 'पाइपलाइन निष्पादन',
    proc_instant_finish: 'अभी पूर्ण करें →',
    proc_step1_badge: 'सुरक्षित संचयन',
    proc_step1_title: 'दस्तावेज़ संचयन',
    proc_step1_desc: 'मेडिकल इमेज और प्रयोगशाला पीडीएफ फाइलें मान्य और सुरक्षित सत्र में तैयार की गईं।',
    proc_step2_badge: 'पूर्व-प्रसंस्करण',
    proc_step2_title: 'इमेज मानकीकरण',
    proc_step2_desc: 'ग्रेस्केल सामान्यीकरण, कंट्रास्ट समायोजन और अंशांकन लागू किया गया।',
    proc_step3_badge: 'डीप लर्निंग',
    proc_step3_title: 'एआई / सीएनएन और ओसीआर निष्कर्षण',
    proc_step3_desc: 'डीप मॉडल रेडियोग्राफ की व्याख्या करते हैं; ओसीआर रक्त परीक्षण बायोमार्कर निकालता है।',
    proc_step4_badge: 'संदर्भ श्रेणियां',
    proc_step4_title: 'नैदानिक अंशांकन',
    proc_step4_desc: 'निकाले गए मापदंडों की तुलना मानक नैदानिक संदर्भ सीमाओं से की गई।',
    proc_step5_badge: 'फ़्यूज़न कोर',
    proc_step5_title: 'मल्टीमॉडल फ़्यूज़न इंजन',
    proc_step5_desc: 'क्रॉस-मॉडल सहसंबंध जांच लैब स्तरों और स्कैन मार्करों के बीच संबंधों की पहचान करती है।',
    proc_step6_badge: 'संश्लेषण',
    proc_step6_title: 'स्वास्थ्य सारांश संयोजन',
    proc_step6_desc: 'एकत्रित नैदानिक अवलोकन इंटरैक्टिव कार्ड और पीडीएफ रिपोर्ट में व्यवस्थित किए गए।',

    // Results
    res_eyebrow: 'मल्टीमॉडल स्वास्थ्य बुद्धिमत्ता',
    res_title: 'विश्लेषण परिणाम और स्वास्थ्य सारांश',
    res_desc: 'इमेजिंग स्कैन और रक्त परीक्षण प्रयोगशाला पैनलों में सहसंबंधित एआई निष्कर्ष।',
    res_toggle_report: 'विस्तृत पाठ्य रिपोर्ट देखें/छिपाएं',
    res_download_pdf: 'पीडीएफ रिपोर्ट डाउनलोड करें',
    res_fusion_eyebrow: 'मल्टीमॉडल फ़्यूज़न इंजन',
    res_fusion_title: 'समग्र नैदानिक अवलोकन',
    res_fusion_desc: 'सभी संसाधित इमेजिंग स्कैन और प्रयोगशाला पैनलों में सहसंबंधित स्वास्थ्य मूल्यांकन।',
    res_findings: 'संश्लेषित निष्कर्ष',
    res_abnormalities: 'पहचाने गए असामान्य लक्षण',
    res_observations: 'क्रॉस-रिपोर्ट अवलोकन',
    res_key_findings: 'मुख्य नैदानिक अवलोकन',
    res_next_steps: 'अनुशंसित अगले कदम',
    res_disclaimer_title: 'नैदानिक अस्वीकरण:',
    res_disclaimer_desc: 'मेडफ्यूजन एआई एक एआई-सहायता प्राप्त सूचनात्मक स्वास्थ्य उपकरण है। यह पेशेवर डॉक्टर के परामर्श या निदान का विकल्प नहीं है।',
    res_status_normal: 'सामान्य / कम जोखिम',
    res_status_review: 'समीक्षा आवश्यक',

    // History
    hist_eyebrow: 'रोगी की समयरेखा',
    hist_title: 'विश्लेषण इतिहास और पिछली रिपोर्ट',
    hist_desc: 'सभी मेडिकल इमेजिंग स्कैन, रक्त परीक्षण और मल्टीमॉडल सारांशों का ऐतिहासिक लॉग।',
    hist_empty_title: 'अभी तक कोई विश्लेषण रिकॉर्ड नहीं मिला',
    hist_empty_desc: 'आपके अपलोड किए गए परीक्षण परिणाम, एआई अवलोकन और सारांश यहाँ कालक्रमानुसार दिखाई देंगे।',
    hist_first_run: 'अपना पहला विश्लेषण चलाएं →',

    // Profile
    prof_eyebrow: 'रोगी खाता',
    prof_title: 'व्यक्तिगत प्रोफ़ाइल और क्रेडेंशियल्स',
    prof_desc: 'अपने पहचान विवरण, संपर्क ईमेल और स्वास्थ्य सत्र नोट्स प्रबंधित करें।',
    prof_full_name: 'पूरा नाम',
    prof_email: 'ईमेल पता',
    prof_notes: 'व्यक्तिगत स्वास्थ्य नोट्स / पहले से मौजूद स्थितियां',
    prof_save: 'प्रोफ़ाइल परिवर्तन सहेजें',
    prof_discard: 'परिवर्तन छोड़ें',

    // Settings
    sett_eyebrow: 'सिस्टम प्राथमिकताएं',
    sett_title: 'सिस्टम सेटिंग्स और गोपनीयता',
    sett_desc: 'विश्लेषण समय, सूचनाएं और सुरक्षा विकल्प कॉन्फ़िगर करें।',
    sett_save: 'प्राथमिकताएं सहेजें',
    sett_reset: 'डिफ़ॉल्ट रीसेट करें',
    sett_lang_label: 'भाषा चुनें (Language)',
    sett_lang_sub: 'रिपोर्ट और कार्यक्षेत्र के लिए पसंदीदा भाषा',
    sett_timeout_label: 'विश्लेषण इंजन टाइमआउट',
    sett_timeout_sub: 'अधिकतम प्रसंस्करण प्रतीक्षा समय',
    sett_email_label: 'ईमेल स्वास्थ्य सारांश',
    sett_email_sub: 'विश्लेषण पूर्ण होने पर पीडीएफ डाउनलोड लिंक भेजें'
  },

  mr: {
    // Brand & General
    app_name: 'मेडफ्युजन एआय',
    app_tagline: 'आरोग्य बुद्धिमत्ता',
    app_subtitle: 'एआय-सक्षम मल्टीमॉडल वैयक्तिक आरोग्य बुद्धिमत्ता प्लॅटफॉर्म',
    back_to_home: '← मुख्य पानावर परत जा',
    close: 'बंद करा',
    save_changes: 'बदल जतन करा',
    cancel: 'रद्द करा',
    sign_out: 'साइन आउट करा',
    loading: 'लोड होत आहे...',

    // Navigation
    nav_dashboard: 'डॅशबोर्ड',
    nav_new_analysis: 'नवीन विश्लेषण',
    nav_history: 'इतिहास',
    nav_profile: 'प्रोफाइल',
    nav_settings: 'सेटिंग्ज',

    // Dashboard
    dash_welcome_back: 'पुन्हा स्वागत आहे',
    dash_overview_suffix: 'येथे तुमचा वैयक्तिक आरोग्य आढावा आहे.',
    dash_greeting_morning: 'शुभ प्रभात',
    dash_greeting_afternoon: 'शुभ दुपार',
    dash_greeting_evening: 'शुभ संध्याकाळ',
    dash_title: 'तुमचे वैयक्तिक आरोग्य विश्लेषण, एकाच ठिकाणी.',
    dash_desc: 'तुमच्या अपलोड केलेल्या आरोग्य मॉड्यूल्समधून संश्लेषित एआय-सहाय्यित वैद्यकीय सारांश अहवाल.',
    dash_btn_new: 'नवीन विश्लेषण सुरू करा',
    stat_total_analyses: 'एकूण विश्लेषणे',
    stat_last_analysis: 'शेवटचे विश्लेषण',
    stat_reports_saved: 'जतन केलेले अहवाल',
    stat_attention_required: 'लक्ष देणे आवश्यक',
    stat_no_tests: 'अद्याप कोणत्याही चाचण्या नाहीत',
    dash_recent_title: 'विश्लेषण क्रियाकलाप',
    dash_recent_subtitle: 'अलीकडील विश्लेषणे',
    dash_view_all: 'सर्व पहा →',
    dash_modules_available: 'उपलब्ध वैद्यकीय मॉड्यूल्स',
    dash_modules_sub: '8 विशेष एआय विश्लेषक आणि प्रयोगशाळा पॅनेल',
    dash_loading_activity: 'तुमचे आरोग्य विश्लेषण लोड होत आहे...',
    dash_timeline_subtitle: 'वैयक्तिक आरोग्य टाइमलाइन',
    dash_timeline_title: 'महत्त्वाचे टप्पे',
    dash_timeline_date: 'वैयक्तिक टप्पे',
    dash_timeline_empty: 'अद्याप कोणतेही आरोग्य टप्पे नोंदवलेले नाहीत. तुमची टाइमलाइन ट्रॅक करण्यासाठी तुमचे पहिले विश्लेषण चालवा.',
    dash_timeline_item_title: 'आरोग्य विश्लेषण पूर्ण झाले',
    dash_timeline_item_desc: 'अपलोड केलेल्या वैद्यकीय तपासणीचे एआय निदान मूल्यांकन पूर्ण झाले.',
    dash_quick_actions: 'जलद कृती',
    dash_quick_new: 'नवीन विश्लेषण',
    dash_quick_history: 'इतिहास पहा',
    dash_quick_reports: 'जतन केलेले अहवाल',
    dash_quick_profile: 'प्रोफाइल',
    dash_ai_badge: 'एआय-सहाय्यित बुद्धिमत्ता',
    dash_ai_title: 'तुमच्या आरोग्य विश्लेषणासाठी सज्ज',
    dash_ai_body: 'एकात्मिक एआय आरोग्य सारांश मिळवण्यासाठी छातीचे एक्स-रे, त्वचेचे फोटो किंवा रक्त तपासणी अहवाल अपलोड करा.',
    dash_ai_disclaimer: 'हे एक एआय-सहाय्यित माहितीपूर्ण पुनरावलोकन आहे आणि वैद्यकीय निदानाचा पर्याय नाही.',
    dash_ai_btn: 'नवीनतम विश्लेषण पहा →',
    dash_badge_review: 'तपासणी आवश्यक',
    dash_badge_normal: 'सामान्य',
    dash_self_analysis: 'रुग्णाचे स्वतःचे विश्लेषण',
    dash_btn_view: 'पहा',

    // Home Page Navigation
    home_nav_about: 'माहिती',
    home_nav_workflow: 'कार्यप्रणाली',
    home_nav_imaging: 'वैद्यकीय इमेजिंग',
    home_nav_labs: 'लॅब अहवाल',
    home_nav_fusion: 'फ्युजन इंजिन',
    home_nav_features: 'वैशिष्ट्ये',
    home_nav_safety: 'सुरक्षितता',
    home_nav_login: 'लॉगिन',
    home_nav_get_started: 'सुरू करा',
    home_nav_free: 'मोफत सुरू करा',

    // Hero Section
    hero_badge: 'मल्टीमॉडल वैयक्तिक आरोग्य बुद्धिमत्ता',
    hero_title_1: 'सर्व काही अपलोड करा.',
    hero_title_2: 'एक एकत्रित आरोग्य सारांश मिळवा.',
    hero_desc: 'मेडफ्युजन एआय ही रुग्ण-केंद्रित आरोग्य प्रणाली आहे जी वैद्यकीय इमेजिंग (एक्स-रे, त्वचेचे फोटो) आणि रक्त तपासणी अहवालांना एका समजण्याजोग्या आरोग्य सारांशात एकत्रित करते.',
    hero_login_btn: 'डॅशबोर्डवर लॉगिन करा',
    hero_create_btn: 'मोफत खाते तयार करा',
    hero_dashboard_btn: 'माझा डॅशबोर्ड उघडा',
    hero_start_new: '+ नवीन विश्लेषण सुरू करा',

    // Key Stats
    stat_3_modalities: '3 पद्धती',
    stat_3_desc: 'छाती, हाडे आणि त्वचा एआय',
    stat_5_labs: '5 लॅब पॅनेल',
    stat_5_desc: 'सीबीसी, साखर, लिपिड, केएफटी, एलएफटी',
    stat_1_file: '1 एकत्रित फाइल',
    stat_1_desc: 'वैद्यकीय पीडीएफ निर्यात',

    // Demo Mockup
    mockup_badge: 'इंटरॅक्टिव्ह प्लॅटफॉर्म डेमो',
    mockup_title: 'मल्टीमॉडल आरोग्य मूल्यमापन पूर्वावलोकन',
    mockup_sample_tag: 'नमुना प्रात्यक्षिक',
    mockup_mode_label: 'मोड',
    mockup_mode_val: 'नमुना केस',
    mockup_data_label: 'रुग्ण डेटा',
    mockup_data_val: 'अनामित/सुरक्षित',
    mockup_format_label: 'अहवाल स्वरूप',
    mockup_format_val: 'पीडीएफ तयार',
    mockup_flag_label: 'चिन्हांकित बाबी',
    mockup_flag_val: '1 बाब',
    mockup_fusion_title: 'मल्टीमॉडल आरोग्य फ्युजन',
    mockup_fusion_badge: 'सहसंबंधित निष्कर्ष',
    mockup_fusion_desc: 'वाढलेल्या पांढऱ्या पेशींसह फुफ्फुसातील सावली सहसंबंधित. डॉक्टर तपासणीची शिफारस.',
    mockup_chest_tag: 'छातीचा एक्स-रे',
    mockup_chest_title: 'न्यूमोनिया मूल्यमापन',
    mockup_chest_desc: 'खालच्या उजव्या फुफ्फुसात सूक्ष्म घनता · ResNet-18',
    mockup_lab_tag: 'प्रयोगशाळा ओसीआर',
    mockup_lab_title: 'कम्प्लिट ब्लड काउन्ट (सीबीसी)',
    mockup_lab_desc: 'पांढऱ्या पेशी: <span class="text-rose-400 font-semibold">11.8 जास्त</span> &bull; हिमोग्लोबिन: <span class="text-rose-400 font-semibold">11.2 कमी</span>',
    mockup_lab_status: 'मूल्यांकन केले',
    mockup_scope: 'वैयक्तिक रुग्ण व्याप्ती · सिंगल पोर्ट',
    mockup_open_dash: 'पूर्ण डॅशबोर्ड उघडा →',

    // About Section
    about_eyebrow: 'मेडफ्युजन एआय बद्दल',
    about_title: '8 स्वतंत्र साधने नाहीत. एक एकत्रित मल्टीमॉडल फ्युजन इंजिन.',
    about_desc: 'आरोग्याची माहिती परंपरेने वेगवेगळ्या कागदपत्रांमध्ये विखुरलेली असते — येथे एक एक्स-रे, तिथे एक रक्त अहवाल. मेडफ्युजन एआय हे <strong>मल्टीमॉडल आरोग्य बुद्धिमत्तेसह</strong> सोडवते.',
    about_card1_title: 'एका व्यक्तीची व्याप्ती',
    about_card1_desc: 'विशेषतः वैयक्तिक रुग्णासाठी डिझाइन केलेले. गुंतागुंतीच्या रुग्णालय प्रणालींशिवाय स्वतःची माहिती अपलोड करा, निष्कर्ष पहा आणि अहवाल डाउनलोड करा.',
    about_card2_title: 'अहवालांमधील परस्पर संबंध',
    about_card2_desc: 'वैद्यकीय प्रतिमा आणि रक्त तपासणी निष्कर्षांना वैद्यकीयदृष्ट्या पडताळलेल्या नियमांद्वारे जोडले जाते — कधीही निराधार निष्कर्ष काढले जात नाहीत.',
    about_card3_title: 'गतिमान कार्ड प्रदर्शन',
    about_card3_desc: 'तुम्ही फक्त छातीचा एक्स-रे आणि सीबीसी अहवाल अपलोड केल्यास, फक्त संबंधित कार्ड दिसतात. रिकामी कार्डे किंवा गोंधळ नाही.',

    // Workflow Section
    wf_eyebrow: 'रुग्णाचा प्रवास',
    wf_title: 'मेडफ्युजन एआय कसे कार्य करते',
    wf_sub: 'अपलोड → विश्लेषण → समजून घेणे → एकत्रिकरण → संयुक्त सारांश → अहवाल जतन करा.',
    wf_step1_title: 'सर्व काही अपलोड करा',
    wf_step1_desc: 'एकात्मिक प्रक्रियेत छाती/हाडांचे एक्स-रे, त्वचेचे फोटो किंवा रक्त अहवाल टाका.',
    wf_step2_title: 'एआय आणि ओसीआर विश्लेषण',
    wf_step2_desc: 'डीप सीएनएन वैद्यकीय इमेजिंगचे वर्गीकरण करतात; ओसीआर लॅब पॅरामीटर्स काढतो.',
    wf_step3_title: 'नियम इंजिन मूल्यांकन',
    wf_step3_desc: 'रक्ताच्या पॅरामीटर्सची तुलना प्रमाणित संदर्भ श्रेणींशी केली जाते आणि कमी, सामान्य किंवा जास्त असे चिन्हांकित केले जाते.',
    wf_step4_title: 'मल्टीमॉडल एकत्रिकरण',
    wf_step4_desc: 'फ्युजन इंजिन बहु-स्रोत असामान्यतांना एका एकत्रित आरोग्य स्थितीत जोडते.',
    wf_step5_title: 'निर्यात आणि टाइमलाइन',
    wf_step5_desc: 'तुमच्या आरोग्य सारांशाचे पुनरावलोकन करा, पीडीएफ डाउनलोड करा आणि तुमच्या टाइमलाइनवर नोंदी ट्रॅक करा.',

    // Imaging Section
    img_eyebrow: 'डीप लर्निंग व्हिजन',
    img_title: '3 वैद्यकीय इमेजिंग मॉड्यूल्स',
    img_desc: 'मानक वैद्यकीय इमेजिंग डेटासेटवर प्रशिक्षित ट्रान्सफर लर्निंग मॉडेल्स.',
    img_card1_tag: 'ResNet-18',
    img_card1_title: 'छातीचा एक्स-रे',
    img_card1_desc: 'न्यूमोनिया निर्देशक विरुद्ध स्पष्ट सामान्य निष्कर्षांसाठी फुफ्फुसांच्या रेडिओग्राफचे मूल्यांकन करते.',
    img_card1_meta1: 'डेटासेट: ChestX-ray14',
    img_card1_meta2: 'लक्ष्य: सामान्य विरुद्ध न्यूमोनिया शोध',
    img_card1_meta3: 'आउटपुट: संभाव्यता गुण आणि फुफ्फुसाची स्थिती',
    img_card2_tag: 'EfficientNet-B0',
    img_card2_title: 'हाडांचा एक्स-रे',
    img_card2_desc: 'फ्रॅक्चर आणि कॉर्टिकल सातत्यासाठी मस्कुलोस्केलेटल रेडिओग्राफची तपासणी करते.',
    img_card2_meta1: 'डेटासेट: MURA (मस्कुलोस्केलेटल रेडिओग्राफ)',
    img_card2_meta2: 'प्रदेश: हात, मनगट, कोपर, पुढचा हात, खांदा',
    img_card2_meta3: 'आउटपुट: फ्रॅक्चर विरुद्ध फ्रॅक्चर नसलेले स्क्रीनिंग',
    img_card3_tag: 'EfficientNet-B0',
    img_card3_title: 'त्वचा / तीळ प्रतिमा',
    img_card3_desc: 'त्वचेच्या जखमा आणि चट्टे यांच्या वर्गीकरणासाठी फोटोंचे आणि डर्मोस्कोपीचे विश्लेषण करते.',
    img_card3_meta1: 'डेटासेट: HAM10000 / ISIC',
    img_card3_meta2: 'श्रेण्या: मेलानोसाइटिक नेव्ही, निरुपद्रवी वि जोखीम स्क्रीनिंग',
    img_card3_meta3: 'आउटपुट: वर्गीकरण संभाव्यता आणि सल्ला',

    // Labs Section
    labs_eyebrow: 'ओसीआर आणि नियम इंजिन',
    labs_title: '5 प्रयोगशाळा अहवाल पॅनेल',
    labs_desc: 'प्रत्येक लॅब प्रकारासाठी सीएनएन आवश्यक नाही. त्याऐवजी, मेडफ्युजन एआय <strong>ओसीआर → प्रकार ओळख → पॅरामीटर निष्कर्षण → नियम इंजिन</strong> आर्किटेक्चर वापरते.',
    labs_card1_title: 'सीबीसी पॅनेल',
    labs_card1_sub: 'कम्प्लिट ब्लड काउन्ट',
    labs_card1_desc: 'हिमोग्लोबिन, पांढऱ्या पेशी, तांबड्या पेशी आणि प्लेटलेट्स काढते. ॲनिमिया किंवा संसर्ग चिन्हांकित करते.',
    labs_card2_title: 'मधुमेह पॅनेल',
    labs_card2_sub: 'ग्लुकोज प्रोफाइल',
    labs_card2_desc: 'उपाशीपोटी साखर (FBS), जेवणानंतरची साखर (PPBS) आणि HbA1c मूल्यांचे मूल्यांकन करते.',
    labs_card3_title: 'लिपिड प्रोफाइल',
    labs_card3_sub: 'हृदय व रक्तवाहिन्यासंबंधी जोखीम',
    labs_card3_desc: 'एकूण कोलेस्टेरॉल, एचडीएल (चांगले), एलडीएल (वाईट) आणि ट्रायग्लिसराइड्सची पडताळणी करते.',
    labs_card4_title: 'मूत्रपिंड (केएफटी)',
    labs_card4_sub: 'मूत्रपिंड कार्य',
    labs_card4_desc: 'मूत्रपिंडाच्या आरोग्याचे मूल्यांकन करण्यासाठी सीरम क्रिएटिनिन, युरिया आणि ईजीएफआर तपासते.',
    labs_card5_title: 'यकृत (एलएफटी)',
    labs_card5_sub: 'यकृत कार्य',
    labs_card5_desc: 'यकृताच्या स्थितीसाठी एएलटी (एसजीपीटी), एएसटी (एसजीओटी), बिलिरुबिन आणि अल्ब्युमिन काढते.',

    // Fusion Section
    fus_eyebrow: 'मुख्य वैशिष्ट्य',
    fus_title: 'फ्युजन इंजिन कसे कार्य करते',
    fus_desc: 'अनेक आरोग्य फाइल्स सादर केल्यावर, मेडफ्युजन एआय प्रत्येक पडताळलेला निष्कर्ष आमच्या मल्टीमॉडल फ्युजन इंजिनमध्ये जोडते.',
    fus_p1_title: 'एकूण निष्कर्ष',
    fus_p1_desc: 'सक्रिय इमेजिंग संभाव्यता आणि रक्त स्थिती एका गुणांकात संश्लेषित करते.',
    fus_p2_title: 'महत्त्वाच्या असामान्यता',
    fus_p2_desc: 'मर्यादेबाहेरील लॅब पॅरामीटर्स आणि असामान्य इमेजिंग नोंदी समोर आणते ज्यावर लक्ष देणे आवश्यक आहे.',
    fus_p3_title: 'परस्पर अहवाल निरीक्षणे',
    fus_p3_desc: 'उदाहरण: छातीच्या रेडिओग्राफ न्यूमोनियाच्या लक्षणांशी वाढलेल्या पांढऱ्या पेशींचा परस्परसंबंध.',
    fus_arch_title: 'फ्युजन आर्किटेक्चर',
    fus_box1_lbl: 'उपलब्ध इनपुट',
    fus_box1_val: 'छातीचा एक्स-रे + सीबीसी',
    fus_box2_lbl: 'गणित केलेली स्थिती',
    fus_box2_val: 'मध्यम लक्ष आवश्यक',
    fus_box3_title: 'एआय-सहाय्यित आरोग्य सारांश आउटपुट',
    fus_box3_desc: '"अपलोड केलेल्या माहितीमध्ये अनेक निष्कर्ष आढळले. उजव्या फुफ्फुसातील सूक्ष्म सावली वाढलेल्या पांढऱ्या पेशींशी (WBC 11.8 x10³/µL) जुळते. पुढील तपासणीसाठी आपल्या डॉक्टरांचा सल्ला घेण्याची शिफारस केली जाते."',
    fus_note: '* टीप: न वापरलेले मॉड्यूल अपलोड न केल्यास, निकाल स्क्रीनवर कोणतेही रिकामे कार्ड दिसणार नाही.',

    // Features Section
    feat_eyebrow: 'पाच उत्कृष्ट क्षमता',
    feat_title: 'रुग्णाच्या खऱ्या वापरासाठी विकसित',
    feat_desc: 'प्रकल्प तपशीलात व्याख्या केलेली काळजीपूर्वक तयार केलेली वैशिष्ट्ये.',
    feat_f1_title: 'मल्टीमॉडल सारांश',
    feat_f1_desc: 'अनेक वैद्यकीय प्रतिमा आणि रक्त तपासण्या एका स्पष्ट सारांशात एकत्र आणते.',
    feat_f2_title: 'स्पष्टीकरणात्मक निकाल',
    feat_f2_desc: 'काय चिन्हांकित केले गेले आणि ते सामान्य मर्यादेपेक्षा वेगळे का आहे याचे साध्या भाषेतील स्पष्टीकरण.',
    feat_f3_title: 'आरोग्य टाइमलाइन',
    feat_f3_desc: 'मागील विश्लेषणांचा आढावा घ्या आणि रक्ताचे कल आणि इमेजिंग टप्पे वेळेनुसार ट्रॅक करा.',
    feat_f4_title: 'पुढील चरणांचे मार्गदर्शन',
    feat_f4_desc: 'डॉक्टरांशी चर्चेसाठी उपयुक्त सामान्य शैक्षणिक संदर्भ.',
    feat_f5_title: 'संरचित पीडीएफ',
    feat_f5_desc: 'सर्व निष्कर्ष आणि तारखा असलेले संरचित, मुद्रण-योग्य पीडीएफ त्वरित तयार करा.',

    // Safety & Disclaimer
    safety_eyebrow: 'सुरक्षितता आणि वैद्यकीय मर्यादा',
    safety_title: 'कडक सुरक्षितता आणि भाषा अनुपालन',
    safety_desc: 'मेडफ्युजन एआय केवळ गैर-निर्णायक भाषेचा वापर करते जसे की <em>"एआय-सहाय्यित निष्कर्ष"</em>, <em>"संदर्भ श्रेणीबाहेर"</em>, आणि <em>"लक्ष देणे आवश्यक आहे"</em>. हे कोणतेही अंतिम वैद्यकीय निदान देत नाही.',
    safety_box_title: 'मेडफ्युजन एआय काय नाही (तपशिलानुसार)',
    safety_not_doctor: 'डॉक्टरांचा पर्याय नाही',
    safety_not_diagnosis: 'अंतिम वैद्यकीय निदान नाही',
    safety_not_prescription: 'औषध लिहून देणारी प्रणाली नाही',
    safety_not_emergency: 'तातडीची वैद्यकीय मदत नाही',
    safety_not_hospital: 'रुग्णालय व्यवस्थापन सॉफ्टवेअर नाही',
    safety_not_portal: 'डॉक्टर पोर्टल नाही',

    // Bottom CTA
    cta_title: 'आपला मल्टीमॉडल सारांश मिळवण्यासाठी सज्ज आहात?',
    cta_desc: 'आपल्या खाजगी आरोग्य वर्कस्पेसमध्ये वैद्यकीय स्कॅन आणि लॅब अहवाल अपलोड करण्यासाठी साइन इन करा किंवा खाते तयार करा.',
    cta_get_started: 'मोफत सुरू करा',
    cta_create_acc: 'मोफत खाते तयार करा →',
    cta_open_dash: 'तुमच्या डॅशबोर्डवर जा →',
    footer_summary: 'सिंगल-पोर्ट आर्किटेक्चर · SQLite · मल्टीमॉडल व्हिजन + ओसीआर',
    footer_rights: '© 2026 मेडफ्युजन एआय. सर्व हक्क राखीव.',

    // Modal & Nav
    modal_login_title: 'मेडफ्युजन एआय मध्ये लॉगिन करा',
    modal_login_sub: 'तुमच्या आरोग्य वर्कस्पेसमध्ये प्रवेश करा',
    modal_demo_title: 'जलद डेमो खाते',
    modal_use_demo: 'डेमो वापरा',
    modal_email_lbl: 'ईमेल पत्ता',
    modal_pwd_lbl: 'पासवर्ड',
    modal_signin_btn: 'साइन इन करा आणि डॅशबोर्ड उघडा',
    modal_new_patient: 'नवीन रुग्ण?',
    modal_create_acc: 'खाते तयार करा',
    nav_language: 'भाषा',

    // New Analysis
    new_analysis_eyebrow: 'विश्लेषण संरचना',
    new_analysis_title: 'वैद्यकीय मॉड्यूल्स निवडा',
    new_analysis_desc: 'तुमच्या मल्टीमॉडल आरोग्य आढाव्यात जोडण्यासाठी मेडिकल स्कॅन आणि लॅब टेस्ट पॅनेल निवडा.',
    new_analysis_continue: 'अपलोडसाठी पुढे जा',
    new_analysis_select_all: 'सर्व निवडा',
    new_analysis_deselect_all: 'सर्व काढा',
    new_analysis_img_header: 'इमेज विश्लेषण मॉड्यूल्स',
    new_analysis_lab_header: 'प्रयोगशाळा रक्त व चयापचय पॅनेल',
    new_analysis_hint: 'मल्टी-मॉड्यूल फायदा: जेव्हा इमेजिंग स्कॅन आणि लॅब पॅनेल दोन्ही एकाच वेळी निवडले जातात, तेव्हा अचूक परस्परसंबंध मिळतो.',

    // Upload
    upload_eyebrow: 'कागदपत्रे अपलोड',
    upload_title: 'स्कॅन आणि लॅब कागदपत्रे अपलोड करा',
    upload_desc: 'तुमच्या सक्रिय मॉड्यूल्ससाठी वैद्यकीय प्रतिमा आणि रक्त चाचणी अहवाल जोडा.',
    upload_modify_modules: '← मॉड्यूल्स बदला',
    upload_start_btn: 'एआय एकत्रिकरण सुरू करा',
    upload_drag_label: 'येथे फाइल ड्रॅग आणि ड्रॉप करा किंवा ब्राउझ करण्यासाठी क्लिक करा',
    upload_drag_hint: 'कमाल 25 एमबी प्रति फाइल',
    upload_attached_label: 'फाइल जोडली गेली आहे. बदलण्यासाठी किंवा अधिक जोडण्यासाठी क्लिक करा.',
    upload_remove: 'काढून टाका',
    upload_security_note: 'स्थानिक सुरक्षिततेची हमी: सर्व वैद्यकीय प्रतिमा आणि लॅब अहवाल तुमच्या स्थानिक सर्व्हरवर सुरक्षितपणे प्रक्रिया केले जातात.',

    // Processing
    proc_eyebrow: 'मल्टीमॉडल पाइपलाइन',
    proc_title: 'मल्टीमॉडल नोंदींचे संश्लेषण',
    proc_desc: 'वैद्यकीय इमेजिंग न्यूरल नेटवर्क्स, ओसीआर कागदपत्र निष्कर्ष आणि मल्टीमॉडल फ्युजन इंजिनवर प्रक्रिया सुरू आहे.',
    proc_skip_btn: 'निकालांवर जा →',
    proc_exec_label: 'पाइपलाइन अंमलबजावणी',
    proc_instant_finish: 'आत्ताच पूर्ण करा →',
    proc_step1_badge: 'सुरक्षित साठवणूक',
    proc_step1_title: 'कागदपत्रे साठवणूक',
    proc_step1_desc: 'वैद्यकीय प्रतिमा आणि प्रयोगशाळा पीडीएफ फाइल्स सुरक्षित सत्र मेमरीमध्ये सत्यापित केल्या गेल्या.',
    proc_step2_badge: 'पूर्व-प्रक्रिया',
    proc_step2_title: 'प्रतिमा मानकीकरण',
    proc_step2_desc: 'ग्रेस्केल सामान्यीकरण, कॉन्ट्रास्ट समायोजन आणि कॅलिब्रेशन लागू केले.',
    proc_step3_badge: 'डीप लर्निंग',
    proc_step3_title: 'एआय / सीएनएन आणि ओसीआर निष्कर्षण',
    proc_step3_desc: 'डीप मॉडेल्स रेडिओग्राफचे मूल्यांकन करतात; ओसीआर लॅब रक्त चाचणी बायोमार्कर्स काढतो.',
    proc_step4_badge: 'संदर्भ मर्यादा',
    proc_step4_title: 'वैद्यकीय कॅलिब्रेशन',
    proc_step4_desc: 'काढलेल्या पॅरामीटर्सची तुलना प्रमाणित संदर्भ मर्यादांशी केली गेली.',
    proc_step5_badge: 'फ्युजन कोर',
    proc_step5_title: 'मल्टीमॉडल फ्युजन इंजिन',
    proc_step5_desc: 'क्रॉस-मॉडल सहसंबंध तपासणी लॅब पातळी आणि स्कॅन मार्करमधील संबंध शोधते.',
    proc_step6_badge: 'संश्लेषण',
    proc_step6_title: 'आरोग्य सारांश निर्मिती',
    proc_step6_desc: 'एकत्रित वैद्यकीय निरीक्षणे परस्परसंवादी कार्ड आणि पीडीएफ अहवालात तयार केली जातात.',

    // Results
    res_eyebrow: 'मल्टीमॉडल आरोग्य बुद्धिमत्ता',
    res_title: 'विश्लेषण निकाल आणि आरोग्य सारांश',
    res_desc: 'इमेजिंग स्कॅन आणि रक्त तपासणी पॅनेल्समधील सहसंबंधित एआय निष्कर्ष.',
    res_toggle_report: 'तपशीलवार मजकूर अहवाल टॉगल करा',
    res_download_pdf: 'पीडीएफ अहवाल डाउनलोड करा',
    res_fusion_eyebrow: 'मल्टीमॉडल फ्युजन इंजिन',
    res_fusion_title: 'सर्वसमावेशक वैद्यकीय आढावा',
    res_fusion_desc: 'सर्व प्रक्रिया केलेल्या इमेजिंग स्कॅन आणि लॅब पॅनेल्समधील एकत्रित आरोग्य मूल्यमापन.',
    res_findings: 'संश्लेषित निष्कर्ष',
    res_abnormalities: 'शोधलेल्या असामान्यता',
    res_observations: 'क्रॉस-रिपोर्ट निरीक्षणे',
    res_key_findings: 'महत्त्वाची वैद्यकीय निरीक्षणे',
    res_next_steps: 'पुढील शिफारस केलेली पावले',
    res_disclaimer_title: 'वैद्यकीय अस्वीकरण:',
    res_disclaimer_desc: 'मेडफ्युजन एआय हे एआय-सहाय्यित माहितीपूर्ण आरोग्य साधन आहे. हे स्वतंत्र वैद्यकीय मूल्यमापन किंवा डॉक्टरच्या उपचारांचा पर्याय नाही.',
    res_status_normal: 'सामान्य / कमी जोखीम',
    res_status_review: 'तपासणी आवश्यक',

    // History
    hist_eyebrow: 'रुग्ण टाइमलाइन',
    hist_title: 'विश्लेषण इतिहास आणि मागील अहवाल',
    hist_desc: 'सर्व वैद्यकीय इमेजिंग स्कॅन, रक्त चाचण्या आणि मल्टीमॉडल सारांशांची ऐतिहासिक नोंद.',
    hist_empty_title: 'अद्याप कोणतेही विश्लेषण रेकॉर्ड आढळले नाही',
    hist_empty_desc: 'तुमचे अपलोड केलेले चाचणी निकाल, एआय निरीक्षणे आणि सारांश येथे कालक्रमानुसार दिसतील.',
    hist_first_run: 'पहिले विश्लेषण सुरू करा →',

    // Profile
    prof_eyebrow: 'रुग्ण खाते',
    prof_title: 'वैयक्तिक प्रोफाइल आणि माहिती',
    prof_desc: 'तुमची वैयक्तिक ओळख, संपर्क ईमेल आणि आरोग्य नोंदी व्यवस्थापित करा.',
    prof_full_name: 'पूर्ण नाव',
    prof_email: 'ईमेल पत्ता',
    prof_notes: 'वैयक्तिक आरोग्य नोंदी / पूर्वीचे आजार',
    prof_save: 'प्रोफाइल बदल जतन करा',
    prof_discard: 'बदल रद्द करा',

    // Settings
    sett_eyebrow: 'सिस्टम प्राधान्ये',
    sett_title: 'सिस्टम सेटिंग्ज आणि गोपनीयता',
    sett_desc: 'विश्लेषण वेळ, सूचना आणि सुरक्षा पर्याय कॉन्फिगर करा.',
    sett_save: 'प्राधान्ये जतन करा',
    sett_reset: 'डीफॉल्ट पुनर्संचयित करा',
    sett_lang_label: 'भाषा निवडा (Language)',
    sett_lang_sub: 'अहवाल आणि कार्यक्षेत्रासाठी पसंतीची भाषा',
    sett_timeout_label: 'विश्लेषण इंजिन टाइमआउट',
    sett_timeout_sub: 'प्रक्रियेसाठी कमाल प्रतीक्षा वेळ',
    sett_email_label: 'ईमेल आरोग्य सारांश',
    sett_email_sub: 'विश्लेषण पूर्ण झाल्यावर पीडीएफ डाउनलोड लिंक पाठवा'
  }
};

/**
 * Get current active language code ('en', 'hi', or 'mr')
 */
export function getCurrentLang() {
  const lang = localStorage.getItem('medfusion_lang') || 'en';
  return ['en', 'hi', 'mr'].includes(lang) ? lang : 'en';
}

/**
 * Set active language code and dispatch event
 */
export function setLanguage(lang) {
  if (!['en', 'hi', 'mr'].includes(lang)) lang = 'en';
  localStorage.setItem('medfusion_lang', lang);
  document.documentElement.lang = lang;

  // Synchronize all language selectors across page
  document.querySelectorAll('[data-lang-selector]').forEach(sel => {
    if (sel.value !== lang) sel.value = lang;
  });

  applyTranslations();
  window.dispatchEvent(new CustomEvent('medfusion_lang_changed', { detail: { lang } }));
}

/**
 * Get localized string by key
 */
export function t(key, fallback = '') {
  const lang = getCurrentLang();
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en?.[key] || fallback || key;
}

/**
 * Automatically translate all elements with [data-i18n] and [data-i18n-html] on the page
 */
export function applyTranslations(root = document) {
  const lang = getCurrentLang();
  document.documentElement.lang = lang;

  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) el.placeholder = translated;
      } else {
        el.textContent = translated;
      }
    }
  });

  root.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translated = t(key);
    if (translated) {
      el.innerHTML = translated;
    }
  });

  // Synchronize any language selector dropdowns
  root.querySelectorAll('[data-lang-selector]').forEach(sel => {
    if (sel.value !== lang) sel.value = lang;
  });
}

/**
 * Initialize language engine immediately
 */
function initI18n() {
  applyTranslations();

  // Synchronize all dropdowns
  const currentLang = getCurrentLang();
  document.querySelectorAll('[data-lang-selector]').forEach(sel => {
    sel.value = currentLang;
  });
}

if (typeof document !== 'undefined') {
  // Execute immediately or on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

  // Handle language change events anywhere in the document
  document.addEventListener('change', event => {
    const sel = event.target && event.target.closest('[data-lang-selector]');
    if (sel) {
      setLanguage(sel.value);
    }
  });

  // Also support custom buttons with data-lang-btn="hi"
  document.addEventListener('click', event => {
    const btn = event.target && event.target.closest('[data-lang-btn]');
    if (btn) {
      const lang = btn.getAttribute('data-lang-btn');
      if (lang) setLanguage(lang);
    }
  });

  // Expose globally on window for inline handlers & fail-safe execution
  if (typeof window !== 'undefined') {
    window.setLanguage = setLanguage;
    window.getCurrentLang = getCurrentLang;
    window.applyTranslations = applyTranslations;
    window.t = t;
  }
}
