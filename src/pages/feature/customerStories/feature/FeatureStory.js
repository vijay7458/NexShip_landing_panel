import React from "react";
import { motion } from "framer-motion";
import "./feature.css";

const CustomerFeaturedStory = () => {
  return (
    <section className="cs-featured-section">
      <motion.div
        className="cs-featured-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <motion.div
          className="cs-featured-image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1681490109330-ca8fd79603b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3VzdG9tZXIlMjBzdG9yaWVzfGVufDB8fDB8fHww"
            alt="Customer Success Story"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="cs-featured-content"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="cs-featured-heading">
            How <span>The Hatke</span> sped up deliveries and scaled nationwide
          </h2>

          <div className="cs-featured-block">
            <h4>📍 The Challenge</h4>
            <p>
              The Hatke, a creative brand known for customized mobile covers,
              faced delays and frequent shipping errors during festive rushes.
              Manual tracking and courier mismatches were hurting both customer
              satisfaction and repeat orders.
            </p>
          </div>

          <div className="cs-featured-block">
            <h4>🚀 The Solution</h4>
            <p>
              By integrating automated courier selection and smart order
              routing, The Hatke streamlined its fulfillment process. Real-time
              tracking updates helped their support team stay ahead of customer
              queries and build trust.
            </p>
          </div>

          <div className="cs-featured-block">
            <h4>💡 The Results</h4>
            <ul>
              <li>✅ 50% faster order deliveries</li>
              <li>✅ 35% drop in delayed shipments</li>
              <li>✅ 2.5× increase in returning customers</li>
            </ul>
          </div>

          <button className="cs-featured-btn">Read Full Story →</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomerFeaturedStory;