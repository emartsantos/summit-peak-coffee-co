"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { config } from "@/lib/config";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { Wordmark } from "@/components/site/logo";

const { nav, hero, contact, brand } = config;
const ctaHref = hero.primaryCta.href;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  const handleNav = useCallback((label: string) => {
    track("nav_click", { label, location: "header" });
  }, []);

  const linkTone = scrolled
    ? "text-foreground hover:text-accent"
    : "text-cream/85 hover:text-cream";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-500 ease-[var(--ease-out)]",
        scrolled
          ? "border-b border-border bg-cream/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-editorial">
        <div className="flex h-20 items-center justify-between gap-6">
          <a
            href="#top"
            onClick={() => handleNav("logo")}
            aria-label={`${brand.name} — home`}
            className={cn(
              "transition-colors duration-500",
              scrolled ? "text-forest" : "text-cream",
            )}
          >
            <Wordmark id="nav-logo" />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 lg:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNav(item.label)}
                className={cn(
                  "font-sans text-[0.82rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300",
                  linkTone,
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              onClick={() => track("cta_click", { label: hero.primaryCta.label, location: "header" })}
              className={cn(
                "group hidden items-center gap-2 border px-5 py-3 font-sans text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 sm:inline-flex",
                scrolled
                  ? "border-forest bg-forest text-cream hover:bg-forest-soft"
                  : "border-cream/45 text-cream hover:bg-cream hover:text-forest",
              )}
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border transition-colors duration-300 lg:hidden",
                scrolled
                  ? "border-forest/20 text-forest"
                  : "border-cream/30 text-cream",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 top-0 z-40 origin-top bg-forest text-cream transition-[opacity,transform] duration-500 ease-[var(--ease-out)] lg:hidden",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div className="grain relative flex h-full flex-col px-[var(--gutter)] pb-12 pt-28">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  handleNav(item.label);
                  setOpen(false);
                }}
                className="group flex items-baseline justify-between border-b border-cream/15 py-6"
                style={{ transitionDelay: open ? `${i * 60 + 120}ms` : "0ms" }}
              >
                <span className="font-display text-[2.4rem] leading-none">
                  {item.label}
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-cream/50">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-6 pt-12">
            <a
              href={ctaHref}
              onClick={() => {
                track("cta_click", { label: hero.primaryCta.label, location: "mobile_menu" });
                setOpen(false);
              }}
              className="inline-flex w-full items-center justify-center gap-2 bg-terracotta px-6 py-4 font-sans text-sm font-medium uppercase tracking-[0.16em] text-on-accent"
            >
              {hero.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="space-y-1 font-sans text-sm text-cream/70">
              <p>
                <span className="text-cream/40">Email · </span>
                {contact.email}
              </p>
              <p>
                <span className="text-cream/40">Phone · </span>
                {contact.phoneDisplay}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute right-[var(--gutter)] top-6 inline-flex h-11 w-11 items-center justify-center border border-cream/30 text-cream"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
