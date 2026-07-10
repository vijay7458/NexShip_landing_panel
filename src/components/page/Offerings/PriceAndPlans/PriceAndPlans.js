import React from 'react'
import './PriceAndPlans.css'
import ListIcon from './ListIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Navigate, useNavigate } from 'react-router';

const PriceAndPlans = () => {
    let Navigate = useNavigate();

    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <>
            <section className='business-plan-page'>
                <header className="page-header">
                    <div className="ripple-shape">
                        <span className="ripple-1" />
                        <span className="ripple-2" />
                        <span className="ripple-3" />
                        <span className="ripple-4" />
                        <span className="ripple-5" />
                    </div>
                    <h1 className=''>Find the Right Plan to Power Your Logistics</h1>
                    <p className="page-header-description">
                        Affordable, Transparent, and Tailored Pricing to Meet Your Business Goals
                    </p>
                    <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
                </header>
                <h2 className='heading mt-3 text-center'>Grab The Perfect Plan for Your Needs</h2>
                <p className='text-center text-sh-primary'>Our transparent pricing makes it easy to find a plan that works within your financial constraints.</p>
                <div className='plans-container'>
                    <div className='plan-item'>
                        <h4>Standard</h4>
                        <div className='plan-price'>
                            {/* <span>₹</span> */}
                            <p>26.27 <span>/ 500 gram</span></p>
                        </div>
                        <p className='mt-3'>Unlock advanced features and receive priority support.</p>
                        <div className='plans-features'>
                            <ul className=''>
                                <li><ListIcon /> 2 Ecommerce Channel Integration</li>
                                <li><ListIcon /> Ticket Support and Panel Escalations</li>
                                <li><ListIcon /> NDR & RTO Management</li>
                                <li><ListIcon /> Automated Channel Order Sync</li>
                                <li><ListIcon /> Domestic And International Shipping</li>
                                <li><ListIcon /> Basic Analytics Dashboard</li>
                            </ul>
                        </div>
                        {/* <button className='btn main-button-outline mt-4'>Get Started</button> */}
                    </div>
                    <div className='plan-item'>
                        <h4>Pro</h4>
                        <div className='plan-price'>
                            {/* <span>₹</span> */}
                            <p>23.88 <span>/ 500 gram</span></p>
                        </div>
                        <p className='mt-3'>Access premium tools and team colaboration options.</p>
                        <div className='plans-features'>
                            <ul className=''>
                                <li><ListIcon /> All Features from Standard</li>
                                <li><ListIcon /> 5 Ecommerce Channel Integration</li>
                                <li><ListIcon /> Dedicated Key Account Manager</li>
                                <li><ListIcon /> Merging of Shipment</li>
                                <li><ListIcon /> Payment Mode Change</li>
                                <li><ListIcon /> Pro Analytics Dashboard</li>
                            </ul>
                        </div>
                        {/* <button className='btn main-button-outline mt-4'>Get Started</button> */}
                    </div>
                    <div className='plan-item'>
                        <h4>Pro Plus</h4>
                        <div className='plan-price'>
                            <p>20.34 <span>/ 500 gram</span></p>
                        </div>

                        <p className='mt-3'>Customizable solutions for large shipping and dedicated support.</p>
                        <div className='plans-features'>
                            <ul className=''>
                                <li><ListIcon /> All Features from Pro</li>
                                <li><ListIcon /> AI Powered Courier Allocation Engine</li>
                                <li><ListIcon /> Unlimited Ecommerce Channel Integration</li>
                                <li><ListIcon /> 24*7 Support</li>
                                <li><ListIcon /> Custom Branding Page with NPS</li>
                                <li><ListIcon /> Pro+ Analytics Dashboard</li>
                            </ul>
                        </div>
                        {/* <button className='btn main-button-outline mt-4'>Get Started</button> */}
                    </div>
                </div>
                <div className='book-demo-sec'>
                    <p className='mb-0'>Grab It Fast to Get Special Price!</p>
                    <button onClick={() => Navigate("/contact")} className='btn'>Book Demo Now!</button>
                </div>
            </section>
        </>
    )
}

export default PriceAndPlans