import React from 'react';
import './CarrierIntegration.css';

const CarrierIntegration = () => {
    const courierPartners = [
        { name: 'Bluedart', image: 'https://via.placeholder.com/80?text=Bluedart' },
        { name: 'Ekart', image: 'https://via.placeholder.com/80?text=Ekart' },
        { name: 'Amazon', image: 'https://via.placeholder.com/80?text=Amazon' },
        { name: 'Aramex', image: 'https://via.placeholder.com/80?text=Aramex' },
        { name: 'XpressBees', image: 'https://via.placeholder.com/80?text=XpressBees' },
        { name: 'Delhivery', image: 'https://via.placeholder.com/80?text=Delhivery' },
        { name: 'Shadowfax', image: 'https://via.placeholder.com/80?text=Shadowfax' },
        { name: 'Movin', image: 'https://via.placeholder.com/80?text=Movin' },
        { name: 'Gati', image: 'https://via.placeholder.com/80?text=Gati' },
        { name: 'DHL', image: 'https://via.placeholder.com/80?text=DHL' },
        { name: 'DTDC', image: 'https://via.placeholder.com/80?text=DTDC' },
        { name: 'SMC', image: 'https://via.placeholder.com/80?text=SMC' },
        { name: 'FedEx', image: 'https://via.placeholder.com/80?text=FedEx' },
        { name: 'Xindus', image: 'https://via.placeholder.com/80?text=Xindus' },
        { name: 'Smartr', image: 'https://via.placeholder.com/80?text=Smartr' },
        { name: 'Professional Couriers', image: 'https://via.placeholder.com/80?text=Professional' }
    ];

    return (
        <div className="carrier-integration">
            <header className="carrier-integration__header">
                <h1 className='heading text-center'>Courier Partner Integrations</h1>
            </header>

            <section className="carrier-integration__partners">
                <p className="carrier-integration__description">
                    Seamlessly connect with leading courier partners to ensure efficient and reliable shipping.
                    Our platform supports a wide range of integrations, allowing you to manage shipments effortlessly.
                    Choose the best carrier for your needs and get started in just a few steps.
                </p>
                <div className="carrier-integration__partner-list">
                    {courierPartners.map((partner, index) => (
                        <div key={index} className="carrier-integration__partner-item">
                            <img
                                src={partner.image}
                                alt={`${partner.name} Logo`}
                                className="carrier-integration__partner-image"
                                loading="lazy"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/80?text=No+Image'}
                            />
                            <p className="carrier-integration__partner-name">{partner.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="carrier-integration__trust">
                <h2>Trusted by Thousands of Businesses</h2>
                <p className="carrier-integration__trust-description">
                    Our seamless courier integrations are trusted by thousands of businesses globally.
                    From small startups to large enterprises, we empower companies to streamline their
                    logistics operations with ease and reliability. Join the growing community of satisfied users
                    who rely on our platform to ensure smooth and efficient shipping every day.
                </p>
                <a href="#signup" className="carrier-integration__cta">Join Us Now</a>

                <div className="carrier-integration__trust-icons">
                    <div className="carrier-integration__trust-icon">
                        <img src="https://via.placeholder.com/35?text=Secured" alt="Secured" />
                    </div>
                    <div className="carrier-integration__trust-icon">
                        <img src="https://via.placeholder.com/35?text=Reliable" alt="Reliable" />
                    </div>
                    <div className="carrier-integration__trust-icon">
                        <img src="https://via.placeholder.com/35?text=Fast" alt="Fast" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CarrierIntegration;
