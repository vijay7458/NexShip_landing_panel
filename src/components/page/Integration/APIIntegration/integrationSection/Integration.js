import React from 'react';
import { motion } from 'framer-motion';
import './integration.css';
import img1 from "../../../../../assets/image/woman-receiving-package-her-doorstep.jpg";
import img2 from "../../../../../assets/image/handsome-male-recoding-unboxing-video-home.jpg";
import img3 from "../../../../../assets/image/application-programming-interface-hologram.jpg";
import img4 from "../../../../../assets/image/index-finger-pointing-illuminated-bulb.jpg";

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Integration() {
  return (
    <div className="integration-wrapper">

      {/* Section 1 - Left Slide */}
      <motion.section
        className="integration-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div className="integration-content" variants={slideInLeft}>
          <h2>Effortless API Integration</h2>
          <p>
            Connect your eCommerce store to Shipease and sync inventory and orders automatically.
            Let your operations flow without friction using real-time API connectivity across platforms.
          </p>
        </motion.div>
        <motion.div className="integration-image" variants={slideInRight}>
          <img src={img3} alt="API Integration" />
        </motion.div>
      </motion.section>

      {/* Section 2 - Right Slide */}
      <motion.section
        className="integration-section reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div className="integration-content" variants={slideInRight}>
          <h2>Simplified Order Management</h2>
          <p>
            Handle thousands of orders from a unified dashboard. Track statuses, modify shipments, and filter channels—all in one place with real-time updates.
          </p>
        </motion.div>
        <motion.div className="integration-image" variants={slideInLeft}>
          <img src={img1} alt="Order Management" />
        </motion.div>
      </motion.section>

      {/* Section 3 - Left Slide */}
      <motion.section
        className="integration-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div className="integration-content" variants={slideInLeft}>
          <h2>Live Shipment Tracking</h2>
          <p>
            See where your orders are, right now. View every movement from pickup to delivery—transparent and real-time for both you and your customers.
          </p>
        </motion.div>
        <motion.div className="integration-image" variants={slideInRight}>
          <img src={img2} alt="Live Tracking" />
        </motion.div>
      </motion.section>

    </div>
  );
}
