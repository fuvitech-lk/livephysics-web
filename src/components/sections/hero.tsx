import Image from "next/image";
import { hero } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { OrbitBackdrop } from "@/components/backdrop/orbit-backdrop";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <OrbitBackdrop />

      <div className="shell relative grid items-center gap-16 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal direction="up">
            <h1 className="text-5xl leading-[1.04] sm:text-6xl xl:text-7xl">
              {hero.title[0]}
              <br />
              {hero.title[1]}{" "}
              <span className="text-gradient text-gradient-anim">
                {hero.highlight}
              </span>
              .
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={hero.primaryCta.href} size="lg" magnetic>
                {hero.primaryCta.label}
              </Button>
              <Button
                href={hero.secondaryCta.href}
                size="lg"
                variant="secondary"
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.2} className="hidden lg:block">
          <HeroVisual />
        </Reveal>
      </div>

      <a
        href="#classes"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-hairline p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-brand-light" />
        </span>
      </a>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 scale-110 glow-brand animate-pulse-glow" />
      {/* Concentric atomic orbits echoing the logo */}
      <div className="absolute inset-0 animate-orbit-slow">
        <div className="absolute inset-[8%] rounded-full border border-brand-light/25" />
        <div className="absolute inset-[8%] rotate-[60deg] rounded-full border border-brand-light/20 [transform:rotateX(72deg)]" />
        <div className="absolute inset-[8%] -rotate-[60deg] rounded-full border border-accent/25 [transform:rotateX(72deg)_rotateY(60deg)]" />
      </div>
      <div className="absolute inset-0 animate-orbit-rev">
        <div className="absolute left-1/2 top-[8%] h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_24px_6px_rgba(225,29,72,0.6)]" />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <Image
          src="/logo-mark.png"
          alt=""
          width={220}
          height={220}
          priority
          className="w-[42%] animate-float drop-shadow-[0_0_45px_rgba(108,99,255,0.5)]"
        />
      </div>
    </div>
  );
}
