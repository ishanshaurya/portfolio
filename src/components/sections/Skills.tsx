import { skills } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SkillCard } from "@/components/SkillCard";

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="( my toolkit )"
            title="Skills & Stack"
            accentWord="Stack"
            description="Proficiency dots are unset (TODO) until self-rated honestly — see src/content/skills.ts."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {skills.map((category, ci) => (
            <RevealOnScroll key={category.id} delay={ci * 0.08}>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {category.label}
                </h3>
                <div className="mt-4 grid gap-3">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
