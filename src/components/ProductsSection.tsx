import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sprout, FlaskConical, ShieldCheck, Tractor, X } from "lucide-react";
import styles from "./ProductsSection.module.css";

const productCategories = [
  {
    title: "Seeds",
    icon: Sprout,
    accent: "seed",
    description: "ਬੀਜਾਂ ਦੀਆਂ ਭਰੋਸੇਯੋਗ ਕਿਸਮਾਂ ਜੋ ਕਿਸਾਨਾਂ ਨੂੰ ਬਿਹਤਰ ਉਗਣ-ਸ਼ਕਤੀ, ਮਜ਼ਬੂਤ ਵਾਧਾ ਅਤੇ ਸਿਹਤਮੰਦ ਫਸਲ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀਆਂ ਹਨ।",
    items: ["Pusa Basmati 1121", "Hybrid Maize", "Groundnut GN 4"],
    image: "/images/products/seeds.svg",
  },
  {
    title: "Fertilizers",
    icon: FlaskConical,
    accent: "fertilizer",
    description: "ਪੌਸ਼ਟਿਕ ਤੱਤਾਂ ਨਾਲ ਭਰਪੂਰ ਖਾਦ ਦੇ ਘੋਲ, ਜੋ ਭਾਰਤੀ ਖੇਤਾਂ ਵਿੱਚ ਮਜ਼ਬੂਤ ​​ਪੌਦਿਆਂ ਅਤੇ ਮਿੱਟੀ ਦੀ ਸੰਤੁਲਿਤ ਸਿਹਤ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
    items: ["IFFCO 19:19:19", "NPK 12:32:16", "Organic Compost Mix"],
    image: "/images/products/fertilizers.svg",
  },
  {
    title: "Pesticides",
    icon: ShieldCheck,
    accent: "pesticide",
    description: "ਫਸਲ ਸੁਰੱਖਿਆ ਦੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਉਤਪਾਦ ਜੋ ਖੇਤਾਂ ਨੂੰ ਕੀੜਿਆਂ, ਬਿਮਾਰੀਆਂ ਅਤੇ ਮੌਸਮੀ ਚੁਣੌਤੀਆਂ ਤੋਂ ਬਚਾਉਂਦੇ ਹਨ।",
    items: ["Neem-Based Spray", "Bacterial Bio-Pesticide", "Insect Control Granules"],
    image: "/images/products/pesticides.svg",
  },
  {
    title: "Farming Equipment",
    icon: Tractor,
    accent: "equipment",
    description: "ਖੇਤੀਬਾੜੀ ਦੇ ਮਜ਼ਬੂਤ ​​ਸੰਦ ਅਤੇ ਉਪਕਰਣ ਜੋ ਖੇਤਾਂ ਦੇ ਰੋਜ਼ਾਨਾ ਦੇ ਕੰਮਾਂ ਨੂੰ ਆਸਾਨ, ਤੇਜ਼ ਅਤੇ ਵਧੇਰੇ ਕੁਸ਼ਲ ਬਣਾਉਂਦੇ ਹਨ।",
    items: ["KisaanKraft Tiller", "Manual Seed Drill", "Watering Can Set"],
    image: "/images/products/equipment.svg",
  },
];

export default function ProductsSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="products" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Trusted Farm Inputs</p>
          <h2 className={styles.title}>
ਮਜ਼ਬੂਤ ​​ਫਾਰਮਾਂ ਅਤੇ ਬਿਹਤਰ ਪੈਦਾਵਾਰ ਲਈ ਪ੍ਰੀਮੀਅਮ ਖੇਤੀਬਾੜੀ ਉਤਪਾਦ</h2>
          {/* <p className={styles.subtitle}>
            Explore dependable seeds, fertilizers, pesticides, and farming equipment from trusted Indian brands designed to help farmers grow with confidence.
          </p> */}
        </div>

        <div className={styles.grid}>
          {productCategories.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={styles.card}>
                <div className={`${styles.iconWrap} ${styles[item.accent]}`}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
                <ul className={styles.itemList}>
                  {item.items.map((product) => (
                    <li key={product} className={styles.item}>
                      <span className={styles.dot} />
                      {product}
                    </li>
                  ))}
                </ul>
                {/* <button
                  type="button"
                  className={styles.linkBtn}
                  onClick={() => setActiveImage(item.image)}
                >
                  View Products <ArrowRight size={16} />
                </button> */}
              </article>
            );
          })}
        </div>

        {activeImage && (
          <div className={styles.previewOverlay} onClick={() => setActiveImage(null)}>
            <div className={styles.previewModal} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setActiveImage(null)}
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
              <Image
                src={activeImage}
                alt="Product preview"
                width={800}
                height={500}
                className={styles.previewImage}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
