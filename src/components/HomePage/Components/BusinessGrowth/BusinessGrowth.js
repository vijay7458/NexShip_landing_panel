import React from 'react';
import './BusinessGrowth.css';
import DashboardImage from '../../../../assets/image/dashboardImage.png'
import IncreaseBusiness from '../../../../assets/image/IncreaseBusiness.png'
import EnhanceMarketing from '../../../../assets/image/EnhanceMarketing.png'
import ExpandReach from '../../../../assets/image/ExpandReach.png'

const BusinessGrowth = () => {
  return (
    <>

      <div className="home-section">
        <div className='overview-container'>
          <div className='heading'>
            {/* <h3 className="subtitle"></h3> */}
            <h1>Empower Your Business Growth</h1>
          </div>
          <div className="dashboard-image-container">
            <img
              src={DashboardImage}
              alt="Dashboard"
              className="dashboard-image"
            />
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <img
                src={IncreaseBusiness}
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
                src={EnhanceMarketing}
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
                src={ExpandReach}
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
      </div>

    </>
  );
};

export default BusinessGrowth;
