# Notes

Running log of decisions + what's still placeholder. Update this as the project evolves.

## 2026-09-07 — initial build

### Decisions

- **Next 15, not 16.** `create-next-app@latest` pulled Next 16 (current latest); pinned `next` and `eslint-config-next` back to `15.5.25` per the brief. Had to rewrite `eslint.config.mjs` for it — 15.x's `eslint-config-next` exports the legacy eslintrc shape, not 16's flat-config array, so it now uses `FlatCompat` (see commit history).
- **Visual direction: Data Pipeline.** Near-black blue-grey, blue/teal accent, Space Grotesk + Inter + JetBrains Mono. Picked over two other proposed directions (Quiet Editorial, Terminal QA) — see the conversation this was built in if you want the other two palettes.
- **GitHub repo under `ishanshaurya`**, not the other `gh`-authenticated account on this machine.
- **Hero has no entrance animation.** Every other section fades in via `RevealOnScroll` on scroll, but the hero is the first thing painted on load — animating it delayed Largest Contentful Paint for no visual benefit. Cost ~7 Lighthouse performance points, not worth it.
- **Project images are generated SVG gradient placeholders**, not real screenshots — none were provided. Each one says "SCREENSHOT PENDING" on the image itself so it's obviously a placeholder rather than a broken/forgotten asset.
- **`experience.ts` is an empty array.** No confirmed work history was given (Rainbow Hospitals, PolyVox etc. were specified as *projects*, not roles). Rather than invent a job title/company/dates, the Experience section renders an honest empty state. Add real entries whenever there's a real role to list.
- **No fabricated metrics.** The hero stats strip (reference site had "9+ years experience / 8 stacks / 30+ projects / 9 industries") is instead computed live from `src/content/`: project count, skill-category count, total skill count, and the availability string. Nothing there is typed by hand — it can't drift from reality.
- **Skill proficiency dots default to "TODO"**, not a guessed number. The dot UI renders an explicit "todo" label rather than five empty/dim dots that could read as "rated 0."

### TODO — replace before this is a "real" portfolio

Everything below is a placeholder. Search `TODO` across `src/content/` to find all of it programmatically.

- [ ] `profile.ts`: real `location`, real `email`, real GitHub/LinkedIn URLs (`socials[].todo` currently `true` on both), second paragraph of `longBio`
- [ ] `profile.ts`: real photo — replace `public/about/avatar-placeholder.svg` and update `profile.photo`
- [ ] `experience.ts`: add real roles once there's a real one to list (internship, part-time, whatever's true)
- [ ] `projects.ts` — all four entries are `draft: true`:
  - [ ] Nexora — real year, tech stack, links, and a longer description of your actual role
  - [ ] Rainbow Hospitals — same, plus what devices/systems specifically
  - [ ] PolyVox — same, plus what the product was
  - [ ] Internship Outreach Tracker — same, plus what it actually automates
  - [ ] Real screenshots for all four, replacing the gradient placeholders in `public/projects/`
- [ ] `skills.ts`: self-rate every skill 1–5 (currently all `"TODO"`)
- [ ] Favicon is still the default Next.js one (`src/app/favicon.ico`) — swap it
- [ ] Resume/CV — no download link exists yet; add one to the hero/footer if wanted

### Known non-issues (checked, fine as-is)

- Lighthouse: 100/100/100/100 (performance/accessibility/best-practices/SEO), both mobile and desktop presets, against a production build (`pnpm build && pnpm start`). Re-run after any significant change — don't assume it holds.
- `next/image` used everywhere images appear (About photo, project cards); `images.unoptimized: true` in `next.config.ts` so it also works if this ever moves to `next build && next export`.
- Dark/light toggle persists via `next-themes` + localStorage; verified across reload.
- Keyboard focus states, skip-to-content link, and `prefers-reduced-motion` (both the global CSS rule and `RevealOnScroll`'s `useReducedMotion` check) are in place.
