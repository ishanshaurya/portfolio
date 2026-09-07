import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="( where I've worked )"
            title="Experience"
            description={
              experience.length === 0
                ? undefined
                : "Roles and internships, most recent first."
            }
          />
        </RevealOnScroll>

        {experience.length === 0 ? (
          <RevealOnScroll delay={0.1}>
            <div className="mt-10 rounded-2xl border border-dashed border-border p-8 max-w-xl">
              <p className="font-mono text-sm text-muted">
                No confirmed work history yet — this section fills in once
                there&rsquo;s a real role to list. See{" "}
                <span className="text-foreground">src/content/experience.ts</span>.
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <ol className="mt-12 space-y-8">
            {experience.map((role, i) => (
              <RevealOnScroll key={role.id} delay={i * 0.05}>
                <li className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {role.role} <span className="text-muted">· {role.company}</span>
                    </h3>
                    <span className="font-mono text-sm text-accent">{role.dates}</span>
                  </div>
                  {role.location && (
                    <p className="mt-1 text-sm text-muted">{role.location}</p>
                  )}
                  <ul className="mt-4 space-y-2 text-muted list-disc list-inside">
                    {role.bullets.map((bullet, bi) => (
                      <li key={bi}>{bullet}</li>
                    ))}
                  </ul>
                  {role.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
