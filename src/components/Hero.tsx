"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

interface HeroProps {
  onExploreClick: () => void;
  onMandiClick: () => void;
}

export default function Hero({ onExploreClick, onMandiClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Scroll transforms for parallax effects
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className={styles.heroContainer}>
      {/* Parallax Background */}
      <motion.div 
        className={styles.bgWrapper} 
        style={{ y: bgY, scale: bgScale }}
      >
        <Image
          src="/images/hero_agri_bg.png"
          alt="Indian Agriculture Fields Sunrise"
          className={styles.bgImage}
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </motion.div>

      {/* Main Text Content */}
      <motion.div 
        className={styles.content}
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.badge}
        >
       ਮਿੱਟੀ-ਜੁੜੀ ਵਿਰਾਸਤ। ਆਧੁਨਿਕ ਸੂਝ-ਬੂਝ।
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/baba-deep-singh.webp"
            alt="Baba Deep Singh Khad Store Logo"
            width={150}
            height={134}
            priority
          />
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className={styles.title}
        >
        {/* BABA DEEP SINGH KHAD STORE */}
          <span className={styles.titleHighlight}>🌱 Affordable Prices. Trusted Quality. Everything Farmers Need. 🌾</span>
        </motion.h1>

        {/* Animated Subtitle */}
        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className={styles.subtitle}
        >
           Explore India's crops, soil insights, weather trends, cultivation cycles, and discover the best seeds, fertilizers, pesticides, and farming equipment for every season. 
           Explore a rich treasury of India&apos;s crops. Dive deep into soil metrics, regional distribution, historical cultivation cycles. 
        </motion.p> */}

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.ctaGroup}
        >
          <button className={styles.primaryBtn} onClick={onExploreClick}>
            Explore Crops
          </button>
          {/* <button className={styles.secondaryBtn} onClick={onMandiClick}>
            Mandi Rates
          </button> */}
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      {/* <motion.div
        className={styles.scrollIndicator}
        onClick={onExploreClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>Scroll Down</span>
        <div className={styles.mouseIcon}>
          <motion.div
            className={styles.wheel}
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div> */}
    </section>
  );
}
