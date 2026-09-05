import { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | Baba Deep Singh Khad Store Amritsar",
  description:
    "Explore our photo gallery featuring Punjab farmlands, golden wheat & mustard crops, certified seeds, fertilizer store, and farmer community in Amritsar.",
  openGraph: {
    title: "Gallery - Baba Deep Singh Khad Store",
    description: "Visual journey of Punjab agriculture, crops, store, and farming community in Amritsar.",
    images: ["/images/gallery/mustard_field.webp"],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
