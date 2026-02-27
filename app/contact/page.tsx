import type { Metadata } from "next";
import ContactUs from "@/src/page-components/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us - ProJyotish",
  description: "Get in touch with the ProJyotish team for support or enquiries.",
};

export default function Contact() {
  return <ContactUs />;
}
