import type { Metadata } from "next";
import HusbandHealthLanding from "@/src/page-components/HusbandHealthLanding";

export const metadata: Metadata = {
  title: "Husband's Health & Wellness Astrology - ProJyotish",
  description:
    "Concerned about your husband's health, diet, or habits? Get Vedic astrology insights on health risks, food recommendations, addiction remedies, and wellness guidance.",
};

export default function HusbandHealth() {
  return <HusbandHealthLanding />;
}
