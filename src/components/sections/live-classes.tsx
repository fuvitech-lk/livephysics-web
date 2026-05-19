import { Radio, MonitorPlay, Eye, Smartphone } from "lucide-react";
import { liveClasses } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, StaggerGroup, RevealItem } from "@/components/ui/reveal";

const icons = [Radio, MonitorPlay, Eye, Smartphone];

export function LiveClasses() {
  return (
    <Section id="classes">
      <SectionHeading
        eyebrow={liveClasses.eyebrow}
        title={
          <>
            We do <span className="text-gradient">not</span> stream classroom
            teaching
          </>
        }
        description={liveClasses.lead}
      />

      <Reveal className="mx-auto mt-6 max-w-2xl text-center text-pretty text-muted">
        {liveClasses.body}
      </Reveal>

      <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {liveClasses.features.map((f, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={f.title} direction="up" hover className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl glass p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 glow-brand opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/20 text-brand-light ring-1 ring-brand-light/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/30">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="mt-6 text-lg">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {f.body}
                </p>
              </article>
            </RevealItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
