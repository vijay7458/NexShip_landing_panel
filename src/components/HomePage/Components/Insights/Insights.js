import React, { useEffect, useRef, useState } from "react";
import InsightsLeft from "../../../../assets/image/InsightsLeft.png";
import InsightsRight from "../../../../assets/image/InsightsRight.png";
import "animate.css";
import "./Insights.css";

const Insights = () => {
  const [isAnimated, setIsAnimated] = useState(false); // Track if animation has been applied
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true); // Trigger animation only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimated]);

  return (
    <div className="home-section" ref={sectionRef}>
      <div className="overview-container">
        {/* Section Heading */}
        <div className={`heading ${isAnimated ? "animate__animated animate__pulse" : ""}`}>
          <h3 className="subtitle">Lead Generation & Analytics</h3>
          <h1>Turn Insights Into Action</h1>
        </div>

        {/* Content Section */}
        <div className="insights-content">
          {/* Left Text and Image */}
          <div className="insights-text-content row" style={{ overflow: "hidden" }}>
            <img
              className={`col-12 col-sm-2 ${isAnimated ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}`}
              src={InsightsLeft}
              alt="Insights Left"
            />
            <p
              className={`highlight col-12 col-sm-9 ${isAnimated ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""}`}
            >
              Attract potential customers with ease by using intuitive forms, engaging landing pages,
              and tailored outreach strategies designed to connect with your audience effectively.
            </p>
          </div>

          {/* Right Text and Image */}
          <div className="insights-text-content row" style={{ overflow: "hidden" }}>
            <p
              className={`highlight col-12 col-sm-9 ${isAnimated ? "animate__animated animate__fadeInRight animate__delay-1s" : ""}`}
            >
              Understand customer behavior deeply, evaluate the effectiveness of your campaigns, and
              monitor your business’s overall performance. Gain valuable insights to make informed
              decisions and drive growth.
            </p>
            <img
              className={`col-12 col-sm-2 ${isAnimated ? "animate__animated animate__fadeInRight animate__delay-1s" : ""}`}
              src={InsightsRight}
              alt="Insights Right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
