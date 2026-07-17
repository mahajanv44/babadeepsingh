"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react";
import { cropData, Crop } from "@/data/crops";
import styles from "./MandiTicker.module.css";

export default function MandiTicker() {
  const [crops, setCrops] = useState<Crop[]>(cropData);
  const [pulseId, setPulseId] = useState<string | null>(null);
  const [pulseDirection, setPulseDirection] = useState<"up" | "down" | null>(null);

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random crop
      const randomIndex = Math.floor(Math.random() * crops.length);
      const targetCrop = crops[randomIndex];

      // Calculate new price (between -2.5% and +2.5% variation)
      const percentChange = (Math.random() * 5 - 2.5) / 100;
      const priceDiff = Math.round(targetCrop.mandiPrice * percentChange);
      
      // Avoid letting price drop below a minimum threshold
      const minPrice = targetCrop.id === "cardamom" ? 10000 : 1000;
      const newPrice = Math.max(minPrice, targetCrop.mandiPrice + (priceDiff === 0 ? 5 : priceDiff));
      const direction = newPrice > targetCrop.mandiPrice ? "up" : newPrice < targetCrop.mandiPrice ? "down" : "stable";

      setCrops((prevCrops) =>
        prevCrops.map((crop, idx) => {
          if (idx === randomIndex) {
            return {
              ...crop,
              mandiPrice: newPrice,
              priceTrend: direction as "up" | "down" | "stable",
            };
          }
          return crop;
        })
      );

      // Trigger pulse animation
      if (direction !== "stable") {
        setPulseId(targetCrop.id);
        setPulseDirection(direction === "up" ? "up" : "down");
        setTimeout(() => {
          setPulseId(null);
          setPulseDirection(null);
        }, 800);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [crops]);

  // Formatter for Currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Helper mapping for top states representing pricing
  const stateMapping: Record<string, string> = {
    wheat: "Punjab Mandi",
    rice: "WB (Burdwan)",
    cardamom: "Kerala (Kochi)",
    cotton: "Gujarat (Rajkot)",
    turmeric: "Telangana (Nizamabad)",
    tea: "Assam Auction",
  };

  return (
    <section id="mandi" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className={styles.titleGroup}>
            <div className={styles.liveBadge}>
              <div className={styles.pulseDot} />
              <span>Simulated Live Feed</span>
            </div>
            <h2 className={styles.title}>Market Mandi Price index</h2>
            <p className={styles.tagline}>
              Estimated daily rates per quintal (100 kg) across key wholesale markets in India. Values update dynamically.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Running Ticker Tape */}
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {/* Duplicate list to allow seamless infinite looping */}
          {[...crops, ...crops, ...crops].map((crop, idx) => (
            <div key={`${crop.id}-ticker-${idx}`} className={styles.tickerItem}>
              <span className={styles.tickerItemName}>{crop.name}</span>
              <span className={styles.tickerItemPrice}>
                {formatCurrency(crop.mandiPrice)}
              </span>
              <span
                className={`${styles.trendBadge} ${
                  crop.priceTrend === "up"
                    ? styles.trendUp
                    : crop.priceTrend === "down"
                    ? styles.trendDown
                    : styles.trendStable
                }`}
              >
                {crop.priceTrend === "up" && <TrendingUp size={12} />}
                {crop.priceTrend === "down" && <TrendingDown size={12} />}
                {crop.priceTrend === "stable" && <Minus size={12} />}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Grid of detailed Cards */}
        <div className={styles.grid}>
          {crops.map((crop, idx) => {
            const isPulsing = pulseId === crop.id;
            const pulseClass = isPulsing
              ? pulseDirection === "up"
                ? styles.pulseGreen
                : styles.pulseRed
              : "";

            return (
              <motion.div
                key={crop.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${styles.priceCard} ${pulseClass}`}
              >
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cropName}>{crop.name}</h3>
                    <span className={styles.stateLabel}>
                      {stateMapping[crop.id] || crop.topStates[0]}
                    </span>
                  </div>
                  <span
                    className={`${styles.trendBadge} ${
                      crop.priceTrend === "up"
                        ? styles.trendUp
                        : crop.priceTrend === "down"
                        ? styles.trendDown
                        : styles.trendStable
                    }`}
                  >
                    {crop.priceTrend === "up" ? "Gain ▲" : crop.priceTrend === "down" ? "Loss ▼" : "Stable ▬"}
                  </span>
                </div>

                <div className={styles.priceBlock}>
                  <div className={styles.priceValue}>
                    {formatCurrency(crop.mandiPrice)}
                    <span className={styles.unit}>/qtl</span>
                  </div>
                  <div style={{ display: 'flex', color: 'var(--text-muted)', fontSize: '11px', alignItems: 'center', gap: '4px' }}>
                    <RefreshCw size={10} className="spin-slow" />
                    <span>Real-time</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
