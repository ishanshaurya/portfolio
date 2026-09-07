import { profile } from "@/content/profile";
import { getHeroStats } from "@/lib/content-stats";
import { Marquee } from "@/components/ui/Marquee";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Hero() {
  const stats = getHeroStats();

  return (
    <section id="home" aria-label="Introduction" className="scroll-mt-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent">
            {profile.location} · {profile.availability}
          </p>
          <h1 className="mt-4 font-heading text-5xl sm:text-7xl font-semibold tracking-tight text-foreground max-w-3xl">
            Hi, I&rsquo;m {profile.name}.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 font-mono text-sm text-accent-foreground transition-opacity hover:opacity-90"
            >
              See projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </RevealOnScroll>
      </div>

      <div className="mt-16">
        <Marquee items={profile.roles} />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                {stat.value}
              </dd>
              <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">
                — {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
