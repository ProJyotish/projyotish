// Meta Pixel, Google Tag (GA4), Reddit Pixel & PostHog event tracking utility

// Map Meta-style event names to GA4 recommended event names (so GA4 reports correctly).
const GA4_EVENT_MAP: Record<string, string> = {
  Lead: "generate_lead",
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    rdt?: (...args: unknown[]) => void;
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === "undefined") return;

  if (window.fbq) {
    window.fbq("track", eventName, params);
  }

  if (window.gtag) {
    const ga4EventName = GA4_EVENT_MAP[eventName] ?? eventName;
    window.gtag("event", ga4EventName, params);
  }

  if (window.rdt) {
    window.rdt("track", eventName, params);
  }

  // PostHog may load slightly after initial hydration, so we retry for a short window.
  if (window.posthog?.capture) {
    window.posthog.capture(eventName, params);
    return;
  }

  window.setTimeout(() => {
    window.posthog?.capture?.(eventName, params);
  }, 500);
  window.setTimeout(() => {
    window.posthog?.capture?.(eventName, params);
  }, 1500);
};