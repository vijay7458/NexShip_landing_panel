import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./OurCoreValues.css";

const OurCoreValues = () => {
  const values = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2936/2936631.png",
      title: "Integrity",
      desc: "We stand by our words, maintain transparency, and hold ourselves accountable for every commitment.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      title: "Innovation",
      desc: "We constantly explore new technologies to simplify logistics and bring smarter solutions to our clients.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135798.png",
      title: "Teamwork",
      desc: "We work together, share ideas freely, and value every contribution that moves us forward as one team.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/929/929564.png",
      title: "Customer Focus",
      desc: "Our success is measured by how well we empower our sellers and delight their customers.",
    },
  ];

  return (
    <section className="core-values-alt-section">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        <div className="values-list">
          {values.map((item, index) => (
            <motion.div
              className={`value-row ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-box">
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="value-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              <div className="text-box">
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

export default OurCoreValues;
