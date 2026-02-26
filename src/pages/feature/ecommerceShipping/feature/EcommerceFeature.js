import React from "react";
import { motion } from "framer-motion";
import "./feature.css";

const features = [
  {
    icon: "🤖",
    title: "AI Courier Selection",
    desc: "Automatically allocate the best courier based on delivery speed, success rate, and cost efficiency — powered by machine learning.",
  },
  {
    icon: "📦",
    title: "Smart RTO Prediction",
    desc: "Reduce returns and failed deliveries with predictive algorithms that flag high-risk orders before dispatch.",
  },
  {
    icon: "💰",
    title: "Real-Time Rate Calculator",
    desc: "Instantly compare courier prices, transit times, and COD availability to choose the most profitable shipping route.",
  },
  {
    icon: "📍",
    title: "Live Tracking Dashboard",
    desc: "Track every shipment in real-time with instant customer notifications and performance analytics.",
  },
  {
    icon: "📊",
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
