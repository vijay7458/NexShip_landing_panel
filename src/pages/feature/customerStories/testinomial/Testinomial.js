import React from "react";
import { motion } from "framer-motion";
import "./Testinomial.css";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    brand: "StyleCart",
    quote:
      "Using this platform transformed how we manage shipping. Our deliveries are now 2x faster and customers are happier than ever.",
    video:
      "https://cdn.pixabay.com/vimeo/354738833/shipping-ship-18421.mp4?width=640&hash=cf9d1f3d7245a9a2e9bffce3a7c8d14a0269f9f5",
  },
  {
    id: 2,
    name: "Priya Kapoor",
    brand: "GlowVeda",
    quote:
      "We cut RTOs by almost 35%. Their automation tools make logistics seamless and super-efficient.",
    video:"https://cdn.pixabay.com/vimeo/389190913/delivery-23738.mp4?width=640&hash=7c0a3f2601453d23cb087b205eb1f72ecf56f70b",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    brand: "TechNest",
    quote:
      "The platform’s tracking accuracy and courier optimization helped us scale across 3 new regions effortlessly.",
    video:
      "https://cdn.pixabay.com/vimeo/395808687/logistics-25816.mp4?width=640&hash=00b4cfaa9675e9c01f97a8f6e0ac2c5e8eec9839",
  },
];

const Testimonial = () => {
  return (
    <section className="cs-testimonial-section">
      <motion.div
        className="cs-testimonial-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>What Our Customers Say</h2>
        <p>
          Hear directly from business owners who scaled faster, reduced RTOs,
          and built customer loyalty using our logistics automation.
        </p>
      </motion.div>

      <div className="cs-testimonial-container">
        {testimonials.map((t, i) => (
          <motion.div
            className="cs-testimonial-card"
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cs-testimonial-video">
              <video
                src={t.video}
                muted
                autoPlay
                loop
                playsInline
                className="testimonial-video"
              />
            </div>
            <div className="cs-testimonial-content">
              <p className="cs-quote">“{t.quote}”</p>
              <h4>{t.name}</h4>
              <span>{t.brand}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
