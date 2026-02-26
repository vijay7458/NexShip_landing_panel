import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const WarehouseHero = () => {
  return (
    <section className="wf-hero-section">
      <div className="wf-hero-container">
        {/* Left Text Content */}
        <motion.div
          className="wf-hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="wf-hero-title">
            Simplify <span>Storage</span>, <span>Packing</span> & <span>Shipping</span>.
          </h1>

          <p className="wf-hero-subtitle">
            Experience seamless ecommerce warehousing with automated order
            processing, smart inventory management, and nationwide fulfilment
            centers powered by our logistics platform.
          </p>

          <div className="wf-hero-buttons">
            <button className="wf-btn-primary">Get Started</button>
            <button className="wf-btn-outline">Book a Demo</button>
          </div>

          <div className="wf-hero-stats">
            <div>
              <h3>1M+</h3>
              <p>Orders Fulfilled</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>On-Time Dispatch</p>
            </div>
            <div>
              <h3>30+</h3>
              <p>Warehouses Across India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="wf-hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZWhvdXNlfGVufDB8fDB8fHww"
            alt="Warehouse fulfilment"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WarehouseHero;
