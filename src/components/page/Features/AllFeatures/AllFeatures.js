import React, { useState } from 'react';
import './AllFeatures.css';
import features from "./features.json"

const AllFeatures = () => {
  return (
    <div className="all-features-section">
      <h1 className="heading text-center">All Features</h1>
      <div className="features-list">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="card">
              <div className="card__content">
                <h3 className="card__title">{feature.title}</h3>
                <ul className='benefit-list'>
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="benefit-item">
                      {/* ✅ */} {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-front">
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="card__description">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFeatures;



