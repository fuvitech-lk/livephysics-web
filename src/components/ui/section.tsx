import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

/** Anchored full-width section with consistent rhythm + nav-offset. */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 section-pad", className)}
    >
      <div className={cn("shell", containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
          <span className="h-px w-6 bg-brand-light/60" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-4xl sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
