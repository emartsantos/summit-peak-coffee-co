import Image from "next/image";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const { process } = config;

export function Process() {
  return (
    <section id="process" className="section-y bg-surface-sunken/60">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={process.eyebrow}
            title={process.heading}
            intro={process.intro}
          />
        </Reveal>

        <ol className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-10">
          {process.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              delay={i * 120}
              className={cn(
                i === 1 && "lg:translate-y-14",
                i === 2 && "lg:translate-y-28",
              )}
            >
              <figure>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-deep">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] hover:scale-[1.04]"
                  />
                  <span className="absolute left-0 top-0 bg-forest px-4 py-2 font-display text-[length:var(--step-2)] leading-none text-cream">
                    {step.step}
                  </span>
                </div>
              </figure>
              <h3 className="mt-7 font-display text-[length:var(--step-2)]">
                {step.title}
              </h3>
              <p className="measure mt-3 text-foreground/75">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
