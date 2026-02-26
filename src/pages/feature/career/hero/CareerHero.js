import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./careerHero.css";

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
              Be part of a team that’s revolutionizing shipping and technology
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

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 image-section text-center">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/4226/4226912.png"
              alt="Careers Illustration"
              className="hero-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
