import { z } from "zod";

/** 1 (learning) – 5 (strong), or "TODO" until self-rated. */
const proficiencySchema = z.union([
  z.number().int().min(1).max(5),
  z.literal("TODO"),
]);

const skillSchema = z.object({
  name: z.string(),
  level: proficiencySchema,
});

const skillCategorySchema = z.object({
  id: z.string(),
  label: z.string(),
  skills: z.array(skillSchema).min(1),
});

export type SkillCategory = z.infer<typeof skillCategorySchema>;

/**
 * Proficiency levels are all "TODO" — self-rating isn't something to
 * guess at. Fill in 1–5 per skill (see proficiencySchema) once you're
 * ready to commit to a number.
 */
const data: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages & Querying",
    skills: [
      { name: "Python", level: "TODO" },
      { name: "SQL", level: "TODO" },
    ],
  },
  {
    id: "data-tools",
    label: "Data Tools",
    skills: [
      { name: "Pandas", level: "TODO" },
      { name: "NumPy", level: "TODO" },
      { name: "Excel", level: "TODO" },
    ],
  },
  {
    id: "practices",
    label: "Engineering Practices",
    skills: [
      { name: "Git", level: "TODO" },
      { name: "Testing & QA Fundamentals", level: "TODO" },
    ],
  },
];

export const skills = z.array(skillCategorySchema).parse(data);
