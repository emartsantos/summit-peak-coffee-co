import Image from "next/image";
import { config } from "@/lib/config";
import { Reveal } from "@/components/motion/reveal";

const { intro } = config;

export function Story() {
  return (
    <section id="story" className="section-y bg-background">
      <div className="container-editorial">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <span className="eyebrow">{intro.eyebrow}</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 text-[length:var(--step-4)] md:text-[length:var(--step-5)]">
                {intro.heading}
              </h2>
            </Reveal>

            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={140 + i * 80}>
                <p
                  className={
                    i === 0
                      ? "dropcap measure mt-8 text-[length:var(--step-1)] leading-relaxed text-foreground/85"
                      : "measure mt-6 text-[length:var(--step-1)] leading-relaxed text-foreground/75"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal delay={320}>
              <figure className="mt-10 border-l-2 border-terracotta pl-6">
                <blockquote className="font-display text-[length:var(--step-2)] italic leading-snug text-forest">
                  “{intro.pullQuote}”
                </blockquote>
                <figcaption className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-muted">
                  {intro.signature}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal variant="fade" delay={120}>
              <figure className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep sm:aspect-[5/6]">
                  <Image
                    src={intro.image}
                    alt={intro.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.18em] text-muted">
                  <span className="h-px w-8 bg-border" />
                  The brew bar, mid-service
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
