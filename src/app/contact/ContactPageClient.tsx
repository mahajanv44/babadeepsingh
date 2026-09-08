"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bug,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sprout,
  Video,
  Navigation,
  Building2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./contact-page.module.css";

const FAQS = [
  {
    q: "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਪੀਏਯੂ (PAU) ਲੁਧਿਆਣਾ ਤੋਂ ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਅਤੇ ਖਾਦਾਂ ਉਪਲਬਧ ਹਨ?",
    qEn: "Are your seeds and fertilizers approved by Punjab Agricultural University (PAU)?",
    a: "ਹਾਂਜੀ, ਸਾਡੇ ਸਾਰੇ ਹਾਈਬ੍ਰਿਡ ਬੀਜ (ਕਣਕ, ਝੋਨਾ, ਸਰ੍ਹੋਂ, ਸਬਜ਼ੀਆਂ) ਅਤੇ ਖਾਦਾਂ ਪੀਏਯੂ ਲੁਧਿਆਣਾ ਦੀਆਂ ਸਿਫ਼ਾਰਸ਼ਾਂ ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਮਾਪਦੰਡਾਂ ਅਨੁਸਾਰ ਹੀ ਉਪਲਬਧ ਕਰਵਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।",
  },
  {
    q: "ਦੁਕਾਨ ਦਾ ਸਮਾਂ ਕੀ ਹੈ ਅਤੇ ਕੀ ਐਤਵਾਰ ਨੂੰ ਦੁਕਾਨ ਖੁੱਲ੍ਹੀ ਰਹਿੰਦੀ ਹੈ?",
    qEn: "What are the store hours, and is the store open on Sundays?",
    a: "ਦੁਕਾਨ ਸੋਮਵਾਰ ਤੋਂ ਸ਼ਨੀਵਾਰ ਸਵੇਰੇ 9:00 ਵਜੇ ਤੋਂ ਸ਼ਾਮ 7:00 ਵਜੇ ਤੱਕ ਖੁੱਲ੍ਹੀ ਰਹਿੰਦੀ ਹੈ। ਐਤਵਾਰ ਨੂੰ ਦੁਕਾਨ ਬੰਦ ਰਹਿੰਦੀ ਹੈ, ਪਰ ਐਮਰਜੈਂਸੀ ਲਈ ਤੁਸੀਂ ਫ਼ੋਨ 'ਤੇ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ।",
  },
  {
    q: "ਕੀ ਮੈਂ ਫਸਲ ਦੀ ਬਿਮਾਰੀ ਦੀ ਫੋਟੋ WhatsApp 'ਤੇ ਭੇਜ ਕੇ ਸਲਾਹ ਲੈ ਸਕਦਾ ਹਾਂ?",
    qEn: "Can I send photos of my crop disease on WhatsApp for advice?",
    a: "ਬਿਲਕੁਲ! ਤੁਸੀਂ ਆਪਣੇ ਖੇਤ ਜਾਂ ਪ੍ਰਭਾਵਿਤ ਪੌਦੇ ਦੀ ਸਾਫ਼ ਫੋਟੋ ਸਾਡੇ WhatsApp ਨੰਬਰ +91 98152 65705 'ਤੇ ਭੇਜ ਸਕਦੇ ਹੋ। ਸਾਡੀ ਟੀਮ ਤੁਹਾਨੂੰ ਸਹੀ ਦਵਾਈ ਅਤੇ ਖੁਰਾਕ ਬਾਰੇ ਦੱਸੇਗੀ।",
  },
  {
    q: "ਕੀ ਤੁਸੀਂ ਸਰਕਾਰੀ ਖੇਤੀ ਸਬਸਿਡੀਆਂ ਬਾਰੇ ਵੀ ਮਾਰਗਦਰਸ਼ਨ ਕਰਦੇ ਹੋ?",
    qEn: "Do you provide guidance on government agricultural subsidies?",
    a: "ਹਾਂ, ਅਸੀਂ ਕਿਸਾਨਾਂ ਨੂੰ ਯੋਗ ਖੇਤੀ ਸੰਦਾਂ, ਬੀਜਾਂ ਅਤੇ ਖਾਦਾਂ 'ਤੇ ਮਿਲਣ ਵਾਲੀਆਂ ਸਰਕਾਰੀ ਸਬਸਿਡੀਆਂ ਦੀ ਪ੍ਰਕਿਰਿਆ ਸਮਝਣ ਅਤੇ ਲੋੜੀਂਦੇ ਕਾਗਜ਼ਾਤ ਤਿਆਰ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।",
  },
];

