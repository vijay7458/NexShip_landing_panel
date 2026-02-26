import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./diversity.css";

const Diversity = () => {
  return (
    <section className="diversity-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <motion.div
            className="col-lg-6 col-md-12 text-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              We’re <span>Stronger Together</span>
            </h2>
            <p className="section-desc">
              At our core, we celebrate diversity — in people, perspectives, and
              ideas. We believe that an inclusive environment sparks innovation,
              strengthens collaboration, and helps us deliver better solutions
              for everyone.
            </p>
            <p className="section-desc">
              Every individual, regardless of gender, background, or belief,
              finds space to grow, contribute, and lead. Because progress happens
              when we move forward — together.
            </p>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            className="col-lg-6 col-md-12 image-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="img-wrapper">
              <motion.img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="Team diversity"
                className="grid-img large"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Inclusive meeting"
                className="grid-img small"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
                alt="Team collaboration"
                className="grid-img medium"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Diversity;
