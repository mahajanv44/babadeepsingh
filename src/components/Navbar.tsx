"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Home,
  Info,
  Images,
  PhoneCall,
  ChevronRight,
  PackageCheck,
} from "lucide-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

interface NavbarProps {
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState<{
    isOpen: boolean;
    text: string;
    punjabi: string;
  }>({
    isOpen: true,
    text: "Store Open Today · 9:00 AM – 7:00 PM",
    punjabi: "ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 7:00 ਵਜੇ ਤੱਕ",
  });

  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine dynamic store opening status based on day of the week
  useEffect(() => {
    const day = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    if (day === 0) {
      setStoreStatus({
        isOpen: false,
        text: "Store Closed Today · Sunday",
        punjabi: "ਐਤਵਾਰ ਨੂੰ ਦੁਕਾਨ ਬੰਦ ਹੈ · Sunday Closed",
      });
    } else if (day === 6) {
      setStoreStatus({
        isOpen: true,
        text: "Store Open Today · 9:00 AM – 6:30 PM",
        punjabi: "ਸ਼ਨੀਵਾਰ: ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 6:30 ਵਜੇ ਤੱਕ",
      });
    } else {
      setStoreStatus({
        isOpen: true,
        text: "Store Open Today · 9:00 AM – 7:00 PM",
        punjabi: "ਸੋਮਵਾਰ - ਸ਼ੁੱਕਰਵਾਰ: ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 7:00 ਵਜੇ ਤੱਕ",
      });
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "hero", label: "Home", punjabi: "ਮੁੱਖ ਪੰਨਾ", href: "/", icon: Home },
    {
      id: "products",
      label: "Our Products",
      punjabi: "ਸਾਡੇ ਉਤਪਾਦ",
      href: "/products",
      icon: PackageCheck,
      badge: "19+ Items",
    },
    { id: "about", label: "About Us", punjabi: "ਸਾਡੇ ਬਾਰੇ", href: "/about", icon: Info },
    { id: "gallery", label: "Gallery", punjabi: "ਗੈਲਰੀ", href: "/gallery", icon: Images },
    { id: "contact", label: "Contact Us", punjabi: "ਸੰਪਰਕ", href: "/contact", icon: PhoneCall },
  ];

  const isCurrentActive = (item: (typeof navItems)[0]) => {
    if (item.href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(item.href);
  };

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        {/* Scroll Progress Bar */}
        <motion.div className={styles.scrollProgress} style={{ scaleX }} />

        <Link
          href="/"
          className={styles.brand}
          onClick={() => handleLinkClick("/")}
        >
          <Image
            src="/images/title-logo.webp"
            width={124}
            height={64}
            alt="Baba Deep Singh Khad Store Logo"
            priority
            className={styles.brandLogo}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => {
            const active = isCurrentActive(item);
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${active ? styles.active : ""}`}
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavLine"
                      className={styles.activeLine}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA / Mobile Quick App Action Cluster */}
        <div className={styles.navActions}>
          <a
            href="tel:+919815265705"
            className={styles.ctaButton}
            aria-label="Quick Call Store: +91 98152 65705"
          >
            <Phone size={13} className={styles.ctaIcon} />
            <span>Quick Call</span>
          </a>

          {/* Quick Mobile Direct Call Button */}
          <a
            href="tel:+919815265705"
            className={styles.mobileActionBtnCall}
            aria-label="Call Store Directly"
          >
            <Phone size={17} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Slide-Out Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className={styles.drawerWrapper}>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={styles.drawerBackdrop}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className={styles.drawerPanel}
            >
              {/* Drawer Header */}
              <div className={styles.drawerHeader}>
                <div className={styles.drawerBrandWrap}>
                  <Image
                    src="/images/title-logo.webp"
                    width={100}
                    height={52}
                    alt="Baba Deep Singh Khad Store Logo"
                  />
                  <div className={styles.drawerBrandText}>
                    <strong>ਬਾਬਾ ਦੀਪ ਸਿੰਘ ਖਾਦ ਸਟੋਰ</strong>
                    <span>Gumtala, Amritsar</span>
                  </div>
                </div>
                <button
                  type="button"
                  className={styles.drawerCloseBtn}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Status Badge */}
              <div
                className={`${styles.drawerStatusRow} ${
                  !storeStatus.isOpen ? styles.drawerStatusRowClosed : ""
                }`}
              >
                <span
                  className={
                    storeStatus.isOpen
                      ? styles.statusLiveDot
                      : styles.statusClosedDot
                  }
                />
                <div className={styles.drawerStatusContent}>
                  <span className={styles.statusLiveText}>{storeStatus.text}</span>
                  <span className={styles.statusPunjabiSub}>{storeStatus.punjabi}</span>
                </div>
              </div>

              {/* Drawer Navigation Links */}
              <div className={styles.drawerLinksContainer}>
                <p className={styles.drawerSectionHeading}>Navigation · ਪੰਨੇ</p>
                <div className={styles.drawerNavList}>
                  {navItems.map((item) => {
                    const active = isCurrentActive(item);
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`${styles.drawerNavLink} ${
                          active ? styles.drawerNavLinkActive : ""
                        }`}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        <div className={styles.drawerNavLeft}>
                          <div className={styles.drawerNavIconWrap}>
                            <IconComponent size={18} />
                          </div>
                          <div>
                            <div className={styles.drawerNavLabelRow}>
                              <span className={styles.drawerNavLabel}>{item.label}</span>
                              {item.badge && (
                                <span className={styles.drawerNavBadge}>{item.badge}</span>
                              )}
                            </div>
                            <span className={styles.drawerNavPunjabi}>{item.punjabi}</span>
                          </div>
                        </div>
                        <ChevronRight size={16} className={styles.drawerNavArrow} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
