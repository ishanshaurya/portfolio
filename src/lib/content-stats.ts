import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { profile } from "@/content/profile";

/**
 * Hero stats strip is computed from the actual content files rather than
 * hand-typed numbers — nothing here is a claim that isn't backed by
 * something already in src/content/.
 */
export function getHeroStats() {
  const skillCount = skills.reduce((n, cat) => n + cat.skills.length, 0);

  return [
    { value: String(projects.length), label: "Projects listed" },
    { value: String(skills.length), label: "Skill areas" },
    { value: String(skillCount), label: "Tools & skills" },
    { value: profile.availability, label: "Status" },
  ];
}
