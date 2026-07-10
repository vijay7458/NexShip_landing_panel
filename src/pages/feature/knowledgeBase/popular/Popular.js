import React from "react";
import { motion } from "framer-motion";
import "./popular.css";

const articles = [
  {
    title: "How to Connect Your Shopify Store",
    desc: "Step-by-step guide to link your Shopify account and start syncing orders instantly.",
    link: "#",
  },
  {
    title: "Understanding RTO and NDR Reports",
    desc: "Learn how to analyze and reduce your Return-to-Origin (RTO) rates efficiently.",
    link: "#",
  },
  {
    title: "How to Automate Courier Selection",
    desc: "Save time and cost by letting the system choose the best courier automatically.",
    link: "#",
  },
  {
    title: "Setting Up COD and Prepaid Orders",
    desc: "Manage Cash-on-Delivery and prepaid orders seamlessly across your sales channels.",
    link: "#",
  },
  {
    title: "How to Track Orders in Real Time",
    desc: "Monitor live order updates, customer notifications, and delivery performance.",
    link: "#",
  },
  {
    title: "Understanding Warehouse Fulfilment Charges",
    desc: "Breakdown of storage, pick-pack, and dispatch fees across fulfilment centers.",
    link: "#",
  },
];

const KnowledgePopular = () => {
  return (
    <section className="kb-popular-section">
      <motion.div
        className="kb-popular-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Popular <span>Help Articles</span>
        </h2>
        <p>
          Discover the most-read articles that help ecommerce sellers automate
          their logistics and simplify operations.
        </p>
      </motion.div>

      <div className="kb-popular-list">
        {articles.map((article, i) => (
          <motion.a
            href={article.link}
            key={i}
            className="kb-popular-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="kb-popular-content">
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
            </div>
            <div className="kb-popular-arrow">→</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default KnowledgePopular;