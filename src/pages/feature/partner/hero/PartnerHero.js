import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./partnerHero.css";

const PartnerHero = () => {
  return (
    <section className="partner-hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="col-lg-6 col-md-12 text-section"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="partner-title">
              Partner <span>With Us</span>
            </h1> 
            <p className="partner-subtitle">
              Join hands with us to build the future of smart logistics. 
              Together, we empower businesses to ship faster, smarter, and further.
            </p>
            <motion.a
            href="mailto:Leadership@shipeaase.in"
              className="partner-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Become a Partner
            </motion.a>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="col-lg-6 col-md-12 image-section text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Partner with us"
              className="partner-hero-img"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PartnerHero;
