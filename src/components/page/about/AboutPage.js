import React from 'react';
import './AboutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import BullsEyeImg from '../../../assets/image/BullsEyeImg.png'
import choseUsBg from '../../../assets/image/choseUsBg.png'
import MultiCarrierIcon from './Icons/MultiCarrierIcon';
import RealTimeTrackIcon from './Icons/RealTimeTrackIcon';
import AIPoweredRouteIcon from './Icons/AIPoweredRouteIcon';
import IntegratedDashboardIcon from './Icons/IntegratedDashboardIcon';
import SeamlessIntegrationIcon from './Icons/SeamlessIntegrationIcon';

const AboutPage = () => {

  const handleScroll = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header className="page-header">
        <div className="ripple-shape">
          <span className="ripple-1" />
          <span className="ripple-2" />
          <span className="ripple-3" />
          <span className="ripple-4" />
          <span className="ripple-5" />
        </div>
        <h1 className=''>Transforming Logistics with Innovative Solutions</h1>
        <p className="page-header-description">
          Simplifying logistics through technology, efficiency, and reliability.
        </p>
        <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
      </header>
      <div className="about-page-container">

        <section className="ceo-message-section">
          <div className="amazon-self-ship-container">
            <p className='ceo-qoute'>We envision an open, integrated eCommerce ecosystem where retailers, partners, and developers collaborate to enhance the shopping experience.</p>
            <div className='ceo-image-container'>
              <div className='ceo-image'></div>
              <p>Pawan Kumar, CEO</p>
            </div>
          </div>
        </section>


        {/* Who We Are */}
        {/* <section className="about-section">
          <div className="amazon-self-ship-container">
            <h2 className="heading text-center">Who We Are</h2>
            <p>At <strong>Shipease</strong>, we are pioneers in transforming the logistics industry through cutting-edge technology, seamless integrations, and unmatched efficiency. Our platform empowers businesses of all sizes by providing access to a vast network of logistics partners, ensuring cost-effective, reliable, and timely deliveries.</p>
          </div>
        </section> */}

        {/* Our Mission */}
        <section className="about-mission">
          <div className="amazon-self-ship-container">
            <div style={{
              width: 'fit-content',
              marginInline: 'auto'
            }} className='d-flex position-relative justify-content-center mb-4'>
              <h2 className="heading text-center">Our Mission</h2>
              <img src={BullsEyeImg} alt="Bullseye" />
            </div>
            <p>Our mission is to <b>simplify logistics</b> by offering a one-stop solution for all shipping needs. We aim to bridge the gap between businesses and logistics providers, offering optimized solutions that enhance operational efficiency and drive growth.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-section">
          <div className="amazon-self-ship-container">
            <div className='row align-items-center'>
              <ul className='col-6'>
                <li>
                  <h3 className="heading">Extensive Carrier Network</h3>
                  <p>Access a wide range of shipping partners offering domestic and international shipping.</p>
                </li>
                <li>
                  <h3 className="heading">Tech-Driven Solutions</h3>
                  <p>AI-powered shipping optimization, real-time tracking, and smart analytics.</p>
                </li>
                <li>
                  <h3 className="heading">Cost-Effective Shipping</h3>
                  <p>Compare rates from multiple carriers and choose the best option.</p>
                </li>
              </ul>
              <div className='col-6 d-flex flex-column align-items-center'>
                <h2 className="heading text-center">Why Choose Us?</h2>
                <img className='mt-0' style={{ width: '80%', marginRight: '-10%' }} src={choseUsBg} alt="" />
              </div>
            </div>
            <ul className='d-flex align-items-center flex-row' style={{ gap: '20px', marginTop: '-12px' }}>
              <li className='w-100'>
                <h3 className="heading">Reliable & Secure</h3>
                <p>We prioritize safety, ensuring secure and damage-free shipments.</p>
              </li>
              <li className='w-100'>
                <h3 className="heading">24/7 Customer Support</h3>
                <p>Dedicated assistance for all your logistics queries.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Services */}
        <section className="about-services">
          <div className="amazon-self-ship-container">
            <h2 className="heading text-center">Our Services</h2>
            <ul>
              <li>
                <MultiCarrierIcon />
                <h3 className="heading text-center mt-3">Multi-Carrier Shipping</h3>
                <p>Connect with top logistics providers and ship with confidence. Compare rates, transit times, and choose the best carrier for your needs.</p>
              </li>
              <li>
                <RealTimeTrackIcon />
                <h3 className="heading text-center mt-3">Real-Time Tracking & Visibility</h3>
                <p>Stay updated with live tracking, automated notifications, and estimated delivery times.</p>
              </li>
              <li>
                <AIPoweredRouteIcon />
                <h3 className="heading text-center mt-3">AI-Powered Route Optimization</h3>
                <p>Reduce shipping costs and transit time with intelligent route selection.</p>
              </li>
              <li>
                <IntegratedDashboardIcon />
                <h3 className="heading text-center mt-3">Integrated Dashboard</h3>
                <p>Manage orders, track shipments, and access insightful reports—all in one place.</p>
              </li>
              <li>
                <SeamlessIntegrationIcon />
                <h3 className="heading text-center mt-3">Seamless API Integration</h3>
                <p>Integrate our shipping solutions into your eCommerce store, ERP, or order management system for a hassle-free experience.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="about-section">
          <div className="amazon-self-ship-container">
            <h2 className="heading text-center">How It Works</h2>
            <ol>
              <li>
                <h3 className="heading text-center">Sign Up & Integrate</h3>
                <p>Create an account and connect your store or system.</p>
              </li>
              <li>
                <h3 className="heading text-center">Compare & Select</h3>
                <p>Choose from multiple shipping options based on cost and speed.</p>
              </li>
              <li>
                <h3 className="heading text-center">Ship & Track</h3>
                <p>Book shipments and track them in real-time.</p>
              </li>
              <li>
                <h3 className="heading text-center">Analyze & Optimize</h3>
                <p>Use analytics to improve efficiency and cut costs.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* Our Impact */}
        <section className="about-impact">
          <div className="amazon-self-ship-container">
            <h2 className="heading text-center">Our Impact</h2>
            <ul>
              <li>
                10,000+ businesses trust us for their shipping needs.
              </li>
              <li>
                1M+ shipments handled annually, ensuring fast and safe deliveries.
              </li>
              <li>
                98% on-time delivery rate, ensuring reliability.
              </li>
            </ul>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="about-section">
          <div className="amazon-self-ship-container">
            <h2 className="heading text-center">Meet Our Team</h2>
            <p>
              We are a passionate group of logistics experts, tech enthusiasts, and customer service professionals dedicated to redefining the shipping experience.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="amazon-self-ship-container">
            <h2 className="heading text-center">Join Us on Our Journey</h2>
            <p>Partner with <b>Shipease</b> today and experience a new era of logistics aggregation—faster, smarter, and more cost-effective shipping.</p>
            <p>🚀 Get Started Today! Contact us at sales@shipease.in or sign up to streamline your logistics.</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
