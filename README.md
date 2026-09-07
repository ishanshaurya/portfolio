# Portfolio

Shaurya's personal portfolio. Next.js 15 (App Router, TypeScript, Tailwind v4), single-page scroll with sticky nav, dark-default theme with a persisted light toggle.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # production build
pnpm start      # serve the production build
pnpm lint       # eslint
```

Requires Node 20+ and pnpm. If you don't have pnpm: `corepack enable` (Node ships corepack) or `npm install -g pnpm`.

## Add a project

Everything content-related lives in `src/content/` as typed, Zod-validated data — nothing is hardcoded in components. Bad data fails `pnpm build`, not silently at runtime.

To add a project:

1. Drop the screenshot in `public/projects/your-project.png` (or `.svg` if you don't have one yet — see the gradient placeholders already there for the pattern).
2. Add one entry to the array in `src/content/projects.ts`:

```ts
{
  id: "your-project",
  title: "Your Project",
  year: 2026,
  summary: "One-line card summary.",
  longDescription: "Longer paragraph for the detail view.",
  tech: ["Next.js", "TypeScript"],
  image: "/projects/your-project.png",
  links: { demo: "https://...", repo: "https://github.com/..." },
  draft: false,
}
```

That's the whole change — one file, one image drop. `draft: true` shows a "Draft" badge on the card; flip it to `false` once the entry is real. Leave any field you don't have a real value for as the string `"TODO"` rather than guessing — several fields (`year`, `tech`, skill `level`) accept `"TODO"` in their type specifically so this fails loudly in review, not silently in prod.

Same pattern for `src/content/profile.ts` (bio, socials, capability cards), `src/content/experience.ts` (roles — currently empty, see NOTES.md), and `src/content/skills.ts` (categorised skills with a 1–5 proficiency dot, or `"TODO"`).

## Deploy to Vercel

1. Push to GitHub (already done — see repo URL from the assistant's summary, or `git remote -v`).
2. [vercel.com/new](https://vercel.com/new) → import the repo → it auto-detects Next.js, no config needed.
3. Or via CLI: `pnpm dlx vercel` from the project root, follow the prompts.

No environment variables are required — everything is static content compiled at build time.

## Stack

- Next.js 15 (App Router, `src/` dir), React 19, TypeScript (strict)
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`, no `tailwind.config.js`)
- Zod for content validation
- `next-themes` for dark/light (dark default, persisted)
- Framer Motion for scroll reveals (skipped on the hero to protect LCP; respects `prefers-reduced-motion`)

## Design

"Data Pipeline" direction — near-black blue-grey (`#0D1117`) with a signal-blue/teal accent, Space Grotesk headings, Inter body, JetBrains Mono for labels. Full token list in `src/app/globals.css`.
