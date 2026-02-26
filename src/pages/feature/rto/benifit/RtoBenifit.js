import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./benifit.css";

const RtoBenefits = () => {
  const benefits = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2891/2891643.png",
      title: "Reduce RTO by up to 40%",
      desc: "Identify risky shipments before dispatch and minimize losses with AI-backed predictions.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png",
      title: "Smarter COD Management",
      desc: "Block high-risk COD orders automatically and improve your successful delivery rate.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
      title: "Save Logistics Costs",
      desc: "Prevent unnecessary shipping and reverse logistics expenses by acting before failure.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
      title: "Improve Customer Trust",
      desc: "Deliver faster, ensure reliability, and build a consistent post-order experience.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
      title: "Real-time Insights",
      desc: "Track risk scores, monitor performance, and optimize order management effortlessly.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4341/4341160.png",
      title: "AI Learning Engine",
      desc: "Your prediction model keeps improving with every order, making it smarter over time.",
    },
  ];

  return (
    <section className="rto-benefits-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="benefits-title mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Benefits of RTO Prediction
        </motion.h2>

        <motion.p
          className="benefits-subtitle mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Empower your business with actionable intelligence and predictive tools that help prevent losses and maximize deliveries.
        </motion.p>

        <div className="row justify-content-center">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex align-items-stretch"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="benefit-card text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="benefit-icon-wrapper">
                  <img src={item.icon} alt={item.title} className="benefit-icon" />
                </div>
                <h4 className="benefit-title">{item.title}</h4>
                <p className="benefit-desc">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RtoBenefits;
