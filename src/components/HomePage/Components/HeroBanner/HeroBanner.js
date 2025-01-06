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

  return (
    <>
      <section className="hero-banner row mx-0">
        {/* Left side with image */}
        <div className="banner-text col-5 animate__animated animate__fadeInRight">

          <AnimatedText className="" text="Logistics Industry" />
          <AnimatedText text="Dynamics Unveiled." />
          <p>A deep dive into logistics, revealing the mechanisms driving global commerce and supply chains.</p>
          <button className="btn main-button">Sign up for free</button>
        </div>

        {/* Right side with heading and subheading */}
        <div className="banner-image col-5">
          {/* <img src={bannerImage} alt="Logistics Dynamics" /> */}
          <BannerGraphic />
        </div>
      </section>
      <ChannelCarousel />
    </>
  );
};

export default HeroBanner;
