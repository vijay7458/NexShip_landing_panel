import React, { useEffect, useState } from 'react'
import './TrackingOrder.css'
import DeliveryActivity from './DeliveryActivity';
import TrackingBG from '../../../assets/image/TrackingBG.png'
import OrderDetailsCard from './OrderDetailsCard';
import CourierInfo from './CourierInfo';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router';
import TrackingComp from './TrackingUi/TrackingComp';

const TrackingOrder = () => {

    let navigate = useNavigate();
    const { awbNumber } = useParams(); // Get AWB from URL

    const [activeTab, setActiveTab] = useState("awb");
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [awb, setAwb] = useState(awbNumber || "");
    const [orderId, setOrderId] = useState("");
    const [phone, setPhone] = useState("");
    const [remarks, setRemarks] = useState("")
    const [error, setError] = useState("")

    const [TrackingData, setTrackingData] = useState("")
    const [showOrderTracking, setshowOrderTracking] = useState(false)
    const [showTrackData, setShowTrackData] = useState(true)

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = () => {
        if (remarks !== "") {
            Swal.fire({
                title: `Your remarks has been submitted seccessfully`,
                icon: "success",
                html: `<br><br> <b>Thank you for your feedback</b>`,
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: `👍🏻 Great!`,
                confirmButtonAriaLabel: "Thumbs up, great!",
                cancelButtonText: `
              👎🏻
            `,
                cancelButtonAriaLabel: "Thumbs down",
                customClass: {
                    confirmButton: 'btn main-button',
                    cancelButton: 'btn cancel-button'
                }
            });
            setError("")
            setRemarks("")
        }
        else {
            setError("Please enter your remarks")
        }
    }

    useEffect(() => {
        if (awbNumber) {
            handleTracking(awbNumber)
        }
    }, [awbNumber])


    const handleTracking = async (awbNumber) => {
        try {
            const response = await fetch(`https://app.shipease.in/core-api/shipping/track-order/${awbNumber}/`);
            const data = await response.json(); // Store response in `data` always

            console.log(data, "Tracking Response");

            if (!response.ok) {
                // console.error(`Error: ${response.status} - ${data?.message || "Unknown error"}`);
                setTrackingData(data.detail || "Unknown Error");
                // navigate(`/${awb}`)
                setShowTrackData(false)
            } else {
                setTrackingData(data);
                setShowTrackData(true)
                setshowOrderTracking(true);
            }

            return data; // Return the response for further use
        } catch (error) {
            setShowTrackData(false)
            // console.error("Error fetching tracking data:", error);
            setTrackingData("Failed to fetch tracking data. Please try again.");
        }
    };




    const handleSubmitAwb = (e) => {
        e.preventDefault();
        if (awb.trim()) {
            navigate(`/order-tracking/${awb}`); // Update URL
            handleTracking(awb); // Fetch new data
        }
        setTimeout(() => {
            const scrollAmount = document.body.scrollHeight * 0.33;
            window.scrollTo({
                top: scrollAmount,
                behavior: "smooth",
            });
        }, 600);


    };


    console.log(12222, showTrackData)


    // console.log(trac)


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
                            <button
                                className={`tab-button ${activeTab === "mobile" ? "active" : ""}`}
                                onClick={() => handleTabChange("mobile")}
                            >
                                Mobile Number
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
                            <form className="tracking-form-content" onSubmit={handleSubmitAwb}>
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
            {
                showTrackData && showOrderTracking ?
                    <>
                        <div className='row justify-content-center mt-5 w-100'>
                            <div className='col-12 col-md-7 col-lg-5'>
                                <OrderDetailsCard TrackingData={TrackingData} />
                            </div>
                            <div className='col-12 col-md-7 col-lg-5'>
                                <div className='d-flex flex-column'>
                                    <CourierInfo TrackingData={TrackingData} />
                                    <hr style={{ width: '93%', marginLeft: '25px', marginBlock: '0px' }} />
                                    <DeliveryActivity TrackingData={TrackingData?.order_tracking} />
                                </div>
                            </div>
                        </div>
                        <div className='tracking-feedback row'>
                            <div className='col-10'>
                                <label htmlFor="">Remarks
                                    {error &&
                                        <span style={{ color: 'red', fontSize: '12px', marginLeft: '15px' }}>{error}*</span>
                                    }
                                </label>
                                <textarea onChange={(e) => setRemarks(e.target.value)} value={remarks} placeholder='Please enter your remarks here' rows={5} />
                                <button onClick={handleSubmit} className='btn main-button float-end'>Submit</button>
                            </div>
                        </div>
                    </>
                    :
                    <div>
                        <p className='track-awb-no'>{TrackingData}</p>
                    </div>
            }

            {/* Ui Components */}
            <TrackingComp />
        </>
    );
};

export default TrackingOrder;