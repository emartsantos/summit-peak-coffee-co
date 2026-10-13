import { config } from "@/lib/config";

/**
 * Resolves the public base URL for canonical tags, sitemap, robots and JSON-LD.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL       — set a custom domain in Vercel project settings
 *  2. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL — provided by Vercel automatically
 *  3. config.seo.url             — local fallback
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return config.seo.url.replace(/\/$/, "");
}
