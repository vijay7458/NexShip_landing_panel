import React from "react";
import CourierLogo from "../../../assets/image/Couriers/Bluedart.svg"
import "./CourierInfo.css"

const CourierInfo = () => {
    return (
        <div className="courier-card">
            {/* Courier Name */}
            <div className="courier-name">
                <img className="courier-logo" src={CourierLogo} alt="" />
                <span className="courier-title">Blue Dart</span>
            </div>

            <div className="d-flex flex-column">
                {/* Tracking Info */}
                <div className="tracking-info">
                    <span className="tracking-label">Tracking ID: </span>
                    <span className="tracking-id">34581595922</span>
                </div>
                <div>
                    <span className="tracking-label">EDD: </span>
                    <span>04 Feb, 2025</span>
                </div>
            </div>
        </div>
    );
};

export default CourierInfo;
