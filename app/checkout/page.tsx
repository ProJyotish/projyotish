import { Suspense } from "react";
import type { Metadata } from "next";
import CheckoutPage from "@/src/page-components/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout - ProJyotish",
  description:
    "Complete your ProJyotish subscription checkout with region-based pricing.",
};

export default function Checkout() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CheckoutPage />
    </Suspense>
  );
}

