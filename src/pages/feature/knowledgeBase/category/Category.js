import React from "react";
import { motion } from "framer-motion";
import "./category.css";

const categories = [
  {
    icon: "🚀",
    title: "Getting Started",
    desc: "Learn the basics of setting up your account and managing your first shipments.",
    img: "https://plus.unsplash.com/premium_photo-1683120796013-f2f18451a907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcG1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: "📦",
    title: "Shipping & Courier Setup",
    desc: "Understand how to set up couriers, manage orders, and optimize shipping.",
    img: "https://plus.unsplash.com/premium_photo-1665203442280-1118daf3de38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291cmllcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    icon: "🏬",
    title: "Warehouse & Fulfilment",
    desc: "Explore how to manage storage, order picking, and packaging efficiently.",
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlfGVufDB8fDB8fHww",
  },
  {
    icon: "💰",
    title: "Payments & Billing",
    desc: "Learn how to handle billing, invoices, COD settlements, and credits.",
    img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBheW1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: "⚙️",
    title: "Integrations",
    desc: "Connect your Shopify, WooCommerce, or Amazon store seamlessly.",
    img: "https://images.unsplash.com/photo-1730818874996-dea4bddf5554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcGlmeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    icon: "🧭",
    title: "Troubleshooting",
    desc: "Resolve common issues and get back to shipping smoothly.",
    img: "https://plus.unsplash.com/premium_photo-1695406461013-35e7327cef86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJvdWJsZXNob290aW5nfGVufDB8fDB8fHww",
  },
];

const KnowledgeCategories = () => {
  return (
    <section className="kb-cat-section">
      <motion.div
        className="kb-cat-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>
          Explore <span>Help Categories</span>
        </h2>
        <p>
          Choose a topic below to find step-by-step guides, FAQs, and best
          practices for smoother ecommerce operations.
        </p>
      </motion.div>

      <div className="kb-cat-grid">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="kb-cat-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="kb-cat-img">
              <img src={cat.img} alt={cat.title} />
            </div>
            <div className="kb-cat-info">
              <div className="kb-cat-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnowledgeCategories;