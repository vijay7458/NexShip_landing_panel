import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    icon: "🛍️",
    title: "Connect Your Store",
    desc: "Integrate your Shopify, WooCommerce, or Amazon store with one click and import all your orders instantly.",
  },
  {
    id: 2,
    icon: "🚚",
    title: "Auto-Select Best Courier",
    desc: "Our AI recommends the fastest and most cost-efficient courier partner for each shipment automatically.",
  },
  {
    id: 3,
    icon: "📦",
    title: "Track & Deliver in Real-Time",
    desc: "Get live tracking, smart NDR management, and automated updates for your customers across India.",
  },
];

const HowItWorks = () => {
  return (
    <section className="esh-how-section">
      <motion.div
        className="esh-how-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          How <span>It Works</span>
        </h2>
        <p>
          Getting started with ecommerce shipping has never been this simple.
          Automate your operations and focus on growth while we handle
          deliveries.
        </p>
      </motion.div>

      <div className="esh-how-container">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            className="esh-how-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="esh-how-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
