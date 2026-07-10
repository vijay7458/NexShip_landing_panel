import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./HeroSection.css";
import img1 from "../../../../assets/image/WhatsApp Image 2026-02-25 at 1.13.41 PM.jpeg"
const HeroSection = () => {
  return (
    <section className="team-hero-section d-flex align-items-center justify-content-center">
      <div className="container d-flex flex-column">
        {/* Hero Text */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="team-hero-title">
            Meet <span>Our Team</span>
          </h1>
          <p className="team-hero-subtitle">
            A passionate group of innovators, creators, and problem-solvers
            powering the future of logistics and commerce.
          </p>
        </motion.div>

        {/* Team Image Grid */}
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
        marginTop: "6rem",
        textAlign: "center",
      }}
    >
      <motion.div
        className="team-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        style={{
          width: "80%", // ✅ covers 80% of screen
          maxWidth: "1200px", // optional max size
        }}
      >
        <img
          src={img1}
          alt="Team Member"
          className="team-img"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </motion.div>
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
