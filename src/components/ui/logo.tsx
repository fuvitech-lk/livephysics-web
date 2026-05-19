import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { cn, asset } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
  size = 40,
}: {
  className?: string;
  priority?: boolean;
  size?: number;
}) {
  return (
    <Link
      href="#home"
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <Image
        src={asset("/logo.png")}
        alt=""
        width={size}
        height={size}
        priority={priority}
        className="h-auto w-auto drop-shadow-[0_0_14px_rgba(108,99,255,0.35)]"
        style={{ height: size }}
      />
      <span className="font-display text-lg font-extrabold tracking-tight">
        Live<span className="text-gradient">Physics</span>
      </span>
    </Link>
  );
}
