import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section className="newsroom-hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Left Text Section */}
          <motion.div
            className="col-lg-6 col-md-12 text-section"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="newsroom-title">
              Company <span>Newsroom</span>
            </h1>
            <p className="newsroom-subtitle">
              Stay informed with our latest press releases, media coverage,
              and corporate announcements that highlight our journey and impact
              across the logistics and technology industry.
            </p>

            <motion.a
              href="#press-releases"
              className="newsroom-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              View Latest News
            </motion.a>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="col-lg-6 col-md-12 image-section text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Newsroom Illustration"
              className="newsroom-hero-img"
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
