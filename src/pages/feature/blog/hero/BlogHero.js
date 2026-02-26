import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";

const BlogHero = () => {
  const categories = [
    "All",
    "Logistics",
    "E-Commerce Growth",
    "Technology",
    "Case Studies",
    "Industry News",
  ];

  return (
    <section className="blog-hero-section">
      <div className="container d--flex flex-column text-center">
        {/* HERO TITLE */}
        <motion.h1
          className="blog-hero-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Insights That Power <span >Smarter Shipping</span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          className="blog-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore expert tips, trends, and success stories to grow your online business and deliver smarter.
        </motion.p>

        {/* SEARCH BAR */}
        <motion.div
          className="search-bar-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Search for articles..."
            className="blog-search"
          />
          <button className="search-btn">Search</button>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, index) => (
            <button key={index} className="category-btn">
              {cat}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
