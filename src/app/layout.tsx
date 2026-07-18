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
  description: "Affordable Prices. Trusted Quality. Everything Farmers Need.",
  keywords: "Punjab Agriculture, Indian Agriculture, Crops, Punjab Store,  Kharif, Rabi, Zaid, Wheat, Rice, Spices, Cardamom, Indian Spices, Smart Farming",
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
