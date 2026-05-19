import { philosophy } from "@/lib/content";
import { Reveal, StaggerGroup } from "@/components/ui/reveal";
import { TestimonialsMarquee } from "@/components/sections/testimonials";

export function Philosophy() {
  return (
    <section
      id="why"
      className="relative scroll-mt-24 overflow-hidden section-pad"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 glow-brand opacity-40"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
              <span className="h-px w-6 bg-brand-light/60" />
              {philosophy.eyebrow}
              <span className="h-px w-6 bg-brand-light/60" />
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 space-y-4">
            {philosophy.lines.map((line) => (
              <Reveal key={line} direction="up">
                <p className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  {line}
                </p>
              </Reveal>
            ))}
          </StaggerGroup>

          <Reveal direction="up" delay={0.1}>
            <p className="mt-12 text-pretty text-lg text-muted">
              <span className="text-gradient font-semibold">
                {philosophy.closing}
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* Their stories — the reasons, in students' own words */}
      <div className="relative mt-20">
        <Reveal className="shell">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.22em] text-muted">
            …a thousand of them, in their own words
          </p>
        </Reveal>
        <TestimonialsMarquee fadeFrom="from-bg" />
      </div>
    </section>
  );
}
