// Meta Pixel event tracking utility
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
};
