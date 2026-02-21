import type { Metadata } from "next";
import WealthLanding from "@/src/pages/WealthLanding";

export const metadata: Metadata = {
  title: "Wealth & Finance Astrology - ProJyotish",
  description:
    "Get Vedic astrology guidance on financial decisions, investment timing, wealth creation, and prosperity through your birth chart.",
};

export default function Wealth() {
  return <WealthLanding />;
}
