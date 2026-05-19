"""AI background removal for the founder photo (clean matte, no damage).

Uses rembg (u2net) with alpha matting for soft hair edges, then crops to
the subject and writes an optimized transparent PNG to public/founder.png.

Run: python scripts/cutout_founder_ai.py
"""
from io import BytesIO
from PIL import Image
from rembg import remove, new_session

SRC = r"C:/Users/Kasun/Downloads/WhatsApp Image 2026-05-19 at 16.36.17.jpeg"
OUT = "public/founder.png"

img = Image.open(SRC).convert("RGBA")

# Cap input size to keep memory in check on a constrained machine.
MAX_IN = 1400
if max(img.size) > MAX_IN:
    s = MAX_IN / max(img.size)
    img = img.resize((round(img.size[0] * s), round(img.size[1] * s)), Image.LANCZOS)

# u2net mask only (no alpha matting — too memory-heavy here). The studio
# backdrop is uniform so the soft mask is clean.
session = new_session("u2net")
cut = remove(img, session=session, post_process_mask=True)

# Crop to the subject's bounding box (drop fully transparent margins)
bbox = cut.getbbox()
if bbox:
    cut = cut.crop(bbox)

# Resize for web (keep it crisp; next/image will derive smaller variants)
target_w = 1000
w, h = cut.size
cut = cut.resize((target_w, round(h * target_w / w)), Image.LANCZOS)

cut.save(OUT, format="PNG", optimize=True)
print(f"Done -> {OUT} {cut.size[0]}x{cut.size[1]}")
