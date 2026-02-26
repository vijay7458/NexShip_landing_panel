import React from "react";
import { motion } from "framer-motion";
import "./chooseUs.css";

const reasons = [
  {
    icon: "⚙️",
    title: "Automated Operations",
    desc: "Eliminate manual errors with automated pick, pack, and dispatch workflows across all fulfilment centers.",
  },
  {
    icon: "🚚",
    title: "Faster Order Processing",
    desc: "Ensure same-day or next-day dispatch through optimized warehouse placement and real-time courier allocation.",
  },
  {
    icon: "📦",
    title: "Smart Inventory Management",
    desc: "Track stock in real-time across multiple warehouses and automatically restock based on your sales trends.",
  },
  {
    icon: "🧭",
    title: "Nationwide Coverage",
    desc: "30+ strategically located warehouses ensure faster deliveries to every part of India with lower shipping costs.",
  },
];

const WarehouseWhyChoose = () => {
  return (
    <section className="wf-why-section">
      <motion.div
        className="wf-why-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Why <span>Choose Our Fulfilment</span> Solution?
        </h2>
        <p>
          From smart automation to nationwide reach — discover how our
          technology-first fulfilment system gives your ecommerce business a
          competitive edge.
        </p>
      </motion.div>

      <div className="wf-why-container">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            className="wf-why-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="wf-why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WarehouseWhyChoose;
