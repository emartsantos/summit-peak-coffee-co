import { config } from "@/lib/config";
import { Reveal } from "@/components/motion/reveal";

const { principles } = config;

export function Principles() {
  return (
    <section className="grain relative overflow-hidden bg-forest text-cream">
      <div className="container-editorial section-y relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="eyebrow text-terracotta-soft">
                {principles.eyebrow}
              </span>
              <h2 className="mt-5 text-[length:var(--step-4)] text-cream md:text-[length:var(--step-5)]">
                {principles.heading}
              </h2>
              <p className="measure-sm mt-6 text-cream/65">
                {principles.intro}
              </p>
            </Reveal>
          </div>

          <ul className="lg:col-span-8">
            {principles.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90}>
                <div className="grid gap-4 border-t border-cream/15 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-display text-[length:var(--step-2)] text-terracotta-soft/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[length:var(--step-2)] text-cream">
                      {item.title}
                    </h3>
                    <p className="measure mt-2 text-cream/65">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <li className="border-t border-cream/15" aria-hidden />
          </ul>
        </div>
      </div>
    </section>
  );
}
