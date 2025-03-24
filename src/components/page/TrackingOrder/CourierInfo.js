import React from "react";
import CourierLogo from "../../../assets/image/Couriers/Bluedart.svg"
import "./CourierInfo.css"
import moment from "moment";

const CourierInfo = ({ TrackingData }) => {
    return (
        <div className="courier-card">
            {/* Courier Name */}
            <div className="courier-name">
                <img className="courier-logo" src={TrackingData?.courier_image} alt="Courier Image" />
                <span className="courier-title">{TrackingData?.courier_partner || TrackingData?.courier}</span>
            </div>

            <div className="d-flex flex-column">
                {/* Tracking Info */}
                <div className="tracking-info">
                    <span className="tracking-label">Tracking ID: </span>
                    <span className="tracking-id">{TrackingData?.awb_number}</span>
                </div>
                <div>
                    <span className="tracking-label">EDD: </span>
                    <span>{moment(TrackingData?.other_details?.expected_delivery_date).format("DD MMM YYY")}</span>
                </div>
            </div>
        </div>
    );
};

export default CourierInfo;
