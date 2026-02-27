import type { Metadata } from "next";
import CareerLanding from "@/src/page-components/CareerLanding";

export const metadata: Metadata = {
  title: "Career Astrology - ProJyotish",
  description:
    "Get Vedic astrology insights for career decisions — promotion timing, job changes, salary negotiations, and more.",
};

export default function Career() {
  return <CareerLanding />;
}
