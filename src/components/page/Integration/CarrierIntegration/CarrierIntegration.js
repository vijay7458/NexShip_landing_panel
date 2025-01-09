import React from 'react';
import './CarrierIntegration.css';
import { courierPartners } from './courierPartners';

const CarrierIntegration = () => {

    return (
        <div className="carrier-integration">
            <header className="carrier-integration__header">
                <h1 className='heading text-center'>Courier Partner Integrations</h1>
            </header>

            <section className="carrier-integration__partners">
                <p className="carrier-integration__description">
                    Seamlessly connect with leading courier partners to ensure efficient and reliable shipping.
                </p>
                <div className="carrier-integration__partner-list">
                    {courierPartners.map((partner) => (
                        <div key={partner.id} className="carrier-integration__partner-item">
                            <img
                                src={partner.image}
                                alt={`${partner.name} Logo`}
                                className="carrier-integration__partner-image"
                                loading="lazy"
                                onError={(e) => e.target.src = 'https://via.placeholder.com/80?text=No+Image'}
                            />
                            <h3 className="carrier-integration__partner-name">{partner.name}</h3>
                            <p className="carrier-integration__partner-tagline">{partner.tagline}</p>
                            <ul className="carrier-integration__partner-features">
                                {partner.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button className="carrier-integration__partner-cta">Learn More</button>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
};

export default CarrierIntegration;
