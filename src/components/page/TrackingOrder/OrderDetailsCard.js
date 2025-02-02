import React from "react";
import './OrderDetailsCard.css'
import OrderDetailsIcon from "./OrderDetailsIcon";

const OrderDetailsCard = () => {
    return (
        <div className="order-card">
            <div className="order-card-content">
                <div className="order-header">
                    <a href="#">
                        <OrderDetailsIcon />
                    </a>
                    <h4 className="order-title">Order Details</h4>
                </div>

                <div className="order-info">
                    <div className="order-row">
                        <span className="order-label">Order ID</span>
                        <span className="order-value">#GI0012247815</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Order Placed On</span>
                        <span className="order-value">13 Mar 2024</span>
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
                        <span className="order-value">Himanshu Grover</span>
                    </div>
                    <div className="order-row">
                        <span className="order-label">Phone Number</span>
                        <span className="order-value">+91-9711692602</span>
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
