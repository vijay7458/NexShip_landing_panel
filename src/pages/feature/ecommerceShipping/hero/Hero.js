import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {

  const handleShip = () => {
  window.open("https://app.shipease.in/sign-up"
            ,"_blank",)
  }

  const bookDemo = () =>{
    window.open(  "https://app.shipease.in/sign-up"
            ,"_blank")
  }
   return (
    <section className="esh-hero-section">
      <div className="esh-hero-container">
        {/* Left Content */}
        <motion.div
          className="esh-hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="esh-hero-title">
            Ship <span>Smarter</span>, Deliver <span>Faster</span>.
          </h1>
          <p className="esh-hero-subtitle">
            Power your ecommerce business with AI-driven courier allocation,
            automated tracking, and 17+ trusted delivery partners — all in one
            platform.
          </p>

          <div className="esh-hero-buttons">
            <button className="esh-btn-primary" onClick={handleShip}>Start Shipping</button>
            <button className="esh-btn-outline" onClick={bookDemo}>Book a Demo</button>
          </div>

          <div className="esh-hero-stats">
            <div>
              <h3>5 Cr+</h3>
              <p>Shipments Delivered</p>
            </div>
            <div>
              <h3>95%</h3>
              <p>On-Time Delivery Rate</p>
            </div>
            <div>
              <h3>17+</h3>
              <p>Courier Partners</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="esh-hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1661838660040-e3880bfb3d5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nhbm5pbmclMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Ecommerce Shipping"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
