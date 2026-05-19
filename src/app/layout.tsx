import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted (variable woff2) so the build needs no network — required for
// reliable static-export CI on GitHub Pages.
const sora = localFont({
  variable: "--font-sora",
  display: "swap",
  src: "./fonts/Sora.woff2",
  weight: "400 800",
});

const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: "./fonts/Inter.woff2",
  weight: "100 900",
});

// Overridden in CI with the GitHub Pages URL; defaults to the production domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://livephysics.lk";
const DESCRIPTION =
  "The only book-backed online programme covering the full G.C.E. Advanced Level Physics syllabus in English medium — real interactive live classes, not streamed classroom video.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LivePhysics — Real Online A/L Physics, English Medium",
    template: "%s | LivePhysics",
  },
  description: DESCRIPTION,
  keywords: [
    "LivePhysics",
    "A/L Physics Sri Lanka",
    "Advanced Level Physics English medium",
    "online physics classes",
    "GCE A/L Physics",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "LivePhysics",
    title: "LivePhysics — Real Online A/L Physics, English Medium",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "LivePhysics — Real Online A/L Physics, English Medium",
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#070615",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        {/* Without JS, scroll-reveal elements never animate in — force them
            visible so the page is fully readable. */}
        <noscript>
          <style>{`*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
