import Image from "next/image";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="about" aria-label="About me" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading eyebrow="( get to know me )" title="About Me" accentWord="Me" />
        </RevealOnScroll>

        <div className="mt-12 grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <RevealOnScroll delay={0.05}>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={0.1}>
              <div className="space-y-4 text-lg text-muted max-w-2xl">
                {profile.longBio.map((paragraph, i) => (
                  <p key={i} className={paragraph.startsWith("TODO") ? "font-mono text-sm text-accent" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {profile.capabilities.map((cap) => (
                  <li
                    key={cap.title}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <p className="font-heading text-base font-semibold text-foreground">
                      {cap.title}
                    </p>
                    <p className="mt-2 text-sm text-muted">{cap.description}</p>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
