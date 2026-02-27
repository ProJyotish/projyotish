import type { Metadata } from "next";
import BusinessLanding from "@/src/page-components/BusinessLanding";

export const metadata: Metadata = {
  title: "Business Astrology - ProJyotish",
  description:
    "Leverage Vedic astrology for business decisions — auspicious launch dates, partnerships, investments, and growth timing.",
};

export default function Business() {
  return <BusinessLanding />;
}
