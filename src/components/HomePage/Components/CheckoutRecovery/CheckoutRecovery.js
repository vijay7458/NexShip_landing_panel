import React, { useEffect, useRef, useState } from 'react';
import AbondantCheckoutFlow from '../../../../assets/image/AbondantCheckoutFlow.png'
import "animate.css";
import './CheckoutRecovery.css';

const CheckoutRecovery = () => {

  const [isAnimated, setIsAnimated] = useState(false); // Track if animation has been applied
  const sectionRef = useRef(null);
  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setIsAnimated(true); // Trigger animation only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isAnimated]);
  return (
    <>
      <div className="home-section" ref={sectionRef}>
        <div className='overview-container'>
          <div className={`heading ${isAnimated ? "animate__animated animate__zoomInDown" : ""}`}>
            <h3 className="subtitle">Abandoned Checkout Recovery</h3>
            <h1>Bring Customers Back to Complete Their Journey</h1>
          </div>
          <div className={`checkout-flow ${isAnimated ? "animate__animated animate__fadeInLeft" : ""}`}>
            <img src={AbondantCheckoutFlow} alt="Abondant Checkout Flow" />
          </div>
          {/* <div className="recovery-diagram">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CheckoutRecovery;
