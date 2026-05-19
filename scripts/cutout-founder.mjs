// One-off: cut the near-white studio background from the founder photo by
// keying on brightness + low saturation (the sweep is bright & neutral; the
// subject is colored), with a feathered edge. Run:
//   node scripts/cutout-founder.mjs
import sharp from "sharp";

const SRC = "C:/Users/Kasun/Downloads/WhatsApp Image 2026-05-19 at 16.36.17.jpeg";

// Tunables
const BRIGHT_HARD = 0.84; // >= => definitely background
const BRIGHT_SOFT = 0.66; // < => definitely keep
const SAT_MAX = 0.16; // background is close to neutral grey/white

const { data, info } = await sharp(SRC)
  .rotate()
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const bright = max / 255;
  const sat = max === 0 ? 0 : (max - min) / max;

  if (sat > SAT_MAX) continue; // colored subject pixel — keep fully

  let alpha = 1;
  if (bright >= BRIGHT_HARD) {
    alpha = 0;
  } else if (bright > BRIGHT_SOFT) {
    // feather: fade out as it gets brighter / closer to neutral
    const t = (bright - BRIGHT_SOFT) / (BRIGHT_HARD - BRIGHT_SOFT);
    alpha = 1 - t;
  }
  data[i + 3] = Math.round(data[i + 3] * alpha);
}

const out = sharp(data, { raw: { width, height, channels } })
  .png()
  // soften the keyed edge a touch, then trim transparent margins
  .trim({ threshold: 2 });

await out
  .clone()
  .resize({ width: 1000 })
  .png({ palette: true, quality: 82, effort: 10 })
  .toFile("public/founder.png");

const m = await sharp("public/founder.png").metadata();
console.log(`Done -> public/founder.png ${m.width}x${m.height}`);
