import type { NextConfig } from "next";

// Static export for GitHub Pages. The repo is served from a project sub-path
// (https://<owner>.github.io/<repo>/), so basePath/assetPrefix are injected
// by CI via NEXT_PUBLIC_BASE_PATH. Empty locally so `npm run dev` is normal.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
