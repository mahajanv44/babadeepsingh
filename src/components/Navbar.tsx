"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sprout } from "lucide-react";
import styles from "./Navbar.module.css";
import Image from "next/image";
interface NavbarProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "products", label: "Products" },
    { id: "catalog", label: "Crop Catalog" },
    { id: "zones", label: "Agri Zones" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Scroll Progress Bar */}
      <motion.div className={styles.scrollProgress} style={{ scaleX }} />

      <div className={styles.brand} onClick={() => onNavClick("hero")}>
      <Image
      src="/images/title-logo.webp"
      width={120}
      height={63}
      alt="logo"
    />
        {/* <Sprout className={styles.logoIcon} />
        <span>AGRIVEDA</span> */}
      </div>

      <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li key={item.id}>
            <span
              className={`${styles.link} ${
                activeSection === item.id ? styles.active : ""
              }`}
              onClick={() => onNavClick(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className={styles.activeLine}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </span>
          </li>
        ))}
      </ul>

      <button className={styles.ctaButton} onClick={() => onNavClick("catalog")}>
        Explore Crops
      </button>
    </nav>
  );
}
