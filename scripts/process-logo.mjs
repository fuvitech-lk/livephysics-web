// One-off asset prep: strip the white background from the brand logo and
// emit transparent PNGs for the dark theme. Run: node scripts/process-logo.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "C:/Users/Kasun/Downloads/IMG_0125.PNG";
const PUBLIC = "public";

// Pixels at/above HARD are fully transparent; between SOFT and HARD they
// fade out linearly so anti-aliased edges stay smooth (no white halo).
const HARD = 248;
const SOFT = 228;

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const whiteness = Math.min(r, g, b); // high only when pixel is near-white
  if (whiteness >= HARD) {
    data[i + 3] = 0;
  } else if (whiteness > SOFT) {
    const t = (whiteness - SOFT) / (HARD - SOFT); // 0..1 toward white
    data[i + 3] = Math.round(data[i + 3] * (1 - t));
  }
}

await mkdir(PUBLIC, { recursive: true });

const base = sharp(data, { raw: { width, height, channels } })
  .png()
  .trim({ threshold: 1 }); // crop the now-transparent border

// Full logo, transparent background, for nav/footer/hero.
await base.clone().resize({ width: 480 }).toFile(`${PUBLIC}/logo.png`);

// Square mark for favicon / app icon / OG, padded on transparent canvas.
await base
  .clone()
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toFile(`${PUBLIC}/logo-mark.png`);

console.log(`Done. Source ${width}x${height} -> public/logo.png, public/logo-mark.png`);
