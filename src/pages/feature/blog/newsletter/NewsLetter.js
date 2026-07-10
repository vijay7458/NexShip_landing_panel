import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./letter.css";

const BlogNewsletter = () => {
  return (
    <section className="blog-newsletter-section">
      <div className="container d-flex flex-column text-center">
        {/* HEADER */}
        <motion.h2
          className="newsletter-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Stay Updated With the Latest Insights
        </motion.h2>

        <motion.p
          className="newsletter-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get weekly updates, news, and expert tips on logistics, eCommerce, and technology — straight to your inbox.
        </motion.p>

        {/* FORM */}
        <motion.form
          className="newsletter-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-btn">
            Subscribe
          </button>
        </motion.form>

        {/* NOTE */}
        <motion.p
          className="newsletter-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          🔒 We respect your privacy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default BlogNewsletter;
