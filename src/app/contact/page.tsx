import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Baba Deep Singh Khad Store",
  description:
    "Contact Baba Deep Singh Khad Store in Gumtala, Amritsar for fertilizers, seeds, pesticides, and agricultural guidance.",
  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}