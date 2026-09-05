"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Tag,
  ArrowRight,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./gallery-page.module.css";

interface GalleryItem {
  id: string;
  title: string;
  punjabiTitle: string;
  category: "farmlands" | "crops" | "store" | "community";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "mustard-field",
    title: "Vibrant Yellow Mustard Fields (Sarson)",
    punjabiTitle: "ਪੰਜਾਬ ਦੇ ਖਿੜਦੇ ਸਰ੍ਹੋਂ ਦੇ ਖੇਤ",
    category: "farmlands",
    categoryLabel: "Punjab Farmlands",
    image: "/images/gallery/mustard_field.webp",
    location: "Amritsar Rural, Punjab",
    description:
      "Lush yellow mustard blossoms against clear skies, representing the timeless beauty and fertility of Punjab's winter harvest.",
  },
  {
    id: "wheat-sunset",
    title: "Golden Wheat Harvest at Golden Hour",
    punjabiTitle: "ਸੁਨਹਿਰੀ ਕਣਕ ਦੀ ਭਰਪੂਰ ਵਾਢੀ",
    category: "crops",
    categoryLabel: "Crops & Harvest",
    image: "/images/gallery/wheat_harvest.webp",
    location: "Gumtala Region, Amritsar",
    description:
      "Fully matured golden wheat ears nurtured with certified hybrid seeds and balanced fertilizers, ready for high-yield harvest.",
  },

  {
    id: "farmer-smile",
    title: "Proud Punjabi Farmer with Bumper Crop",
    punjabiTitle: "ਖੁਸ਼ਹਾਲ ਕਿਸਾਨ, ਖੁਸ਼ਹਾਲ ਪੰਜਾਬ",
    category: "community",
    categoryLabel: "Farmers & Advisory",
    image: "/images/about/hero_farmer.webp",
    location: "Majitha, Amritsar",
    description:
      "Celebrating over two decades of farmer trust, helping local growers maximize crop health and seasonal profitability.",
  },
  {
    id: "paddy-fields",
    title: "Emerald Paddy Rice Fields & Irrigation",
    punjabiTitle: "ਹਰੇ-ਭਰੇ ਝੋਨੇ ਦੇ ਖੇਤ",
    category: "farmlands",
    categoryLabel: "Punjab Farmlands",
    image: "/images/gallery/paddy_harvest.webp",
    location: "Raja Sansi, Amritsar",
    description:
      "Expansive emerald green paddy fields maintained with proper water management and eco-friendly plant protection inputs.",
  },
  {
    id: "agri-consultation",
    title: "Field Advisory & Crop Health Assessment",
    punjabiTitle: "ਖੇਤ ਵਿੱਚ ਮਾਹਿਰਾਂ ਵੱਲੋਂ ਸਲਾਹ",
    category: "community",
    categoryLabel: "Farmers & Advisory",
    image: "/images/gallery/crop_consultation.webp",
    location: "Verka, Amritsar",
    description:
      "Our agronomy specialists providing on-field guidance on disease prevention, optimal fertilizer dosage, and yield enhancement.",
  },
  {
    id: "certified-seeds",
    title: "Certified Hybrid Seeds & Young Sapling",
    punjabiTitle: "ਪ੍ਰਮਾਣਿਤ ਹਾਈਬ੍ਰਿਡ ਬੀਜ",
    category: "store",
    categoryLabel: "Store & Supplies",
    image: "/images/about/hero_seeds.webp",
    location: "PAU Ludhiana Approved Range",
    description:
      "Carefully graded, certified hybrid seeds and organic bio-fertilizers ensuring vigorous root development and disease resistance.",
  },
  {
    id: "cotton-crop",
    title: "Blooming Cotton Harvest (Narma)",
    punjabiTitle: "ਕਪਾਹ ਅਤੇ ਨਰਮੇ ਦੀ ਭਰਪੂਰ ਚੁਗਾਈ",
    category: "crops",
    categoryLabel: "Crops & Harvest",
    image: "/images/gallery/cotton_harvest.webp",
    location: "Punjab Cotton Belt, Malwa/Amritsar",
    description:
      "Lush white cotton bolls ready for picking, cultivated with premium hybrid seeds and expert pest management.",
  },
  {
    id: "rice-crop",
    title: "Golden Basmati Rice Harvest",
    punjabiTitle: "ਸੁਨਹਿਰੀ ਬਾਸਮਤੀ ਝੋਨੇ ਦੀ ਵਾਢੀ",
    category: "crops",
    categoryLabel: "Crops & Harvest",
    image: "/images/gallery/basmati_rice.webp",
    location: "Amritsar Basmati Belt, Punjab",
    description:
      "Aromatic, heavy golden Basmati rice ears ready for harvest, grown using genuine fertilizers and balanced soil nutrition.",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Photos", punjabi: "ਸਾਰੀਆਂ ਤਸਵੀਰਾਂ" },
  { id: "farmlands", label: "Punjab Farmlands", punjabi: "ਪੰਜਾਬ ਦੇ ਖੇਤ" },
  { id: "crops", label: "Crops & Harvest", punjabi: "ਫਸਲਾਂ ਅਤੇ ਵਾਢੀ" },
  { id: "store", label: "Store & Supplies", punjabi: "ਖਾਦ-ਬੀਜ ਸਟੋਰ" },
  { id: "community", label: "Farmers & Advisory", punjabi: "ਕਿਸਾਨ ਅਤੇ ਸਲਾਹ" },
];

