"use client";

import { useEffect, useRef } from "react";

/**
 * Hero backdrop: a drifting electron field with faint constellation links,
 * echoing the logo's atomic-orbit motif. Canvas-based for performance —
 * DPR-capped, pauses when the tab is hidden, and falls back to a static
 * gradient under prefers-reduced-motion.
 */
export function OrbitBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; hot: boolean };
    let particles: P[] = [];

    const seed = () => {
      const count = Math.round(
        Math.min(90, Math.max(36, (w * h) / 22000)),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.6,
        hot: Math.random() < 0.12, // a few crimson "electrons"
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const LINK = 130;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const a = (1 - dist / LINK) * 0.16;
            ctx.strokeStyle = `rgba(124,108,255,${a})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hot
          ? "rgba(225,29,72,0.85)"
          : "rgba(150,138,255,0.6)";
        if (p.hot) {
          ctx.shadowColor = "rgba(225,29,72,0.8)";
          ctx.shadowBlur = 12;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(draw);
    };
    const stop = () => cancelAnimationFrame(raf);
    const onVisibility = () =>
      document.hidden ? stop() : start();

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {/* Ambient brand glows (also the reduced-motion fallback) */}
      <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] glow-brand opacity-70" />
      <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] glow-accent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_55%,var(--color-bg)_100%)]" />
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Subtle grid for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
