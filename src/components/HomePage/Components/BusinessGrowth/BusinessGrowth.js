import React from 'react';
import './BusinessGrowth.css';
import DashboardImage from '../../../../assets/image/dashboardImage1.png'
// import IncreaseBusiness from '../../../../assets/image/IncreaseBusiness.png'
// import EnhanceMarketing from '../../../../assets/image/EnhanceMarketing.png'
import ExpandReach from './ExpandReach';
import EnhanceMarketing from './EnhanceMarketing';
import IncreaseBusiness from './IncreaseBusiness';
// import ExpandReach from '../../../../assets/image/ExpandYourReach.png'

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

        </div>
      </div>
      <div className="bg-fetaure-section">
        <div className='overview-container'>
          <h3 className='text-white'>Unlock New Opportunities with Smart Strategies</h3>
          <p className='text-white'>Boost revenue with actionable insights, enhance your marketing with targeted strategies, and scale your business effortlessly across multiple platforms.</p>
          <div className="features-grid">
            <div className="feature-item">
              <div className='business-icon'>
                <IncreaseBusiness />
              </div>
              <h3 className="bg-feature-title">Increase Your Business</h3>
              <p className="feature-description">
                Boost your revenue with smarter tools and actionable insights tailored to your goals.
              </p>
            </div>
            <div className="feature-item">
              <div className='business-icon'>
                <EnhanceMarketing />
              </div>
              <h3 className="bg-feature-title">Enhance Your Marketing</h3>
              <p className="feature-description">
                Promote your brand effectively with targeted strategies and creative campaigns.
              </p>
            </div>
            <div className="feature-item">
              <div className='business-icon'>
                <ExpandReach />
              </div>
              <h3 className="bg-feature-title">Expand Your Reach</h3>
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
