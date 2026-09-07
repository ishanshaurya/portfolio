import type { SkillCategory } from "@/content/skills";
import { cn } from "@/lib/utils";

type Skill = SkillCategory["skills"][number];

export function SkillCard({ skill }: { skill: Skill }) {
  const level = skill.level === "TODO" ? 0 : skill.level;
  const isTodo = skill.level === "TODO";

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="font-mono text-sm text-foreground">{skill.name}</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex gap-1" role="img" aria-label={isTodo ? `${skill.name}: proficiency not set` : `${skill.name}: ${skill.level} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={cn(
                "h-2 w-2 rounded-full",
                i < level ? "bg-accent" : "bg-border",
              )}
            />
          ))}
        </div>
        {isTodo && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            todo
          </span>
        )}
      </div>
    </div>
  );
}
