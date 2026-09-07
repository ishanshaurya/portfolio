# TODO

Feature/task backlog — distinct from NOTES.md's placeholder-content checklist.

- [ ] Per-project detail page: clicking a project card opens its own page/route
      (e.g. `/projects/[id]`) with the full brief (longDescription, tech,
      links, screenshot) instead of just scrolling to the card in-page.
      Card's "view" link should route there; keep the in-page grid as the
      index. See `src/content/projects.ts` for the data shape already
      available (longDescription exists, unused so far).
