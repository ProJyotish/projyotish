import type { Metadata } from "next";
import TermsAndConditions from "@/src/pages/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions - ProJyotish",
  description: "Read the terms and conditions for using ProJyotish services.",
};

export default function Terms() {
  return <TermsAndConditions />;
}
