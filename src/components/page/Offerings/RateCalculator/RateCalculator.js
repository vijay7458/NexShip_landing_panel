import React, { useState } from 'react';
import './RateCalculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import CourierRatesModal from './CourierRatesModal';
import RateCalculatorImg from '../../../../assets/image/RateCalculatorImg.png'

import axios from 'axios';
import HowToCalculateWeight from './HowToCalculateWeight';
import WeightFactors from './WeightFactors';

const RateCalculator = () => {
  const [pickupPincode, setPickupPincode] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setheight] = useState("");
  const [length, setlength] = useState("");
  const [width, setwidth] = useState("")
  const [paymentType, setpaymentType] = useState("cod")
  const [invoice, setinvoice] = useState("")
  const [orderType, setorderType] = useState("forward")
  const [shippingRate, setShippingRate] = useState(false);
  const [error, setError] = useState();
  const [shippingData, setShippingData] = useState(null);
  const [errorFields, seterrorFields] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const calculateShippingRate = async () => {
    if (
      pickupPincode.length !== 6 ||
      deliveryPincode.length !== 6 ||
      !parseFloat(weight)
    ) {
      setError("Please enter valid pickup/delivery pin codes and weight.");
      seterrorFields(true);
      return;
    }
    else {
      setError('');
      seterrorFields(false)
    }

    setIsLoading(true);

    setError('');
    setShippingData(null); // Reset previous data while fetching

    const url = "https://app.shipease.in/core-api/shipping/calculate-rate/";
    const payload = {
      source_pincode: pickupPincode,
      destination_pincode: deliveryPincode,
      weight: parseFloat(weight) || 0, // Ensure valid number
      height: parseFloat(height) || 0,
      length: parseFloat(length) || 0,
      width: parseFloat(width) || 0,
      payment_type: paymentType,
      invoice_amount: parseFloat(invoice) || 0,
      order_type: orderType,
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
    finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    setDeliveryPincode("");
    setPickupPincode("");
    setWeight("");
    setlength("");
    setwidth("");
    setheight("");
    setpaymentType("");
    setinvoice("");
    setorderType("");
    setShippingRate(false);
    setShippingData(null);
    setError("");
    seterrorFields(false);
  }
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
            <div className="shipping-rate-calculator__row row">
              <section className="col-12 col-lg-8">
                <section className="shipping-rate-calculator__calculator">
                  {/* <h2 className='heading text-center'>Rate Calculator</h2> */}
                  <div className={`shipping-rate-calculator__input-group ${errorFields && 'error-field'}`}>
                    <label htmlFor="pickupPincode">Pick-up Area Pincode</label>
                    <input
                      type="text"
                      id="pickupPincode"
                      value={pickupPincode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/, ''); // only digits
                        setPickupPincode(value);
                      }}
                      placeholder='Enter 6 digit Pickup Area Pincode'
                      maxLength={6}
                    />
                  </div>

                  <div className={`shipping-rate-calculator__input-group ${errorFields && 'error-field'}`}>
                    <label htmlFor="deliveryPincode">Delivery Area Pincode</label>
                    <input
                      type="text"
                      id="deliveryPincode"
                      placeholder='Enter 6 digit Delivery Area Pincode'
                      value={deliveryPincode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/, ''); // only digits
                        setDeliveryPincode(value);
                      }}
                      maxLength={6}
                    />
                  </div>

                  <div className={`shipping-rate-calculator__input-group weight-input ${errorFields && 'error-field'}`}>
                    <label htmlFor="weight">Weight</label>
                    <input
                      type="text"
                      id="weight"
                      value={weight}
                      placeholder='Enter weight in KG'
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="shipping-rate-calculator__input-group">
                    <label htmlFor="">Dimension (LxBxH)</label>
                    <div className='dimension'>
                      <label htmlFor="length">
                        <input
                          type="text"
                          id="length"
                          value={length}
                          placeholder='L'
                          onChange={(e) => setlength(e.target.value)}
                        />
                      </label>

                      <label htmlFor="width">
                        <input
                          type="text"
                          id="width"
                          value={width}
                          onChange={(e) => setwidth(e.target.value)}
                          placeholder='B'
                        />
                      </label>

                      <label htmlFor="height">
                        <input
                          type="text"
                          id="height"
                          value={height}
                          onChange={(e) => setheight(e.target.value)}
                          placeholder='H'
                        />
                      </label>
                    </div>
                  </div>



                  <div className="shipping-rate-calculator__input-group">
                    <label className='mb-0'>Payment Type</label>
                    <div className="radio-options">
                      <label>
                        <input
                          type="radio"
                          name="paymentType"
                          value="cod"
                          checked={paymentType === 'cod'}
                          onChange={(e) => setpaymentType(e.target.value)}
                        />
                        COD
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="paymentType"
                          value="prepaid"
                          checked={paymentType === 'prepaid'}
                          onChange={(e) => setpaymentType(e.target.value)}
                        />
                        Prepaid
                      </label>
                    </div>
                  </div>

                  <div className="shipping-rate-calculator__input-group">
                    <label className='mb-0'>Order Type</label>
                    <div className="radio-options">
                      <label>
                        <input
                          type="radio"
                          name="orderType"
                          value="forward"
                          checked={orderType === 'forward'}
                          onChange={(e) => setorderType(e.target.value)}
                        />
                        Forward
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="orderType"
                          value="reverse"
                          checked={orderType === 'reverse'}
                          onChange={(e) => setorderType(e.target.value)}
                        />
                        Reverse
                      </label>
                    </div>
                  </div>

                  <div className="shipping-rate-calculator__input-group grid-item3">
                    <label htmlFor="invoice">Invoice Amount (₹)</label>
                    <input
                      type="text"
                      id="invoice"
                      value={invoice}
                      onChange={(e) => setinvoice(e.target.value)}
                      placeholder='Enter invoice amount'
                    />
                  </div>
                </section>

                <div className='position-relative text-end mt-5'>
                  <span className={`required-text ${!error && 'invisible'}`}>{error || "error!"}</span>
                  <button
                    className="btn"
                    onClick={() => handleReset()}
                  >
                    Reset
                  </button>
                  <button
                    className="btn main-button"
                    onClick={calculateShippingRate}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Calculating...' : 'Calculate Rate'}
                  </button>
                </div>
              </section>

              <div className='col-12 col-lg-4 text-center'>
                <img src={RateCalculatorImg} alt="" />
              </div>
            </div>
          </div>

          <HowToCalculateWeight />
          <WeightFactors />

        </main>
      </div>
      {shippingRate && shippingData && (

        <CourierRatesModal shippingData={shippingData} show={shippingRate} handleClose={handleReset} />
      )}
    </>
  );
};

export default RateCalculator;
