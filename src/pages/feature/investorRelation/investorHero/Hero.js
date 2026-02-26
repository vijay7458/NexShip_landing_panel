import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section className="investor-hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Left: Text Section */}
          <motion.div
            className="col-lg-6 col-md-12 text-section"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="investor-title">
              Investor <span>Relations</span>
            </h1>
            <p className="investor-subtitle">
              We’re building a transparent, tech-driven logistics ecosystem that delivers consistent growth and long-term value for our stakeholders.
            </p>
            <motion.a
              href="#reports"
              className="investor-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              View Reports
            </motion.a>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div
            className="col-lg-6 col-md-12 image-section text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW52ZXN0b3J8ZW58MHx8MHx8fDA%3D"
              alt="Investor Relations"
              className="investor-hero-img"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
