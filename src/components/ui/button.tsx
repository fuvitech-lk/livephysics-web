"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "disabled:pointer-events-none disabled:opacity-50";

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_10px_40px_-10px_rgba(225,29,72,0.7)] hover:bg-accent-soft",
  secondary:
    "glass text-ink hover:bg-surface-2/80 border border-hairline",
  ghost: "text-muted hover:text-ink",
};

/**
 * CTA button that renders as a link. `magnetic` adds a subtle cursor-follow
 * pull (disabled under prefers-reduced-motion).
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  magnetic = false,
  className,
  external = false,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  magnetic?: boolean;
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const enableMagnet = magnetic && !reduced;

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!enableMagnet || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        base,
        sizes[size],
        variants[variant],
        "will-change-transform",
        className,
      )}
      style={{ transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </motion.a>
  );
}
