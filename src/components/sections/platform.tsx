import Image from "next/image";
import { LayoutGrid, Bot, LineChart } from "lucide-react";
import { platform } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal, StaggerGroup, RevealItem } from "@/components/ui/reveal";

const icons = [LayoutGrid, Bot, LineChart];

export function Platform() {
  return (
    <Section id="platform">
      <SectionHeading
        eyebrow={platform.eyebrow}
        title={
          <>
            Not just classes — a complete{" "}
            <span className="text-gradient">learning platform</span>
          </>
        }
        description={platform.body}
      />

      {/* LMS in a browser-frame mockup */}
      <Reveal direction="up" className="mt-14">
        <figure className="relative mx-auto max-w-4xl">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 glow-brand opacity-60"
          />
          <div className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-accent/70" />
              <span className="h-3 w-3 rounded-full bg-brand-light/60" />
              <span className="h-3 w-3 rounded-full bg-faint/50" />
              <span className="ml-4 hidden rounded-md bg-bg px-3 py-1 text-xs text-faint sm:block">
                {platform.screenshotUrl}
              </span>
            </div>
            <Image
              src={platform.screenshot}
              alt={platform.screenshotAlt}
              width={1600}
              height={762}
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="w-full"
            />
          </div>
        </figure>
      </Reveal>

      <StaggerGroup
        className="mt-12 grid gap-5 md:grid-cols-3"
        stagger={0.12}
      >
        {platform.pillars.map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <RevealItem key={p.title} direction="up" hover className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl glass p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 glow-brand opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/20 text-brand-light ring-1 ring-brand-light/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand/30">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            </RevealItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
