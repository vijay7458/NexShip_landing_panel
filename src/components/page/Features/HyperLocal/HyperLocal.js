import React from 'react';
import './HyperLocal.css';

const HyperLocal = () => {
    return (
        <section className="hyperlocal__page-container">
            {/* Page Header */}
            <header className="hyperlocal__header">
                <h1 className="hyperlocal__main-title">Lightning-Fast HyperLocal Delivery</h1>
                <p className="hyperlocal__sub-title">Boost operational efficiency, enhance customer satisfaction, and cut delivery costs with our streamlined hyperlocal delivery solution.</p>
            </header>

            {/* HyperLocal Overview Section */}
            <section className="hyperlocal__overview">
                <h2 className="hyperlocal__section-title">What is HyperLocal Delivery?</h2>
                <p className="hyperlocal__description">
                    Hyperlocal delivery focuses on quickly delivering products directly from local sellers to customers within a specific area. 
                    Our service ensures your deliveries are fast, reliable, and cost-effective, helping businesses to better serve their customers with shorter transit times.
                </p>
            </section>

            {/* Key Features Section */}
            <section className="hyperlocal__features">
                <h2 className="hyperlocal__section-title">Key Features of Our HyperLocal Delivery</h2>
                <div className="hyperlocal__feature-cards">
                    <div className="hyperlocal__feature-card">
                        <img className="hyperlocal__feature-image" src="placeholder-image-1.jpg" alt="Fast Delivery" />
                        <h3 className="hyperlocal__feature-title">Speed and Reliability</h3>
                        <p>Ensure rapid deliveries to customers, with products reaching them in a matter of hours, not days. This leads to happier customers and repeat business.</p>
                    </div>
                    <div className="hyperlocal__feature-card">
                        <img className="hyperlocal__feature-image" src="placeholder-image-2.jpg" alt="Real-Time Tracking" />
                        <h3 className="hyperlocal__feature-title">Real-Time Tracking</h3>
                        <p>Stay informed with real-time tracking, giving both businesses and customers full visibility of the delivery process from start to finish.</p>
                    </div>
                    <div className="hyperlocal__feature-card">
                        <img className="hyperlocal__feature-image" src="placeholder-image-3.jpg" alt="Optimized Routes" />
                        <h3 className="hyperlocal__feature-title">Optimized Delivery Routes</h3>
                        <p>Optimize delivery routes to reduce fuel costs and improve delivery times, ensuring your customers receive their products faster and more efficiently.</p>
                    </div>
                </div>
            </section>

            {/* Hyperlocal Marketplace Benefits Section */}
            <section className="hyperlocal__marketplace">
                <h2 className="hyperlocal__section-title">Why Choose HyperLocal Delivery?</h2>
                <p className="hyperlocal__description">
                    By utilizing our hyperlocal delivery service, businesses can experience faster, more reliable deliveries, resulting in cost savings, improved customer loyalty, and increased sales. Here are the key benefits:
                </p>
                <ul className="hyperlocal__benefit-list">
                    <li>Get goods delivered in hours instead of days, ensuring faster customer satisfaction.</li>
                    <li>Lower operating expenses with efficient, locally optimized routes.</li>
                    <li>Enhance transparency with real-time tracking updates throughout the delivery process.</li>
                    <li>Reduce manual work with automated order management and status updates for smoother operations.</li>
                    <li>Increase sales potential by catering to local customers with faster deliveries.</li>
                </ul>
            </section>

            {/* How It Works Section */}
            <section className="hyperlocal__how-it-works">
                <h2 className="hyperlocal__section-title">How Does HyperLocal Delivery Work?</h2>
                <div className="hyperlocal__steps">
                    <div className="hyperlocal__step">
                        <h3 className="hyperlocal__step-title">Step 1: Pickup</h3>
                        <p>Our agents pick up products directly from local sellers and prepare them for delivery to the customer’s doorstep.</p>
                    </div>
                    <div className="hyperlocal__step">
                        <h3 className="hyperlocal__step-title">Step 2: Route Optimization</h3>
                        <p>Using advanced algorithms, we select the most efficient routes for each delivery, ensuring timely and cost-effective deliveries.</p>
                    </div>
                    <div className="hyperlocal__step">
                        <h3 className="hyperlocal__step-title">Step 3: Swift Delivery</h3>
                        <p>The product is promptly delivered to the customer’s address, with real-time updates sent throughout the entire process.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="hyperlocal__cta">
                <h2 className="hyperlocal__cta-title">Ready to Transform Your Delivery Operations?</h2>
                <p className="hyperlocal__cta-description">
                    Start offering ultra-fast deliveries that delight your customers and streamline your logistics. Join the future of local delivery today!
                </p>
                <button className="hyperlocal__cta-button">Get Started Now</button>
            </section>
        </section>
    );
};

export default HyperLocal;
