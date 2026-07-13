import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./hero.css";

const TrackHero = () => {
  const [awb, setAwb] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!awb.trim()) {
      setError("Please enter a valid AWB or Tracking ID");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setTrackingData(null);

      const response = await axios.get(
        `https://nexshyp.com/core-api/shipping/track-order/${awb}/`
      );

      setTrackingData(response.data);
    } catch (err) {
      setError(
        err?.response?.data?.detail ||
          "Failed to fetch tracking details."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="track-hero-section">
      <div className="track-hero-container">

        {/* LEFT CONTENT */}
        <div className="track-hero-content">
          <h1 className="track-hero-title">
            Track Your <span>Order</span> Instantly
          </h1>

          <p className="track-hero-subtitle">
            Enter your AWB or Tracking ID below to check shipment progress.
          </p>

          <div className="track-hero-input">
            <input
              type="text"
              placeholder="Enter AWB or Tracking ID"
              value={awb}
              onChange={(e) => setAwb(e.target.value)}
            />
            <button onClick={handleTrack}>
              {loading ? "Tracking..." : "Track Now"}
            </button>
          </div>

          {error && <p className="error-text">{error}</p>}
        </div>

        {/* RIGHT SIDE */}
        <div className="track-hero-right">
          <AnimatePresence mode="wait">

            {!trackingData && (
              <motion.div
                key="image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="track-hero-image"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/18/15/07/delivery-1837315_1280.jpg"
                  alt="Tracking"
                />
              </motion.div>
            )}

            {trackingData && (
              <motion.div
                key="stepper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="tracking-stepper"
              >
                <h3>Order Status</h3>

                <div className="step active">
                  <div className="circle"></div>
                  <div>
                    <p className="step-title">Order Placed</p>
                  </div>
                </div>

                <div className="step active">
                  <div className="circle"></div>
                  <div>
                    <p className="step-title">{trackingData.status}</p>
                  </div>
                </div>

                <div className="step">
                  <div className="circle"></div>
                  <div>
                    <p className="step-title">
                      Courier: {trackingData.courier_partner}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TrackHero;