import type { Metadata } from "next";
import ChildFutureLanding from "@/src/page-components/ChildFutureLanding";

export const metadata: Metadata = {
  title: "Your Child's Future & Education Astrology - ProJyotish",
  description:
    "Know your child's academic potential, best career path, and college prospects through Vedic astrology. Guidance for parents on education, exams, and future planning.",
};

export default function ChildFuture() {
  return <ChildFutureLanding />;
}
