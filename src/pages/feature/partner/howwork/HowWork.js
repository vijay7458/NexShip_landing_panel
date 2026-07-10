import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./howWork.css";

const stepIcons = {
  apply: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M7 3h7l4 4v14H7V3z" />
      <path className="icon-primary" d="M14 3v4h4" />
      <path className="icon-primary" d="M9.5 13h5M9.5 16.5h5" />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="10.5" cy="10.5" r="6.5" />
      <path className="icon-primary" d="M15.5 15.5L21 21" />
      <path className="icon-primary" d="M8 10.5l1.6 1.6L13.5 8" />
    </svg>
  ),
  onboard: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M3 12l4-4 3.5 3.5 3-3 6.5 6.5" />
      <path className="icon-primary" d="M14 8.5h6.5V15" />
    </svg>
  ),
  partner: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="9" />
      <path className="icon-primary" d="M8.5 12.5l2.3 2.3L16 9.5" />
    </svg>
  ),
};

const HowWork = () => {
  const steps = [
    {
      step: "01",
      title: "Apply",
      desc: "Submit your partnership request through our online form. Our team will review your details promptly.",
      icon: stepIcons.apply,
    },
    {
      step: "02",
      title: "Review",
      desc: "We evaluate your application and business profile to ensure the best alignment for collaboration.",
      icon: stepIcons.review,
    },
    {
      step: "03",
      title: "Onboard",
      desc: "Once approved, our onboarding specialists help you set up accounts, tools, and necessary integrations.",
      icon: stepIcons.onboard,
    },
    {
      step: "04",
      title: "Start Partnering",
      desc: "You're ready to go! Begin working with us and access a network of thousands of businesses nationwide.",
      icon: stepIcons.partner,
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
                <motion.div className="step-icon" whileHover={{ scale: 1.1 }}>
                  {item.icon}
                </motion.div>
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