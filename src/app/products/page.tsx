import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Our Products | Baba Deep Singh Khad Store",
  description:
    "Check out our products! Shop organic manure, DAP, urea & fungicides, plus rent farm equipment & sprayers in Gumtala, Amritsar.",

  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/products",
  }
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
