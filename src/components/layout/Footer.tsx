import { navItems } from "@/lib/nav";
import { profile } from "@/content/profile";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <RevealOnScroll>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            ( get in touch )
          </p>
          <h2 className="mt-4 font-heading text-4xl sm:text-6xl font-semibold tracking-tight text-foreground">
            Let&rsquo;s talk about
            <br />
            <span className="text-accent">an internship</span>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {profile.email}
            <span aria-hidden>↗</span>
          </a>
          {profile.email.includes("TODO") && (
            <p className="mt-2 font-mono text-xs text-muted">
              TODO — profile.email is a placeholder, update src/content/profile.ts
            </p>
          )}
        </RevealOnScroll>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              {profile.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">{profile.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              ( navigate )
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs tracking-widest text-muted uppercase">
              ( connect )
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {social.label}
                    {social.todo && (
                      <span className="ml-1 text-xs text-muted">(TODO)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-muted">
            <p>© {year} {profile.name}</p>
            <p>Built with Next.js &amp; Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
