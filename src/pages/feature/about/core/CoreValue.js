import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./coreValues.css";

const CoreValue = () => {
  const values = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Integrity",
      desc: "We believe in transparency, honesty, and doing the right thing for our sellers and partners.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      title: "Reliability",
      desc: "Every shipment matters. We ensure timely and accurate deliveries, always keeping our word.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      title: "Innovation",
      desc: "Our technology evolves constantly to simplify logistics and improve delivery performance.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/929/929564.png",
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
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="value-icon"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
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
