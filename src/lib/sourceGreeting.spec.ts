import { describe, expect, it } from "vitest";

import {
  buildWhatsAppPrefillUrl,
  FALLBACK_GREETING_WORD,
  resolveSourceGreeting,
} from "./sourceGreeting";

describe("resolveSourceGreeting", () => {
  it("uses utm_source when present and recognised", () => {
    expect(
      resolveSourceGreeting({ referrer: "", search: "?utm_source=reddit" })
    ).toEqual({ key: "reddit", word: "Namaskaram" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?utm_source=facebook" })
    ).toEqual({ key: "meta", word: "Pranam" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?utm_source=google" })
    ).toEqual({ key: "google", word: "Namaste ji" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?utm_source=twitter" })
    ).toEqual({ key: "x", word: "Namaskar" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?utm_source=linkedin" })
    ).toEqual({ key: "linkedin", word: "Sadar Pranam" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?utm_source=telegram" })
    ).toEqual({ key: "telegram", word: "Hello" });
  });

  it("uses ad click ids when utm is absent", () => {
    expect(
      resolveSourceGreeting({ referrer: "", search: "?fbclid=1" })
    ).toEqual({ key: "meta", word: "Pranam" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?gclid=x" })
    ).toEqual({ key: "google", word: "Namaste ji" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?gbraid=x" })
    ).toEqual({ key: "google", word: "Namaste ji" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?wbraid=x" })
    ).toEqual({ key: "google", word: "Namaste ji" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?twclid=x" })
    ).toEqual({ key: "x", word: "Namaskar" });
    expect(
      resolveSourceGreeting({ referrer: "", search: "?li_fat_id=1" })
    ).toEqual({ key: "linkedin", word: "Sadar Pranam" });
  });

  it("prefers matching utm over click ids when both present", () => {
    expect(
      resolveSourceGreeting({
        referrer: "",
        search: "?utm_source=reddit&gclid=should-not-win",
      })
    ).toEqual({ key: "reddit", word: "Namaskaram" });
  });

  it("uses referrer host when no utm and no click ids", () => {
    expect(
      resolveSourceGreeting({
        referrer: "https://www.reddit.com/r/test",
        search: "",
      })
    ).toEqual({ key: "reddit", word: "Namaskaram" });
    expect(
      resolveSourceGreeting({
        referrer: "https://www.facebook.com/",
        search: "",
      })
    ).toEqual({ key: "meta", word: "Pranam" });
    expect(
      resolveSourceGreeting({
        referrer: "https://www.google.com/search?q=x",
        search: "",
      })
    ).toEqual({ key: "google", word: "Namaste ji" });
    expect(
      resolveSourceGreeting({
        referrer: "https://x.com/user",
        search: "",
      })
    ).toEqual({ key: "x", word: "Namaskar" });
    expect(
      resolveSourceGreeting({
        referrer: "https://t.co/abc123",
        search: "",
      })
    ).toEqual({ key: "x", word: "Namaskar" });
    expect(
      resolveSourceGreeting({
        referrer: "https://www.linkedin.com/feed/",
        search: "",
      })
    ).toEqual({ key: "linkedin", word: "Sadar Pranam" });
    expect(
      resolveSourceGreeting({
        referrer: "https://t.me/projyotish",
        search: "",
      })
    ).toEqual({ key: "telegram", word: "Hello" });
  });

  it("returns default when referrer is unknown or empty", () => {
    expect(resolveSourceGreeting({ referrer: "", search: "" })).toEqual({
      key: "default",
      word: "Namaste",
    });
    expect(
      resolveSourceGreeting({
        referrer: "https://example.com/",
        search: "",
      })
    ).toEqual({ key: "default", word: "Namaste" });
  });

  it("FALLBACK_GREETING_WORD matches default greeting word", () => {
    expect(FALLBACK_GREETING_WORD).toBe("Namaste");
  });
});

describe("buildWhatsAppPrefillUrl", () => {
  it("encodes message for wa.me", () => {
    expect(buildWhatsAppPrefillUrl("919821956888", "Hello. Test")).toBe(
      "https://wa.me/919821956888?text=Hello.%20Test"
    );
  });
});
