import { Phone, Mail, MessageCircle } from "lucide-react";
import { contact, site } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 section-pad">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-surface/50 px-6 py-16 text-center sm:px-16 sm:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 glow-brand opacity-70"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 glow-accent opacity-60"
            />

            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
              {contact.eyebrow}
            </p>
            <h2 className="relative mx-auto mt-5 max-w-2xl text-balance text-4xl sm:text-5xl">
              {contact.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-pretty text-lg text-muted">
              {contact.body}
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href={site.whatsapp}
                size="lg"
                magnetic
                external
              >
                <MessageCircle size={18} />
                Message us on WhatsApp
              </Button>
              <Button
                href={`tel:${site.phoneIntl}`}
                size="lg"
                variant="secondary"
              >
                <Phone size={18} />
                {site.phoneDisplay}
              </Button>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="relative mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <Mail size={16} />
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
