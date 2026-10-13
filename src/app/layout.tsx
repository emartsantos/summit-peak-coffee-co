import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { config } from "@/lib/config";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const { seo, brand, contact } = config;
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s · ${brand.shortName}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: brand.name,
  authors: [{ name: brand.name }],
  creator: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: brand.name,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
    images: [
      {
        url: seo.ogImage,
        width: 1800,
        height: 1200,
        alt: `${brand.name} — specialty coffee roaster and café`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "food",
};

export const viewport: Viewport = {
  themeColor: "#1B3B2B",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: brand.name,
  description: seo.description,
  url: siteUrl,
  image: siteUrl + seo.ogImage,
  telephone: contact.phoneDisplay,
  email: contact.email,
  servesCuisine: "Coffee",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressCountry: contact.address.country,
  },
  sameAs: [config.social.instagram.href],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-forest focus:px-5 focus:py-3 focus:font-sans focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
