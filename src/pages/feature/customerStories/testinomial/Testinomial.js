import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Testinomial.css";
import vid1 from "../../../../assets/image/video/S3.mp4";
import vid2 from "../../../../assets/image/video/ansh.mp4";
import vid3 from "../../../../assets/image/video/Shipease 1 F (1).mp4";

const testimonials = [
  {
    id: 1,
    name: "Sanjeet Jha",
    brand: "Nirvasa (Founder & Seller)",
    quote:
      "As the owner of Nirvasa, managing medicine deliveries used to be a constant challenge. With this platform, we’ve automated our shipping completely—ensuring every order reaches customers safely and on time.",
    video: vid1,
  },
  {
    id: 2,
    name: "Ansh Tyagi",
    brand: "Nirvasa (Operations Manager)",
    quote:
      "Coordinating high-volume medical shipments requires precision. Their real-time tracking and courier optimization tools have reduced our manual work and improved dispatch efficiency significantly.",
    video: vid2,
  },
  {
    id: 3,
    name: "Kapil Arora",
    brand: "Pasand Garments (Seller)",
    quote:
      "Running a textile business means shipping across multiple regions. This platform simplified our logistics, cut costs, and helped us expand nationwide without delivery delays.",
    video: vid3,
  },
];

const Testimonial = () => {
  const videoRefs = useRef([]); // store refs for all videos

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause(); // pause all others
      }
    });
  };

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
          Hear directly from business owners and managers who streamlined their
          logistics, reduced RTOs, and scaled faster with our platform.
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
                ref={(el) => (videoRefs.current[i] = el)}
                src={t.video}
                controls
                loop
                playsInline
                className="testimonial-video"
                onPlay={() => handlePlay(i)} // trigger when a video starts
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