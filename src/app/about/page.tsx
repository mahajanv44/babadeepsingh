import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Baba Deep Singh Khad Store ",
  description:
    "Learn about Baba Deep Singh Khad Store in Gumtala, Amritsar. Trusted partner for certified fertilizers, seeds & farm inputs since day one.",
  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
