import React, { useState } from "react";
import "animate.css";
import "./HeroBanner.css";
import bannerImage from "../../../../assets/image/banner-image.webp";
import ChannelCarousel from "../ChannelCarousel/ChannelCarousel";
import Cube from "../../../Header/Effects/Cube";
import AnimatedText from "./AnimatedLetters";
import BannerGraphic from "./BannerGraphic/BannerGraphic";

const HeroBanner = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)

  const nameArray = ['i', 'm', 'a', 'n', 's', 'h', 'u']

  const handleNavigation = () => {
    window.open("https://app.shipease.in/sign-up", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="hero-banner row mx-0">
        {/* Left side with image */}
        <div className="banner-text col-12 col-sm-9 col-md-7 col-lg-5">
          <h1 className="animated-text-container animate__animated animate__fadeInLeft">
            <AnimatedText className="" text="Logistics Industry" />
          </h1>
          <h1 className="animated-text-container animate__animated animate__fadeInRight">
            <AnimatedText text="Dynamics Unveiled." />
          </h1>
          <div className="animate__animated animate__slideInUp">
            <p>A deep dive into logistics, revealing the mechanisms driving global commerce and supply chains.</p>
            <button onClick={handleNavigation} className="btn main-button">Sign up for free</button>
          </div>
        </div>

        {/* Right side with heading and subheading */}
        <div className="banner-image col-12 col-sm-5">
          {/* <img src={bannerImage} alt="Logistics Dynamics" /> */}
          <BannerGraphic />
        </div>
      </section>
      <ChannelCarousel />
    </>
  );
};

export default HeroBanner;
