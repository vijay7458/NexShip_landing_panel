import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section className="cs-hero-section">
      <motion.div
        className="cs-hero-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="cs-hero-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Real Businesses. <span>Real Growth.</span>
        </motion.h1>

        <motion.p
          className="cs-hero-description"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Discover how brands scaled faster and delivered smarter with our
          platform. Explore their success stories and start your journey today.
        </motion.p>

        <motion.div
          className="cs-hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="cs-btn-primary">Read Stories</button>
          <button className="cs-btn-outline">Start Your Journey</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
