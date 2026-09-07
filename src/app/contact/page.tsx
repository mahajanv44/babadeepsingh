import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Baba Deep Singh Khad Store ",
  description:
    "Get in touch with Baba Deep Singh Khad Store. Call +91 98152 65705 for genuine fertilizers, seeds & farm machinery rentals.",
  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}