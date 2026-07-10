import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./overview.css";

const Overview = () => {
  return (
    <section className="company-overview-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Left Side: Image */}
          <motion.div
            className="col-lg-6 col-md-12 image-section text-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f"
              alt="Company Overview"
              className="overview-img"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            className="col-lg-6 col-md-12 text-section"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="overview-title">Company Overview</h2>
            <p className="overview-desc">
              Founded with the vision to simplify commerce, we are India’s
              leading logistics and fulfillment technology platform. Our
              solutions empower thousands of businesses — from startups to
              enterprises — to deliver products efficiently across the country.
            </p>
            <p className="overview-desc">
              Through a combination of smart automation, data intelligence, and
              an expansive partner network, we are redefining how businesses
              handle shipping, tracking, and customer satisfaction.
            </p>
            <div className="stats-wrapper">
              <div className="stat-box">
                <h3>50K+</h3>
                <p>Active Sellers</p>
              </div>
              <div className="stat-box">
                <h3>29,000+</h3>
                <p>Pin Codes Served</p>
              </div>
              <div className="stat-box">
                <h3>100M+</h3>
                <p>Shipments Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
