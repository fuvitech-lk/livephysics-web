import Image from "next/image";
import { institutes } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { StaggerGroup, RevealItem } from "@/components/ui/reveal";

export function Institutes() {
  return (
    <Section id="institutes" className="bg-bg-soft">
      <SectionHeading
        eyebrow={institutes.eyebrow}
        title={
          <>
            Where LivePhysics classes are{" "}
            <span className="text-gradient">held</span>
          </>
        }
        description={institutes.body}
      />

      <StaggerGroup
        className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        stagger={0.1}
      >
        {institutes.logos.map((logo) => (
          <RevealItem key={logo.name} direction="up" hover>
            <div className="group flex h-28 items-center justify-center rounded-2xl border border-hairline bg-white/95 px-6 shadow-lg shadow-black/20 transition-shadow duration-300 hover:shadow-brand-light/20">
              <Image
                src={logo.src}
                alt={`${logo.name} — LivePhysics partner institute`}
                width={220}
                height={88}
                className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </RevealItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
