import React, { useState } from 'react';
import './RateCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const RateCalculator = () => {
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [weight, setWeight] = useState('');
  const [shippingRate, setShippingRate] = useState(null);

  const calculateShippingRate = () => {
    if (pickupPincode && deliveryPincode && weight) {
      const rate = parseFloat(weight) * 10; // Example: Rate = Weight x 10
      setShippingRate(rate.toFixed(2));
    } else {
      alert('Please fill in all fields.');
    }
  };

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
        <h1>Instantly calculate accurate shipping rates for your eCommerce needs</h1>
        <p className="page-header-description">Effortlessly organize shipments and estimate courier costs with Shipease's price calculator</p>
        <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
      </header>

      <div className="shipping-rate-calculator">
        <header className="shipping-rate-calculator__header">
          <h1 className='heading text-center'>Shipping Rate Calculator</h1>
        </header>

        <main className="shipping-rate-calculator__main">
          <div className="shipping-rate-calculator__row">
            {/* Left Side: How to Calculate */}
            <section className="shipping-rate-calculator__how-to">
              <h2>How to Calculate Shipping Rates</h2>
              <ol>
                <li>Enter the pickup pincode of the shipment.</li>
                <li>Enter the delivery pincode where the shipment will be sent.</li>
                <li>Specify the weight of the shipment in kilograms.</li>
                <li>Click the "Calculate Rate" button to get the estimated shipping rate.</li>
              </ol>
            </section>

            {/* Right Side: Rate Calculator */}
            <section className="shipping-rate-calculator__calculator">
              <h2>Rate Calculator</h2>
              <div className="shipping-rate-calculator__input-group">
                <label htmlFor="pickupPincode">Pickup Pincode</label>
                <input
                  type="text"
                  id="pickupPincode"
                  value={pickupPincode}
                  onChange={(e) => setPickupPincode(e.target.value)}
                />
              </div>

              <div className="shipping-rate-calculator__input-group">
                <label htmlFor="deliveryPincode">Delivery Pincode</label>
                <input
                  type="text"
                  id="deliveryPincode"
                  value={deliveryPincode}
                  onChange={(e) => setDeliveryPincode(e.target.value)}
                />
              </div>

              <div className="shipping-rate-calculator__input-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  type="text"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <button
                className="shipping-rate-calculator__button"
                onClick={calculateShippingRate}
              >
                Calculate Rate
              </button>

              {shippingRate && (
                <div className="shipping-rate-calculator__result">
                  <h2>Estimated Shipping Rate</h2>
                  <p>₹{shippingRate}</p>
                </div>
              )}
            </section>
          </div>

          <section className="shipping-rate-calculator__factors">
            <h2>Weigh All The Factors Involved</h2>
            <ul>
              <li>The distance between the pickup and delivery locations.</li>
              <li>The weight of the shipment, as heavier items cost more to ship.</li>
              <li>Additional charges for remote or difficult-to-access locations.</li>
              <li>Any special handling requirements for fragile or oversized items.</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default RateCalculator;
