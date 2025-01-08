import React from 'react';
import './CarrierIntegration.css';
import Amazon from '../../../../assets/image/Couriers/Integrations/AmazonLogo1.png';
import Bluedart from '../../../../assets/image/Couriers/Integrations/Bluedart.png';
import Delhivery from '../../../../assets/image/Couriers/Integrations/Delhivery.png';
import Dtdc from '../../../../assets/image/Couriers/Integrations/DtdcLogo.png';
import Ecom from '../../../../assets/image/Couriers/Integrations/EcomExpressLogo.png';
import Ekart from '../../../../assets/image/Couriers/Integrations/Ekart1.png';
import Pickndel from '../../../../assets/image/Couriers/Integrations/pickAndDelLogo.png';
import Professional from '../../../../assets/image/Couriers/Integrations/Professional.png';
import Shodowfax from '../../../../assets/image/Couriers/Integrations/ShadowFax.png';
import Smartr from '../../../../assets/image/Couriers/Integrations/SmartRIcon.png';
import Smc from '../../../../assets/image/Couriers/Integrations/ShreeMarutiLogo.png';
import Xpressbees from '../../../../assets/image/Couriers/Integrations/XpressBees1.png';
import Gati from '../../../../assets/image/Couriers/Integrations/GatiLogo.png';
import FedEx from '../../../../assets/image/Couriers/Integrations/FedexLogo.png';
import Dhl from '../../../../assets/image/Couriers/Integrations/DhlLogo.png';
import Movin from '../../../../assets/image/Couriers/Integrations/MovinLogo.png';
import Xindus from '../../../../assets/image/Couriers/Integrations/XindusLogo.png';
import courierPartners from './courierPartners.json'

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
