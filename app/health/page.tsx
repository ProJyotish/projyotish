import type { Metadata } from "next";
import HealthLanding from "@/src/pages/HealthLanding";

export const metadata: Metadata = {
  title: "Health Astrology - ProJyotish",
  description:
    "Use Vedic astrology to understand health patterns, auspicious timing for treatments, and karmic insights for wellness.",
};

export default function Health() {
  return <HealthLanding />;
}
