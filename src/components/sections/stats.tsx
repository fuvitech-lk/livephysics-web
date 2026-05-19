import { stats } from "@/lib/content";
import { StaggerGroup, RevealItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-hairline bg-bg-soft py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[40rem] -translate-x-1/2 -translate-y-1/2 glow-brand opacity-40"
      />
      <div className="shell relative">
        <StaggerGroup
          className="grid grid-cols-2 gap-y-12 lg:grid-cols-4"
          stagger={0.14}
        >
          {stats.map((s) => (
            <RevealItem
              key={s.label}
              direction="up"
              className="group text-center"
            >
              <div className="font-display text-4xl font-extrabold transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                <span className="text-gradient">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{s.label}</p>
            </RevealItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
