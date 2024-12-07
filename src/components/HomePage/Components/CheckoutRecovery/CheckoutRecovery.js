import React from 'react';
import './CheckoutRecovery.css';

const CheckoutRecovery = () => {
  return (
    <div className="checkout-recovery-container">
      <h4 className="subheading">Abandoned Checkout Recovery</h4>
      <h1 className="main-heading">Bring Customers Back to Complete Their Journey</h1>
      <div className="recovery-diagram">
        <div className="recovery-item">
          <img
            src="https://via.placeholder.com/60" // Replace with WhatsApp icon
            alt="WhatsApp"
            className="recovery-icon"
          />
          <p className="recovery-description">
            Boost your revenue with smarter tools and actionable insights tailored to your goals.
          </p>
        </div>
        <div className="recovery-item">
          <img
            src="https://via.placeholder.com/60" // Replace with Message icon
            alt="Notification"
            className="recovery-icon"
          />
          <p className="recovery-description">
            Notify customers with quick updates and simple steps to complete their order.
          </p>
        </div>
        <div className="recovery-item">
          <img
            src="https://via.placeholder.com/60" // Replace with Email icon
            alt="Email"
            className="recovery-icon"
          />
          <p className="recovery-description">
            Share detailed order summaries and exclusive offers to encourage checkout completion.
          </p>
        </div>
        <div className="connector">
          <span className="connector-line top-left"></span>
          <span className="connector-line top-right"></span>
          <span className="connector-line bottom"></span>
        </div>
        <div className="central-icon">
          <img
            src="https://via.placeholder.com/40" // Replace with central triangle icon
            alt="Central Icon"
            className="central-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutRecovery;
