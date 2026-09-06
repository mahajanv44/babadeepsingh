"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Package,
  Wrench,
  CreditCard,
  Sprout,
  ArrowRight,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PRODUCT_CATEGORIES,
  PRODUCTS_LIST,
  ProductItem,
} from "@/data/products";
import styles from "./products-page.module.css";

export default function ProductsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per page (12 on desktop/web, 8 on mobile)
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 8 : 12);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play for top slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % PRODUCT_CATEGORIES.length);
    }, 3000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex((prev) =>
      prev === 0 ? PRODUCT_CATEGORIES.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex((prev) => (prev + 1) % PRODUCT_CATEGORIES.length);
  };

  const handleSlideSelect = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlideIndex(index);
  };

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
    // Smooth scroll to product grid
    const el = document.getElementById("product-catalog-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectCategory = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const el = document.getElementById("product-catalog-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Category Filtering & Pagination Logic
  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS_LIST
      : PRODUCTS_LIST.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const activeCategoryData = PRODUCT_CATEGORIES[currentSlideIndex];

  return (
    <>
      <Navbar />

      <main className={styles.pageContainer}>
        {/* Header and Top Interactive Category Slider */}
        <section className={styles.heroSection}>
          <div className={styles.heroHeader}>
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>ਖੇਤੀ ਉਤਪਾਦ ਅਤੇ ਕਿਰਾਏ 'ਤੇ ਸੰਦ · Farm Inputs & Machinery Rentals</span>
            </div>
            <h1 className={styles.heroTitle}>Our Products & Agricultural Supplies</h1>
            <p className={styles.heroPunjabi}>
              ਜੈਵਿਕ ਖਾਦ, ਕੀਟਨਾਸ਼ਕ, ਮੀਟ ਬੋਨ ਮੀਲ, ਰਸਾਇਣਕ ਖਾਦਾਂ, ਉੱਲੀਨਾਸ਼ਕ, ਨਦੀਨਨਾਸ਼ਕ ਅਤੇ ਕਿਰਾਏ 'ਤੇ ਸੰਦ
            </p>
            <p className={styles.heroSub}>
              Browse certified fertilizers, plant protection agrochemicals, traditional organic inputs, and daily farm machinery rentals tailored for Punjab farmlands.
            </p>
          </div>

          {/* Top Slider Carousel */}
          <div
            className={styles.sliderWrapper}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className={styles.sliderTrack}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategoryData.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={styles.slideContent}
                >
                  {/* Category Visual */}
                  <div className={styles.slideVisual}>
                    <Image
                      src={activeCategoryData.image}
                      alt={activeCategoryData.title}
                      fill
                      priority
                      className={styles.slideImg}
                    />
                    <span className={styles.slideCategoryTag}>
                      {activeCategoryData.title}
                    </span>
                  </div>

                  {/* Category Info */}
                  <div className={styles.slideInfo}>
                    <div className={styles.slideMetaRow}>
                      <span className={styles.slideCategoryBadge}>
                        Featured Category · ਸ਼੍ਰੇਣੀ {currentSlideIndex + 1}/{PRODUCT_CATEGORIES.length}
                      </span>
                    </div>

                    <div className={styles.slideTitleWrap}>
                      <h3 className={styles.slideTitle}>{activeCategoryData.title}</h3>
                      <span className={styles.slidePunjabiTitle}>
                        {activeCategoryData.punjabiTitle}
                      </span>
                    </div>

                    <p className={styles.slideText}>{activeCategoryData.shortDesc}</p>
                    <p className={styles.slidePunjabiText}>
                      {activeCategoryData.punjabiDesc}
                    </p>
                  </div>

                  {/* Quick Action CTA */}
                  <div className={styles.slideActionCol}>
                    <button
                      type="button"
                      className={styles.slideCtaBtn}
                      onClick={() => handleCategoryClick(activeCategoryData.slug)}
                    >
                      <span>Explore Category</span>
                      <ArrowRight size={15} />
                    </button>
                    <span className={styles.slidePunjabiCtaText}>ਉਤਪਾਦ ਦੇਖੋ</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Arrows */}
              <button
                type="button"
                className={`${styles.sliderNavBtn} ${styles.prevBtn}`}
                onClick={handlePrevSlide}
                aria-label="Previous Category"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className={`${styles.sliderNavBtn} ${styles.nextBtn}`}
                onClick={handleNextSlide}
                aria-label="Next Category"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Slider Dots */}
            <div className={styles.sliderDots}>
              {PRODUCT_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.sliderDot} ${
                    currentSlideIndex === idx ? styles.sliderDotActive : ""
                  }`}
                  onClick={() => handleSlideSelect(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Category Navigation Bar (Single Line) */}
        <section id="product-catalog-grid" className={styles.filterSection}>
          <div className={styles.categoryPills}>
            <button
              type="button"
              className={`${styles.categoryPill} ${
                selectedCategory === "all" ? styles.categoryPillActive : ""
              }`}
              onClick={() => handleSelectCategory("all")}
            >
              <span>All Categories / ਸਾਰੇ ਉਤਪਾਦ</span>
              <span className={styles.pillCount}>{PRODUCTS_LIST.length}</span>
            </button>

            {PRODUCT_CATEGORIES.map((cat) => {
              const count = PRODUCTS_LIST.filter((p) => p.category === cat.slug).length;
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.categoryPill} ${
                    isActive ? styles.categoryPillActive : ""
                  }`}
                  onClick={() => handleSelectCategory(cat.slug)}
                >
                  <span>{cat.title} ({cat.punjabiTitle})</span>
                  <span className={styles.pillCount}>{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className={styles.productsContainer}>
          <div className={styles.resultsHeader}>
            <p>
              Showing <strong>{filteredProducts.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredProducts.length)}</strong> of <strong>{filteredProducts.length}</strong> products
              {selectedCategory !== "all" && ` in ${PRODUCT_CATEGORIES.find((c) => c.slug === selectedCategory)?.title || selectedCategory}`}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <Package size={48} color="#56664b" />
              <h3 className={styles.emptyStateTitle}>No matching products found</h3>
              <p className={styles.emptyStateText}>
                ਕੋਈ ਉਤਪਾਦ ਨਹੀਂ ਮਿਲਿਆ। Try searching for something else or reset your filters.
              </p>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={() => handleSelectCategory("all")}
              >
                Show All Products / ਸਾਰੇ ਉਤਪਾਦ ਦੇਖੋ
              </button>
            </div>
          ) : (
            <>
              <div className={styles.grid}>
                {displayedProducts.map((product) => {
                  return (
                    <article key={product.id} className={styles.card}>
                      <div className={styles.cardImageWrap}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={styles.cardImage}
                        />
                      </div>

                      <div className={styles.cardBody}>
                        <span className={styles.categoryTag}>
                          {product.categoryLabel} · {product.categoryPunjabi}
                        </span>

                        <h3 className={styles.cardTitle}>{product.name}</h3>
                        <p className={styles.cardPunjabiTitle}>{product.punjabiName}</p>

                        <div className={styles.packSizeRow}>
                          <Package size={14} />
                          <span>{product.packSize}</span>
                        </div>

                        <div className={styles.cardActions}>
                          <button
                            type="button"
                            className={styles.detailsBtn}
                            onClick={() => setSelectedProduct(product)}
                            aria-label={`View details for ${product.name}`}
                          >
                            <Info size={15} />
                            <span>View Details & Specs</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className={styles.paginationWrapper}>
                  <button
                    type="button"
                    className={styles.pageArrowBtn}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    <ChevronLeft size={16} />
                    <span>Prev</span>
                  </button>

                  <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        type="button"
                        className={`${styles.pageNumberBtn} ${
                          currentPage === pageNum ? styles.pageNumberBtnActive : ""
                        }`}
                        onClick={() => handlePageChange(pageNum)}
                        aria-label={`Page ${pageNum}`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    className={styles.pageArrowBtn}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </section>

        {/* Dedicated Rented Equipment Highlight Section */}
        <section className={styles.rentalBanner}>
          <div className={styles.rentalCard}>
            <div className={styles.rentalCopy}>
              <div className={styles.rentalBadge}>
                <Wrench size={14} />
                <span>ਕਿਰਾਏ 'ਤੇ ਖੇਤੀ ਸੰਦ · Farm Machinery on Rent</span>
              </div>
              <h3>Need Equipment Without Heavy Buying Costs?</h3>
              <p className={styles.rentalPunjabi}>
                ਬੈਟਰੀ ਸਪਰੇਅ ਪੰਪ, ਪਾਵਰ ਵੀਡਰ ਗੋਡੀ ਮਸ਼ੀਨ, ਅਤੇ ਬੀਜ ਡਰਿੱਲ ਕਿਰਾਏ 'ਤੇ ਉਪਲਬਧ ਹਨ।
              </p>
              <p className={styles.rentalText}>
                We provide well-maintained battery power sprayers, heavy-duty weeders, and seed drills on flexible daily/hourly rentals to farmers across Amritsar & Gumtala.
              </p>

              <div className={styles.rentalFeatures}>
                <div className={styles.rentalFeatureItem}>
                  <CheckCircle2 size={16} color="var(--accent-gold, #c79f2a)" />
                  <span>Tested & Charged Batteries</span>
                </div>
                <div className={styles.rentalFeatureItem}>
                  <CheckCircle2 size={16} color="var(--accent-gold, #c79f2a)" />
                  <span>Affordable Daily Rates</span>
                </div>
                <div className={styles.rentalFeatureItem}>
                  <CheckCircle2 size={16} color="var(--accent-gold, #c79f2a)" />
                  <span>No Heavy Capital Investment</span>
                </div>
                <div className={styles.rentalFeatureItem}>
                  <CheckCircle2 size={16} color="var(--accent-gold, #c79f2a)" />
                  <span>Prompt Local Support in Gumtala</span>
                </div>
              </div>

              <a href="tel:+919815265705" className={styles.rentalCallBtn}>
                <Phone size={16} />
                <span>Call to Book Machinery / ਸੰਦ ਬੁੱਕ ਕਰੋ</span>
              </a>
            </div>

            <div className={styles.rentalVisual}>
              <Image
                src="/images/products/farm_machinery_rental.webp"
                alt="Agricultural Equipment & Machinery on Rent"
                fill
                className={styles.rentalImg}
              />
            </div>
          </div>
        </section>

        {/* Trust & Store Assurance Bar */}
        <section className={styles.trustBar}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <ShieldCheck size={28} className={styles.trustIcon} />
              <div className={styles.trustInfo}>
                <strong>PAU Ludhiana Certified</strong>
                <p>100% genuine inputs compliant with university recommended dosages.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <CreditCard size={28} className={styles.trustIcon} />
              <div className={styles.trustInfo}>
                <strong>ਕਿਸਾਨ ਕਾਰਡ ਸਵੀਕਾਰ</strong>
                <p>Accepting farmer cards & multi-mode cashless billing at the store.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <Sprout size={28} className={styles.trustIcon} />
              <div className={styles.trustInfo}>
                <strong>Free Crop Guidance</strong>
                <p>Bring affected leaf or plant samples for spot disease identification.</p>
              </div>
            </div>

            <div className={styles.trustItem}>
              <Phone size={28} className={styles.trustIcon} />
              <div className={styles.trustInfo}>
                <strong>Direct Store Support</strong>
                <p>Call +91 98152 65705 for stock availability and seasonal advice.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quick Specs / Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setSelectedProduct(null)}
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              <div className={styles.modalImageWrap}>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalBody}>
                {selectedProduct.badge && (
                  <span className={styles.modalBadge}>{selectedProduct.badge}</span>
                )}

                <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>
                <p className={styles.modalPunjabiTitle}>
                  {selectedProduct.punjabiName}
                </p>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Category:</span>
                  <span className={styles.specVal}>
                    {selectedProduct.categoryLabel} ({selectedProduct.categoryPunjabi})
                  </span>
                </div>

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Packaging / Term:</span>
                  <span className={styles.specVal}>{selectedProduct.packSize}</span>
                </div>

                {selectedProduct.composition && (
                  <div className={styles.specRow}>
                    <span className={styles.specLabel}>Composition / Specs:</span>
                    <span className={styles.specVal}>{selectedProduct.composition}</span>
                  </div>
                )}

                <div className={styles.specRow}>
                  <span className={styles.specLabel}>Recommended For:</span>
                  <span className={styles.specVal}>
                    {selectedProduct.crops.join(", ")}
                  </span>
                </div>

                <p className={styles.modalDesc}>{selectedProduct.description}</p>
                <p className={styles.modalPunjabiDesc}>
                  {selectedProduct.punjabiDesc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
