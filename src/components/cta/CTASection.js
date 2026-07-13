import React from "react";
import { motion } from "framer-motion";
import "./ctaSection.css";

export default function CTASection() {
  return (
    <motion.div
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-center py-5 px-3 rounded-0 cta-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="fw-bold mb-3 cta-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Ship Smarter. Deliver Faster.
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="mb-4 mx-auto cta-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        viewport={{ once: true }}
      >
        Join thousands of businesses using our platform to optimize deliveries,
        reduce costs, and delight customers.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href={`${window.location.origin}/contact`}
        className="btn fw-bold px-5 py-2 rounded-4 cta-button"
        whileHover={{
          y: -4,
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
      >
        Get Started
      </motion.a>
    </motion.div>
  );
}