import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./WhyWorkWithUs.css";

const reasonIcons = {
  growth: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-primary" d="M4 19h16" />
      <path className="icon-secondary" d="M6 19v-5l4-3 4 3 4-8" />
      <path className="icon-primary" d="M14 6h4v4" />
    </svg>
  ),
  collaboration: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="8.5" cy="8" r="3" />
      <circle className="icon-primary" cx="16" cy="9.5" r="2.4" />
      <path className="icon-secondary" d="M3 20c0-3 2.5-5.4 5.5-5.4S14 17 14 20" />
      <path className="icon-primary" d="M15 15.2c2.3.3 4 2.2 4 4.8" />
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-primary" d="M9 18h6" />
      <path className="icon-primary" d="M10 21h4" />
      <path className="icon-secondary" d="M12 3a6 6 0 00-3.6 10.8c.5.4.8 1 .8 1.7V16h5.6v-.5c0-.7.3-1.3.8-1.7A6 6 0 0012 3z" />
    </svg>
  ),
  balance: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M12 4v4" />
      <path className="icon-primary" d="M4 8h16l-2 5a6 6 0 01-12 0L4 8z" />
      <path className="icon-primary" d="M9 20h6" />
    </svg>
  ),
};

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: reasonIcons.growth,
      title: "Career Growth",
      desc: "We invest in our people with continuous learning, mentorship, and leadership opportunities to help you grow faster.",
    },
    {
      icon: reasonIcons.collaboration,
      title: "Collaborative Culture",
      desc: "We believe the best ideas come from collaboration — everyone has a voice, and every opinion matters.",
    },
    {
      icon: reasonIcons.innovation,
      title: "Innovation Everyday",
      desc: "We use technology to simplify logistics and solve complex problems creatively and efficiently.",
    },
    {
      icon: reasonIcons.balance,
      title: "Work-Life Balance",
      desc: "We support flexible schedules, remote options, and mental wellness — because balance drives excellence.",
    },
  ];

  return (
    <section className="why-work-section">
      <div className="container text-center d-flex flex-column">
        <motion.h2
          className="section-title mb-5 text-light"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Work With Us
        </motion.h2>

        <div className="row justify-content-center">
          {reasons.map((item, index) => (
            <motion.div
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="reason-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="icon-wrapper">
                  <motion.div
                    className="reason-icon"
                    whileHover={{ rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <h4 className="reason-title">{item.title}</h4>
                <p className="reason-desc">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