export default function ContactPageClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Intro & Action Options */}
        <section className={styles.intro}>
          <div className={styles.introCopy}>
            <p className={styles.eyebrow}>ਸੰਪਰਕ ਕਰੋ · Contact Us</p>
            <h1>Helping You Grow Better</h1>
            <p className={styles.description}>
              ਅਸੀਂ ਵਧੀਆ ਬੀਜ, ਖਾਦਾਂ, ਕੀਟਨਾਸ਼ਕ ਅਤੇ ਫਸਲਾਂ ਦੀ ਦੇਖਭਾਲ ਲਈ ਜ਼ਰੂਰੀ ਉਤਪਾਦ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ। ਆਪਣੀ ਫਸਲ ਅਤੇ ਲੋੜ ਬਾਰੇ ਸਾਡੇ ਨਾਲ ਗੱਲ ਕਰੋ, ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਹੀ ਉਤਪਾਦ ਚੁਣਨ ਵਿੱਚ ਮਦਦ ਕਰਾਂਗੇ।
            </p>
            <p className={styles.introSubText}>
              Reach out to our agricultural store in Gumtala, Amritsar for certified seeds, soil nutrients, and dependable guidance for every season.
            </p>

            <div className={styles.introHighlights}>
              <div className={styles.introHighlightItem}>
                <CheckCircle2 size={16} className={styles.highlightIcon} />
                <span>ਪ੍ਰਮਾਣਿਤ ਹਾਈਬ੍ਰਿਡ ਬੀਜ ਅਤੇ ਖਾਦਾਂ (Certified Seeds & Fertilizers)</span>
              </div>
              <div className={styles.introHighlightItem}>
                <CheckCircle2 size={16} className={styles.highlightIcon} />
                <span>ਕਿਸਾਨ ਕਾਰਡ ਸਵੀਕਾਰ (Accepting Farmer Cards)</span>
              </div>
              <div className={styles.introHighlightItem}>
                <CheckCircle2 size={16} className={styles.highlightIcon} />
                <span>ਸਰਕਾਰੀ ਖੇਤੀ ਸਬਸਿਡੀਆਂ ਦੀ ਸੇਧ (Govt Subsidy Guidance)</span>
              </div>
            </div>
          </div>

          <div id="contact-options" className={styles.actions} aria-label="Contact options">
            <a className={styles.action} href="tel:+919815265705">
              <Phone aria-hidden="true" />
              <span>
                <strong>Call the store / ਦੁਕਾਨ 'ਤੇ ਕਾਲ ਕਰੋ</strong>
                <small>+91 98152 65705</small>
              </span>
            </a>
            <a className={styles.action} href="tel:+919780240800">
              <Phone aria-hidden="true" />
              <span>
                <strong>Call the store / ਹੈਲਪਲਾਈਨ</strong>
                <small>+91 97802 40800</small>
              </span>
            </a>
            <a className={styles.action} href="mailto:support@babadeepsinghkhadstore.in">
              <Mail aria-hidden="true" />
              <span>
                <strong>Technical Support / ਤਕਨੀਕੀ ਸਹਾਇਤਾ</strong>
                <small>support@babadeepsinghkhadstore.in</small>
              </span>
            </a>
            <a className={styles.action} href="mailto:babadeepsinghkhadstore@gmail.com">
              <Mail aria-hidden="true" />
              <span>
                <strong>Store Email / ਈਮੇਲ ਸੰਪਰਕ</strong>
                <small>babadeepsinghkhadstore@gmail.com</small>
              </span>
            </a>
            <div className={styles.action}>
              <MapPin aria-hidden="true" />
              <span>
                <strong>Store Location / ਪਤਾ</strong>
                <small>Gumtala near SBI Bank, Airport Road, Amritsar (143008)</small>
              </span>
            </div>
          </div>
        </section>

        {/* Dedicated Section: Yield & Disease Consultation + Online & In-Person + Opening Hours */}
        <section className={styles.consultation} aria-labelledby="consultation-title">
          <div className={styles.consultationIntro}>
            <p className={styles.eyebrow}>ਖੇਤੀ ਸਲਾਹ · Crop Support & Services</p>
            <h2 id="consultation-title">Yield and Disease Consultation</h2>
            <p className={styles.punjabiHighlight}>
              ਫਸਲ ਦੇ ਵਧੀਆ ਝਾੜ, ਬਿਮਾਰੀਆਂ ਦੀ ਰੋਕਥਾਮ ਅਤੇ ਸਹੀ ਖਾਦ-ਦਵਾਈਆਂ ਲਈ ਸਾਡੀ ਮਾਹਰ ਟੀਮ ਨਾਲ ਸਿੱਧਾ ਸੰਪਰਕ ਕਰੋ।
            </p>
            <p className={styles.consultationSub}>
              Practical agronomic guidance for a healthier crop, optimal yield, and certified treatments tailored to your field.
            </p>
          </div>

          <div className={styles.consultationGrid}>
            {/* 1. Online Consultation */}
            <article className={styles.consultationCard}>
              <div className={styles.cardTop}>
                <div className={styles.consultationIcon}>
                  <Video aria-hidden="true" />
                </div>
                <div>
                  <span className={styles.optionLabel}>Online Consultation</span>
                  <span className={styles.punjabiCardTag}>ਖੇਤ ਤੋਂ ਸਿੱਧੀ ਸਲਾਹ</span>
                </div>
              </div>
              <h3>Talk to Our Team from Your Field</h3>
              <p className={styles.cardPunjabiDesc}>
                ਖੇਤ ਵਿੱਚੋਂ ਹੀ ਫ਼ੋਨ ਜਾਂ ਮੈਸੇਜ ਰਾਹੀਂ ਫਸਲ ਦੇ ਪੱਤੇ ਜਾਂ ਲੱਛਣ ਸਾਂਝੇ ਕਰੋ। ਸਾਡੀ ਟੀਮ ਤੁਹਾਨੂੰ ਸਹੀ ਦਵਾਈ ਅਤੇ ਸਪਰੇਅ ਦੀ ਖੁਰਾਕ ਦੱਸੇਗੀ।
              </p>
              <p className={styles.cardEnglishDesc}>
                Share crop photos, symptoms, or yield targets by phone or messaging for timely medicine recommendations and exact spray dosage guidance.
              </p>
              <a href="#contact-options" className={styles.consultationLink}>
                <span>See contact numbers / ਸੰਪਰਕ ਨੰਬਰ</span>
                <ArrowRight size={15} />
              </a>
            </article>

            {/* 2. In-Person Consultation */}
            <article className={styles.consultationCard}>
              <div className={styles.cardTop}>
                <div className={styles.consultationIcon}>
                  <MapPin aria-hidden="true" />
                </div>
                <div>
                  <span className={styles.optionLabel}>In-Person Consultation</span>
                  <span className={styles.punjabiCardTag}>ਦੁਕਾਨ 'ਤੇ ਆ ਕੇ ਸਲਾਹ</span>
                </div>
              </div>
              <h3>Bring Your Crop Concerns to Us</h3>
              <p className={styles.cardPunjabiDesc}>
                ਆਪਣੀ ਫਸਲ ਜਾਂ ਖ਼ਰਾਬ ਹੋਏ ਪੌਦੇ ਦਾ ਨਮੂਨਾ ਸਾਡੇ ਗੁਮਟਾਲਾ ਸਟੋਰ 'ਤੇ ਲਿਆਓ। ਅਸੀਂ ਬਿਮਾਰੀ ਦੀ ਸਹੀ ਪਛਾਣ ਅਤੇ ਖਾਦ ਯੋਜਨਾ ਵਿੱਚ ਮਦਦ ਕਰਾਂਗੇ।
              </p>
              <p className={styles.cardEnglishDesc}>
                Visit our Gumtala store with affected plant samples for direct leaf diagnosis, weed identification, and seasonal fertilizer planning.
              </p>
              <a href="#store-location" className={styles.consultationLink}>
                <span>Get store directions / ਰਸਤਾ ਦੇਖੋ</span>
                <ArrowRight size={15} />
              </a>
            </article>

            {/* 3. Opening Hours */}
            <article className={`${styles.consultationCard} ${styles.hoursCard}`}>
              <div className={styles.cardTop}>
                <div className={styles.consultationIcon}>
                  <Clock3 aria-hidden="true" />
                </div>
                <div>
                  <span className={styles.optionLabel}>Opening Hours</span>
                  <span className={styles.punjabiCardTag}>ਦੁਕਾਨ ਦਾ ਸਮਾਂ</span>
                </div>
              </div>
              <h3>Store Operating Schedule</h3>
              <div className={styles.hoursSchedule}>
                <div className={styles.scheduleRow}>
                  <span>ਸੋਮਵਾਰ – ਸ਼ਨੀਵਾਰ (Mon – Sat)</span>
                  <strong>9:00 AM – 7:00 PM</strong>
                </div>
                {/* <div className={styles.scheduleRow}>
                  <span>ਸ਼ਨੀਵਾਰ (Saturday)</span>
                  <strong>9:00 AM – 6:30 PM</strong>
                </div> */}
                <div className={styles.scheduleRow}>
                  <span>ਐਤਵਾਰ (Sunday)</span>
                  <strong className={styles.closedText}>ਬੰਦ · Closed</strong>
                </div>
              </div>
              <p className={styles.hoursNote}>
                ਦੁਕਾਨ ਖੁੱਲ੍ਹਣ ਦੇ ਸਾਰੇ ਸਮੇਂ ਦੌਰਾਨ ਕਿਸਾਨਾਂ ਲਈ ਮੁਫ਼ਤ ਸਲਾਹ ਉਪਲਬਧ ਹੈ।
              </p>
            </article>
          </div>

          <div className={styles.consultationTopics}>
            <span>
              <Sprout aria-hidden="true" /> ਫਸਲ ਦੀ ਯੋਜਨਾ · Yield planning
            </span>
            <span>
              <Bug aria-hidden="true" /> ਬਿਮਾਰੀ ਦੀ ਰੋਕਥਾਮ · Disease guidance
            </span>
            <span>
              <ShieldCheck aria-hidden="true" /> ਪੀ.ਏ.ਯੂ ਪ੍ਰਮਾਣਿਤ · PAU recommended
            </span>
          </div>
        </section>

        {/* Map Section */}
        <section id="store-location" className={styles.mapSection}>
          <div className={styles.mapCard}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3395.5894511762513!2d74.83704567561767!3d31.672450074144653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDQwJzIwLjgiTiA3NMKwNTAnMjIuNiJF!5e0!3m2!1sen!2sin!4v1785418214842!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Baba Deep Singh Khad Store Location"
              />
            </div>

            <div className={styles.mapBar}>
              <div className={styles.mapBarInfo}>
                <Building2 size={20} className={styles.mapIcon} />
                <div>
                  <strong>Baba Deep Singh Khad Store · ਬਾਬਾ ਦੀਪ ਸਿੰਘ ਖਾਦ ਸਟੋਰ</strong>
                  <p>ਗੁਮਟਾਲਾ ਨੇੜੇ ਐਸ.ਬੀ.ਆਈ ਬੈਂਕ, ਏਅਰਪੋਰਟ ਰੋਡ, ਅੰਮ੍ਰਿਤਸਰ (143008)</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=31.672450074144653,74.83704567561767"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapDirectionBtn}
              >
                <Navigation size={16} />
                <span>Open in Google Maps / ਨਕਸ਼ਾ ਖੋਲ੍ਹੋ</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>
            <div className={styles.faqHeader}>
              <div className={styles.faqBadge}>
                <HelpCircle size={14} />
                <span>ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ · FAQs</span>
              </div>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our products, consultation, and store visits.</p>
            </div>

            <div className={styles.accordionList}>
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""}`}
                  >
                    <button
                      className={styles.accordionQuestion}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <span className={styles.punjabiFaqQ}>{faq.q}</span>
                        <span className={styles.englishFaqQ}>{faq.qEn}</span>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`${styles.accordionChevron} ${isOpen ? styles.chevronOpen : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className={styles.accordionAnswerWrap}
                        >
                          <p className={styles.accordionAnswer}>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}