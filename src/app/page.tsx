"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MandiTicker from "@/components/MandiTicker";
import ProductsSection from "@/components/ProductsSection";
import CropCatalog from "@/components/CropCatalog";
import AgriZones from "@/components/AgriZones";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        {/* <MandiTicker /> */}
        <ProductsSection />
        <CropCatalog />
        <AgriZones />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
