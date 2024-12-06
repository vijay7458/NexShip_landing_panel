import React from "react";
import "./OverviewSection.css"; // Import custom CSS file

const OverviewSection = () => {
  return (
    <section className="home-section overview-section">
      <div className="overview-container">
        {/* Heading */}
        <div className="heading">
          <p className="subtitle">A trusted growth partner</p>
          <h1>
            Lakhs of eCommerce businesses chose{" "}
            <span className="highlight">Shipease</span> to streamline their
            customer journey—from shipping to returns and beyond
          </h1>
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div className="stat-item">
            <h2>2.5 Lakh+</h2>
            <p>merchants nationwide</p>
          </div>
          <div className="stat-item">
            <h2>20 Crore</h2>
            <p>transactions every year</p>
          </div>
          <div className="stat-item">
            <h2>₹ 30K Crore</h2>
            <p>annual GMV powered</p>
          </div>
          <div className="stat-item">
            <h2>25 Crore</h2>
            <p>shipments delivered</p>
          </div>
        </div>

        {/* Visual Section */}
        <div className="visuals">
          <div className="image-box">
            <img
              src="path/to/your-woman-image.jpg"
              alt="A woman managing orders"
              className="main-image"
            />
          </div>
          <div className="process-image">
            <img
              src="path/to/your-process-image.jpg"
              alt="Shipping process illustration"
              className="secondary-image"
            />
          </div>
          <div className="truck-image">
            <img
              src="path/to/your-truck-image.jpg"
              alt="Delivery truck"
              className="tertiary-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
