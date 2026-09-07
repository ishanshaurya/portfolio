import { z } from "zod";

const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  location: z.string().optional(),
  /** Free text, e.g. "Jun 2025 – Aug 2025" or "Jun 2025 – Present". */
  dates: z.string(),
  bullets: z.array(z.string()).min(1),
  tech: z.array(z.string()),
  draft: z.boolean().default(false),
});

export type Experience = z.infer<typeof experienceSchema>;

/**
 * No confirmed work history was provided yet — left empty rather than
 * inventing a company, title, or dates. Add entries here (one edit,
 * this file only) once there's real experience to list; the Experience
 * section renders a placeholder state when this array is empty.
 */
const data: Experience[] = [];

export const experience = z.array(experienceSchema).parse(data);
