import React, { useState } from "react";
import "./HeroBanner.css";
import bannerImage from "../../../../assets/image/banner-image.webp";
import ChannelCarousel from "../ChannelCarousel/ChannelCarousel";
import Cube from "../../../Header/Effects/Cube";
import AnimatedText from "./AnimatedLetters";

const HeroBanner = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 4000)

  const nameArray = ['i', 'm', 'a', 'n', 's', 'h', 'u']

  return (
    <>
      <section className="hero-banner d-flex">
        {/* Left side with image */}
        <div className="banner-text">
          {/* <Cube /> */}
          {/* <h1>
            <span>L</span><span>o</span><span>g</span><span>i</span><span>s</span><span>t</span><span>i</span><span>c</span><span>s</span>
            <span> I</span><span>n</span><span>d</span><span>u</span><span>s</span><span>t</span><span>r</span><span>y</span><br />
            <span>D</span><span>y</span><span>n</span><span>a</span><span>m</span><span>i</span><span>c</span><span>s</span>
            <span> U</span><span>n</span><span>v</span><span>e</span><span>i</span><span>l</span><span>e</span><span>d</span><span>.</span>
          </h1> */}
          <AnimatedText text="Logistics Industry" />
          <AnimatedText text="Dynamics Unveiled." />
          <p>A deep dive into logistics, revealing the mechanisms driving global commerce and supply chains.</p>
          {/* <AnimatedArrowButton href="https://google.com">Explore More</AnimatedArrowButton> */}
        </div>


        {/* Right side with heading and subheading */}
        <div className="banner-image">
          <img src={bannerImage} alt="Logistics Dynamics" />
        </div>
      </section>
      <ChannelCarousel />
    </>
  );
};

export default HeroBanner;
