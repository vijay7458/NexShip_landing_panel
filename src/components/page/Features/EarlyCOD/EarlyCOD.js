import React from 'react';
import './EarlyCOD.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const EarlyCOD = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <div className="early-cod">
            {/* Header Section */}
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1>Boost Your Cash Flow with Shipease's Early COD Payment Feature</h1>
                <p className="page-header-description">Speed up your payment cycles and enhance liquidity with Shipease's Early COD.</p>

                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>

            {/* Feature Section */}
            <section className="early-cod__features">
                <div className='amazon-self-ship-container'>
                    <h2 className="early-cod__section-title">Accelerate Your Payment Cycle</h2>
                    <p className="early-cod__description">
                        With Early COD options, streamline your business operations and reduce payment delays:
                    </p>
                    <div className="early-cod__feature-grid">
                        <div className="early-cod__feature">
                            <h3>Payments in +4 Days</h3>
                            <p>
                                Enjoy hassle-free remittance within 4 days, ensuring a consistent cash flow for smoother operations.
                            </p>
                        </div>
                        <div className="early-cod__feature">
                            <h3>Payments in +3 Days</h3>
                            <p>
                                Faster payments processed in 3 days to help you scale operations and manage finances effectively.
                            </p>
                        </div>
                        <div className="early-cod__feature">
                            <h3>Payments in +2 Days</h3>
                            <p>
                                Get the fastest COD remittance in just 2 days, perfect for businesses requiring immediate liquidity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="early-cod__steps">
                <div className='amazon-self-ship-container'>
                    <h2 className="heading text-center">How Early COD Works</h2>
                    <div className="hyperlocal__steps">
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>01.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Activate Early COD</h3>
                                <p>Head over to the Settings in OMS, enable the Early COD feature, and select the best-suited remittance plan for your business.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>02.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Choose Your Plan</h3>
                                <p>Compare all available plans and select the one that meets your remittance timelines and business goals.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>03.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Deliver Orders</h3>
                                <p>Fulfill orders promptly, complete all necessary documentation, and ensure accurate delivery records.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>04.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Receive Payments</h3>
                                <p>Get your payments transferred as per your chosen plan. Keep track of all transactions with detailed remittance advice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EarlyCOD;
