import React from 'react';
import './WhatsAppIntegration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import OrderCreationIcon from './Icon/OrderCreationIcon';
import SellerOnboardingIcon from './Icon/SellerOnboardingIcon';
import OrderTrackingIcon from './Icon/OrderTrackingIcon';
import OrderShipIcon from './Icon/OrderShipIcon';

const WhatsAppIntegration = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };
  return (
    <div className="whatsapp-integration-container">
      {/* Header Section */}
      {/* <div className="whatsapp-integration-container__header">
        <h1>Unlock the Power of WhatsApp for Your Logistics</h1>
        <p>Boost customer interaction and streamline logistics operations with WhatsApp integration.</p>
      </div> */}
      <header className="page-header">
        <div className="ripple-shape">
          <span className="ripple-1" />
          <span className="ripple-2" />
          <span className="ripple-3" />
          <span className="ripple-4" />
          <span className="ripple-5" />
        </div>
        <h1>Unlock the Power of WhatsApp for Your Logistics</h1>
        <p className="page-header-description">Boost customer interaction and streamline logistics operations with WhatsApp integration</p>
        <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
      </header>

      {/* Core Applications Section */}
      <div className="whatsapp-integration-container__core-applications">
        <div className="amazon-self-ship-container">
          <h2>Core Applications</h2>
          <div className="core-applications-grid">
            <div className="core-application-card">
              <div className='my-3'>
                <OrderCreationIcon />
              </div>
              <h3>Order Creation</h3>
              <p>Efficiently handle and process orders from a single platform to reduce processing time.</p>
            </div>
            <div className="core-application-card">
              <div className="my-3">
                <SellerOnboardingIcon />
              </div>
              <h3>Seller Onboarding</h3>
              <p>Onboard sellers effortlessly and manage their e-commerce platform integration.</p>
            </div>
            <div className="core-application-card">
              <div className="my-3">
                <OrderTrackingIcon />
              </div>
              <h3>Order Tracking</h3>
              <p>Keep customers updated with real-time status updates on their orders.</p>
            </div>
            <div className="core-application-card">
              <div className="my-3">
                <OrderShipIcon />
              </div>
              <h3>Order Ship</h3>
              <p>Confirm shipping details with carriers and ensure smooth delivery processes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="whatsapp-integration-container__features">
        <div className="amazon-self-ship-container">
          <h2>Key Features</h2>
          <div className="whatsapp-features-grid">
            <div className="whatsapp-feature-card">
              <h3>Seamless Order Creation</h3>
              <p>Reduce time and effort by managing all orders on one platform.</p>
            </div>
            <div className="whatsapp-feature-card">
              <h3>Efficient Seller Onboarding</h3>
              <p>Onboard new sellers quickly and efficiently with automated processes.</p>
            </div>
            <div className="whatsapp-feature-card">
              <h3>Real-Time Order Updates</h3>
              <p>Keep customers informed with real-time order status and tracking.</p>
            </div>
            <div className="whatsapp-feature-card">
              <h3>Streamlined Shipping Process</h3>
              <p>Manage and confirm shipments with ease, ensuring timely deliveries.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="whatsapp-integration-container__cta">
        <div className="amazon-self-ship-container">
          <h2>Get Started with WhatsApp Integration Today</h2>
          <p>Unlock the potential of WhatsApp in your logistics operations. Start integrating now.</p>
          <button className="btn main-button">Start Now</button>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppIntegration;
