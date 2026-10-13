import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { config } from "@/lib/config";
import { Reveal } from "@/components/motion/reveal";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { InstagramIcon } from "@/components/ui/instagram-icon";

const { inquiry, contact, social } = config;

function whatsappHref() {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessage,
  )}`;
}

export function Contact() {
  return (
    <section
      id="visit"
      className="grain relative overflow-hidden bg-forest text-cream"
    >
      <div className="container-editorial section-y relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-terracotta-soft">
                {inquiry.eyebrow}
              </span>
              <h2 className="mt-5 text-[length:var(--step-4)] text-cream md:text-[length:var(--step-5)]">
                {inquiry.heading}
              </h2>
              <p className="measure mt-6 text-cream/70">{inquiry.intro}</p>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 border border-cream/30 px-6 py-4 font-sans text-sm font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-cream hover:text-forest"
              >
                <MessageCircle className="h-4 w-4" />
                {inquiry.whatsappLabel}
              </a>
            </Reveal>

            <Reveal delay={180}>
              <dl className="mt-12 grid gap-7 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <dt className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-cream/45">
                    <Mail className="h-3.5 w-3.5" /> Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${contact.email}`}
                      className="link-underline font-sans text-sm text-cream/85"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>

                <div className="space-y-1.5">
                  <dt className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-cream/45">
                    <Phone className="h-3.5 w-3.5" /> Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="link-underline font-sans text-sm text-cream/85"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div className="space-y-1.5">
                  <dt className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-cream/45">
                    <MapPin className="h-3.5 w-3.5" /> Find us
                  </dt>
                  <dd className="font-sans text-sm leading-relaxed text-cream/85">
                    <a
                      href={contact.address.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {contact.address.line1}, {contact.address.line2}
                    </a>
                  </dd>
                </div>

                <div className="space-y-1.5">
                  <dt className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-cream/45">
                    <Clock className="h-3.5 w-3.5" /> Hours
                  </dt>
                  <dd className="space-y-0.5 font-sans text-sm text-cream/85">
                    {contact.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="text-cream/55">{h.time}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={240}>
              <a
                href={social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 font-sans text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <InstagramIcon className="h-4 w-4 text-terracotta-soft" />
                {social.instagram.handle}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal variant="fade" delay={100}>
              <div className="bg-cream p-7 text-foreground sm:p-10">
                <InquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
