"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Thermometer, CloudRain, Layers, CheckCircle2, Sprout } from "lucide-react";
import { cropData, Crop } from "@/data/crops";
import styles from "./CropCatalog.module.css";

export default function CropCatalog() {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Grains", "Spices", "Cash Crops"];

  // Filter & Search Logic
  const filteredCrops = cropData.filter((crop) => {
    const matchesCategory = filter === "All" || crop.category === filter;
    const matchesSearch =
      crop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.hindiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crop.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className={styles.section}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Agricultural Crop Treasury</h2>
          <p className={styles.tagline}>
ਭਾਰਤ ਦੀਆਂ ਮੁੱਖ ਫਸਲਾਂ ਦੇ ਵਰਗੀਕਰਨ ਸੰਬੰਧੀ ਵੇਰਵਿਆਂ, ਇਤਿਹਾਸਕ ਕਾਸ਼ਤ ਲੋੜਾਂ, ਖੇਤਰੀ ਸਰੋਤਾਂ ਅਤੇ ਪੌਸ਼ਟਿਕ ਮਾਪਦੰਡਾਂ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ।
          </p>
        </motion.div>

        {/* Filter and Search Controls */}
        <div className={styles.controls}>
          {/* Search bar */}
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by crop name."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className={styles.filters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${
                  filter === category ? styles.filterBtnActive : ""
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Crops Grid */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredCrops.map((crop, index) => (
              <motion.div
                layout
                key={crop.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={crop.image}
                    alt={crop.name}
                    className={styles.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.cardBadge}>{crop.season}</div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{crop.name}</h3>
                  <p className={styles.scientific}>{crop.scientificName}</p>
                  <p style={{ color: "var(--accent-gold)", fontSize: "13px", fontWeight: 500 }}>
                  {crop.punjabiName} - {crop.hindiName}
                  </p>

                  <div className={styles.metaGrid}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Harvest States</span>
                      <span className={styles.metaValue} title={crop.topStates.join(", ")}>
                        {crop.topStates.join(", ")}
                      </span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Soil Type</span>
                      <span className={styles.metaValue} title={crop.soilType}>
                        {crop.soilType}
                      </span>
                    </div>
                  </div>

                  <button
                    className={styles.cardBtn}
                    onClick={() => setSelectedCrop(crop)}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Info Modal */}
        <AnimatePresence>
          {selectedCrop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modalOverlay}
              onClick={() => setSelectedCrop(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  className={styles.modalClose}
                  onClick={() => setSelectedCrop(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                {/* Modal Hero Banner */}
                <div className={styles.modalHero}>
                  <Image
                    src={selectedCrop.image}
                    alt={selectedCrop.name}
                    className={styles.modalHeroImage}
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                  <div className={styles.modalHeroOverlay} />
                  <div className={styles.modalHeroContent}>
                    <h3 className={styles.modalTitle}>{selectedCrop.name}</h3>
                    <p className={styles.modalScientific}>{selectedCrop.scientificName}</p>
                  </div>
                </div>

                {/* Modal Body */}
                <div className={styles.modalBody}>
                  {/* Cultivation Requirements Grid */}
                  <div className={styles.requirements}>
                    <div className={styles.reqItem}>
                      <Thermometer className={styles.reqIcon} />
                      <div className={styles.reqDetails}>
                        <span className={styles.reqLabel}>Temperature</span>
                        <span className={styles.reqValue}>{selectedCrop.temperatureRange}</span>
                      </div>
                    </div>

                    <div className={styles.reqItem}>
                      <CloudRain className={styles.reqIcon} />
                      <div className={styles.reqDetails}>
                        <span className={styles.reqLabel}>Rainfall</span>
                        <span className={styles.reqValue}>{selectedCrop.rainfallRange}</span>
                      </div>
                    </div>

                    <div className={styles.reqItem}>
                      <Layers className={styles.reqIcon} />
                      <div className={styles.reqDetails}>
                        <span className={styles.reqLabel}>Optimal Soil</span>
                        <span className={styles.reqValue} title={selectedCrop.soilType}>
                          {selectedCrop.soilType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.modalDesc}>{selectedCrop.description}</p>

                  <div className={styles.infoSplit}>
                    {/* Health Benefits */}
                    <div>
                      <h4 className={styles.sectionSubtitle}>Nutrition &amp; Benefits</h4>
                      <ul className={styles.bulletList}>
                        {selectedCrop.healthBenefits.map((benefit, i) => (
                          <li key={i} className={styles.bulletItem}>
                            <CheckCircle2 className={styles.bulletIcon} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cultivation Tips */}
                    <div>
                      <h4 className={styles.sectionSubtitle}>Cultivation Tips</h4>
                      <ul className={styles.numList}>
                        {selectedCrop.cultivationTips.map((tip, i) => (
                          <li key={i} className={styles.numItem}>
                            <div className={styles.numIndex}>{i + 1}</div>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
