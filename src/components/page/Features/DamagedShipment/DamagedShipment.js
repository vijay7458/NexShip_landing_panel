import React from 'react';
import './DamagedShipment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const DamagedShipment = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    const solutions = [
        {
            id: 1,
            title: 'Centralized Damage Reporting',
            description: 'Streamline your operations by reporting damaged shipments directly through our platform. Get automated updates and track resolution progress in one place.',
        },
        {
            id: 2,
            title: 'Automated Claim Filing',
            description: 'Easily file claims with shipping carriers or suppliers through our integrated system. Save time and minimize manual efforts with pre-filled templates and real-time status updates.',
        },
        {
            id: 3,
            title: 'Dedicated Support Team',
            description: 'Our expert support team assists with complex issues, ensuring that claims are resolved quickly and fairly, minimizing business impact.',
        },
        {
            id: 4,
            title: 'Analytics & Insights',
            description: 'Access detailed reports and analytics on shipment damages to identify recurring issues, improve packaging, and optimize your supply chain.',
        },
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
                <h1 className=''>Effortless Solutions for Damaged Shipments</h1>
                <p className="page-header-description">Streamline Reporting, Resolution, and Recovery for Every Shipment</p>


                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="damaged-shipment-container">
                {/* Intro Section */}
                <section className="damaged-shipment-intro">
                    <h1 className='heading text-center'>Manage Damaged Shipments with Ease</h1>
                    <p>
                        As an eCommerce aggregator, we offer a seamless solution for handling damaged shipments.
                        Our platform ensures that sellers have all the tools they need to manage, report, and
                        resolve shipment damages efficiently.
                    </p>
                </section>

                {/* Feature Highlights */}
                <section className="damaged-shipment-highlights">
                    <h2 className='heading text-center'>Key Benefits</h2>
                    <ul>
                        <li>One-stop platform for managing all shipment issues.</li>
                        <li>Seamless integration with top shipping carriers.</li>
                        <li>Real-time tracking of damage resolution status.</li>
                        <li>Comprehensive reporting and analytics for strategic insights.</li>
                    </ul>
                </section>

                {/* Detailed Solutions (Cards) */}
                <section className="damaged-shipment-solutions">
                    <h2 className='heading text-center'>Our Solutions</h2>
                    <ul className="damaged-shipment-list">
                        {solutions.map((solution) => (
                            <li key={solution.id} className="damaged-shipment-item">
                                <h3 className="damaged-shipment-title">{solution.title}</h3>
                                <p className="damaged-shipment-description-text">{solution.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default DamagedShipment;
