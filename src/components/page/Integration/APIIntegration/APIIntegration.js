import React from 'react';
import './APIIntegration.css';

const APIIntegration = () => {
    return (
        <div className="api-integration-container">
            <section className="api-integration-intro">
                <h1 className="heading text-center">API Integration</h1>
                <p className="api-integration-description">
                    Connect your eCommerce store to your Shipease account and manage all your orders from a single platform.
                    Seamlessly sync your website's inventory and catalog to receive incoming orders directly in the panel.
                    Stay updated on new orders while efficiently processing existing ones—ensuring no order is missed.
                    Maintain a flawless workflow and keep operations running smoothly with API integration.
                    Stay on top of your shipments, streamline processes, and never lose track of an order again.
                </p>
            </section>

            <section className="api-integration-benefits">
                <h2 className="heading text-center">How API Integration Will Help You</h2>
                <div className="api-integration-pointers">
                    <div className="api-integration-pointer-item">
                        <h3 className="heading">Faster Order Processing</h3>
                        <p>When you get all orders on one single platform, the processing time is bound to reduce.</p>
                    </div>
                    <div className="api-integration-pointer-item">
                        <h3 className="heading">Organized Operations</h3>
                        <p>With a regular incoming order flow, follow a particular procedure for every shipment.</p>
                    </div>
                    <div className="api-integration-pointer-item">
                        <h3 className="heading">Continuous Syncing</h3>
                        <p>Sync your catalog every 15 minutes and stay on top of every new order that comes to your store.</p>
                    </div>
                    <div className="api-integration-pointer-item">
                        <h3 className="heading">Automated Process</h3>
                        <p>With constant syncing, automate your order fulfillment process right from the start.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default APIIntegration;
