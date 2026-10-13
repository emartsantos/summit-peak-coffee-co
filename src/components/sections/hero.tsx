import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { config } from "@/lib/config";
import { ButtonLink } from "@/components/ui/button";

const { hero } = config;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-deep"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="animate-drift object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative w-full pt-32 pb-14 md:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className="animate-rise eyebrow text-terracotta-soft"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-[length:var(--step-6)] text-cream md:text-[length:var(--step-7)]">
              {hero.headlineLines.map((line, i) => (
                <span
                  key={line}
                  className="animate-rise block"
                  style={{ "--rise-delay": `${240 + i * 110}ms` } as React.CSSProperties}
                >
                  {i === hero.headlineLines.length - 1 ? (
                    <em className="font-display font-normal not-italic text-terracotta-soft">
                      {line}
                    </em>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p
              className="animate-rise measure mt-8 max-w-xl text-[length:var(--step-1)] leading-relaxed text-cream/75"
              style={{ "--rise-delay": "520ms" } as React.CSSProperties}
            >
              {hero.subhead}
            </p>

            <div
              className="animate-rise mt-10 flex flex-wrap items-center gap-4"
              style={{ "--rise-delay": "640ms" } as React.CSSProperties}
            >
              <ButtonLink
                href={hero.primaryCta.href}
                variant="primary"
                size="lg"
                className="group"
              >
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </ButtonLink>
              <ButtonLink
                href={hero.secondaryCta.href}
                variant="light"
                size="lg"
              >
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          {/* Editorial detail column */}
          <div
            className="animate-fade lg:col-span-4"
            style={{ "--rise-delay": "760ms" } as React.CSSProperties}
          >
            <div className="border-t border-cream/20 pt-5 lg:ml-auto lg:max-w-xs">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-cream/45">
                Today at the bar
              </p>
              <ul className="mt-4 space-y-2">
                {hero.marquee.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-sm text-cream/75"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-terracotta-soft" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <a
          href="#story"
          className="animate-fade mt-14 inline-flex items-center gap-3 font-sans text-xs uppercase tracking-[0.24em] text-cream/55 transition-colors hover:text-cream"
          style={{ "--rise-delay": "900ms" } as React.CSSProperties}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/25">
            <ArrowDown className="h-4 w-4" />
          </span>
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
