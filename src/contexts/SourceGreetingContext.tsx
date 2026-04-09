"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  buildWhatsAppPrefillUrl,
  FALLBACK_GREETING_WORD,
  resolveSourceGreeting,
  type SourceGreeting,
} from "@/src/lib/sourceGreeting";

const WHATSAPP_PHONE = "919821956888";
const STORAGE_KEY = "pj_source_greeting";

type SourceGreetingContextValue = {
  greeting: SourceGreeting;
  waUrl: string;
};

const SourceGreetingContext = createContext<SourceGreetingContextValue | null>(null);

const defaultValue: SourceGreetingContextValue = {
  greeting: { key: "default", word: FALLBACK_GREETING_WORD },
  waUrl: buildWhatsAppPrefillUrl(WHATSAPP_PHONE, FALLBACK_GREETING_WORD),
};

export function SourceGreetingProvider({ children }: { children: ReactNode }) {
  const [greeting, setGreeting] = useState<SourceGreeting>(defaultValue.greeting);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SourceGreeting;
        if (parsed?.word && typeof parsed.word === "string") {
          setGreeting(parsed);
          return;
        }
      }
    } catch {
      /* ignore */
    }

    const resolved = resolveSourceGreeting({
      referrer: document.referrer,
      search: window.location.search,
    });
    setGreeting(resolved);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
    } catch {
      /* ignore */
    }
  }, []);

  const waUrl = useMemo(
    () => buildWhatsAppPrefillUrl(WHATSAPP_PHONE, greeting.word),
    [greeting.word]
  );

  const value = useMemo(
    () => ({ greeting, waUrl }),
    [greeting, waUrl]
  );

  return (
    <SourceGreetingContext.Provider value={value}>
      {children}
    </SourceGreetingContext.Provider>
  );
}

export function useSourceGreeting(): SourceGreetingContextValue {
  const ctx = useContext(SourceGreetingContext);
  return ctx ?? defaultValue;
}
