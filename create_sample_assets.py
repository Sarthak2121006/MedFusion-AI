"""
Generates high-quality sample test medical images and files for:
- Skin lesion (dermoscopic pigment lesion with ABCD characteristics)
- Blood test report (formatted laboratory report with hematology parameters)
- Bone X-ray (extremity bone radiograph)
- Corrupted file (for error testing)
"""

import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs('assets', exist_ok=True)

# 1. Generate Skin Lesion Sample Image (assets/sample_skin_lesion.jpg)
def create_skin_lesion():
    w, h = 600, 600
    # Skin tone background with natural texture
    img = np.ones((h, w, 3), dtype=np.uint8)
    base_skin = np.array([195, 220, 240]) # BGR: light pinkish skin
    img[:] = base_skin
    
    # Add subtle skin texture noise
    noise = np.random.normal(0, 5, (h, w, 3)).astype(np.int16)
    img = np.clip(img.astype(np.int16) + noise, 0, 255).astype(np.uint8)

    # Draw pigmented lesion (dark brown, reddish halo, slightly irregular border)
    center = (300, 290)
    pil_img = Image.fromarray(img[:, :, ::-1])
    draw = ImageDraw.Draw(pil_img)

    # Outer reddish/tan halo
    draw.ellipse([180, 185, 420, 400], fill=(160, 100, 80))
    # Mid dark brown zone
    draw.ellipse([210, 205, 390, 375], fill=(85, 45, 30))
    # Core dark pigment focus (slight asymmetry)
    draw.ellipse([235, 230, 360, 340], fill=(45, 22, 15))
    # Very dark brown notch
    draw.ellipse([260, 220, 320, 280], fill=(25, 12, 10))

    # Apply slight blur for realistic dermoscopic skin blending
    pil_img = pil_img.filter(ImageFilter.GaussianBlur(radius=6))
    pil_img.save('assets/sample_skin_lesion.jpg', quality=95)
    print("Created assets/sample_skin_lesion.jpg")

