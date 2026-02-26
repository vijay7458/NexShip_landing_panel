import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./seller.css";

const Seller = () => {
  const testimonials = [
    {
      name: "Amit Kumar",
      company: "TrendyKart",
      feedback:
        "Switching to our platform reduced our RTO rate by 25%. The AI-powered logistics and tracking make shipping absolutely seamless.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Sneha Patel",
      company: "UrbanStyle",
      feedback:
        "The courier integrations and live updates helped us improve customer trust. We now ship faster and smarter than ever!",
      img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    },
    {
      name: "Rahul Mehta",
      company: "FitGear India",
      feedback:
        "Our deliveries became more efficient, and our customers love the transparency. Highly recommended for eCommerce sellers!",
      img: "https://cdn-icons-png.flaticon.com/512/236/236832.png",
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
                  <img
                    src={item.img}
                    alt={item.name}
                    className="testimonial-img"
                  />
                </div>
                <p className="testimonial-feedback">“{item.feedback}”</p>
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
