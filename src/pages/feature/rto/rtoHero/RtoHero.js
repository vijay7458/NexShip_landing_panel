import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./hero.css";
import img1 from "../../../../assets/image/WhatsApp Image 2026-02-25 at 4.19.47 PM.jpeg"

const RtoHero = () => {
  const handleClick = () => {
    window.open(  "https://nexshyp.com/sign-up","_blank")
  } 


  return (
    <section className="rto-hero-section">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* LEFT TEXT SIDE */}
          <div className="col-lg-6 col-md-12 text-section">
            <motion.h1
              className="rto-title"
              initial= {{ opacity: 0, y: 40 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition= {{ duration: 0.8 }}
              viewport= {{ once: true }}
            >
              Predict & Prevent <span className="rto-highlight">RTOs</span> Before They Happen
            </motion.h1>

            <motion.p
              className="rto-subtitle"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Reduce return-to-origin losses with AI-driven predictions that
              identify risky shipments before dispatch — helping you save cost,
              time, and customer trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="rto-btn" onClick={handleClick}>Get a Demo</button>
            </motion.div>
          </div>
          {/* RIGHT IMAGE SIDE */}
          <div className="col-lg-6 col-md-12 image-section text-center">
            <motion.img
              src={img1}
              alt="RTO Prediction Dashboard"
              className="rto-hero-img"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RtoHero;