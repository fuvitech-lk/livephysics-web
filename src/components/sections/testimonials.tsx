import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Avatar } from "@/components/ui/avatar";

/**
 * Full-bleed, edge-faded looping wall of student feedback. Presentational
 * only — rendered under the "1000 Reasons why?" section (their stories ARE
 * the reasons). `fadeFrom` must match the surrounding section background.
 */
export function TestimonialsMarquee({
  fadeFrom = "from-bg",
}: {
  fadeFrom?: string;
}) {
  // Duplicate the list so the marquee track loops seamlessly (-50%).
  const track = [...testimonials, ...testimonials];

  return (
    <div className="pause-on-hover relative overflow-hidden">
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${fadeFrom} to-transparent sm:w-28`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${fadeFrom} to-transparent sm:w-28`}
      />

      <ul className="animate-marquee flex w-max gap-5">
        {track.map((t, i) => (
          <li
            key={`${t.name}-${i}`}
            className="w-[18rem] shrink-0 sm:w-[23rem]"
          >
            <figure className="flex h-full flex-col rounded-2xl glass p-7">
              <Quote
                className="text-brand-light/50"
                size={26}
                strokeWidth={1.5}
              />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-ink/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-4">
                <Avatar name={t.name} src={t.image} size={44} />
                <div>
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-sm text-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
