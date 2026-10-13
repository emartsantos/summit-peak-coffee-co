import Image from "next/image";
import { config } from "@/lib/config";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const { showcase } = config;
const [feature, ...grid] = showcase.images;

export function Showcase() {
  return (
    <section className="section-y bg-background">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={showcase.eyebrow}
            title={showcase.heading}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <Reveal variant="fade">
            <figure className="relative h-full">
              <div className="relative aspect-[4/5] h-full w-full overflow-hidden bg-cream-deep lg:aspect-auto">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] hover:scale-[1.04]"
                />
              </div>
            </figure>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            {grid.map((img, i) => (
              <Reveal key={img.src} variant="fade" delay={i * 90}>
                <figure className="relative">
                  <div className="relative aspect-square w-full overflow-hidden bg-cream-deep">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] hover:scale-[1.05]"
                    />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
