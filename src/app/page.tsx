import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Offerings } from "@/components/sections/offerings";
import { Principles } from "@/components/sections/principles";
import { Showcase } from "@/components/sections/showcase";
import { Process } from "@/components/sections/process";
import { Trust } from "@/components/sections/trust";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Story />
        <Offerings />
        <Principles />
        <Showcase />
        <Process />
        <Trust />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
