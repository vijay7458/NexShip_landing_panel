import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./CareersCta.css";

const CareersCta = () => {
    


  return (
    <section className="careers-cta-section d-flex align-items-center justify-content-center" style={{marginBottom:"6rem"}}>
      <div className="container text-center d-flex flex-column">
        <motion.h2
          className="cta-title mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We Don’t Have Any Openings Right Now
        </motion.h2>

        <motion.p
          className="cta-subtitle mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          But we’re always looking for passionate people.  
          Contact our HR team to know more or stay updated on future roles.
        </motion.p>

        <motion.a
          href="mailto:hr@shipease.in"
          className="cta-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Contact HR
        </motion.a>
      </div>
    </section>
  );
};

export default CareersCta;
