import React from 'react';
import './WhatsAppIntegration.css';

const WhatsAppIntegration = () => {
  return (
    <div className="whatsapp-integration-container">
      {/* Header Section */}
      <div className="whatsapp-integration-container__header">
        <h1>Unlock the Power of WhatsApp for Your Logistics</h1>
        <p>Boost customer interaction and streamline logistics operations with WhatsApp integration.</p>
      </div>

      {/* Core Applications Section */}
      <div className="whatsapp-integration-container__core-applications">
        <h2>Core Applications</h2>
        <div className="core-applications-grid">
          <div className="core-application-card">
            <img src="path_to_image" alt="Order Creation" />
            <h3>Order Creation</h3>
            <p>Efficiently handle and process orders from a single platform to reduce processing time.</p>
          </div>
          <div className="core-application-card">
            <img src="path_to_image" alt="Seller Onboarding" />
            <h3>Seller Onboarding</h3>
            <p>Onboard sellers effortlessly and manage their e-commerce platform integration.</p>
          </div>
          <div className="core-application-card">
            <img src="path_to_image" alt="Order Tracking" />
            <h3>Order Tracking</h3>
            <p>Keep customers updated with real-time status updates on their orders.</p>
          </div>
          <div className="core-application-card">
            <img src="path_to_image" alt="Order Ship" />
            <h3>Order Ship</h3>
            <p>Confirm shipping details with carriers and ensure smooth delivery processes.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="whatsapp-integration-container__features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Seamless Order Creation</h3>
            <p>Reduce time and effort by managing all orders on one platform.</p>
          </div>
          <div className="feature-card">
            <h3>Efficient Seller Onboarding</h3>
            <p>Onboard new sellers quickly and efficiently with automated processes.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Order Updates</h3>
            <p>Keep customers informed with real-time order status and tracking.</p>
          </div>
          <div className="feature-card">
            <h3>Streamlined Shipping Process</h3>
            <p>Manage and confirm shipments with ease, ensuring timely deliveries.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="whatsapp-integration-container__cta">
        <h2>Get Started with WhatsApp Integration Today</h2>
        <p>Unlock the potential of WhatsApp in your logistics operations. Start integrating now.</p>
        <button className="cta-button">Start Now</button>
      </div>
    </div>
  );
}

export default WhatsAppIntegration;
