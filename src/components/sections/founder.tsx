import Image from "next/image";
import { founder } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Founder() {
  return (
    <Section id="founder" className="bg-bg-soft">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
              <span className="h-px w-6 bg-brand-light/60" />
              {founder.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl">
              {founder.name.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-gradient">
                {founder.name.split(" ").slice(2).join(" ")}
              </span>
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-muted">
              {founder.role}
            </p>
          </Reveal>

          <div className="mt-7 space-y-4">
            {founder.bio.map((p, i) => (
              <Reveal key={i} direction="up" delay={0.08 * (i + 1)}>
                <p className="text-pretty leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={0.3}>
            <blockquote className="mt-9 border-l-2 border-accent pl-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
              <span className="text-gradient">“{founder.quote}”</span>
            </blockquote>
          </Reveal>
        </div>

        <Reveal direction="left" className="order-1 lg:order-2">
          <figure className="relative mx-auto w-full max-w-md">
            {/* brand glow */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 glow-brand opacity-70 animate-pulse-glow"
            />
            {/* decorative atomic orbit ring echoing the logo */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 animate-orbit-slow rounded-full border border-brand-light/20 [transform:rotateX(74deg)]"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 animate-orbit-rev rounded-full border border-accent/15 [transform:rotateX(74deg)_rotateY(60deg)]"
            />
            {/* soft pedestal grounding the cut-out figure */}
            <div
              aria-hidden
              className="absolute bottom-2 left-1/2 -z-10 h-10 w-3/5 -translate-x-1/2 rounded-[100%] bg-brand-light/20 blur-2xl"
            />
            <Image
              src={founder.image}
              alt={`${founder.name}, ${founder.role}`}
              width={1000}
              height={1149}
              sizes="(min-width: 1024px) 32rem, 80vw"
              priority={false}
              className="relative mx-auto w-full animate-float drop-shadow-[0_28px_45px_rgba(0,0,0,0.55)] [mask-image:linear-gradient(to_bottom,black_86%,transparent)]"
            />
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
