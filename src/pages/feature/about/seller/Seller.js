import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./seller.css";

const avatarIcons = {
  person1: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="8" r="3.6" />
      <path className="icon-primary" d="M4.5 20c0-3.6 3.4-6.4 7.5-6.4s7.5 2.8 7.5 6.4" />
    </svg>
  ),
  person2: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="8" r="3.6" />
      <path className="icon-primary" d="M4.5 20c0-3.6 3.4-6.4 7.5-6.4s7.5 2.8 7.5 6.4" />
      <path className="icon-primary" d="M8.5 8a3.6 3.6 0 016.9-1.4" />
    </svg>
  ),
  person3: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="8" r="3.6" />
      <path className="icon-primary" d="M4.5 20c0-3.6 3.4-6.4 7.5-6.4s7.5 2.8 7.5 6.4" />
      <path className="icon-primary" d="M9 8h6" />
    </svg>
  ),
};

const Seller = () => {
  const testimonials = [
    {
      name: "Amit Kumar",
      company: "TrendyKart",
      feedback:
        "Switching to our platform reduced our RTO rate by 25%. The AI-powered logistics and tracking make shipping absolutely seamless.",
      icon: avatarIcons.person1,
    },
    {
      name: "Sneha Patel",
      company: "UrbanStyle",
      feedback:
        "The courier integrations and live updates helped us improve customer trust. We now ship faster and smarter than ever!",
      icon: avatarIcons.person2,
    },
    {
      name: "Rahul Mehta",
      company: "FitGear India",
      feedback:
        "Our deliveries became more efficient, and our customers love the transparency. Highly recommended for eCommerce sellers!",
      icon: avatarIcons.person3,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container d-flex flex-column">
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials / Seller Stories
        </motion.h2>

        <div className="row justify-content-center">
          {testimonials.map((item, index) => (
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="testimonial-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <div className="testimonial-img-wrapper">
                  <div className="testimonial-icon">{item.icon}</div>
                </div>
                <p className="testimonial-feedback">"{item.feedback}"</p>
                <h5 className="testimonial-name">{item.name}</h5>
                <p className="testimonial-company">{item.company}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seller;
