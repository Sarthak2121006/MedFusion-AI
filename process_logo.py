from PIL import Image
import numpy as np
import os
import shutil

src_path = r"C:\Users\ADMIN\.gemini\antigravity-ide\brain\f8cb9521-138f-4707-a27b-581fd7583a41\.user_uploaded\media_1791721077106.png"

# Open source image
img = Image.open(src_path).convert("RGBA")
bbox = img.getbbox()
print("Original bbox:", bbox)

# 1. Full logo cropped to non-transparent bbox with a small padding
pad = 20
cropped_bbox = (
    max(0, bbox[0] - pad),
    max(0, bbox[1] - pad),
    min(img.width, bbox[2] + pad),
    min(img.height, bbox[3] + pad)
)
full_logo = img.crop(cropped_bbox)

# 2. Icon emblem only (top M emblem, Y from bbox[1] down to ~625)
emblem_crop = (
    max(0, bbox[0] - 10),
    max(0, bbox[1] - 10),
    min(img.width, bbox[2] + 10),
    630
)
icon_emblem = img.crop(emblem_crop)
# Make icon_emblem square with transparent padding
emblem_w, emblem_h = icon_emblem.size
square_size = max(emblem_w, emblem_h) + 20
square_icon = Image.new("RGBA", (square_size, square_size), (0, 0, 0, 0))
offset_x = (square_size - emblem_w) // 2
offset_y = (square_size - emblem_h) // 2
square_icon.paste(icon_emblem, (offset_x, offset_y))

# 3. Full logo for dark backgrounds (convert the dark navy text [0, 8, 30] to white/bright slate)
arr = np.array(full_logo)
# Pixels in text region where alpha > 100 and RGB is dark (R < 40, G < 40, B < 60)
alpha = arr[:, :, 3]
is_dark = (arr[:, :, 0] < 45) & (arr[:, :, 1] < 45) & (arr[:, :, 2] < 70) & (alpha > 50)

# Replace dark text pixels with crisp pure white (255, 255, 255)
arr_dark_mode = arr.copy()
arr_dark_mode[is_dark, 0] = 255
arr_dark_mode[is_dark, 1] = 255
arr_dark_mode[is_dark, 2] = 255
full_logo_dark = Image.fromarray(arr_dark_mode)

# 4. Logo with white rounded background badge (card style)
badge_logo = Image.new("RGBA", (full_logo.width + 40, full_logo.height + 40), (255, 255, 255, 255))
badge_logo.paste(full_logo, (20, 20), full_logo)

# Target directories
target_dirs = [
    r"d:\MedFusion-AI\assets",
    r"d:\MedFusion-AI\medfusion-frontend\assets",
    r"d:\MedFusion-AI\medfusion-frontend\assets\images",
    r"d:\MedFusion-AI\MedFusion-AI\MedFusion-AI\medfusion-frontend\assets",
    r"d:\MedFusion-AI\MedFusion-AI\MedFusion-AI\medfusion-frontend\assets\images"
]

for d in target_dirs:
    os.makedirs(d, exist_ok=True)
    
    # Save full logo (transparent)
    full_logo.save(os.path.join(d, "medfusion_logo.png"), "PNG")
    full_logo.save(os.path.join(d, "logo.png"), "PNG")
    
    # Save dark-theme full logo
    full_logo_dark.save(os.path.join(d, "medfusion_logo_dark.png"), "PNG")
    
    # Save icon emblem
    square_icon.save(os.path.join(d, "medfusion_icon.png"), "PNG")
    square_icon.save(os.path.join(d, "icon.png"), "PNG")
    
    # Save badge
    badge_logo.convert("RGB").save(os.path.join(d, "medfusion_logo.jpg"), "JPEG", quality=95)

# Also save favicon
favicon_img = square_icon.resize((64, 64), Image.Resampling.LANCZOS)
favicon_img.save(r"d:\MedFusion-AI\medfusion-frontend\favicon.png", "PNG")
favicon_img.save(r"d:\MedFusion-AI\medfusion-frontend\favicon.ico", "ICO")
if os.path.exists(r"d:\MedFusion-AI\MedFusion-AI\MedFusion-AI\medfusion-frontend"):
    favicon_img.save(r"d:\MedFusion-AI\MedFusion-AI\MedFusion-AI\medfusion-frontend\favicon.png", "PNG")
    favicon_img.save(r"d:\MedFusion-AI\MedFusion-AI\MedFusion-AI\medfusion-frontend\favicon.ico", "ICO")

print("Logo generation completed successfully!")
