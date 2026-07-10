import React from 'react';
import { motion } from 'framer-motion';
import ApiIntegrationImg from '../../../../../assets/image/ApiIntegrationImg.png';
import './integration.css';

export default function MainApi() {
  return (
    <section className="api-intro-section">
      <div className="container api-intro-wrapper row">
        {/* Left Column */}
        <motion.div
          className="col-12 col-lg-6 api-intro-text"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="api-intro-heading">
            <span style={{ color: "#000" }}>API</span> Integration
          </h1>
          <p className="api-intro-description">
            Connect your eCommerce store to your Shipease account and manage all your orders from a single platform.
            Seamlessly sync your website's inventory and catalog to receive incoming orders directly in the panel.
            Stay updated on new orders while efficiently processing existing ones—ensuring no order is missed.
            Maintain a flawless workflow and keep operations running smoothly with API integration.
            Stay on top of your shipments, streamline processes, and never lose track of an order again.
          </p>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="col-12 col-lg-6 api-intro-image d-flex align-items-center justify-content-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={ApiIntegrationImg} alt="API Integration" className="api-intro-img img-fluid" />
        </motion.div>
      </div>
    </section>
  );
}
