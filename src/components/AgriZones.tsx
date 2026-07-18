"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./AgriZones.module.css";

interface Zone {
  id: string;
  name: string;
  states: string;
  soilType: string;
  climate: string;
  rainfall: string;
  description: string;
  crops: string[];
}

const zonesData: Zone[] = [
  {
    id: "indo-gangetic",
    name: "Indo-Gangetic Plains",
    states: "Punjab, Haryana, Uttar Pradesh, Bihar, West Bengal",
    soilType: "Deep alluvial soil (highly fertile)",
    climate: "Sub-tropical, hot summers & cold winters",
    rainfall: "75 cm to 150 cm (increases west to east)",
    description: "One of the most intensive agricultural areas in the world. Fed by the Indus-Ganga-Brahmaputra river systems, this region forms the 'Food Bowl of India' and has deep, rich alluvial deposits.",
    crops: ["Wheat", "Rice", "Sugarcane", "Mustard", "Potato"],
  },
  {
    id: "deccan",
    name: "Deccan Plateau",
    states: "Maharashtra, Madhya Pradesh, Karnataka, Andhra Pradesh",
    soilType: "Black Cotton Soil (Regur) & Red Soil",
    climate: "Semi-arid tropical",
    rainfall: "50 cm to 100 cm (dry rain-shadow zones)",
    description: "Characterized by basaltic volcanic soil that retains moisture excellently, this plateau region is highly suited for rain-fed dryland farming and commercial cash crops.",
    crops: ["Cotton", "Soybean", "Sorghum (Jowar)", "Groundnut", "Pigeon Pea (Arhar)"],
  },
  {
    id: "himalayan",
    name: "Himalayan Region",
    states: "Himachal Pradesh, Uttarakhand, Jammu & Kashmir, Sikkim",
    soilType: "Forest loam, shallow silt, acidic hill soil",
    climate: "Temperate to alpine",
    rainfall: "150 cm to 250 cm",
    description: "Hilly terraced topography with steep slopes. Farming is tailored to local micro-climates, focusing on high-value horticulture, floriculture, and specialized cold-season crops.",
    crops: ["Apples", "Tea", "Saffron", "Barley", "Walnuts"],
  },
  {
    id: "coastal",
    name: "Coastal & Delta Plains",
    states: "Kerala, Tamil Nadu, Odisha, West Bengal coast",
    soilType: "Alluvial, saline-coastal sands, laterite soil",
    climate: "Humid tropical, high relative humidity",
    rainfall: "150 cm to 300 cm (heavy monsoon impacts)",
    description: "Blessed with extensive river deltas and marine influence. High humidity and high rainfall enable year-round cultivation of moisture-loving tropical crops.",
    crops: ["Paddy (Rice)", "Coconut", "Black Pepper", "Rubber", "Cashew"],
  },
  {
    id: "western-dry",
    name: "Western Dry Region",
    states: "Rajasthan, parts of Gujarat & Haryana",
    soilType: "Desert soil, sandy loam (low organic content)",
    climate: "Arid, extreme temperatures",
    rainfall: "Less than 50 cm (frequent droughts)",
    description: "Characterized by sandy deserts, low rainfall, and high evaporation rates. Farmers adopt micro-irrigation systems and cultivate drought-resistant coarse cereals.",
    crops: ["Pearl Millet (Bajra)", "Cluster Bean (Guar)", "Mustard", "Chickpea", "Moth Bean"],
  },
];

export default function AgriZones() {
  const [activeZone, setActiveZone] = useState<Zone>(zonesData[0]);

  return (
    <section id="zones" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>India&apos;s Agro-Climatic Zones</h2>
          <p className={styles.tagline}>
    ਜਾਣੋ ਕਿ ਕਿਵੇਂ ਭਾਰਤ ਦੀ ਮਿੱਟੀ ਦੀ ਵਿਭਿੰਨ ਰਸਾਇਣਕ ਬਣਤਰ, ਖੇਤਰੀ ਜਲਵਾਯੂ ਅਤੇ ਵਰਖਾ ਦੇ ਪੈਟਰਨ ਸਥਾਨਕ ਖੇਤੀਬਾੜੀ ਦੇ ਤਰੀਕਿਆਂ ਅਤੇ ਫਸਲਾਂ ਦੀ ਚੋਣ ਨੂੰ ਨਿਰਧਾਰਤ ਕਰਦੇ ਹਨ।
          </p>
        </motion.div>

        {/* Section Content Layout */}
        <div className={styles.layout}>
          {/* Vertical Tabs Selection */}
          <div className={styles.zoneList}>
            {zonesData.map((zone) => {
              const isActive = activeZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  className={`${styles.zoneBtn} ${
                    isActive ? styles.zoneBtnActive : ""
                  }`}
                  onClick={() => setActiveZone(zone)}
                >
                  {/* Sliding Active Tab Highlight using layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="activeZoneIndicator"
                      className={styles.activeIndicator}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <h3 className={styles.zoneName}>{zone.name}</h3>
                  <p className={styles.zoneStates}>{zone.states}</p>
                </button>
              );
            })}
          </div>

          {/* Details Card */}
          <div className={styles.detailsCard}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                <div>
                  <h3 className={styles.detailTitle}>{activeZone.name}</h3>
                  <p className={styles.zoneStates} style={{ fontSize: '13px', marginTop: '6px' }}>
                    <strong>Key Regions:</strong> {activeZone.states}
                  </p>
                </div>

                <p className={styles.detailDesc}>{activeZone.description}</p>

                {/* Soil & Climate metrics */}
                <div className={styles.metrics}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Soil Profile</span>
                    <span className={styles.metricValue}>{activeZone.soilType}</span>
                  </div>

                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Climate &amp; Rainfall</span>
                    <span className={styles.metricValue}>
                      {activeZone.climate} ({activeZone.rainfall})
                    </span>
                  </div>
                </div>

                {/* Primary Crops tags */}
                <div className={styles.cropsSection}>
                  <span className={styles.cropsLabel}>Key Cultivated Crops</span>
                  <div className={styles.cropsList}>
                    {activeZone.crops.map((crop, i) => (
                      <span key={i} className={styles.cropTag}>
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
