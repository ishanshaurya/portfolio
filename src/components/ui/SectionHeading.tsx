import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  /** Word (must appear in `title`) rendered in the accent color. */
  accentWord?: string;
  description?: string;
  align?: "left" | "center";
}) {
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
        {accentWord ? (
          <>
            {parts[0]}
            <span className="text-accent">{accentWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-lg">{description}</p>
      )}
    </div>
  );
}