export default function GalleryPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : 0
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
    );
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, showNext, showPrev]);

  // Disable body scroll when lightbox is open
  useEffect(() => {
    if (activeLightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLightboxIndex]);

  const activeItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <>
      <Navbar />

      <main className={styles.galleryPage}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrowBadge}>
              <Camera size={14} className={styles.eyebrowIcon} />
              <span>ਖੇਤੀ ਤਸਵੀਰਾਂ · Photo Gallery</span>
            </div>
            <h1>Glimpses of Punjab&apos;s Farmlands &amp; Harvests.</h1>
            <p className={styles.heroDescription}>
              Explore the rich farmlands of Punjab, certified high-yield crops, genuine
              store supplies, and the proud farming community supported by Baba Deep Singh Khad Store.
            </p>

            {/* Quick Stats Strip */}
            <div className={styles.statsStrip}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>25+</span>
                <span className={styles.statLabel}>Years of Heritage</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>10,000+</span>
                <span className={styles.statLabel}>Farmers Connected</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>PAU Certified Inputs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className={styles.filterSection}>
          <div className={styles.filterContainer}>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ""}`}
                >
                  <span className={styles.filterLabel}>{cat.label}</span>
                  <span className={styles.filterCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Image Grid */}
        <section className={styles.gridSection}>
          <motion.div layout className={styles.galleryGrid}>
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  key={item.id}
                  className={styles.galleryCard}
                  onClick={() => openLightbox(index)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                    <div className={styles.cardGradient} />

                    <span className={styles.cardCategoryBadge}>
                      <Tag size={12} />
                      {item.categoryLabel}
                    </span>

                    <button
                      className={styles.zoomButton}
                      aria-label={`View ${item.title} full size`}
                    >
                      <Maximize2 size={16} />
                    </button>

                    <div className={styles.cardInfo}>
                      <p className={styles.punjabiSubtitle}>{item.punjabiTitle}</p>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <div className={styles.cardLocation}>
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Farmer Community Callout */}
        <section className={styles.communityCallout}>
          <div className={styles.calloutCard}>
            <div className={styles.calloutLeft}>
              <div className={styles.calloutBadge}>
                <Sparkles size={14} />
                <span>ਕਿਸਾਨ ਭਾਈਚਾਰਾ · Community</span>
              </div>
              <h2>Have a photo from your field to share?</h2>
              <p>
                Whether it is your latest wheat harvest, healthy paddy crop, or store visit,
                we celebrate the success of every farmer in Amritsar.
              </p>
            </div>
            <div className={styles.calloutRight}>
              <Link href="/contact" className={styles.calloutBtn}>
                <Phone size={16} />
                <span>Contact Our Store</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightboxOverlay}
            onClick={closeLightbox}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className={styles.closeBtn}
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows */}
              <button
                className={`${styles.navArrow} ${styles.prevArrow}`}
                onClick={showPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                className={`${styles.navArrow} ${styles.nextArrow}`}
                onClick={showNext}
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>

              {/* Main Lightbox Media */}
              <div className={styles.lightboxImageContainer}>
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  priority
                  className={styles.lightboxImage}
                />
              </div>

              {/* Lightbox Details Bar */}
              <div className={styles.lightboxDetails}>
                <div className={styles.lightboxMeta}>
                  <span className={styles.lightboxCategory}>
                    {activeItem.categoryLabel}
                  </span>
                  <span className={styles.lightboxCounter}>
                    {activeLightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
                <h3 className={styles.lightboxTitle}>{activeItem.title}</h3>
                <p className={styles.lightboxPunjabi}>{activeItem.punjabiTitle}</p>
                <p className={styles.lightboxDescription}>{activeItem.description}</p>
                <div className={styles.lightboxLocation}>
                  <MapPin size={14} />
                  <span>{activeItem.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
