import React from "react";
import './OrderDetailsCard.css'
import OrderDetailsIcon from "./OrderDetailsIcon";

const OrderDetailsCard = () => {
    return (
        <div className="order-card">
            <div className="order-card-content">
                <div className="order-header">
                    <div className="d-flex align-items-center gap-3">
                        <a href="#">
                            <OrderDetailsIcon />
                        </a>
                        <h4 className="order-title">Order Details</h4>
                    </div>
                    <div>
                        <span className="font14">Status: </span>
                        <span style={{ color: '#1EA231' }}>Delivered</span>
                    </div>
                </div>

                <div className="order-info">
                    <div className="order-row">
                        <span className="order-label">Order ID</span>
                        <span className="order-value">#SH0012247815</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Order Placed On</span>
                        <span className="order-value">01 Feb 2025</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Order Total</span>
                        <span className="order-value">₹0.00</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Payment Method</span>
                        <span className="order-value">Prepaid</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Name of The Buyer</span>
                        <span className="order-value">Test User</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Phone Number</span>
                        <span className="order-value">+91-9999999999</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Address</span>
                        <span className="order-value">
                            Shipease Technologies, sec 66, Gurugram, Haryana
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailsCard;
