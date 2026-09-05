import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Baba Deep Singh Khad Store",
  description:
    "Learn how Baba Deep Singh Khad Store grew from a village business into a trusted agricultural partner across Amritsar.",
  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
