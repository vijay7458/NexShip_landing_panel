import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./WhyWorkWithUs.css";

const WhyWorkWithUs = () => {
  const reasons = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Career Growth",
      desc: "We invest in our people with continuous learning, mentorship, and leadership opportunities to help you grow faster.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
      title: "Collaborative Culture",
      desc: "We believe the best ideas come from collaboration — everyone has a voice, and every opinion matters.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      title: "Innovation Everyday",
      desc: "We use technology to simplify logistics and solve complex problems creatively and efficiently.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/929/929564.png",
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
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="reason-icon"
                    whileHover={{ rotate: 5 }}
                  />
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
