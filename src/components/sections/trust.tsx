import { Check, ArrowUpRight } from "lucide-react";
import { config } from "@/lib/config";
import { Reveal } from "@/components/motion/reveal";
import { InstagramIcon } from "@/components/ui/instagram-icon";

const { trust, social } = config;

export function Trust() {
  return (
    <section className="section-y bg-background">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">{trust.eyebrow}</span>
              <h2 className="mt-5 text-[length:var(--step-4)] md:text-[length:var(--step-5)]">
                {trust.heading}
              </h2>
              <p className="measure mt-6 text-[length:var(--step-1)] text-muted">
                {trust.intro}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="measure-sm mt-8 border-l-2 border-border pl-5 font-sans text-sm italic text-muted">
                {trust.proofNote}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
              {trust.commitments.map((c, i) => (
                <Reveal
                  as="li"
                  key={c}
                  delay={i * 80}
                  className="flex items-start gap-4 border-t border-border py-6"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-sans text-[0.95rem] leading-relaxed text-foreground/80">
                    {c}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <a
                href={social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 flex flex-col justify-between gap-6 bg-forest p-8 text-cream transition-colors duration-500 hover:bg-forest-soft sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cream/25">
                    <InstagramIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-[length:var(--step-2)]">
                      {trust.instagram.title}
                    </p>
                    <p className="measure-sm mt-1 font-sans text-sm text-cream/65">
                      {trust.instagram.body}
                    </p>
                    <p className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-terracotta-soft">
                      {social.instagram.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-cream/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
