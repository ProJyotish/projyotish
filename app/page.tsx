import type { Metadata } from "next";
import Index from "@/src/page-components/Index";

export const metadata: Metadata = {
  title: "ProJyotish - Astrologer developed by IITians trained in Astrology",
  description:
    "Get personalized muhurtas, daily ideal time slots, and deep karmic insights from AI-powered Vedic Astrology. Built by IIT alumni, trained on thousands of real cases.",
};

export default function Home() {
  return <Index />;
}
