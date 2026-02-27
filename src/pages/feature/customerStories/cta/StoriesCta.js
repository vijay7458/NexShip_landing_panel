import React from "react";
import { motion } from "framer-motion";
import "./StoriesCta.css";

const StoriesCta = () => {
  const handleClick = () => {
    window.open(  "https://app.shipease.in/sign-up"
            ,"_blank", )
  }
  return (
    <section className="cs-cta-section">
      <motion.div
        className="cs-cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="cs-cta-title">
          Ready to Write <span>Your Own Success Story?</span>
        </h2>
        <p className="cs-cta-subtitle">
          Join thousands of successful sellers who are scaling their business
          with faster deliveries and smarter shipping.
        </p>

        <div className="cs-cta-buttons">
          <button className="cs-cta-btn-primary" onClick={handleClick}>Start Free</button>
          <button className="cs-cta-btn-outline" onClick={handleClick}>Book a Demo</button>
        </div>
      </motion.div>
    </section>
  );
};

export default StoriesCta;
