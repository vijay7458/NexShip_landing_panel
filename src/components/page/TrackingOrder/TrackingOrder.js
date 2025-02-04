import React, { useState } from 'react'
import './TrackingOrder.css'
import DeliveryActivity from './DeliveryActivity';
import TrackingBG from '../../../assets/image/TrackingBG.png'
import OrderDetailsCard from './OrderDetailsCard';
import CourierInfo from './CourierInfo';

const TrackingOrder = () => {
    const [activeTab, setActiveTab] = useState("mobile");
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [awb, setAwb] = useState("");
    const [orderId, setOrderId] = useState("");
    const [phone, setPhone] = useState("");
    const [remarks, setRemarks] = useState("")

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = () => {
        alert("Remarks:" + remarks)
    }

    return (
        <>
            <section className="tracking-order">
                <div className="tracking-container">
                    <div className="tracking-content">
                        <h1 className="tracking-heading">
                            Effortlessly Track Your Orders Anytime
                        </h1>
                        <p className="tracking-description">
                            Simply enter your Mobile Number, AWB tracking number, or Order ID, and quickly access your order status.
                        </p>
                        <img
                            src={TrackingBG}
                            alt="Track"
                            className="tracking-image"
                        />
                    </div>
                    <div className="tracking-form">
                        <div className="tracking-tabs">
                            <button
                                className={`tab-button ${activeTab === "mobile" ? "active" : ""}`}
                                onClick={() => handleTabChange("mobile")}
                            >
                                Mobile Number
                            </button>
                            <button
                                className={`tab-button ${activeTab === "awb" ? "active" : ""}`}
                                onClick={() => handleTabChange("awb")}
                            >
                                AWB
                            </button>
                            <button
                                className={`tab-button ${activeTab === "order" ? "active" : ""}`}
                                onClick={() => handleTabChange("order")}
                            >
                                Order ID
                            </button>
                        </div>

                        {activeTab === "mobile" && (
                            <form className="tracking-form-content">
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    maxLength="10"
                                    minLength="10"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    maxLength="6"
                                    minLength="6"
                                    required
                                    disabled
                                />
                                <button type="submit" className="tracking-button">
                                    Send OTP
                                </button>
                            </form>
                        )}

                        {activeTab === "awb" && (
                            <form className="tracking-form-content">
                                <input
                                    type="text"
                                    placeholder="Enter your AWB number"
                                    value={awb}
                                    onChange={(e) => setAwb(e.target.value)}
                                    required
                                />
                                <button type="submit" className="tracking-button">
                                    Track Now
                                </button>
                            </form>
                        )}

                        {activeTab === "order" && (
                            <form className="tracking-form-content">
                                <input
                                    type="text"
                                    placeholder="Enter Order ID"
                                    value={orderId}
                                    onChange={(e) => setOrderId(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number/Email ID"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                                <button type="submit" className="tracking-button">
                                    Track Now
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <div className='row justify-content-center mt-5 w-100'>
                <div className='col-5'>
                    <OrderDetailsCard />
                </div>
                <div className='col-5'>
                    <div className='d-flex flex-column'>
                        <CourierInfo />
                        <hr style={{ width: '93%', marginLeft: '25px', marginBlock: '0px' }} />
                        <DeliveryActivity />
                    </div>
                </div>
            </div>
            <div className='tracking-feedback row'>
                <div className='col-10'>
                    <label htmlFor="">Remarks</label>
                    <textarea onChange={(e) => setRemarks(e.target.value)} placeholder='Please enter your remarks here' rows={5} />
                    <button onClick={handleSubmit} className='btn main-button float-end'>Sumbit</button>
                </div>
            </div>
        </>
    );
};

export default TrackingOrder;