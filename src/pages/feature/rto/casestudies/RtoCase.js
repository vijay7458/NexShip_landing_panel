import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./case.css";

const RtoCaseStudiesWhite = () => {
  const cases = [
    {
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
      title: "How a Fashion Brand Reduced RTO by 38%",
      desc: "A D2C fashion seller leveraged our AI-powered RTO Prediction to flag risky COD orders and cut return-to-origin rates dramatically — saving over ₹2.5L monthly in logistics costs.",
      stats: ["38% Lower RTO", "₹2.5L Saved Monthly", "2x Faster Deliveries"],
      reverse: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
      title: "Tech Accessories Brand Boosted Profit Margins",
      desc: "By integrating predictive analytics, this electronics brand reduced RTO frequency by half and improved successful deliveries — driving 35% higher profitability.",
      stats: ["50% Fewer Returns", "35% More Profit", "4.8★ Customer Rating"],
      reverse: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1601049313565-6e9c91b49f9d?auto=format&fit=crop&w=900&q=80",
      title: "Beauty & Wellness Startup Doubled Delivery Efficiency",
      desc: "With automated order verification and predictive scoring, this startup minimized failed deliveries and boosted overall dispatch accuracy.",
      stats: ["2x Efficiency", "Zero Fake Orders", "30% Cost Reduction"],
      reverse: false,
    },
  ];

  return (
    <section className="rto-case-white">
      <div className="container d-flex flex-column">
        <motion.h2
          className="case-heading text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Success Stories & Case Studies
        </motion.h2>

        {cases.map((item, index) => (
          <motion.div
            key={index}
            className={`row align-items-center justify-content-center mb-5 case-row ${
              item.reverse ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* IMAGE SIDE */}
            <div className="col-lg-6 col-md-12 case-img-wrap">
              <motion.img
                src={item.image}
                alt={item.title}
                className="case-img"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6 col-md-12 case-content">
              <h3 className="case-title">{item.title}</h3>
              <p className="case-desc">{item.desc}</p>
              <ul className="case-stats">
                {item.stats.map((stat, i) => (
                  <li key={i}>{stat}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RtoCaseStudiesWhite;
