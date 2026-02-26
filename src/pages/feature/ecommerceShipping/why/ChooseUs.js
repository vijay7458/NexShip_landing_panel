import React from "react";
import { motion } from "framer-motion";
import "./choose.css";

const reasons = [
  {
    icon: "🚚",
    title: "Delayed Deliveries?",
    desc: "Traditional shipping methods slow your growth. Our AI automatically allocates the best courier for every order.",
  },
  {
    icon: "📦",
    title: "High RTO Rates?",
    desc: "Predict and prevent returns using real-time buyer insights and automated verification workflows.",
  },
  {
    icon: "🕒",
    title: "Manual Order Processing?",
    desc: "Automate dispatch, tracking, and notifications with one click across all your ecommerce platforms.",
  },
];

const ChooseUs = () => {
  return (
    <section className="esh-why-section">
      <motion.div
        className="esh-why-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Why <span>Choose Us</span> for Ecommerce Shipping?
        </h2>
        <p>
          We solve the biggest challenges online sellers face — from late
          deliveries to RTOs — with smart automation and a nationwide courier
          network.
        </p>
      </motion.div>

      <div className="esh-why-container">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="esh-why-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="esh-why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
