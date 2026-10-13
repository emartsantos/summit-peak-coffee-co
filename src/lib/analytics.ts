/**
 * ANALYTICS — provider-agnostic, privacy-safe stub.
 *
 * No third-party script is shipped. Events are pushed to a `dataLayer` if one
 * exists (Google Tag Manager ready) and otherwise dispatched as a DOM event,
 * so a real provider can be attached later without touching call sites.
 */

export type AnalyticsEvent =
  | "cta_click"
  | "nav_click"
  | "whatsapp_click"
  | "email_click"
  | "phone_click"
  | "form_start"
  | "form_submit"
  | "form_error"
  | "gallery_open"
  | "instagram_click";

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    ...props,
    timestamp: Date.now(),
  };

  window.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent("summitpeak:analytics", { detail: payload }));
}
