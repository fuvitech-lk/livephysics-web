// One-off: self-host Sora + Inter (latin) so the build needs no network.
// Run: node scripts/fetch-fonts.mjs
import { mkdir, writeFile } from "node:fs/promises";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36";
const CSS =
  "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
const OUT = "src/app/fonts";

const css = await (await fetch(CSS, { headers: { "User-Agent": UA } })).text();

// Each @font-face is preceded by a `/* subset */` comment.
const blocks = css.split("/*").slice(1);
await mkdir(OUT, { recursive: true });

const wanted = new Set(["latin"]);
const saved = [];
for (const b of blocks) {
  const subset = b.slice(0, b.indexOf("*/")).trim();
  if (!wanted.has(subset)) continue;
  const fam = /font-family: '([^']+)'/.exec(b)?.[1];
  const wght = /font-weight: (\d+)/.exec(b)?.[1];
  const url = /src: url\((https:[^)]+\.woff2)\)/.exec(b)?.[1];
  if (!fam || !wght || !url) continue;
  const file = `${fam}-${wght}.woff2`;
  const buf = Buffer.from(
    await (await fetch(url, { headers: { "User-Agent": UA } })).arrayBuffer(),
  );
  await writeFile(`${OUT}/${file}`, buf);
  saved.push(`${file} (${buf.length} bytes)`);
}
console.log("Saved:\n" + saved.join("\n"));
