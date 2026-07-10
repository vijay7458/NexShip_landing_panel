import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./announcement.css";

const AnnouncementsUpdates = () => {
  const updates = [
    {
      date: "February 2026",
      title: "New Fulfillment Center Launch",
      desc: "We opened a state-of-the-art fulfillment center in Mumbai to enhance same-day delivery and expand order processing capabilities.",
    },
    {
      date: "January 2026",
      title: "Introduced AI-Powered RTO Prediction",
      desc: "Our latest AI model helps sellers minimize return-to-origin losses by predicting risky shipments before dispatch.",
    },
    {
      date: "November 2025",
      title: "Cross-Border Shipping Expansion",
      desc: "We extended our international network to 15+ new countries, offering sellers seamless global delivery options.",
    },
    {
      date: "September 2025",
      title: "Rebranding and New Visual Identity",
      desc: "We unveiled our new logo and brand identity — reflecting our evolution as a technology-first logistics platform.",
    },
  ];

  return (
    <section className="announcements-section">
      <div className="container">
        <motion.h2
          className="announcements-title text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Announcements & Updates
        </motion.h2>

        <div className="timeline-wrapper">
          {updates.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <span className="timeline-date">{item.date}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsUpdates;
