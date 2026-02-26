import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./howWork.css";

const HowWork = () => {
  const steps = [
    {
      step: "01",
      title: "Apply",
      desc: "Submit your partnership request through our online form. Our team will review your details promptly.",
      icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
    },
    {
      step: "02",
      title: "Review",
      desc: "We evaluate your application and business profile to ensure the best alignment for collaboration.",
      icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
      step: "03",
      title: "Onboard",
      desc: "Once approved, our onboarding specialists help you set up accounts, tools, and necessary integrations.",
      icon: "https://cdn-icons-png.flaticon.com/512/893/893257.png",
    },
    {
      step: "04",
      title: "Start Partnering",
      desc: "You’re ready to go! Begin working with us and access a network of thousands of businesses nationwide.",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
  ];

  return (
    <section className="how-partnership-section">
      <div className="container text-center d-flex flex-column">
        <motion.h2
          className="section-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How Partnership Works
        </motion.h2>

        <div className="timeline">
          {steps.map((item, index) => (
            <motion.div
              className="timeline-step"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-icon-wrapper">
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="step-icon"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="step-number">{item.step}</div>
              </div>
              <h4 className="step-title">{item.title}</h4>
              <p className="step-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;
