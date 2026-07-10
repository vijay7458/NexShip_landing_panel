import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./department.css";

const deptIcons = {
  engineering: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M14.7 6.3a1 1 0 011.4 0l1.6 1.6a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-1.6-1.6a1 1 0 010-1.4l8-8z" />
      <path className="icon-primary" d="M13 8l3 3" />
      <path className="icon-primary" d="M5 19l1.5-4 2.5 2.5L5 19z" />
    </svg>
  ),
  operations: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="9" />
      <path className="icon-primary" d="M12 7v5l3.5 2" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-primary" d="M5 20V12" />
      <path className="icon-primary" d="M12 20V7" />
      <path className="icon-secondary" d="M19 20V4" />
    </svg>
  ),
  customer: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="9" cy="8" r="3.2" />
      <path className="icon-primary" d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path className="icon-primary" d="M16.5 8.5a2.5 2.5 0 010 5" />
      <path className="icon-primary" d="M19 20c0-2.5-1.5-4.6-3.5-5.5" />
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M4 10v4h4l5 4V6L8 10H4z" />
      <path className="icon-primary" d="M16.5 9a4 4 0 010 6" />
      <path className="icon-primary" d="M19 7a7.5 7.5 0 010 10" />
    </svg>
  ),
};

const Department = () => {
  const departments = [
    {
      title: "Engineering & Product",
      desc: "We design and develop cutting-edge platforms that power thousands of shipments daily — blending innovation with reliability.",
      icon: deptIcons.engineering,
    },
    {
      title: "Operations & Logistics",
      desc: "From warehouse to doorstep — our team ensures every parcel reaches the right customer at the right time.",
      icon: deptIcons.operations,
    },
    {
      title: "Data & Analytics",
      desc: "We turn massive datasets into actionable insights, driving smarter routes, reduced RTO, and faster deliveries.",
      icon: deptIcons.data,
    },
    {
      title: "Customer Success",
      desc: "We build relationships, not just support tickets — ensuring every seller and partner grows with confidence.",
      icon: deptIcons.customer,
    },
    {
      title: "Marketing & Growth",
      desc: "Our storytellers bring logistics to life — reaching new sellers and shaping the brand that moves India.",
      icon: deptIcons.marketing,
    },
  ];

  return (
    <section className="departments-section">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Departments & Teams
        </motion.h2>

        <div className="departments-wrapper">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              className="department-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="icon-container">
                <motion.div
                  className="dept-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {dept.icon}
                </motion.div>
              </div>
              <div className="dept-text">
                <h4 className="dept-title">{dept.title}</h4>
                <p className="dept-desc">{dept.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Department;
