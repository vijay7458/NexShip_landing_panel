import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./OurCoreValues.css";

const valueIcons = {
  integrity: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path className="icon-primary" d="M9 12l2 2 4-4" />
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-primary" d="M9 18h6" />
      <path className="icon-primary" d="M10 21h4" />
      <path className="icon-secondary" d="M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7V16h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />
    </svg>
  ),
  teamwork: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="8.5" cy="8" r="3" />
      <circle className="icon-primary" cx="16" cy="9.5" r="2.4" />
      <path className="icon-secondary" d="M3 20c0-3 2.5-5.4 5.5-5.4S14 17 14 20" />
      <path className="icon-primary" d="M15 15.2c2.3.3 4 2.2 4 4.8" />
    </svg>
  ),
  customerFocus: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="8" />
      <circle className="icon-primary" cx="12" cy="12" r="4" />
      <circle className="icon-primary" cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  ),
};

const OurCoreValues = () => {
  const values = [
    {
      icon: valueIcons.integrity,
      title: "Integrity",
      desc: "We stand by our words, maintain transparency, and hold ourselves accountable for every commitment.",
    },
    {
      icon: valueIcons.innovation,
      title: "Innovation",
      desc: "We constantly explore new technologies to simplify logistics and bring smarter solutions to our clients.",
    },
    {
      icon: valueIcons.teamwork,
      title: "Teamwork",
      desc: "We work together, share ideas freely, and value every contribution that moves us forward as one team.",
    },
    {
      icon: valueIcons.customerFocus,
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
                <motion.div
                  className="value-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>
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
