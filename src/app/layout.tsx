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
  title: "Baba Deep Singh Khad Store | Fertilizer & Seed Store Amritsar",
  description: "Baba Deep Singh Khad Store offers quality fertilizers, seeds, pesticides, and trusted agricultural products with reliable solutions for every farmer.",
  alternates: {
    canonical: "https://babadeepsinghkhadstore.in/",
  },
  keywords: "Baba deep singh khand store, seeds store Amritsar, fertilizer store in Amritsar, Agricultural products store",
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'none',
  },
  verification: {
    google: "JpnhcCO5wR1AjqSZ3MjZUNtgmGbvmk6t5hL1iEfXB4c",
  }
}

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
