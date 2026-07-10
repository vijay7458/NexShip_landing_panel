import React from 'react';
import './NDRManagement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import TrackingIcon from './Icons/TrackingIcon';
import ResolveNdrIcon from './Icons/ResolveNdrIcon';
import NdrInsightsIcon from './Icons/NdrInsightsIcon';
import CheckIcon from './Icons/CheckIcon';
import NdrBg from '../../../../assets/image/NdrBg.png'
import { useNavigate } from 'react-router';

const NDRManagement = () => {
    let navigate = useNavigate();

    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    const ndrMethods = [
        { id: 1, title: "IVR Calling", icon: "📞", description: "Automated calls for quick response." },
        { id: 2, title: "Manual Calling", icon: "🎙️", description: "Dedicated agents for follow-ups." },
        { id: 3, title: "WhatsApp Bots", "icon": "📲", description: "Instant messaging for resolutions." },
        { id: 4, title: "SMS Alerts", icon: "📩", description: "Notify customers with simple steps." },
        { id: 5, title: "Email Follow-Ups", icon: "📧", description: "Encourage timely responses." },
        { id: 6, title: "Dashboard Insights", icon: "📊", description: "Track real-time NDR cases." }
    ];

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
                <h1 className=''>Streamline Your Deliveries with Smart NDR Management</h1>
                <p className="page-header-description">Resolve Non-Delivery Cases Efficiently and Enhance Customer Satisfaction with Real-Time Tracking and Insights</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <section className="ndr-management__page-container">
                {/* Page Title */}

                {/* NDR Overview Section */}
                <section className="ndr-management__overview">
                    <h1 className="heading text-center">Efficient NDR Management for Seamless Deliveries</h1>
                    <h2 className="heading text-center">What is NDR Management?</h2>
                    <p className="ndr-management__description">
                        Non-Delivery Reports (NDRs) are crucial in the logistics process, allowing us to track and address
                        issues when deliveries fail to reach their destination. Our NDR Management system streamlines this
                        process, offering real-time updates, resolution tracking, and a comprehensive overview of all
                        non-delivery cases.
                    </p>
                </section>

                {/* NDR Features Section */}
                <section className="ndr-management__features">
                    <h2 className="heading text-center">Key Features of NDR Management</h2>
                    <div className="ndr-management__feature-cards">
                        <div className="ndr-management__feature-card">
                            <div className="inner__feature-card">
                                <div className='card-icon'>
                                    <span>
                                        <TrackingIcon />
                                    </span>
                                </div>
                                <div>
                                    <h3 className="ndr-management__feature-title">Real-Time Tracking</h3>
                                    <p>Monitor all your NDRs seamlessly with real-time updates that keep you in control.</p>
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
                                    <h3 className="ndr-management__feature-title">Quick Resolution</h3>
                                    <p>Ensure quick resolutions by connecting directly with the logistics team or automating actions to save time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="ndr-management__feature-card">
                            <div className="inner__feature-card">
                                <div className='card-icon'>
                                    <span>
                                        <NdrInsightsIcon />
                                    </span>
                                </div>
                                <div>
                                    <h3 className="ndr-management__feature-title">Comprehensive Insights</h3>
                                    <p>Analyze trends and discover actionable insights to minimize recurring issues and improve delivery success rates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='ways-of-ndr'>
                    <h2 className="heading text-center">How We Manage NDR</h2>
                    <div className="ndr-grid">
                        {ndrMethods.map((method) => (
                            <div key={method.id} className="ndr-card">
                                <span className="ndr-icon">{method.icon}</span>
                                <h3 className="ndr-method">{method.title}</h3>
                                <p className="ndr-desc">{method.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="ndr-management__benefits row">
                    <div className='col-12 col-md-6'>
                        <h2 className="heading mb-5">Why Choose Our NDR Management System?</h2>
                        <ul className="ndr-management__benefit-list">
                            <li className="ndr-management__benefit-item"><CheckIcon />Reduce customer complaints and dissatisfaction.</li>
                            <li className="ndr-management__benefit-item"><CheckIcon />Enhance operational efficiency and minimize delays.</li>
                            <li className="ndr-management__benefit-item"><CheckIcon />Increase transparency and accountability across teams.</li>
                            <li className="ndr-management__benefit-item"><CheckIcon />Generate reports for continuous improvement.</li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 text-center text-md-end'>
                        <img src={NdrBg} alt="NDR Management" />
                    </div>
                </section>

                {/* Call to Action */}
                <section className="ndr-management__cta">
                    <h2 className="heading text-center">Start Streamlining Your NDR Process Today</h2>
                    <p>Leverage our NDR Management system to minimize delays and optimize your logistics operations.</p>
                    <button onClick={() => navigate("/support/home")} className="btn main-button">Learn More</button>
                </section>
            </section>
        </>
    );
};

export default NDRManagement;
