"use client";

import { ArrowRight, Handshake, Landmark, ShieldCheck, Sprout, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./about-page.module.css";

export default function AboutPageClient() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrowBadge}>
              <Sparkles className={styles.eyebrowIcon} size={14} />
              <span>Our Story & Mission</span>
            </div>
            <h1>The Story Behind Baba Deep Singh Khad Store.</h1>
            <p className={styles.heroText}>
              Baba Deep Singh Khad Store was founded with a clear mission: to bring dependable, university-certified farm inputs directly to our local farming community. Based in Gumtala, we proudly serve farmers across surrounding villages with PAU Ludhiana-approved hybrid seeds, bio-fertilizers, affordable equipment rentals, and free crop guidance—ensuring reliable support right next door.
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.featurePill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>PAU Ludhiana Certified</span>
              </div>
              <div className={styles.featurePill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>100% Genuine Agricultural Inputs</span>
              </div>
              <div className={styles.featurePill}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Subsidy & Advisory Guidance</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <a className={styles.heroLink} href="#our-work">
                Discover our work <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a className={styles.secondaryHeroLink} href="/contact">
                Visit our store
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* Primary Main Image: Golden Wheat Harvest */}
              <div className={styles.heroCardPrimary}>
                <Image
                  src="/images/about/hero_wheat.webp"
                  alt="Golden wheat harvest field at sunset in Punjab"
                  fill
                  priority
                  sizes="(max-width: 768px) 95vw, 42vw"
                  className={styles.heroImg}
                />
                <div className={styles.cardGradientOverlay} />
                <div className={styles.cardTagGold}>
                  <Sprout size={14} />
                  <span>Golden Harvest & Quality Yield</span>
                </div>
              </div>

              {/* Overlapping Secondary Card: Smiling Punjabi Farmer */}
              <div className={styles.heroCardSecondary}>
                <Image
                  src="/images/about/hero_farmer.webp"
                  alt="Proud Punjabi farmer in field with healthy crops"
                  fill
                  sizes="(max-width: 768px) 55vw, 24vw"
                  className={styles.heroImg}
                />
                <div className={styles.cardInfoPill}>
                  <p className={styles.cardInfoTitle}>Farmer-First</p>
                  <p className={styles.cardInfoSub}>10,000+ Trusted Farmers</p>
                </div>
              </div>

              {/* Tertiary Accent Floating Card: Certified Seeds in Hands */}
              <div className={styles.heroCardAccent}>
                <Image
                  src="/images/about/hero_seeds.webp"
                  alt="Farmer hands holding certified hybrid seeds and green sprout"
                  fill
                  sizes="(max-width: 768px) 38vw, 16vw"
                  className={styles.heroImg}
                />
                <div className={styles.seedsBadge}>
                  <ShieldCheck size={13} />
                  <span>Certified</span>
                </div>
              </div>

              {/* Floating Heritage Trust Badge */}
              <div className={styles.floatingHeritage}>
                <div className={styles.heritageIconWrap}>🌾</div>
                <div className={styles.heritageContent}>
                  <strong className={styles.heritageTitle}>Amritsar Agri Legacy</strong>
                  <span className={styles.heritageSub}>Delivering trust & excellence across Punjab</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-work" className={styles.storySection}>
          <div className={styles.sectionIntro}>
            <div className={styles.sectionIntroHeading}>
              <div className={styles.sectionEyebrowBadge}>
                <Sparkles size={13} />
                <span>What guides us · ਸਾਡੀ ਅਗਵਾਈ</span>
              </div>
              <h2>Supporting better decisions in every season</h2>
            </div>
            <div className={styles.sectionIntroCopy}>
              <p>

                ਸਾਡਾ ਕੰਮ ਭਰੋਸੇ, ਪਹੁੰਚ ਅਤੇ ਅਜਿਹੇ ਉਤਪਾਦਾਂ 'ਤੇ ਆਧਾਰਿਤ ਹੈ ਜਿਨ੍ਹਾਂ ਦੀ ਵਰਤੋਂ ਕਿਸਾਨ ਪੂਰੇ ਭਰੋਸੇ ਨਾਲ ਕਰ ਸਕਦੇ ਹਨ। ਅਸੀਂ ਖੇਤੀ-ਖੇਤਰ ਦੀਆਂ ਅਸਲ ਸਥਿਤੀਆਂ ਨਾਲ ਜੁੜੇ ਰਹਿੰਦੇ ਹੋਏ, ਉਨ੍ਹਾਂ ਭਾਈਚਾਰਿਆਂ ਤੱਕ ਵਧੇਰੇ ਵਿਕਲਪ ਅਤੇ ਸੇਧ ਪਹੁੰਚਾਉਂਦੇ ਹਾਂ ਜਿਨ੍ਹਾਂ ਦੀ ਅਸੀਂ ਸੇਵਾ ਕਰਦੇ ਹਾਂ।

              </p>
              <p>
                ਫਸਲ ਦੀ ਸ਼ੁਰੂਆਤੀ ਯੋਜਨਾਬੰਦੀ ਤੋਂ ਲੈ ਕੇ ਅੰਤਿਮ ਵਾਢੀ ਤੱਕ, ਸਾਡਾ ਟੀਚਾ ਅੰਮ੍ਰਿਤਸਰ ਭਰ ਵਿੱਚ ਭਰੋਸੇਯੋਗ ਖੇਤੀਬਾੜੀ ਸਹਾਇਤਾ ਨੂੰ ਆਸਾਨੀ ਨਾਲ ਪਹੁੰਚਯੋਗ ਬਣਾਉਣਾ ਹੈ।
              </p>
              <span className={styles.sectionMarker}>Farmer-first support since day one</span>
            </div>
          </div>

          <div className={styles.brandStory}>
            <div className={styles.brandStoryImage}>
              <Image
                src="/images/baba-deep-singh.webp"
                alt="Baba Deep Singh Khad Store logo"
                fill
                sizes="(max-width: 620px) 100vw, 32vw"
              />
            </div>
            <div className={styles.brandStoryCopy}>
              <div className={styles.brandBadge}>
                <ShieldCheck size={13} />
                <span>A trusted name in agriculture · ਭਰੋਸੇਮੰਦ ਨਾਮ</span>
              </div>
              <h3>Local knowledge, dependable products, lasting relationships.</h3>
              <p>
                ਸਾਡਾ ਨਾਂ ਕਿਸਾਨਾਂ ਨਾਲ ਕੀਤੇ ਇੱਕ ਲੰਬੇ ਸਮੇਂ ਦੇ ਵਾਅਦੇ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ: ਜਦੋਂ ਵੀ ਫਸਲ ਨੂੰ ਵਿਸ਼ੇਸ਼ ਦੇਖਭਾਲ ਦੀ ਲੋੜ ਹੋਵੇ, ਤਾਂ ਅਸੀਂ ਹਾਜ਼ਰ, ਲਾਹੇਵੰਦ ਅਤੇ ਭਰੋਸੇਯੋਗ ਬਣੇ ਰਹੀਏ।
              </p>
            </div>
          </div>

          <div className={styles.valuesGrid}>
            <article className={styles.valueCard}>
              <div className={styles.iconBox}><Landmark aria-hidden="true" /></div>
              <p className={styles.cardNumber}>01</p>
              <h3>From village roots to a wider region</h3>
              <p>
                What started in a village has expanded into a trusted agricultural
                destination for farmers throughout Amritsar.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.iconBox}><Handshake aria-hidden="true" /></div>
              <p className={styles.cardNumber}>02</p>
              <h3>Support that reaches the farmer</h3>
              <p>
                We help farmers access eligible government subsidies directly and
                make better-informed choices for the season ahead.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.iconBox}><Sprout aria-hidden="true" /></div>
              <p className={styles.cardNumber}>03</p>
              <h3>Products chosen for performance</h3>
              <p>
                Our range includes certified hybrid seeds and fertilizers approved by
                Punjab Agricultural University, Ludhiana.
              </p>
            </article>

            <article className={styles.valueCard}>
              <div className={styles.iconBox}><ShieldCheck aria-hidden="true" /></div>
              <p className={styles.cardNumber}>04</p>
              <h3>A network built on credibility</h3>
              <p>
                We are proud members of the Fertilizer Distribution Club in North
                India, strengthening the supply network farmers depend on.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.commitment}>
          <div className={styles.commitmentCopy}>
            <p className={styles.eyebrow}>Our commitment</p>
            <h2>Helping every farmer aim higher.</h2>
          </div>
          <div className={styles.commitmentImage}>
            <Image
              src="/images/gallery/cotton_harvest.webp"
              alt="Cotton harvest representing sustainable growth and care"
              fill
              sizes="(max-width: 700px) 100vw, 34vw"
            />
          </div>
          <p>
            From choosing the right hybrid to planning fertilizer use, we are here
            for the long run: with reliable products, accessible support, and a
            farmer-first approach.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
