import React from 'react';
import './PrepaidAndCOD.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Benefits from '../../../../assets/image/Benefits.png'
import TransactionImage from '../../../../assets/image/TransactionImage.png'
import NoFraudImage from '../../../../assets/image/NoFraudImage.png'
import FlexiblePaymentImage from '../../../../assets/image/FlexiblePaymentImage.png'
import IncreasedSalesImage from '../../../../assets/image/IncreasedSalesImage.png'
import BoostedCred from './icons/BoostedCred';
import CustomerSatisfaction from './icons/CustomerSatisfaction';
import CartDone from './icons/CartDone';
import MoreEngagement from './icons/MoreEngagement';

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
                <h1 className='heading'>Prepaid or Cash on Delivery (COD): Which option suits you best?</h1>
                <p className="page-header-description">AI-powered courier selection to guide you in making the best payment choice</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>

            <section className="prepaid-and-cod__how-it-works">
                <div className='amazon-self-ship-container'>
                    <h2 className="heading">Change Payment Mode Easily</h2>

                    <div className="hyperlocal__steps">
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>01.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Access Payment Settings</h3>
                                <p>Log in to your ShipEase account, go to Settings - Shipment Features, and click on the "COD to Prepaid" button.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>02.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Filter & Submit Request</h3>
                                <p>Go to "All Orders" and filter the relevant shipment to submit your claim for payment mode change.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>03.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Update & Confirm</h3>
                                <p>Go to the "Payment" section, click the edit icon, and switch your payment mode to prepaid.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="prepaid-and-cod__why-offer">
                <div className='amazon-self-ship-container'>
                    <h2 className='heading'>Why Offer Multiple Payment Options?</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <ul className="why_cod-steps col-12 col-lg-7">
                            <li className="why_cod-step">
                                <MoreEngagement />
                                <p><span>More Engagement</span><br />
                                    Empower your customers to make the right payment choice at the right time.</p>
                            </li>
                            <li className="why_cod-step">
                                <CartDone />
                                <p><span>Reduced Cart Abandonment</span><br />
                                    Lower the chances of losing potential buyers to competitors.</p>
                            </li>
                            <li className="why_cod-step">
                                <CustomerSatisfaction />
                                <p><span>Enhanced Customer Satisfaction</span><br />
                                    Simplify the payment process for your customers, making transactions hassle-free.</p>
                            </li>
                            <li className="why_cod-step">
                                <BoostedCred />
                                <p><span>Boosted Credibility</span><br />
                                    Increase trust and loyalty by going the extra mile for your customers.</p>
                            </li>
                        </ul>
                        <div className='why-cod-bg col-12 col-lg-5'>
                            <img src={Benefits} alt="Benefits" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="prepaid-and-cod__benefits">
                <div className='amazon-self-ship-container'>
                    <h2 className="heading">Benefits of Offering COD</h2>
                    <div className="benefits__container">
                        <div className="benefits__item">
                            <div className="icon">
                                <img src={TransactionImage} alt="" />
                            </div>
                            <h3 className="heading">Convenient Transactions</h3>
                            <p>Allow customers to pay upon receiving the product, making it easier for them to purchase from your store.</p>
                        </div>

                        <div className="benefits__item">
                            <div className="icon">
                                <img src={NoFraudImage} alt="" />
                            </div>
                            <h3 className="heading">No Fraud Risks</h3>
                            <p>By offering COD, you minimize the risk of fraud by ensuring payments are only made after successful delivery.</p>
                        </div>

                        <div className="benefits__item">
                            <div className="icon">
                                <img src={FlexiblePaymentImage} alt="" />
                            </div>
                            <h3 className="heading">Flexible Payment Options</h3>
                            <p>Give customers the flexibility to choose between COD and prepaid options, catering to their preferred payment methods.</p>
                        </div>

                        <div className="benefits__item">
                            <div className="icon">
                                <img src={IncreasedSalesImage} alt="" />
                            </div>
                            <h3 className="heading">Increased Sales Opportunities</h3>
                            <p>Attract a wider range of customers who prefer paying for products upon delivery, expanding your customer base.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrepaidAndCOD;
