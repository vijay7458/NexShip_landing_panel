import React, { useState } from 'react';
import './RateCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import CourierRatesModal from './CourierRatesModal';
import RateCalculatorImg from '../../../../assets/image/RateCalculatorImg.png'
import DifferentLocationsIcon from './Icons/DifferentLocationsIcon';
import PackageWeightIcon from './Icons/PackageWeightIcon';
import RemoteLocationIcon from './Icons/RemoteLocationIcon';
import FragileItemIcon from './Icons/FragileItemIcon';
import axios from 'axios';

const RateCalculator = () => {
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [weight, setWeight] = useState('');
  const [shippingRate, setShippingRate] = useState(false);
  const [error, setError] = useState("");
  const [shippingData, setShippingData] = useState(null);

  const calculateShippingRate = async () => {
    if (!pickupPincode || !deliveryPincode || !weight) {
      setError('Please fill in all the details.');
      return;
    }

    setError('');
    setShippingData(null); // Reset previous data while fetching

    const url = "https://app.shipease.in/core-api/shipping/calculate-rate/";
    const payload = {
      source_pincode: pickupPincode,
      destination_pincode: deliveryPincode,
      weight: parseFloat(weight) || 0, // Ensure valid number
    };

    try {
      const response = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      setShippingData(response.data); // Store API response
      setShippingRate(true); // Open popup
    } catch (error) {
      console.error("Error fetching shipping rate:", error);
      setError("Failed to fetch shipping rate. Please try again.");
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
          <div className='amazon-self-ship-container'>
            <div className="shipping-rate-calculator__row">
              <section className="shipping-rate-calculator__calculator">
                {/* <h2 className='heading text-center'>Rate Calculator</h2> */}
                <div className="shipping-rate-calculator__input-group">
                  <label htmlFor="pickupPincode">Pick-up Area Pincode</label>
                  <input
                    type="text"
                    id="pickupPincode"
                    value={pickupPincode}
                    onChange={(e) => setPickupPincode(e.target.value)}
                  />
                </div>

                <div className="shipping-rate-calculator__input-group">
                  <label htmlFor="deliveryPincode">Delivery Area Pincode</label>
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
                <div className='text-end'>
                  {
                    error &&
                    <span className='required-text me-3'>{error}</span>
                  }
                  <button
                    className="btn main-button"
                    onClick={calculateShippingRate}
                  >
                    Calculate Rate
                  </button>
                </div>

                {/* {shippingRate && (
                  <div className="shipping-rate-calculator__result">
                    <h2>Estimated Shipping Rate</h2>
                    <p>₹{shippingRate}</p>
                  </div>
                )} */}
              </section>
              <div className='text-center'>
                <img src={RateCalculatorImg} alt="" />
              </div>
            </div>
          </div>

          <section className="shipping-rate-calculator__factors">
            <div className='amazon-self-ship-container row'>
              <div className='col-12'>
                <h2 className='heading text-center'>Weigh All The Factors Involved</h2>
                <p className='text-center'>Avoid overspending on eCommerce shipping! Our free calculator lets you determine courier charges based on all the key factors that matter.</p>
                <ul className=''>
                  <li><DifferentLocationsIcon />The distance between the pickup and delivery locations.</li>
                  <li><PackageWeightIcon />The weight of the shipment, as heavier items cost more to ship.</li>
                  <li><RemoteLocationIcon />Additional charges for remote or difficult-to-access locations.</li>
                  <li><FragileItemIcon />Any special handling requirements for fragile or oversized items.</li>
                </ul>
              </div>
              {/* <div className='col-6'></div> */}
            </div>
          </section>

          <section className="shipping-rate-calculator__how-to">
            <div className='amazon-self-ship-container'>
              <h2 className='heading text-center'>How to Calculate Shipping Rates</h2>
              <div className="hyperlocal__steps">
                <div className="hyperlocal__step">
                  <div>
                    <span className='hyperlocal-step-number'>01.</span>
                  </div>
                  <div>
                    <h3 className="hyperlocal__step-title">Enter the pickup pincode of the shipment.</h3>
                  </div>
                </div>
                <hr />
                <div className="hyperlocal__step">
                  <div>
                    <span className='hyperlocal-step-number'>02.</span>
                  </div>
                  <div>
                    <h3 className="hyperlocal__step-title">Enter the delivery pincode where the shipment will be sent.</h3>
                  </div>
                </div>
                <hr />
                <div className="hyperlocal__step">
                  <div>
                    <span className='hyperlocal-step-number'>03.</span>
                  </div>
                  <div>
                    <h3 className="hyperlocal__step-title">Specify the weight of the shipment in kilograms.</h3>
                  </div>
                </div>
                <hr />
                <div className="hyperlocal__step">
                  <div>
                    <span className='hyperlocal-step-number'>04.</span>
                  </div>
                  <div>
                    <h3 className="hyperlocal__step-title">Click the "Calculate Rate" button to get the estimated shipping rate.</h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <CourierRatesModal shippingData={shippingData} show={shippingRate} handleClose={() => setShippingRate(false)} />

    </>
  );
};

export default RateCalculator;
