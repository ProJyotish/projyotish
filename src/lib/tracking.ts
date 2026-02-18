// Meta Pixel & Google Analytics event tracking utility
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};

export const trackGoogleEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

/** Track a click across both Meta and Google */
export const trackClick = (label: string) => {
  trackMetaEvent("Lead", { content_name: label });
  trackGoogleEvent("click", { event_label: label });
};
