import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="( what I've built )"
            title="Selected Projects"
            accentWord="Selected"
            description="Placeholder set — real write-ups, tech stacks, and screenshots replace these one file, one edit at a time."
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={(i % 4) * 0.05}>
              <ProjectCard project={project} index={i} featured={i % 3 === 0} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
