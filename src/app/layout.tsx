import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BABA DEEP SINGH KHAD STORE",
  description: "Discover detailed crop information, native names, regional distribution, scientific classification, soil requirements, and live simulated Mandi prices across India.",
  keywords: "Indian Agriculture, Crops, Mandi Prices, Kharif, Rabi, Zaid, Wheat, Rice, Spices, Cardamom, Indian Spices, Smart Farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
