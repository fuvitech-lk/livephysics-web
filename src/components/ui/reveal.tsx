"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered reveal. Honors prefers-reduced-motion (renders instantly).
 * `delay` staggers siblings; `as` lets it wrap any element.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  const reduced = useReducedMotion();
  const { x, y } = reduced ? offset.none : offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Variant-driven child for use *inside* <StaggerGroup>. Unlike <Reveal> it
 * has no own trigger — the parent group orchestrates the cascade so siblings
 * animate in sequence rather than all at once.
 */
export function RevealItem({
  children,
  direction = "up",
  duration = 0.6,
  className,
  hover = false,
}: {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  className?: string;
  /** Adds a springy lift on hover (disabled under reduced motion). */
  hover?: boolean;
}) {
  const reduced = useReducedMotion();
  const { x, y } = reduced ? offset.none : offset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      whileHover={
        hover && !reduced
          ? { y: -8, transition: { type: "spring", stiffness: 300, damping: 18 } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers any <RevealItem> / motion children inside it. */
export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}