# 2. Generate Blood Test Laboratory Report (assets/sample_blood_report.png)
def create_blood_report():
    w, h = 900, 1200
    img = Image.new('RGB', (w, h), color=(255, 255, 255))
    draw = ImageDraw.Draw(img)

    # Hospital Header Banner
    draw.rectangle([0, 0, w, 110], fill=(15, 23, 42)) # Deep navy
    draw.text((40, 25), "METROPOLITAN CLINICAL LABORATORIES", fill=(20, 184, 166))
    draw.text((40, 55), "ISO 15189 Accredited Automated Hematology & Biochemistry Department", fill=(148, 163, 184))
    draw.text((40, 80), "Patient: Sarthak Gaikwad | ID: MCL-89421 | Date: 11-Oct-2026 | Age/Sex: 28/M", fill=(226, 232, 240))

    # Table Header
    y = 150
    draw.rectangle([40, y, w - 40, y + 35], fill=(241, 245, 249))
    draw.text((50, y + 10), "INVESTIGATION / PARAMETER", fill=(15, 23, 42))
    draw.text((380, y + 10), "OBSERVED VALUE", fill=(15, 23, 42))
    draw.text((560, y + 10), "REFERENCE INTERVAL", fill=(15, 23, 42))
    draw.text((760, y + 10), "FLAG / STATUS", fill=(15, 23, 42))

    # Test Rows
    tests = [
        ("Hemoglobin (Hb)", "11.2 g/dL", "12.0 - 15.5 g/dL", "LOW"),
        ("WBC Count (Total Leukocyte)", "11.8 x10^3/uL", "4.5 - 11.0 x10^3/uL", "HIGH"),
        ("RBC Count", "4.45 x10^6/uL", "4.00 - 5.20 x10^6/uL", "NORMAL"),
        ("Platelet Count", "245 x10^3/uL", "150 - 450 x10^3/uL", "NORMAL"),
        ("Hematocrit (PCV)", "34.8 %", "36.0 - 48.0 %", "LOW"),
        ("Neutrophils", "74 %", "40 - 70 %", "HIGH"),
        ("Lymphocytes", "21 %", "20 - 40 %", "NORMAL"),
        ("Fasting Blood Sugar (FBS)", "114 mg/dL", "70 - 99 mg/dL", "HIGH"),
        ("HbA1c (Glycated Hb)", "5.9 %", "4.0 - 5.6 %", "HIGH"),
        ("Serum Creatinine", "0.95 mg/dL", "0.60 - 1.20 mg/dL", "NORMAL"),
        ("Blood Urea", "16 mg/dL", "7 - 20 mg/dL", "NORMAL"),
        ("Total Cholesterol", "210 mg/dL", "125 - 200 mg/dL", "HIGH"),
        ("Triglycerides", "165 mg/dL", "< 150 mg/dL", "HIGH"),
        ("HDL Cholesterol", "44 mg/dL", "40 - 60 mg/dL", "NORMAL"),
        ("LDL Cholesterol", "133 mg/dL", "< 100 mg/dL", "HIGH"),
        ("ALT (SGPT)", "32 U/L", "7 - 56 U/L", "NORMAL"),
        ("AST (SGOT)", "28 U/L", "10 - 40 U/L", "NORMAL"),
        ("Total Bilirubin", "0.8 mg/dL", "0.1 - 1.2 mg/dL", "NORMAL")
    ]

    y += 45
    for item, val, ref, flag in tests:
        bg_col = (255, 241, 242) if flag in ['HIGH', 'LOW'] else (255, 255, 255)
        text_col = (190, 18, 60) if flag in ['HIGH', 'LOW'] else (30, 41, 59)
        draw.rectangle([40, y, w - 40, y + 28], fill=bg_col, outline=(226, 232, 240))
        draw.text((50, y + 7), item, fill=(30, 41, 59))
        draw.text((380, y + 7), val, fill=text_col)
        draw.text((560, y + 7), ref, fill=(100, 116, 139))
        draw.text((760, y + 7), flag, fill=text_col)
        y += 34

    # Doctor signoff note
    y += 20
    draw.text((40, y), "Clinical Note: Mild normocytic normochromic anemia and leukocytosis noted. Correlate clinically.", fill=(71, 85, 105))
    draw.text((40, y + 25), "Pathologist: Dr. R. K. Sharma, MD (Pathology) | Verified Electronically", fill=(15, 23, 42))

    img.save('assets/sample_blood_report.png', quality=95)
    print("Created assets/sample_blood_report.png")

# 3. Generate Bone Radiograph Sample (assets/sample_bone_xray.jpg)
def create_bone_xray():
    w, h = 600, 800
    img = np.zeros((h, w), dtype=np.uint8)
    img[:] = 20 # dark radiograph background

    # Forearm / radius-ulna bone shafts (lighter radiodense pixels)
    # Radius
    cv2.line(img, (240, 50), (230, 750), 190, 45)
    # Ulna
    cv2.line(img, (360, 50), (370, 750), 180, 40)
    # Cortical edges
    cv2.line(img, (215, 50), (205, 750), 235, 4)
    cv2.line(img, (265, 50), (255, 750), 235, 4)
    cv2.line(img, (338, 50), (348, 750), 235, 4)
    cv2.line(img, (382, 50), (392, 750), 235, 4)

    # Gaussian noise for realistic radiograph grain
    noise = np.random.normal(0, 8, (h, w)).astype(np.int16)
    img = np.clip(img.astype(np.int16) + noise, 0, 255).astype(np.uint8)

    cv2.imwrite('assets/sample_bone_xray.jpg', img)
    print("Created assets/sample_bone_xray.jpg")

# 4. Generate Corrupted Image (assets/corrupted_image.jpg)
def create_corrupted():
    with open('assets/corrupted_image.jpg', 'wb') as f:
        f.write(b'INVALID_HEADER_NOT_A_REAL_IMAGE_DATA_1234567890')
    print("Created assets/corrupted_image.jpg")

if __name__ == '__main__':
    create_skin_lesion()
    create_blood_report()
    create_bone_xray()
    create_corrupted()
