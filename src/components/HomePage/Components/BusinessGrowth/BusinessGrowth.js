import React from 'react';
import './BusinessGrowth.css';

const BusinessGrowth = () => {
  return (
    <div className="business-growth-container">
      <h1 className="heading">Empower Your Business Growth</h1>
      <div className="dashboard-image-container">
        <img
          src="https://via.placeholder.com/900x400" // Replace with your dashboard image URL
          alt="Dashboard"
          className="dashboard-image"
        />
      </div>
      <div className="features-grid">
        <div className="feature-item">
          <img
            src="https://via.placeholder.com/80" // Replace with the actual icon
            alt="Increase Your Business"
            className="feature-icon"
          />
          <h3 className="feature-title">Increase Your Business</h3>
          <p className="feature-description">
            Boost your revenue with smarter tools and actionable insights tailored to your goals.
          </p>
        </div>
        <div className="feature-item">
          <img
            src="https://via.placeholder.com/80" // Replace with the actual icon
            alt="Enhance Your Marketing"
            className="feature-icon"
          />
          <h3 className="feature-title">Enhance Your Marketing</h3>
          <p className="feature-description">
            Promote your brand effectively with targeted strategies and creative campaigns.
          </p>
        </div>
        <div className="feature-item">
          <img
            src="https://via.placeholder.com/80" // Replace with the actual icon
            alt="Expand Your Reach"
            className="feature-icon"
          />
          <h3 className="feature-title">Expand Your Reach</h3>
          <p className="feature-description">
            Scale your business across multiple platforms and unlock new opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowth;
