import Image from "next/image";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  featured,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const hasLinks = Object.values(project.links).some(Boolean);

  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-surface overflow-hidden flex flex-col",
        featured && "sm:col-span-2",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes={featured ? "(min-width: 640px) 800px, 100vw" : "(min-width: 640px) 400px, 100vw"}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {project.draft && (
          <span className="absolute top-3 right-3 rounded-full bg-background/85 border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
            Draft
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            <span className="font-mono text-sm text-muted mr-2">
              №{String(index + 1).padStart(2, "0")}
            </span>
            {project.title}
          </h3>
          <span className="font-mono text-sm text-accent shrink-0">
            {project.year}
          </span>
        </div>

        <p className="mt-3 text-muted">{project.summary}</p>

        <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {hasLinks ? (
            <a
              href={project.links.demo ?? project.links.repo ?? project.links.caseStudy}
              className="font-mono text-xs text-foreground hover:text-accent transition-colors shrink-0"
            >
              view ↗
            </a>
          ) : (
            <span className="font-mono text-xs text-muted shrink-0">links TODO</span>
          )}
        </div>
      </div>
    </article>
  );
}
