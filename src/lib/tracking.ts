// Meta Pixel, Google Tag & Reddit Pixel event tracking utility
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    rdt?: (...args: unknown[]) => void;
  }
}

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    if (window.fbq) {
      window.fbq("track", eventName, params);
    }
    if (window.gtag) {
      window.gtag("event", eventName, params);
    }
    if (window.rdt) {
      window.rdt("track", eventName, params);
    }
  }
};