import React from 'react';
import './WhatsAppIntegration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import OrderCreationIcon from './Icon/OrderCreationIcon';
import SellerOnboardingIcon from './Icon/SellerOnboardingIcon';
import OrderTrackingIcon from './Icon/OrderTrackingIcon';
import OrderShipIcon from './Icon/OrderShipIcon';
import PowerUpYourBusiness from "../../../../assets/image/PowerUpYourBusiness.png"
import UxCarousel from './UxCarousel';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';
import Carousel from './Carousel';


const WhatsAppIntegration = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };

  const handleOpenLink = (url) => {
    window.open(url, '_blank')
  }

  const slides = [
    {
      id: 1,
      image: "https://source.unsplash.com/960x540/?architecture,building",
      alt: "Building",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/960x540/?interior,room",
      alt: "Room",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/960x540/?minimal,design",
      alt: "Minimal",
    },
  ];

  return (
    <div className="whatsapp-integration-container">
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

      <section className='wip-heading mb-0'>
        <div className="amazon-self-ship-container">
          <div className='wip-heading-des row align-items-center'>
            <div className='col-6'>
              <h2 className='heading text-start'>Power Up Your Business Communication With WhatsApp</h2>
              <p>Customers today expect instant updates and a smooth delivery experience. Our WhatsApp integration ensures they stay informed with real-time updates — from order pickup to final delivery — all within the messaging app they trust and use daily.</p>
              <button onClick={() => handleOpenLink("https://app.shipease.in/sign-up")} className='btn main-button'>Find The Best For You</button>
            </div>
            <div className='col-6 text-end'>
              <img src={PowerUpYourBusiness} alt="WhatsApp Integration" />
            </div>
          </div>
        </div>
      </section>

      {/* <UxCarousel slides={slides} /> */}
      <Carousel />
      {/* <HorizontalScrollCarousel /> */}

      {/* <section section className='wip-notifications' >
        <div className="amazon-self-ship-container">
          <h2 className='heading text-center'>Real-Time Order Notifications</h2>
          <div>
            <p>Keep your buyers in the loop with automated updates at every stage of their order journey:</p>
            <ul>
              <li><strong>Picked Up</strong> – Instantly notify your customer when their order has been collected for shipping.</li>
              <li><strong>In Transit</strong> – Share real-time movement updates as the package travels through delivery checkpoints.</li>
              <li><strong>Out For Delivery</strong> – Let customers know their order is arriving today, reducing failed delivery attempts.</li>
              <li><strong>Delivered</strong> – Confirm successful delivery and offer a moment of delight through personalized thank-you messages.</li>
              <li><strong>Manifest Created</strong> – Alert customers when their shipment is packed and scanned, prepping them for upcoming updates.</li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className='wip-why-matters'>
        <div className="amazon-self-ship-container">
          <h2 className='heading text-center'>Why it matters?</h2>
          <p className='text-center'>
            Sending timely WhatsApp notifications builds trust and transparency with your buyers. It reduces the volume of support queries like “Where is my order?” while enhancing the overall post-purchase experience. Happy, well-informed customers lead to better retention and more repeat purchases.
          </p>
        </div>
      </section>

      <div className="whatsapp-integration-container__core-applications">
        <div className="amazon-self-ship-container">
          <h2 className='heading text-center'>WhatsApp Bots</h2>
          <div className="core-applications-grid">
            <div className="core-application-card">
              <div className='my-3'>
                <OrderCreationIcon />
              </div>
              <h3>Order Creation</h3>
              <p>Quickly create orders and notify customers the moment their order is placed — all from one central system.</p>
            </div>
            <div className="core-application-card">
              <div className="my-3">
                <SellerOnboardingIcon />
              </div>
              <h3>Seller Onboarding</h3>
              <p>Speed up seller onboarding by guiding them through WhatsApp, making the process intuitive and error-free.</p>
            </div>
            <div className="core-application-card">
              <div className="my-3">
                <OrderTrackingIcon />
              </div>
              <h3>Order Tracking</h3>
              <p>Let your customers track their order status live via WhatsApp, eliminating guesswork and improving their confidence.</p>
            </div>
            <div className="core-application-card">
              <div className="my-3">
                <OrderShipIcon />
              </div>
              <h3>Order Ship</h3>
              <p>Send instant confirmations and shipping alerts to both customers and internal teams through automated workflows.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="whatsapp-integration-container__features">
        <div className="amazon-self-ship-container">
          <h2 className='heading text-center'>Key Features</h2>
          <div className="whatsapp-features-grid">
            <div className="whatsapp-feature-card">
              <h3>Seamless Order Creation</h3>
              <p>Integrate order creation with instant messaging, cutting delays and boosting customer satisfaction from the start.</p>
            </div>
            <div className="whatsapp-feature-card">
              <h3>Automated Seller Onboarding</h3>
              <p>Guide new sellers step-by-step through WhatsApp flows, reducing onboarding time and manual follow-ups.</p>
            </div>
            <div className="whatsapp-feature-card">
              <h3>Live Order Status & Tracking</h3>
              <p>Keep customers informed with auto-updated tracking messages on WhatsApp — simple, direct, and reliable.</p>
            </div>
            <div className="whatsapp-feature-card">
              <h3>Smarter Shipping Updates</h3>
              <p>Automate shipment alerts and confirmations to avoid delays and optimize last-mile delivery performance.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="whatsapp-integration-container__cta">
        <div className="amazon-self-ship-container">
          <h2 className='heading text-center'>Get Started with WhatsApp Integration Today</h2>
          <p>
            Start enhancing your delivery experience with smart, automated WhatsApp notifications. No complex setups — just better communication, happier customers, and fewer support calls.
          </p>
          <button className="btn main-button">Start Now</button>
        </div>
      </div>
    </div >
  );
}

export default WhatsAppIntegration;
