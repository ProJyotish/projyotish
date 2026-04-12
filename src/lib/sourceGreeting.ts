export type SourceGreetingKey =
  | "reddit"
  | "meta"
  | "google"
  | "x"
  | "linkedin"
  | "telegram"
  | "default";

export interface SourceGreeting {
  key: SourceGreetingKey;
  /** Pre-filled WhatsApp opener (polite / cultural; no devotional phrasing) */
  word: string;
}

/** Distinct respectful openers per channel — cultural / polite, no religious invocations (short, WhatsApp-friendly) */
const GREETINGS = {
  reddit: "Namaskaram",
  meta: "Pranam",
  google: "Namaste ji",
  x: "Namaskar",
  /** Professional / career context */
  linkedin: "Sadar Pranam",
  /** Chat / community channels */
  telegram: "Hello",
  /** Direct, bookmark, or unknown referrer (warmer than plain Namaste) */
  default: "Namaste",
} as const;

/** SSR / pre-hydration fallback; keep in sync with `GREETINGS.default` */
export const FALLBACK_GREETING_WORD = GREETINGS.default;

function fromUtm(utm: string): SourceGreeting | null {
  if (utm.includes("reddit")) return { key: "reddit", word: GREETINGS.reddit };
  if (
    utm.includes("facebook") ||
    utm.includes("instagram") ||
    utm === "meta" ||
    utm.includes("fb") ||
    utm === "ig"
  ) {
    return { key: "meta", word: GREETINGS.meta };
  }
  if (utm.includes("google")) return { key: "google", word: GREETINGS.google };
  if (utm.includes("twitter") || utm === "x" || utm.includes("tweet")) {
    return { key: "x", word: GREETINGS.x };
  }
  if (utm.includes("linkedin") || utm === "li") {
    return { key: "linkedin", word: GREETINGS.linkedin };
  }
  if (utm.includes("telegram") || utm === "tg") {
    return { key: "telegram", word: GREETINGS.telegram };
  }
  return null;
}

function fromReferrerHost(host: string): SourceGreeting | null {
  if (host.includes("reddit")) return { key: "reddit", word: GREETINGS.reddit };

  if (
    host.includes("facebook") ||
    host.includes("instagram") ||
    host.includes("fb.") ||
    host === "messenger.com" ||
    host.includes("threads.net")
  ) {
    return { key: "meta", word: GREETINGS.meta };
  }

  if (host.includes("google.") || host === "g.co") {
    return { key: "google", word: GREETINGS.google };
  }

  if (
    host.includes("twitter") ||
    host === "x.com" ||
    host.endsWith(".x.com") ||
    host === "t.co"
  ) {
    return { key: "x", word: GREETINGS.x };
  }

  if (host.includes("linkedin") || host === "lnkd.in" || host.endsWith(".lnkd.in")) {
    return { key: "linkedin", word: GREETINGS.linkedin };
  }

  if (host === "t.me" || host.endsWith(".t.me") || host.includes("telegram.")) {
    return { key: "telegram", word: GREETINGS.telegram };
  }

  return null;
}

/**
 * Maps traffic source to the WhatsApp greeting string.
 * Order: URL signals (utm, click ids), then HTTP Referer.
 */
export function resolveSourceGreeting(params: {
  referrer: string;
  search: string;
}): SourceGreeting {
  const urlParams = new URLSearchParams(params.search);
  const utm = urlParams.get("utm_source")?.toLowerCase() ?? "";

  if (utm) {
    const from = fromUtm(utm);
    if (from) return from;
  }

  if (urlParams.has("fbclid")) return { key: "meta", word: GREETINGS.meta };
  if (urlParams.has("gclid") || urlParams.has("gbraid") || urlParams.has("wbraid")) {
    return { key: "google", word: GREETINGS.google };
  }
  if (urlParams.has("twclid")) return { key: "x", word: GREETINGS.x };
  if (urlParams.has("li_fat_id")) return { key: "linkedin", word: GREETINGS.linkedin };

  const ref = params.referrer;
  if (!ref) return { key: "default", word: GREETINGS.default };

  let host = "";
  try {
    host = new URL(ref).hostname.toLowerCase();
  } catch {
    return { key: "default", word: GREETINGS.default };
  }

  const fromHost = fromReferrerHost(host);
  if (fromHost) return fromHost;

  return { key: "default", word: GREETINGS.default };
}

export function buildWhatsAppPrefillUrl(phoneDigits: string, message: string): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}
