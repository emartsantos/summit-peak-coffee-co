import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const { offerings } = config;

const aspects = ["aspect-[16/11]", "aspect-[4/5]", "aspect-[5/4]"];

export function Offerings() {
  return (
    <section id="offerings" className="section-y bg-surface-sunken/60">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={offerings.eyebrow}
            title={offerings.heading}
            intro={offerings.intro}
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {offerings.items.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={item.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal
                  variant={flip ? "left" : "fade"}
                  className={cn(
                    "relative lg:col-span-7",
                    flip && "lg:order-2",
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden bg-cream-deep",
                      aspects[i % aspects.length],
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out)] hover:scale-[1.04]"
                    />
                  </div>
                </Reveal>

                <Reveal
                  delay={120}
                  className={cn(
                    "lg:col-span-5",
                    flip && "lg:order-1 lg:pr-10",
                    !flip && "lg:pl-10",
                  )}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-[length:var(--step-3)] text-terracotta/80">
                      {item.index}
                    </span>
                    <span className="eyebrow-muted eyebrow">{item.category}</span>
                  </div>
                  <h3 className="mt-4 font-display text-[length:var(--step-3)]">
                    {item.name}
                  </h3>
                  <p className="measure mt-4 text-foreground/75">
                    {item.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.notes.map((note) => (
                      <li
                        key={note}
                        className="border border-forest/15 px-3 py-1.5 font-sans text-[0.7rem] uppercase tracking-[0.14em] text-forest/70"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#visit"
                    className="link-underline mt-7 inline-flex items-center gap-2 font-sans text-sm font-medium text-forest"
                  >
                    Ask about this
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
