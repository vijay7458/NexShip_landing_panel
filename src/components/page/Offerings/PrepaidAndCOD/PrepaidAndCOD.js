import React from 'react';
import './PrepaidAndCOD.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const PrepaidAndCOD = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <div className="prepaid-and-cod">
            {/* <section className="prepaid-and-cod__header">
                <h1>Prepaid vs. Cash on Delivery (COD)?</h1>
                <p>AI-powered courier selection to guide you in making the best payment choice.</p>
            </section> */}
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1>Prepaid or Cash on Delivery (COD): Which option suits you best?</h1>
                <p className="page-header-description">AI-powered courier selection to guide you in making the best payment choice</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>

            <section className="prepaid-and-cod__how-it-works">
                <h2>Change Payment Mode Easily</h2>
                <div className="prepaid-and-cod__steps">
                    <div className="prepaid-and-cod__step">
                        <div className="icon">
                            <i className="fas fa-lock"></i>
                        </div>
                        <h3>Secure Your Packages</h3>
                        <p>Log in to your ShipEase account, go to Settings - Shipment Features, and click on the "COD to Prepaid" button.</p>
                    </div>

                    <div className="prepaid-and-cod__step">
                        <div className="icon">
                            <i className="fas fa-search"></i>
                        </div>
                        <h3>Submit Claims</h3>
                        <p>Go to "All Orders" and filter the relevant shipment to submit your claim for payment mode change.</p>
                    </div>

                    <div className="prepaid-and-cod__step">
                        <div className="icon">
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <h3>Receive Reimbursement</h3>
                        <p>Go to the "Payment" section, click the edit icon, and switch your payment mode to prepaid.</p>
                    </div>
                </div>
            </section>

            <section className="prepaid-and-cod__why-offer">
                <h2>Why Offer Multiple Payment Options?</h2>
                <div className="steps">
                    <div className="step">
                        <h3>More Engagement</h3>
                        <p>Empower your customers to make the right payment choice at the right time.</p>
                    </div>
                    <div className="step">
                        <h3>Reduced Cart Abandonment</h3>
                        <p>Lower the chances of losing potential buyers to competitors.</p>
                    </div>
                    <div className="step">
                        <h3>Enhanced Customer Satisfaction</h3>
                        <p>Simplify the payment process for your customers, making transactions hassle-free.</p>
                    </div>
                    <div className="step">
                        <h3>Boosted Credibility</h3>
                        <p>Increase trust and loyalty by going the extra mile for your customers.</p>
                    </div>
                </div>
            </section>

            <section className="prepaid-and-cod__benefits">
                <h2>Benefits of Offering COD</h2>
                <div className="benefits__container">
                    <div className="benefits__item">
                        <div className="icon">
                            <i className="fas fa-credit-card"></i>
                        </div>
                        <h3>Convenient Transactions</h3>
                        <p>Allow customers to pay upon receiving the product, making it easier for them to purchase from your store.</p>
                    </div>

                    <div className="benefits__item">
                        <div className="icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>No Fraud Risks</h3>
                        <p>By offering COD, you minimize the risk of fraud by ensuring payments are only made after successful delivery.</p>
                    </div>

                    <div className="benefits__item">
                        <div className="icon">
                            <i className="fas fa-exchange-alt"></i>
                        </div>
                        <h3>Flexible Payment Options</h3>
                        <p>Give customers the flexibility to choose between COD and prepaid options, catering to their preferred payment methods.</p>
                    </div>

                    <div className="benefits__item">
                        <div className="icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3>Increased Sales Opportunities</h3>
                        <p>Attract a wider range of customers who prefer paying for products upon delivery, expanding your customer base.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrepaidAndCOD;
