import { Mail, MapPin, Phone } from "lucide-react";
import { config } from "@/lib/config";
import { Wordmark } from "@/components/site/logo";
import { InstagramIcon } from "@/components/ui/instagram-icon";

const { brand, nav, contact, social, footer } = config;

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-forest-deep text-cream">
      <div className="container-editorial relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="space-y-5">
            <Wordmark id="footer-logo" className="text-cream" />
            <p className="measure-sm max-w-xs font-sans text-sm leading-relaxed text-cream/60">
              {footer.blurb}
            </p>
          </div>

          <nav aria-label="Footer" className="space-y-4">
            <p className="eyebrow text-cream/40">Explore</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline font-sans text-sm text-cream/80 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#visit"
                  className="link-underline font-sans text-sm text-cream/80 hover:text-cream"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-4">
            <p className="eyebrow text-cream/40">Hours</p>
            <ul className="space-y-2">
              {contact.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex flex-col font-sans text-sm text-cream/70"
                >
                  <span>{h.day}</span>
                  <span className="text-cream/50">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="eyebrow text-cream/40">Find us</p>
            <ul className="space-y-3 font-sans text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-soft" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  {contact.address.country}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-underline flex items-center gap-3 hover:text-cream"
                >
                  <Mail className="h-4 w-4 shrink-0 text-terracotta-soft" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="link-underline flex items-center gap-3 hover:text-cream"
                >
                  <Phone className="h-4 w-4 shrink-0 text-terracotta-soft" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={social.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex items-center gap-3 hover:text-cream"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-terracotta-soft" />
                  {social.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-7 font-sans text-xs text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {footer.copyrightYear} {footer.copyrightName}. All rights reserved.
          </p>
          <p className="text-cream/50">
            {brand.tagline} · {brand.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
