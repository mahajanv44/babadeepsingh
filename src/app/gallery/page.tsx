import { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | Baba Deep Singh Khad Store ",
  description:
    "Discover Punjab's rich farmlands, high-yield crops, genuine supplies, and the vibrant farming community backed by Baba Deep Singh Khad Store",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
