import React from "react";
import "./Insights.css"; // Create a CSS file for styling

const Insights = () => {
  return (
    <div className="insights-container">
      <div className="header">
        <h5>Lead Generation & Analytics</h5>
        <h1>Turn Insights Into Action</h1>
      </div>
      <div className="content">
        <div className="text-content">
          <p>
            Capture potential customers effortlessly with intuitive forms,
            landing pages, and personalized outreach strategies.
          </p>
          <p>
            Gain deep insights into customer behavior, campaign performance, and
            overall business health.
          </p>
        </div>
        <div className="visuals">
          {/* Use SVG, icons, or placeholders for graphs and charts */}
          <div className="chart"></div>
          <div className="data-cards"></div>
        </div>
      </div>
      <div className="footer">
        <p>
          Empower your business with tools that not only attract new leads but
          also provide actionable data to refine strategies and drive growth.
          Monitor your progress and make data-driven decisions for success.
        </p>
      </div>
    </div>
  );
};

export default Insights;
