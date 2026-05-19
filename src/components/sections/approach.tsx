import { approach } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, RevealItem } from "@/components/ui/reveal";

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading
        eyebrow={approach.eyebrow}
        title={
          <>
            A complete path from first concept to{" "}
            <span className="text-gradient">exam hall</span>
          </>
        }
      />

      <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {approach.steps.map((s) => (
          <RevealItem key={s.step} direction="up" hover className="h-full">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-surface/40 p-7 transition-colors duration-300 hover:border-brand-light/40">
              <span className="inline-block font-display text-5xl font-extrabold text-faint/40 transition-all duration-300 group-hover:scale-110 group-hover:text-brand-light/70">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
              <span
                aria-hidden
                className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-light to-accent transition-transform duration-500 group-hover:scale-x-100"
              />
            </article>
          </RevealItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
