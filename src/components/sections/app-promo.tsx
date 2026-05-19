import Image from "next/image";
import { Apple, Play, Sparkles, Check } from "lucide-react";
import { appPromo } from "@/lib/content";
import { asset } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Reveal, StaggerGroup } from "@/components/ui/reveal";

/** Round head-crop of the SDee.ai mascot, used as a chat/card avatar. */
function SdeeAvatar({ size = 40 }: { size?: number }) {
  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden rounded-full bg-brand/25 ring-1 ring-brand-light/30"
      style={{ width: size, height: size }}
    >
      <Image
        src={asset("/sdee.png")}
        alt=""
        width={size * 2}
        height={size * 2}
        className="absolute left-1/2 top-[6%] max-w-none -translate-x-1/2"
        style={{ width: size * 1.7 }}
      />
    </span>
  );
}

function StoreBadge({
  href,
  icon,
  top,
  bottom,
}: {
  href: string;
  icon: React.ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-hairline bg-surface px-5 py-3 transition-colors hover:border-brand-light/40 hover:bg-surface-2"
    >
      <span className="text-ink">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.65rem] uppercase tracking-wide text-muted">
          {top}
        </span>
        <span className="font-display text-base font-semibold">{bottom}</span>
      </span>
    </a>
  );
}

export function AppPromo() {
  const { sdee } = appPromo;

  return (
    <Section id="app" className="bg-bg-soft">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
              <span className="h-px w-6 bg-brand-light/60" />
              {appPromo.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl">
              Your studying,{" "}
              <span className="text-gradient">measured and motivated</span>
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {appPromo.body}
            </p>
          </Reveal>

          <StaggerGroup className="mt-9 space-y-4">
            {appPromo.features.map((f) => (
              <Reveal key={f.title} direction="up">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-pretty text-ink/90">
                    <span className="font-semibold">{f.title}.</span>{" "}
                    <span className="text-muted">{f.body}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </StaggerGroup>

          {/* SDee.ai highlight */}
          <Reveal direction="up" delay={0.15}>
            <div className="mt-9 flex items-start gap-4 rounded-2xl border border-brand-light/20 bg-brand/10 p-6">
              <SdeeAvatar size={52} />
              <div>
                <p className="inline-flex flex-wrap items-center gap-x-2 font-display font-bold">
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles size={16} className="text-brand-light" />
                    {sdee.name}
                  </span>
                  <span className="font-normal text-muted">
                    — {sdee.tagline}
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {sdee.body}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-4">
              <StoreBadge
                href={appPromo.stores.appStore}
                icon={<Apple size={26} />}
                top="Download on the"
                bottom="App Store"
              />
              <StoreBadge
                href={appPromo.stores.playStore}
                icon={<Play size={24} />}
                top="Get it on"
                bottom="Google Play"
              />
            </div>
          </Reveal>
        </div>

        <Reveal direction="left">
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 scale-110 glow-brand opacity-70"
            />
            <div className="flex justify-end pr-2 sm:pr-6">
              <PhoneMock />
            </div>
            {/* SDee.ai mascot presenting the app */}
            <Image
              src={asset("/sdee.png")}
              alt={`${sdee.name} — ${sdee.tagline}`}
              width={620}
              height={935}
              className="animate-float pointer-events-none absolute -bottom-6 left-0 w-[44%] max-w-[12rem] drop-shadow-[0_18px_40px_rgba(108,99,255,0.35)]"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function PhoneMock() {
  const { sdee } = appPromo;
  return (
    <div className="relative w-[15.5rem] sm:w-[16.5rem]">
      <div className="relative rounded-[2.5rem] border border-hairline bg-surface p-3 shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-bg" />
        <div className="overflow-hidden rounded-[2rem] bg-bg">
          {/* app header */}
          <div className="flex items-center justify-between border-b border-hairline px-5 py-4 pt-7">
            <span className="font-display text-sm font-extrabold">
              Live<span className="text-gradient">Physics</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>

          {/* progress ring */}
          <div className="flex items-center gap-4 px-5 py-5">
            <div className="relative grid h-16 w-16 place-items-center">
              <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15.5"
                  fill="none"
                  stroke="#6c63ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="97"
                  strokeDashoffset="23"
                />
              </svg>
              <span className="absolute font-display text-sm font-bold">
                76%
              </span>
            </div>
            <div>
              <p className="text-xs text-muted">This week&apos;s goal</p>
              <p className="font-display text-sm font-semibold">
                On track — 5 day streak 🔥
              </p>
            </div>
          </div>

          {/* SDee.ai chat */}
          <div className="space-y-3 border-t border-hairline px-5 py-5">
            <p className="flex items-center gap-2 text-xs font-semibold text-brand-light">
              <SdeeAvatar size={22} /> {sdee.name}
            </p>
            <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand/30 px-3 py-2 text-[0.7rem] leading-snug">
              {sdee.sampleQuestion}
            </div>
            <div className="w-fit max-w-[88%] rounded-2xl rounded-bl-sm bg-surface-2 px-3 py-2 text-[0.7rem] leading-snug text-ink/90">
              {sdee.sampleAnswer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
