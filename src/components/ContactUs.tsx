"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactUs.module.css";
import Image from "next/image";

interface ContactUsProps {
  onClose?: () => void;
}

export default function ContactUs({ onClose }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 variants={itemVariants} className={styles.heading}>
          Contact Us
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={styles.subheading}
        >
          Get in touch with Baba Deep Singh Khad Store
        </motion.p>

        <div className={styles.mainContent}>
          {/* Map Section */}
          <motion.div variants={itemVariants} className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27163.334374826296!2d74.82801188759!3d31.677171867443057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919648b7f16aa6f%3A0x4c86bb7f68e9901b!2sGumtala%2C%20Amritsar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1784097464097!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baba Deep Singh Khad Store Location"
            />
          </motion.div>

          <div className={styles.flexContainer}>

<div className={styles.imageWrapper}>

 <Image
    src="/images/f1.avif"
    alt="Agriculture"
    fill
    className="object-cover"
    priority
  />
</div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Business Information</h3>
<h4>Prop. Sewak Singh</h4>
<br />
              <div className={styles.infoItem}>
                <h4>Address</h4>
                <p>
                  Gumtala near SBI Bank, Airport Road, Amritsar (Amritsar 143008)
                 </p>
              </div>

              <div className={styles.infoItem}>
                <h4>Phone</h4>
                <p>
                 +91-9815265705 , +91-9780240800
                </p>
              </div>

              <div className={styles.infoItem}>
                <h4>Email</h4>
                <p>
                  <a href="mailto:babadeepsinghkhadstore@gmail.com">
                     babadeepsinghkhadstore@gmail.com
                  </a>
                </p>
              </div>

              {/* <div className={styles.infoItem}>
                <h4>Business Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div> */}
            </motion.div>

            {/* Contact Form */}
            {/* <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className={styles.formSection}
            >
              <h3 className={styles.sectionTitle}>Send us a Message</h3>

              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your message here..."
                  rows={4}
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </motion.form> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
