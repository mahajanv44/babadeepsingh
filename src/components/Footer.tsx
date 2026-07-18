import React from "react";
import { Sprout, Phone, Mail, Globe } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer >
      {/* <div className={`${styles.grid} container`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <Sprout className={styles.logoIcon} />
            <span>AGRIVEDA</span>
          </div>
          <p className={styles.description}>
            AgriVeda is a comprehensive digital catalog showcasing India&apos;s rich agricultural heritage. We connect traditional farming knowledge with modern datasets to assist growers, researchers, and consumers.
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Indian Portals</h4>
          <ul className={styles.links}>
            <li>
              <a href="https://enam.gov.in/" target="_blank" rel="noopener noreferrer">
                e-NAM (National Market)
              </a>
            </li>
            <li>
              <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer">
                PM-Kisan Portal
              </a>
            </li>
            <li>
              <a href="https://farmer.gov.in/" target="_blank" rel="noopener noreferrer">
                Farmers Portal India
              </a>
            </li>
            <li>
              <a href="https://icar.org.in/" target="_blank" rel="noopener noreferrer">
                ICAR Research Council
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Navigations</h4>
          <ul className={styles.links}>
            <li>
              <a href="#hero">Home Base</a>
            </li>
            <li>
              <a href="#mandi">Mandi Market Rates</a>
            </li>
            <li>
              <a href="#catalog">Crop Database</a>
            </li>
            <li>
              <a href="#zones">Agro-Climatic Zones</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Kisan Helpline</h4>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <Phone className={styles.infoIcon} />
              <div>
                <strong>Kisan Call Center:</strong>
                <p>1800-180-1551 (Toll-Free)</p>
              </div>
            </li>
            <li className={styles.infoItem}>
              <Mail className={styles.infoIcon} />
              <div>
                <strong>Support Email:</strong>
                <p>contact@agriveda.gov.in</p>
              </div>
            </li>
            <li className={styles.infoItem}>
              <Globe className={styles.infoIcon} />
              <div>
                <strong>Headquarters:</strong>
                <p>Krishi Bhawan, New Delhi, India</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}

      <div className={`${styles.bottom} container`}>
        <p> Baba Deep Singh Khad Store, Gumtala.</p>
        {/* <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div> */}
      </div>
    </footer>
  );
}
