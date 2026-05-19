import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "LivePhysics — Real online G.C.E. A/L Physics in English medium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// satori (next/og) requires every <div> with >1 child to set display:flex,
// so each text line is its own single-child div.
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 78% 28%, #2a1c5a 0%, #070615 60%)",
          color: "#f5f4ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={96} height={96} alt="" />
          <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            LivePhysics
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Physics, taught the way
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#8b7bff",
            }}
          >
            it should be experienced.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#a7a3cf",
              marginTop: 14,
              maxWidth: 900,
            }}
          >
            Full G.C.E. A/L Physics syllabus · English medium · live classes
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#a7a3cf",
          }}
        >
          <span
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#e11d48",
            }}
          />
          livephysics.lk
        </div>
      </div>
    ),
    size,
  );
}
