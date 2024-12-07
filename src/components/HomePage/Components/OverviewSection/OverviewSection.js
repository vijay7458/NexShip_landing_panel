import React from "react";
import "./OverviewSection.css"; // Import custom CSS file

const OverviewSection = () => {
    return (
        <section className="home-section">
            <div className="overview-container">
                {/* Heading */}
                <div className="heading">
                    <p className="subtitle">A trusted growth partner</p>
                    <h1>
                        Lakhs of eCommerce businesses chose<br />
                        <span className="highlight"><strong>Shipease</strong> to streamline their customer<br /> journey—from shipping to returns and beyond</span>
                    </h1>
                </div>
                <div className="row">
                    {/* Stats Section */}
                    <div className="col-6 stats">
                        <div className="stat-item">
                            <h2>150 +</h2>
                            <p>Expert Advisors</p>
                        </div>
                        <div className="stat-item">
                            <h2>28000 +</h2>
                            <p>Pincode Covered</p>
                        </div>
                        <div className="stat-item">
                            <h2>12000 +</h2>
                            <p>Daily Shipments</p>
                        </div>
                        <div className="stat-item">
                            <h2>2500 +</h2>
                            <p>Delight Customers</p>
                        </div>
                    </div>
                    {/* Visual Section */}
                    <div className="col-6 visuals">
                        <div className="image-box">
                            <img
                                src="path/to/your-woman-image.jpg"
                                alt="A woman managing orders"
                                className="main-image"
                            />
                        </div>
                        <div className="process-image">
                            <img
                                src="path/to/your-process-image.jpg"
                                alt="Shipping process illustration"
                                className="secondary-image"
                            />
                        </div>
                        <div className="truck-image">
                            <img
                                src="path/to/your-truck-image.jpg"
                                alt="Delivery truck"
                                className="tertiary-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
