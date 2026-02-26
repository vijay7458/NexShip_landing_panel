import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./WhyPartner.css";

const WhyPartner = () => {
  const benefits = [
    {
      title: "Reliable Payouts",
      desc: "Get transparent and timely payments for every successful shipment. No hidden charges, no delays — just trust.",
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    },
    {
      title: "Nationwide Reach",
      desc: "Access our vast logistics network and deliver to 29,000+ pin codes across India with confidence.",
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
    {
      title: "Technology Integration",
      desc: "Seamlessly integrate using our APIs and dashboards to automate your shipping and tracking operations.",
      icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    },
    {
      title: "Dedicated Partner Support",
      desc: "Our team ensures smooth onboarding, technical assistance, and continuous support to help you scale faster.",
      icon: "https://cdn-icons-png.flaticon.com/512/1087/1087927.png",
    },
  ];

  return (
    <section className="why-partner-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE - Text Section */}
          <motion.div
            className="col-lg-5 col-md-12 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="why-title">
              Why <span>Partner With Us</span>
            </h2>
            <p className="why-subtext">
              We empower partners with strong infrastructure, cutting-edge
              technology, and trusted business relationships to grow faster in
              the logistics ecosystem.
            </p>
          </motion.div>

          {/* RIGHT SIDE - Benefits */}
          <motion.div
            className="col-lg-7 col-md-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="benefits-grid">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  className="benefit-card"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="icon-box">
                    <img src={item.icon} alt={item.title} className="benefit-icon" />
                  </div>
                  <h4 className="benefit-title">{item.title}</h4>
                  <p className="benefit-desc">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
