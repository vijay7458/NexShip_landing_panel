import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./works.css";

const RtoWorks = () => {
  const steps = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4712/4712104.png",
      title: "1. Data Analysis",
      desc: "Our AI model analyzes millions of shipment data points — from delivery patterns to customer behavior — to build prediction logic.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149644.png",
      title: "2. Risk Scoring",
      desc: "Each order is assigned a real-time RTO risk score based on delivery location, payment type, and historical behavior.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
      title: "3. Prediction Engine",
      desc: "AI models predict potential RTOs before dispatch and flag risky shipments for review or preventive action.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4341/4341160.png",
      title: "4. Smart Recommendations",
      desc: "Get actionable insights — like blocking risky CODs, prioritizing verified customers, and improving order routing.",
    },
  ];

  return (
    <section className="how-rto-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="how-title mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How RTO Prediction Works
        </motion.h2>

        <motion.p
          className="how-subtitle mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our AI system learns from every shipment — combining data intelligence
          with predictive analytics to minimize RTOs and improve delivery success.
        </motion.p>

        <div className="row justify-content-center">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="step-card text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="step-icon-wrapper">
                  <img src={item.icon} alt={item.title} className="step-icon" />
                </div>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-desc">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RtoWorks;
