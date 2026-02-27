import type { Metadata } from "next";
import LoveLanding from "@/src/page-components/LoveLanding";

export const metadata: Metadata = {
  title: "Love & Relationship Astrology - ProJyotish",
  description:
    "Find love compatibility, relationship insights, and auspicious timing for marriage and partnerships through Vedic astrology.",
};

export default function Love() {
  return <LoveLanding />;
}
