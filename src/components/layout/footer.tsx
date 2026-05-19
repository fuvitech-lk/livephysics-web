import { footer, site } from "@/lib/content";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-bg-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 glow-brand opacity-60"
      />
      <div className="shell relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Logo size={40} />
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {footer.blurb}
          </p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-faint">
              {col.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="shell flex flex-col items-center justify-between gap-3 border-t border-hairline py-6 text-xs text-faint sm:flex-row">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>G.C.E. Advanced Level Physics · English Medium · Sri Lanka</p>
      </div>
    </footer>
  );
}
