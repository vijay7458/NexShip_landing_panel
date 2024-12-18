import React from 'react';
import './NDRManagement.css';

const NDRManagement = () => {
    return (
        <section className="ndr-management__page-container">
            {/* Page Title */}
            <h1 className="ndr-management__page-title">Efficient NDR Management for Seamless Deliveries</h1>

            {/* NDR Overview Section */}
            <section className="ndr-management__overview">
                <h2 className="ndr-management__title">What is NDR Management?</h2>
                <p className="ndr-management__description">
                    Non-Delivery Reports (NDRs) are crucial in the logistics process, allowing us to track and address 
                    issues when deliveries fail to reach their destination. Our NDR Management system streamlines this 
                    process, offering real-time updates, resolution tracking, and a comprehensive overview of all 
                    non-delivery cases.
                </p>
            </section>

            {/* NDR Features Section */}
            <section className="ndr-management__features">
                <h2 className="ndr-management__title">Key Features of NDR Management</h2>
                <div className="ndr-management__feature-cards">
                    <div className="ndr-management__feature-card">
                        <img className="ndr-management__feature-image" src="placeholder-image-1.jpg" alt="Track NDRs" />
                        <h3 className="ndr-management__feature-title">Real-Time Tracking</h3>
                        <p>Track the status of all your NDRs in real time and receive instant updates on any changes.</p>
                    </div>
                    <div className="ndr-management__feature-card">
                        <img className="ndr-management__feature-image" src="placeholder-image-2.jpg" alt="Resolve NDRs" />
                        <h3 className="ndr-management__feature-title">Quick Resolution</h3>
                        <p>Resolve NDRs efficiently by directly contacting the logistics team or triggering automated actions.</p>
                    </div>
                    <div className="ndr-management__feature-card">
                        <img className="ndr-management__feature-image" src="placeholder-image-3.jpg" alt="NDR Insights" />
                        <h3 className="ndr-management__feature-title">Comprehensive Insights</h3>
                        <p>Gain valuable insights into the most common causes of NDRs and enhance future logistics strategies.</p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="ndr-management__benefits">
                <h2 className="ndr-management__title">Why Choose Our NDR Management System?</h2>
                <ul className="ndr-management__benefit-list">
                    <li className="ndr-management__benefit-item">Reduce customer complaints and dissatisfaction.</li>
                    <li className="ndr-management__benefit-item">Enhance operational efficiency and minimize delays.</li>
                    <li className="ndr-management__benefit-item">Increase transparency and accountability across teams.</li>
                    <li className="ndr-management__benefit-item">Generate reports for continuous improvement.</li>
                </ul>
            </section>

            {/* Call to Action */}
            <section className="ndr-management__cta">
                <h2 className="ndr-management__title">Start Streamlining Your NDR Process Today</h2>
                <p>Leverage our NDR Management system to minimize delays and optimize your logistics operations.</p>
                <button className="ndr-management__cta-button">Learn More</button>
            </section>
        </section>
    );
};

export default NDRManagement;
