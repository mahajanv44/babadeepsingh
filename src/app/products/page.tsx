import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
  title: "Our Products & Farm Machinery Rentals | Baba Deep Singh Khad Store Amritsar",
  description:
    "Explore certified organic fertilizers, insecticides, meat bone meal, chemical fertilizers (Urea, DAP, NPK), fungicides, herbicides, and farm equipment for rent in Amritsar, Punjab.",
  keywords: [
    "Organic Fertilizer Punjab",
    "Insecticides Amritsar",
    "Meat Bone Meal Fertilizer",
    "Urea DAP NPK Amritsar",
    "Fungicides Yellow Rust",
    "Herbicides Tripower",
    "Farm Equipment Rent Amritsar",
    "Baba Deep Singh Khad Store Products",
    "PAU Certified Agri Inputs",
  ],
  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/products",
  },
  openGraph: {
    title: "Agricultural Products & Farm Rentals | Baba Deep Singh Khad Store",
    description:
      "PAU certified farm inputs, bio-fertilizers, crop disease medicines, and rented equipment available at Gumtala, Amritsar.",
    images: ["/images/products/organic_fertilizer_pack.webp"],
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
