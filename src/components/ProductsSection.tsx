import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sprout, FlaskConical, ShieldCheck, Tractor, X } from "lucide-react";
import styles from "./ProductsSection.module.css";

const productCategories = [
  {
    title: "Seeds",
    icon: Sprout,
    accent: "seed",
    description: "Reliable seed varieties that help farmers achieve better germination, stronger growth, and healthier harvests.",
    items: ["Pusa Basmati 1121", "Hybrid Maize", "Groundnut GN 4"],
    image: "/images/products/seeds.svg",
  },
  {
    title: "Fertilizers",
    icon: FlaskConical,
    accent: "fertilizer",
    description: "Nutrient-rich fertilizer solutions that support robust plants and balanced soil health across Indian farms.",
    items: ["IFFCO 19:19:19", "NPK 12:32:16", "Organic Compost Mix"],
    image: "/images/products/fertilizers.svg",
  },
  {
    title: "Pesticides",
    icon: ShieldCheck,
    accent: "pesticide",
    description: "Effective crop protection products that defend fields against pests, disease, and seasonal challenges.",
    items: ["Neem-Based Spray", "Bacterial Bio-Pesticide", "Insect Control Granules"],
    image: "/images/products/pesticides.svg",
  },
  {
    title: "Farming Equipment",
    icon: Tractor,
    accent: "equipment",
    description: "Durable farming tools and equipment that make everyday field work easier, faster, and more efficient.",
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
          <h2 className={styles.title}>Premium agricultural products for stronger farms and better yields</h2>
          <p className={styles.subtitle}>
            Explore dependable seeds, fertilizers, pesticides, and farming equipment from trusted Indian brands designed to help farmers grow with confidence.
          </p>
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
