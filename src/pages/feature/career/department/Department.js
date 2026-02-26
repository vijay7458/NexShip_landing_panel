import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./department.css";

const Department = () => {
  const departments = [
    {
      title: "Engineering & Product",
      desc: "We design and develop cutting-edge platforms that power thousands of shipments daily — blending innovation with reliability.",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
    {
      title: "Operations & Logistics",
      desc: "From warehouse to doorstep — our team ensures every parcel reaches the right customer at the right time.",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Data & Analytics",
      desc: "We turn massive datasets into actionable insights, driving smarter routes, reduced RTO, and faster deliveries.",
      icon: "https://cdn-icons-png.flaticon.com/512/979/979585.png",
    },
    {
      title: "Customer Success",
      desc: "We build relationships, not just support tickets — ensuring every seller and partner grows with confidence.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
    {
      title: "Marketing & Growth",
      desc: "Our storytellers bring logistics to life — reaching new sellers and shaping the brand that moves India.",
      icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
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
                <motion.img
                  src={dept.icon}
                  alt={dept.title}
                  className="dept-icon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                />
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
