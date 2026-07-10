import React from "react";
import { motion } from "framer-motion";
import "./HowItWorks.css";

const howIcons = {
  connect: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect className="icon-secondary" x="4" y="7" width="16" height="13" rx="2" />
      <path className="icon-primary" d="M8 7V5a4 4 0 018 0v2" />
      <circle className="icon-primary" cx="12" cy="13" r="2" />
    </svg>
  ),
  courier: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M3 17V8a1 1 0 011-1h9v10H3z" />
      <path className="icon-secondary" d="M13 11h4l4 4v2h-8z" />
      <circle className="icon-primary" cx="7.5" cy="18" r="1.6" />
      <circle className="icon-primary" cx="17" cy="18" r="1.6" />
    </svg>
  ),
  track: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="10" r="3" />
      <path className="icon-primary" d="M12 21c4-4.5 7-8.2 7-11a7 7 0 00-14 0c0 2.8 3 6.5 7 11z" />
    </svg>
  ),
};

const steps = [
  {
    id: 1,
    icon: howIcons.connect,
    title: "Connect Your Store",
    desc: "Integrate your Shopify, WooCommerce, or Amazon store with one click and import all your orders instantly.",
  },
  {
    id: 2,
    icon: howIcons.courier,
    title: "Auto-Select Best Courier",
    desc: "Our AI recommends the fastest and most cost-efficient courier partner for each shipment automatically.",
  },
  {
    id: 3,
    icon: howIcons.track,
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