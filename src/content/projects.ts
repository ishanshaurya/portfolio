import { z } from "zod";

const projectLinkSchema = z
  .object({
    demo: z.string().optional(),
    repo: z.string().optional(),
    caseStudy: z.string().optional(),
  })
  .default({});

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  /** Four-digit year, or "TODO" until confirmed. */
  year: z.union([z.number().int(), z.literal("TODO")]),
  /** One-line card summary. */
  summary: z.string(),
  /** Longer prose for the project detail view. */
  longDescription: z.string(),
  tech: z.array(z.string()).min(1),
  /** Path under /public, e.g. "/projects/nexora.svg". */
  image: z.string(),
  links: projectLinkSchema,
  /** True while this entry is placeholder/unverified content. */
  draft: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema>;

/**
 * All placeholder for now (draft: true) — real screenshots, tech stacks,
 * years, and links go in public/projects/ and here, one file, one edit.
 */
const data: Project[] = [
  {
    id: "nexora",
    title: "Nexora",
    year: "TODO",
    summary: "Community events app — dashboard, rep list, event creation, my-events.",
    longDescription:
      "Nexora is a community events app covering a dashboard, a reps list, event creation, and a my-events view. TODO — replace with real detail: your role, what problem it solved, and how it was built.",
    tech: ["TODO"],
    image: "/projects/nexora.svg",
    links: {},
    draft: true,
  },
  {
    id: "rainbow-hospitals",
    title: "Rainbow Hospitals",
    year: "TODO",
    summary: "Device validation and boundary-condition testing work.",
    longDescription:
      "Validation and boundary-condition testing for medical devices at Rainbow Hospitals. TODO — replace with real detail: what devices/systems, what testing approach, what you found.",
    tech: ["TODO"],
    image: "/projects/rainbow-hospitals.svg",
    links: {},
    draft: true,
  },
  {
    id: "polyvox",
    title: "PolyVox",
    year: "TODO",
    summary: "Internship project — QA and validation focus.",
    longDescription:
      "Internship work at PolyVox focused on QA and validation. TODO — replace with real detail: what the product was, what you tested, tools used.",
    tech: ["TODO"],
    image: "/projects/polyvox.svg",
    links: {},
    draft: true,
  },
  {
    id: "internship-outreach-tracker",
    title: "Internship Outreach Tracker",
    year: "TODO",
    summary: "Spreadsheet automation tool for tracking internship outreach.",
    longDescription:
      "A spreadsheet automation tool built to track internship outreach. TODO — replace with real detail: what it automates, what tools/language, what it saved you.",
    tech: ["TODO"],
    image: "/projects/internship-outreach-tracker.svg",
    links: {},
    draft: true,
  },
];

export const projects = z.array(projectSchema).parse(data);
