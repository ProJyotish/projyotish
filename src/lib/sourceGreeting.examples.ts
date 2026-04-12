import type { SourceGreetingKey } from "./sourceGreeting";

/** Public site origin for copy-paste tests in the browser */
export const SOURCE_GREETING_EXAMPLE_BASE = "https://projyotish.com";

/**
 * Example landing URLs. Open in a browser: the client reads `location.search`
 * and `document.referrer` (referrer only set when navigating from another site).
 */
export const SOURCE_GREETING_EXAMPLE_URLS: {
  key: SourceGreetingKey;
  note: string;
  url: string;
}[] = [
  {
    key: "reddit",
    note: "UTM (ads or tagged campaign)",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?utm_source=reddit`,
  },
  {
    key: "meta",
    note: "UTM Meta / Facebook",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?utm_source=facebook`,
  },
  {
    key: "meta",
    note: "Meta click id (typical in-app / paid)",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?fbclid=IwAR0test`,
  },
  {
    key: "google",
    note: "UTM Google",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?utm_source=google`,
  },
  {
    key: "google",
    note: "Google Ads gclid",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?gclid=test123`,
  },
  {
    key: "google",
    note: "Google Ads gbraid (iOS / privacy flows)",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?gbraid=0AAAAA`,
  },
  {
    key: "x",
    note: "UTM Twitter / X",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?utm_source=twitter`,
  },
  {
    key: "x",
    note: "X Ads twclid",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?twclid=abc`,
  },
  {
    key: "linkedin",
    note: "UTM LinkedIn",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?utm_source=linkedin`,
  },
  {
    key: "linkedin",
    note: "LinkedIn li_fat_id",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?li_fat_id=1`,
  },
  {
    key: "telegram",
    note: "UTM Telegram",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/?utm_source=telegram`,
  },
  {
    key: "default",
    note: "Direct / bookmark: no query; referrer empty on first load",
    url: `${SOURCE_GREETING_EXAMPLE_BASE}/`,
  },
];
