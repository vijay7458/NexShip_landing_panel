import React from "react";
import { motion } from "framer-motion";
import "./feature.css";

const featureIcons = {
  ai: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect className="icon-secondary" x="5" y="8" width="14" height="11" rx="2" />
      <circle className="icon-primary" cx="9.5" cy="13.5" r="1.2" />
      <circle className="icon-primary" cx="14.5" cy="13.5" r="1.2" />
      <path className="icon-primary" d="M12 8V5" />
      <circle className="icon-primary" cx="12" cy="4" r="1" />
    </svg>
  ),
  rto: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M4 10v4h4l5 4V6L8 10H4z" />
      <path className="icon-primary" d="M17 9l4 4m0-4l-4 4" />
    </svg>
  ),
  rate: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="9" />
      <path className="icon-primary" d="M9 15s1 1.5 3 1.5 3-1 3-2.2c0-3-6-1.3-6-4.3C9 8.5 10.3 8 12 8s3 .8 3 .8" />
      <path className="icon-primary" d="M12 6.5v11" />
    </svg>
  ),
  tracking: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="10" r="3" />
      <path className="icon-primary" d="M12 21c4-4.5 7-8.2 7-11a7 7 0 00-14 0c0 2.8 3 6.5 7 11z" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-primary" d="M5 20V12" />
      <path className="icon-primary" d="M12 20V7" />
      <path className="icon-secondary" d="M19 20V4" />
    </svg>
  ),
};

const features = [
  {
    icon: featureIcons.ai,
    title: "AI Courier Selection",
    desc: "Automatically allocate the best courier based on delivery speed, success rate, and cost efficiency — powered by machine learning.",
  },
  {
    icon: featureIcons.rto,
    title: "Smart RTO Prediction",
    desc: "Reduce returns and failed deliveries with predictive algorithms that flag high-risk orders before dispatch.",
  },
  {
    icon: featureIcons.rate,
    title: "Real-Time Rate Calculator",
    desc: "Instantly compare courier prices, transit times, and COD availability to choose the most profitable shipping route.",
  },
  {
    icon: featureIcons.tracking,
    title: "Live Tracking Dashboard",
    desc: "Track every shipment in real-time with instant customer notifications and performance analytics.",
  },
  {
    icon: featureIcons.analytics,
    title: "Actionable Analytics",
    desc: "Visualize your shipping performance and identify cost-saving opportunities with our unified dashboard.",
  },
];

const EcommerceFeatures = () => {
  return (
    <section className="esh-feature-section">
      <motion.div
        className="esh-feature-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Powerful <span>Features</span> to Simplify Shipping
        </h2>
        <p>
          Our intelligent tools help ecommerce brands automate logistics, lower
          RTOs, and scale faster — all from a single dashboard.
        </p>
      </motion.div>

      <div className="esh-feature-grid">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="esh-feature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="esh-feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcommerceFeatures;