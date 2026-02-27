import type { Metadata } from "next";
import PricingPage from "@/src/page-components/PricingPage";

export const metadata: Metadata = {
  title: "Pricing - ProJyotish",
  description:
    "Choose the right ProJyotish plan for personalized Vedic astrology guidance on WhatsApp. Flexible monthly and quarterly subscriptions.",
};

export default function Pricing() {
  return <PricingPage />;
}
