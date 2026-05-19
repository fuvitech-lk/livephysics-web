import { Check, MonitorSmartphone } from "lucide-react";
import { about } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Section id="about" className="bg-bg-soft">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow={about.eyebrow}
          title={
            <>
              Learn from <span className="text-gradient">anywhere</span> in the
              world
            </>
          }
          description={about.body}
          className="lg:max-w-none"
        />

        <Reveal direction="left">
          <div className="relative rounded-2xl glass p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 glow-brand opacity-60"
            />
            <MonitorSmartphone
              className="text-brand-light"
              size={36}
              strokeWidth={1.5}
            />
            <ul className="mt-6 space-y-4">
              {about.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-pretty text-ink/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
