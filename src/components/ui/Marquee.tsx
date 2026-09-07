export function Marquee({ items }: { items: string[] }) {
  // Duplicated once for a seamless CSS-driven loop. Global reduced-motion
  // rule (globals.css) collapses the animation duration to ~0 for users
  // who've asked for it, leaving the list static but fully readable.
  const track = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-border py-4"
      aria-label="Roles I'm aiming at"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="font-heading text-2xl sm:text-3xl text-muted"
          >
            {item}
            <span className="mx-10 text-accent" aria-hidden>
              *
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
