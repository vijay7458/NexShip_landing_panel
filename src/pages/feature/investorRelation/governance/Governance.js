import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./governance.css";

const Governance = () => {
  const governanceData = [
    {
      title: "Board of Directors",
      desc: "Our Board comprises industry leaders and strategic thinkers who guide our long-term growth and governance framework.",
      icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
    },
    {
      title: "Audit & Compliance",
      desc: "We maintain a strong audit process ensuring transparency, accountability, and adherence to all financial regulations.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Ethics & Integrity",
      desc: "Our commitment to ethics and integrity drives every business decision and stakeholder relationship we build.",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    },
  ];


  

  return (
    <section className="corporate-governance-section mb-4">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="governance-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Corporate Governance
        </motion.h2>

        <div className="row justify-content-center">
          {governanceData.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="governance-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="governance-icon-wrapper">
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="governance-icon"
                    whileHover={{ rotate: 5 }}
                  />
                </div>
                <h4 className="governance-card-title">{item.title}</h4>
                <p className="governance-card-desc">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="governance-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            We uphold the highest standards of corporate governance to maintain
            trust, accountability, and long-term value for our shareholders and
            stakeholders.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Governance;
