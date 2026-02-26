import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhatRto.css";

const WhatIsRto = () => {
  const causes = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      title: "Incorrect Address",
      desc: "Orders often get returned when customers provide incomplete or wrong delivery addresses.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4228/4228693.png",
      title: "COD Rejection",
      desc: "Many customers refuse cash-on-delivery orders due to lack of intent or delayed decisions.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3004/3004613.png",
      title: "Unreachable Customer",
      desc: "Failed delivery attempts happen when the customer is unavailable or doesn’t respond to calls.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2830/2830248.png",
      title: "Fake or Fraud Orders",
      desc: "Some orders are placed with fake details or testing intent, resulting in avoidable RTOs.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2203/2203124.png",
      title: "Delayed Delivery",
      desc: "Excessive delivery delays often lead to canceled orders or customer dissatisfaction.",
    },
  ];

  return (
    <section className="what-is-rto-section">
      <div className="container d-flex flex-column text-center">
        {/* Section Header */}
        <motion.h2
          className="rto-heading mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What is RTO & Why It Happens?
        </motion.h2>

        <motion.p
          className="rto-description mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          RTO (Return To Origin) occurs when an order fails to reach the customer
          and is returned back to the seller. Here are the top reasons why it happens:
        </motion.p>

        {/* Causes Grid */}
        <div className="row justify-content-center">
          {causes.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="cause-card">
                <div className="icon-wrap">
                  <img src={item.icon} alt={item.title} className="cause-icon" />
                </div>
                <h4 className="cause-title">{item.title}</h4>
                <p className="cause-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsRto;
