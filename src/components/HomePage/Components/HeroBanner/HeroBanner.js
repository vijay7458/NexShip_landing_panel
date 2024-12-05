import React from "react";
import "./HeroBanner.css";
import bannerImage from "../../../../assets/image/banner-image.webp";

const HeroBanner = () => {
  return (
    <section className="hero-banner d-flex">
      {/* Left side with image */}
      <div className="banner-text">
        <h1>Logistics Industry Dynamics Unveiled.</h1>
        <p>A deep dive into logistics, revealing the mechanisms driving global commerce and supply chains.</p>
      </div>


      {/* Right side with heading and subheading */}
      <div className="banner-image">
        <img src={bannerImage} alt="Logistics Dynamics" />
      </div>
    </section>
  );
};

export default HeroBanner;
