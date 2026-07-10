import React from "react";
import { motion } from "framer-motion";
import "./choose.css";

const chooseIcons = {
  delayed: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="9" />
      <path className="icon-primary" d="M12 7v5l3.5 2" />
    </svg>
  ),
  rto: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M4 10v4h4l5 4V6L8 10H4z" />
      <path className="icon-primary" d="M17 9l4 4m0-4l-4 4" />
    </svg>
  ),
  manual: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M4 4h11l5 5v11H4V4z" />
      <path className="icon-primary" d="M14 4v5h5" />
      <path className="icon-primary" d="M8 13l2.5 2.5L16 10" />
    </svg>
  ),
};

const reasons = [
  {
    icon: chooseIcons.delayed,
    title: "Delayed Deliveries?",
    desc: "Traditional shipping methods slow your growth. Our AI automatically allocates the best courier for every order.",
  },
  {
    icon: chooseIcons.rto,
    title: "High RTO Rates?",
    desc: "Predict and prevent returns using real-time buyer insights and automated verification workflows.",
  },
  {
    icon: chooseIcons.manual,
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
