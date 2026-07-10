import React, { useEffect, useState } from "react";
import "./TrackingOrder.css";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";
import TopNav from "../../../navbar/TopNav";

const TrackingOrder = () => {
    const navigate = useNavigate();
    const { awbNumber } = useParams();

    const [activeTab, setActiveTab] = useState("awb");
    const [awb, setAwb] = useState(awbNumber || "");
    const [trackingData, setTrackingData] = useState(null);
    const [showData, setShowData] = useState(false);
    const [remarks, setRemarks] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (awbNumber) handleTracking(awbNumber);
    }, [awbNumber]);

    const handleTracking = async (awbNum) => {
        try {
            const res = await fetch(
                `https://nexshyp.com/core-api/shipping/track-order/${awbNum}/`
            );
            const data = await res.json();
            if (!res.ok) {
                setShowData(false);
                setTrackingData(null);
            } else {
                setTrackingData(data);
                setShowData(true);
            }
        } catch {
            setShowData(false);
            setTrackingData(null);
        }
    };

    const handleSubmitAwb = (e) => {
        e.preventDefault();
        if (awb.trim()) {
            navigate(`/order-tracking/${awb}`);
            handleTracking(awb);
        }
    };

    const handleSubmit = () => {
        if (!remarks.trim()) return setError("Please enter remarks");
        Swal.fire({
            title: "Thank you for your feedback!",
            text: "Your remarks have been submitted successfully.",
            icon: "success",
            confirmButtonText: "Great!",
        });
        setRemarks("");
        setError("");
    };

    const activities = trackingData?.order_tracking || [];

    return (
        <>
        {/* <div className="mt-2">
            <TopNav />
        </div> */}
            <div className="">
                <section className="trackorder-dual">
                    {/* LEFT SIDE */}
                    <motion.div
                        className="trackorder-left white-side"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="left-title">Track Your Order</h1>
                        <p className="left-subtext">
                            Stay updated with your shipment in real-time. Enter your AWB number
                            below and instantly view detailed delivery progress.
                        </p>

                        <div className="trackorder-form">
                            <div className="trackorder-tabs">
                                <button
                                    className={`trackorder-tab ${activeTab === "awb" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("awb")}
                                >
                                    AWB
                                </button>
                                <button
                                    className={`trackorder-tab tab-disabled ${activeTab === "order" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("order")}
                                    disabled
                                >
                                    Order ID
                                </button>
                                <button
                                    className={`trackorder-tab tab-disabled ${activeTab === "mobile" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab("mobile")}
                                    disabled
                                >
                                    Mobile
                                </button>
                            </div>

                            {activeTab === "awb" && (
                                <form onSubmit={handleSubmitAwb}>
                                    <input
                                        type="text"
                                        placeholder="Enter AWB number"
                                        value={awb}
                                        onChange={(e) => setAwb(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="trackorder-btn">
                                        Track Now
                                    </button>
                                </form>
                            )}
                        </div>

                        {!showData && (
                            <motion.div
                                className="trackorder-about"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3>About NexShyp</h3>
                                <p>
                                    NexShyp is an all-in-one logistics automation platform built for
                                    modern eCommerce. From instant courier selection to unified
                                    tracking, we simplify every step of the shipping process.
                                </p>
                                <ul>
                                    <li>⚡ Real-time shipment tracking</li>
                                    <li>🚀 Multi-courier integration</li>
                                    <li>📊 Smart analytics dashboard</li>
                                    <li>💬 Dedicated support</li>
                                </ul>
                                <p className="about-footer">
                                    Powering 10K+ online merchants with reliable deliveries across
                                    India.
                                </p>
                            </motion.div>
                        )}

                        {showData && trackingData && (
                            <div className="trackorder-couriercard">
                                <div className="courier-head">
                                    <img
                                        src={trackingData?.courier_image}
                                        alt="Courier"
                                        className="courier-logo"
                                    />
                                    <span className="courier-name">
                                        {trackingData?.courier || trackingData?.courier_partner}
                                    </span>
                                </div>
                                <div className="courier-details">
                                    <p>
                                        <b>Tracking ID:</b> {trackingData?.awb_number}
                                    </p>
                                    <p>
                                        <b>EDD:</b>{" "}
                                        {moment(
                                            trackingData?.other_details?.expected_delivery_date
                                        ).format("DD MMM YYYY")}
                                    </p>
                                    <hr />
                                    <p>
                                        <b>Status:</b> {trackingData?.status}
                                    </p>
                                    <p>
                                        <b>Amount:</b> ₹{trackingData?.invoice_amount}
                                    </p>
                                    <p>
                                        <b>Payment:</b> {trackingData?.payment_type}
                                    </p>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <AnimatePresence mode="wait">
                        {!showData ? (
                            <motion.div
                                key="empty"
                                className="trackorder-right dark-side"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="glow-circle"
                                    initial={{ scale: 0.7, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                />
                                <div className="right-content">
                                    <h2>Welcome to NexShyp Tracking</h2>
                                    <p>
                                        Get transparent, detailed shipment movement logs and estimated
                                        delivery timelines powered by intelligent logistics APIs.
                                    </p>
                                    <ul>
                                        <li>📍 Track shipments from multiple couriers</li>
                                        <li>🕓 Monitor real-time status changes</li>
                                        <li>💡 Analyze delivery performance trends</li>
                                        <li>🌐 India's fastest eCommerce logistics platform</li>
                                    </ul>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
    key="timeline"
    className="trackorder-right dark-side"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -40 }}
    transition={{ duration: 0.6 }}
>
    <div className="timeline-header-row">
        <h3 className="timeline-heading">Delivery Timeline</h3>
        <div className="live-indicator">
            <span className="live-dot-pulse" />
            Live Tracking
        </div>
    </div>
    <div className="timeline-scroll">
        <ul>
            {activities.map((a, i) => (
                <motion.li
                    key={i}
                    className={`timeline-step ${i === 0 ? "active" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <div className="timeline-dot-wrap">
                        {i === 0 && <span className="timeline-dot-ping" />}
                        <div className="timeline-dot" />
                    </div>
                    <div className="timeline-card">
                        <h4>{a?.shipease_status}</h4>
                        <span className="timeline-status-pill">
                            {a?.status_category || "Update"}
                        </span>
                        <p className="loc">{a?.location}</p>
                        <p className="time">
                            {moment(a?.courier_action_date).format("DD MMM YYYY")} ||{" "}
                            {moment(a?.courier_action_date).format("hh:mm A")}
                        </p>
                    </div>
                </motion.li>
            ))}
        </ul>
    </div>
</motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>

        </>

    );
};

export default TrackingOrder;