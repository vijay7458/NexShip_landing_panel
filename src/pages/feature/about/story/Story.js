import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./story.css";

const Story = () => {
  const storyTimeline = [
    {
      year: "2020",
      title: "The Beginning",
      desc: "We started with a simple idea — to simplify logistics for small sellers struggling with complex delivery systems.",
    },
    {
      year: "2021",
      title: "Building the Platform",
      desc: "Our team built a robust courier integration system that empowered sellers to ship easily with top courier partners.",
    },
    {
      year: "2023",
      title: "Expanding Nationwide",
      desc: "We partnered with major courier companies to enable pan-India coverage, reaching over 25,000+ pin codes.",
    },
    {
      year: "2025",
      title: "AI-Powered Future",
      desc: "We introduced AI-driven RTO prediction and analytics to minimize return losses and optimize delivery success.",
    },
  ];

  return (
    <section className="story-section">
      <div className="container">
        <h2 className="story-title text-center mb-5 story-animate-fade">
          Our Story / How We Started
        </h2>

        <div className="story-timeline">
          {storyTimeline.map((item, index) => (
            <div
              key={index}
              className={`story-item ${
                index % 2 === 0 ? "story-left" : "story-right"
              } story-animate-slide`}
            >
              <div className="story-box">
                <h3 className="story-year">{item.year}</h3>
                <h4 className="story-subtitle">{item.title}</h4>
                <p className="story-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;