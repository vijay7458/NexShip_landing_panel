import React from "react";
import { motion } from "framer-motion";
import "./cta.css";

const FinalCTA = () => {

  const handleClick = () =>{
    window.open(  "https://app.shipease.in/sign-up",
            "_blank")
  }
  return (
    <section className="esh-cta-section">
      <motion.div
        className="esh-cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="esh-cta-title">
          Ready to <span>Ship Smarter</span> and Scale Faster?
        </h2>
        <p className="esh-cta-subtitle">
          Join thousands of ecommerce sellers who have simplified their shipping
          operations, reduced costs, and improved delivery speed with our
          platform.
        </p>

        <div className="esh-cta-buttons">
          <button className="esh-btn-primary" onClick={handleClick}>Start Shipping Now</button>
          <button className="esh-btn-outline" onClick={handleClick}>Book a Demo</button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
