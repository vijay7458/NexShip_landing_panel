import React from 'react';
import './HyperLocal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import HyperLocalBG from "../../../../assets/image/HyperLocalBG.png"
import WhyHyperLocal from "../../../../assets/image/WhyHyperLocal.png"
import CheckIcon from '../NDRManagement/Icons/CheckIcon';
import ResolveNdrIcon from '../NDRManagement/Icons/ResolveNdrIcon';

const HyperLocal = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <>
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1>Revolutionize Local Deliveries with Speed and Precision</h1>
                <p className="page-header-description">Enhance Your Business Operations with Seamless HyperLocal Delivery Solutions Designed for Maximum Efficiency and Customer Delight</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <section className="hyperlocal__page-container">
                {/* Page Header */}
                <header className="hyperlocal__header">
                    <div className='amazon-self-ship-container'>
                        <h1 className="heading text-center">Lightning-Fast HyperLocal Delivery</h1>
                        <p className="hyperlocal__sub-title">Boost operational efficiency, enhance customer satisfaction, and cut delivery costs with our streamlined hyperlocal delivery solution.</p>
                    </div>
                </header>

                {/* HyperLocal Overview Section */}
                <section className="hyperlocal__overview">
                    <div className='amazon-self-ship-container row align-items-center'>
                        <div className='col-12 col-md-6'>
                            <h2 className="heading">What is HyperLocal Delivery?</h2>
                            <p className="hyperlocal__description">
                                Hyperlocal delivery focuses on quickly delivering products directly from local sellers to customers within a specific area.
                                Our service ensures your deliveries are fast, reliable, and cost-effective, helping businesses to better serve their customers with shorter transit times.
                            </p>
                        </div>
                        <div className='col-12 col-md-6 text-center text-md-end'>
                            <img src={HyperLocalBG} alt="Hyper Local" />
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="hyperlocal__features">
                    <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center">Key Features of Our HyperLocal Delivery</h2>
                        <div className="ndr-management__feature-cards">
                            <div className="ndr-management__feature-card">
                                <div className="inner__feature-card">
                                    <div className='card-icon'>
                                        <span>
                                            <ResolveNdrIcon />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="ndr-management__feature-title">Speed and Reliability</h3>
                                        <p>Ensure rapid deliveries to customers, with products reaching them in a matter of hours, not days. This leads to happier customers and repeat business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ndr-management__feature-card">
                                <div className="inner__feature-card second-card">
                                    <div className='card-icon'>
                                        <span>
                                            <ResolveNdrIcon />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="ndr-management__feature-title">Real-Time Tracking</h3>
                                        <p>Stay informed with real-time tracking, giving both businesses and customers full visibility of the delivery process from start to finish.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ndr-management__feature-card">
                                <div className="inner__feature-card">
                                    <div className='card-icon'>
                                        <span>
                                            <ResolveNdrIcon />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="ndr-management__feature-title">Optimized Delivery Routes</h3>
                                        <p>Optimize delivery routes to reduce fuel costs and improve delivery times, ensuring your customers receive their products faster and more efficiently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hyperlocal Marketplace Benefits Section */}
                <section className="hyperlocal__marketplace pt-5">
                    <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center mb-3">Why Choose HyperLocal Delivery?</h2>
                        <p className="hyperlocal__description">
                            By utilizing our hyperlocal delivery service, businesses can experience faster, more reliable deliveries, resulting in cost savings, improved customer loyalty, and increased sales. Here are the key benefits:
                        </p>
                        <div className='row align-items-center'>
                            <div className="col-12 col-md-6 col-lg-4 text-center">
                                <img src={WhyHyperLocal} alt="Why Hyper Local" />
                            </div>
                            <div className='col-12 col-md-6 col-lg-7'>
                                <ul className="hyperlocal__benefit-list">
                                    <li><CheckIcon />Get goods delivered in hours instead of days, ensuring faster customer satisfaction.</li>
                                    <li><CheckIcon />Lower operating expenses with efficient, locally optimized routes.</li>
                                    <li><CheckIcon />Enhance transparency with real-time tracking updates throughout the delivery process.</li>
                                    <li><CheckIcon />Reduce manual work with automated order management and status updates for smoother operations.</li>
                                    <li><CheckIcon />Increase sales potential by catering to local customers with faster deliveries.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="hyperlocal__how-it-works">
                    <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center">How Does HyperLocal Delivery Work?</h2>
                        <div className="hyperlocal__steps">
                            <div className="hyperlocal__step">
                                <div>
                                    <span className='hyperlocal-step-number'>01.</span>
                                </div>
                                <div>
                                    <h3 className="hyperlocal__step-title">Pickup</h3>
                                    <p>Our agents pick up products directly from local sellers and prepare them for delivery to the customer’s doorstep.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="hyperlocal__step">
                                <div>
                                    <span className='hyperlocal-step-number'>02.</span>
                                </div>
                                <div>
                                    <h3 className="hyperlocal__step-title">Route Optimization</h3>
                                    <p>Using advanced algorithms, we select the most efficient routes for each delivery, ensuring timely and cost-effective deliveries.</p>
                                </div>
                            </div>
                            <hr />
                            <div className="hyperlocal__step">
                                <div>
                                    <span className='hyperlocal-step-number'>03.</span>
                                </div>
                                <div>
                                    <h3 className="hyperlocal__step-title">Swift Delivery</h3>
                                    <p>The product is promptly delivered to the customer’s address, with real-time updates sent throughout the entire process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="hyperlocal__cta">
                    <div className='amazon-self-ship-container'>
                        <h2 className="hyperlocal__cta-title">Ready to Transform Your Delivery Operations?</h2>
                        <p className="hyperlocal__cta-description">
                            Start offering ultra-fast deliveries that delight your customers and streamline your logistics. Join the future of local delivery today!
                        </p>
                        <button className="btn main-button">Get Started Now</button>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HyperLocal;
