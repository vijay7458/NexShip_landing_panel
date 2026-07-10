import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./coreValues.css";

const icons = {
  integrity: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path className="icon-primary" d="M9 12l2 2 4-4" />
    </svg>
  ),
  reliability: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="9" />
      <path className="icon-primary" d="M12 7v5l3.5 2" />
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-primary" d="M9 18h6" />
      <path className="icon-primary" d="M10 21h4" />
      <path className="icon-secondary" d="M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7V16h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />
    </svg>
  ),
  customer: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="8" r="3.2" />
      <path className="icon-primary" d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    </svg>
  ),
};

const CoreValue = () => {
  const values = [
    {
      icon: icons.integrity,
      title: "Integrity",
      desc: "We believe in transparency, honesty, and doing the right thing for our sellers and partners.",
    },
    {
      icon: icons.reliability,
      title: "Reliability",
      desc: "Every shipment matters. We ensure timely and accurate deliveries, always keeping our word.",
    },
    {
      icon: icons.innovation,
      title: "Innovation",
      desc: "Our technology evolves constantly to simplify logistics and improve delivery performance.",
    },
    {
      icon: icons.customer,
      title: "Customer First",
      desc: "We put our sellers at the heart of every decision, ensuring growth and satisfaction.",
    },
  ];

  return (
    <section className="core-values-section d-flex flex-column ">
      <div className="container d-flex flex-column">
        <motion.h2
          className="section-title text-center mb-5 text-light"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        <div className="row justify-content-center">
          {values.map((item, index) => (
            <motion.div
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="value-card text-center">
                <div className="icon-wrapper">
                  <motion.div
                    className="value-icon"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h4 className="value-title">{item.title}</h4>
                <p className="value-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;