import React from "react";
import { motion } from "framer-motion";
import "./hero.css";
import TopNav from "../../../../navbar/TopNav";

const KnowledgeBanner = () => {
  return (

    <section className="kb-banner-section">
      <div className="kb-banner-container">
        {/* Left Text */}
        <motion.div
          className="kb-banner-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="kb-banner-title">
            Welcome to our <span>Knowledge Base</span>
          </h1>
          <p className="kb-banner-subtitle">
            Find everything you need to learn, troubleshoot, and grow your
            ecommerce operations — all in one place.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="kb-banner-image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcHBpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Knowledge Base Banner"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeBanner;