import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./careerHero.css";

const CareerIllustration = () => (
  <svg viewBox="0 0 320 320" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle className="illus-ring" cx="160" cy="160" r="130" strokeWidth="1.5" strokeDasharray="4 8" />
    <circle className="illus-bg" cx="160" cy="160" r="98" />
    <path className="illus-primary" strokeWidth="2" d="M160 70c22 0 40 26 40 62 0 26-14 46-26 58l-14 14-14-14c-12-12-26-32-26-58 0-36 18-62 40-62z" />
    <circle className="illus-secondary" cx="160" cy="128" r="16" strokeWidth="2" />
    <path className="illus-secondary" strokeWidth="2" d="M130 176l-22 34M190 176l22 34" />
    <path className="illus-primary" strokeWidth="2" d="M118 224c-14 8-24 20-24 30h132c0-10-10-22-24-30" />
    <circle className="illus-dot" cx="90" cy="95" r="4" />
    <circle className="illus-dot" cx="235" cy="110" r="3" />
    <circle className="illus-dot" cx="245" cy="200" r="4" />
    <circle className="illus-dot" cx="80" cy="215" r="3" />
  </svg>
);

const CareerHero = () => {
  return (
    <section className="careers-hero d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 text-section text-center text-lg-start">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join Our Mission to <span>Transform Logistics</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Be part of a team that's revolutionizing shipping and technology
              for thousands of sellers across India. Grow, learn, and make an
              impact every day.
            </motion.p>

            <motion.button
              className="hero-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
            >
              View Open Roles
            </motion.button>
          </div>

          {/* Right Illustration */}
          <div className="col-lg-6 col-md-12 image-section text-center">
            <motion.div
              className="hero-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <CareerIllustration />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;