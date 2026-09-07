import { z } from "zod";

const socialLinkSchema = z.object({
  label: z.string(),
  url: z.string(),
  /** True while the URL is a TODO placeholder — hide from nav until filled in. */
  todo: z.boolean().default(false),
});

const profileSchema = z.object({
  name: z.string(),
  /** Short line shown in the hero/header, e.g. "Student, aiming at ...". */
  tagline: z.string(),
  /** One-paragraph bio for <meta description> and the About section lede. */
  bio: z.string(),
  /** Longer About-section prose, one entry per paragraph. */
  longBio: z.array(z.string()).min(1),
  location: z.string(),
  /** Free-text availability line shown as a status chip. */
  availability: z.string(),
  /** Role titles cycled in the hero marquee. */
  roles: z.array(z.string()).min(1),
  email: z.string(),
  socials: z.array(socialLinkSchema),
  /** Four capability cards shown next to the About photo. */
  capabilities: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .length(4),
});

export type Profile = z.infer<typeof profileSchema>;

const data: Profile = {
  name: "Shaurya",
  tagline: "Student — Data Engineering, QA & Data Reliability",
  bio: "Student working toward data engineering, QA, and data reliability internships. Focused on validation, testing fundamentals, and building tools that make data trustworthy.",
  longBio: [
    "I'm a student aiming at data engineering, QA, and data reliability roles. I like the parts of software that most people skip past: making sure the data is correct, the edge cases are covered, and the pipeline doesn't silently break.",
    "TODO — replace with a real second paragraph: what you're studying, what you're building toward, what draws you to data reliability/QA specifically.",
  ],
  location: "TODO — city, country",
  availability: "Open to internships",
  roles: [
    "Aspiring Data Engineer",
    "QA & Validation",
    "Data Reliability",
    "Python / SQL",
  ],
  email: "TODO@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/TODO", todo: true },
    { label: "LinkedIn", url: "https://linkedin.com/in/TODO", todo: true },
  ],
  capabilities: [
    {
      title: "Data Validation",
      description:
        "Comfortable writing checks that catch bad data before it reaches a dashboard or a decision.",
    },
    {
      title: "QA & Boundary Testing",
      description:
        "Practiced at boundary-condition and edge-case testing — hands-on experience from Rainbow Hospitals device validation work.",
    },
    {
      title: "Python for Data",
      description:
        "Pandas and NumPy for cleaning, shaping, and sanity-checking datasets.",
    },
    {
      title: "SQL & Spreadsheet Tooling",
      description:
        "SQL for querying and Excel for fast turnaround analysis and reporting.",
    },
  ],
};

export const profile = profileSchema.parse(data);
