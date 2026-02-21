import type { Metadata } from "next";
import PrivacyPolicy from "@/src/pages/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - ProJyotish",
  description: "Learn how ProJyotish collects, uses, and protects your personal information.",
};

export default function Privacy() {
  return <PrivacyPolicy />;
}
