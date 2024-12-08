import React from "react";
import "./Insights.css"; // Create a CSS file for styling
import InsightsLeft from '../../../../assets/image/InsightsLeft.png'
import InsightsRight from '../../../../assets/image/InsightsRight.png'
import InsightsGraph from '../../../../assets/image/InsightsGraph.png'

const Insights = () => {
  return (
    <>
      <div className="home-section">
        <div className='overview-container'>
          <div className='heading'>
            <h3 className="subtitle">Lead Generation & Analytics</h3>
            <h1>Turn Insights Into Action</h1>
          </div>
          <div className="insights-content">
            <div className="insights-text-content row">
              <img className="col-2" src={InsightsLeft} alt="Insights Left" />
              <p className="highlight col-9">
                Attract potential customers with ease by using intuitive forms, engaging landing pages, and tailored outreach strategies designed to connect with your audience effectively.
              </p>
            </div>
            <div className="insights-text-content row">
              <p className="highlight col-9">
                Understand customer behavior deeply, evaluate the effectiveness of your campaigns, and monitor your business’s overall performance. Gain valuable insights to make informed decisions and drive growth.
              </p>
              <img className="col-2" src={InsightsRight} alt="Insights Right" />
            </div>
            <div className="insights-visuals">
              <img src={InsightsGraph} alt="" />
            </div>
          </div>
          <div className="insights-footer">
            <p className="highlight">
              Empower your business with tools that not only attract new leads but
              also provide actionable data to refine strategies and drive growth.
              Monitor your progress and make data-driven decisions for success.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Insights;
