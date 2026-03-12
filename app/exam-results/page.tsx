import type { Metadata } from "next";
import ExamResultsLanding from "@/src/page-components/ExamResultsLanding";

export const metadata: Metadata = {
  title: "Exam Results & College Admission Astrology - ProJyotish",
  description:
    "Worried about exam results, college admissions, or choosing the right career path? Get Vedic astrology insights on academic success, best streams, and studying abroad.",
};

export default function ExamResults() {
  return <ExamResultsLanding />;
}
