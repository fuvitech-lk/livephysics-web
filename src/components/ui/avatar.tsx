import Image from "next/image";
import { cn } from "@/lib/utils";

// Static gradient strings so Tailwind keeps them in the build.
const GRADIENTS = [
  "from-brand to-brand-light",
  "from-brand-light to-accent",
  "from-accent to-brand",
  "from-brand-glow to-brand-light",
  "from-brand to-accent-soft",
];

function initialsOf(name: string) {
  const parts = name.replace(/[^\p{L}\s]/gu, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Person avatar. Uses a real photo when `src` is given, otherwise a
 * deterministic brand-gradient initials chip (so sample students stay
 * consistent and no fake faces are implied).
 */
export function Avatar({
  name,
  src,
  size = 48,
  className,
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const base = "shrink-0 rounded-full ring-1 ring-white/15";

  if (src) {
    return (
      <span
        className={cn(base, "relative overflow-hidden", className)}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          fill
          sizes={`${size}px`}
          className="object-cover"
        />
      </span>
    );
  }

  const grad = GRADIENTS[hash(name) % GRADIENTS.length];
  return (
    <span
      aria-hidden
      className={cn(
        base,
        "grid place-items-center bg-gradient-to-br font-display font-semibold text-white",
        grad,
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initialsOf(name)}
    </span>
  );
}
