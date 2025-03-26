import React from 'react';
import './AmazonSelfShip.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MultiLocationIcon from './Icons/MultiLocationIcon';
import MinimisedReturns from './Icons/MinimisedReturns';
import IndependentLogisticsIcon from './Icons/IndependentLogisticsIcon';
import FlexibleOperationsIcon from './Icons/FlexibleOperationsIcon';
import InventoryManageIcon from './Icons/InventoryManageIcon';
import ExtensiveCoverageIcon from './Icons/ExtensiveCoverageIcon';

const AmazonSelfShip = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <div className="amazon-self-ship">
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1 className=''>Amazon Self-Ship + ShipEase</h1>
                <p className="page-header-description">
                    Empower your business with flexible shipping solutions. Manage payments, logistics, and operations seamlessly with ShipEase.
                </p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>

            <section className="amazon-self-ship__features">
                <div className="amazon-self-ship-container">
                    <h2 className="heading text-center my-5">Why Choose Amazon Self-Ship?</h2>
                    <div className="amazon-self-ship__features-grid">
                        <div className="amazon-self-ship__feature">
                            <div>
                                <MultiLocationIcon />
                            </div>
                            <div>
                                <h3>Multi-Location Pickups</h3>
                                <p>Easily collect orders from multiple locations and ship across India with minimal hassle.</p>
                            </div>
                        </div>
                        <div className="amazon-self-ship__feature">
                            <div>
                                <MinimisedReturns />
                            </div>
                            <div>
                                <h3>Minimized Returns</h3>
                                <p>Accept prepaid orders to reduce cancellations and streamline operations.</p>
                            </div>
                        </div>
                        <div className="amazon-self-ship__feature">
                            <div>
                                <IndependentLogisticsIcon />
                            </div>
                            <div>
                                <h3>Cost Effective logistics</h3>
                                <p>Eliminate dependency on Amazon for delivery, pickup, or remittance processes.</p>
                            </div>
                        </div>
                        <div className="amazon-self-ship__feature">
                            <div>
                                <FlexibleOperationsIcon />
                            </div>
                            <div>
                                <h3>Flexible Operations</h3>
                                <p>Process orders at your convenience with your preferred shipping partner.</p>
                            </div>
                        </div>
                        <div className="amazon-self-ship__feature">
                            <div>
                                <InventoryManageIcon />
                            </div>
                            <div>
                                <h3>Inventory Management</h3>
                                <p>Track inventory and orders in real-time, improving operational efficiency.</p>
                            </div>
                        </div>
                        <div className="amazon-self-ship__feature">
                            <div>
                                <ExtensiveCoverageIcon />
                            </div>
                            <div>
                                <h3>Extensive Coverage</h3>
                                <p>Ship products to over 29,000 pin codes in India, reaching more customers than ever before.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hyperlocal__how-it-works">
                <div className='amazon-self-ship-container'>
                    <h2 className="heading text-center">How Does Amazon Self-Ship Work?</h2>
                    <div className="hyperlocal__steps">
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>01.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Integrate Your Amazon Account</h3>
                                <p>Link your Amazon account with ShipEase by accessing the "Permissions" tab and adding ShipEase as a third-party app.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>02.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Import Orders</h3>
                                <p>Download order history reports from Amazon and upload them to ShipEase to manage orders seamlessly.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>03.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Select Courier Partners</h3>
                                <p>Use ShipEase’s CORE tool to find the best shipping solutions based on your requirements.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>04.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Ship Across India</h3>
                                <p>Deliver to over 29,000 pin codes and scale your business with nationwide coverage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="amazon-self-ship__footer">
                <div className="">
                    <h2>Ready to Get Started?</h2>
                    <p>Take control of your shipping and grow your business with Amazon Self-Ship + ShipEase.</p>
                    <button className="btn main-button">Start Shipping</button>
                </div>
            </footer>
        </div>
    );
};

export default AmazonSelfShip;
