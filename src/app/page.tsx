"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MandiTicker from "@/components/MandiTicker";
import ProductsSection from "@/components/ProductsSection";
import CropCatalog from "@/components/CropCatalog";
import AgriZones from "@/components/AgriZones";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll Spy Implementation
  useEffect(() => {
    const sections = ["hero", "products", "catalog", "zones", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Trigger when section occupies 50% of the screen height
          rootMargin: "-20% 0px -50% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      
      <main>
        <Hero 
          onExploreClick={() => handleNavClick("catalog")} 
          onMandiClick={() => handleNavClick("mandi")} 
        />
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
