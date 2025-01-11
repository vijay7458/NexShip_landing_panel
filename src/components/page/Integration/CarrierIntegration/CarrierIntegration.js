import React, { useState } from 'react';
import './CarrierIntegration.css';
import { courierPartners } from './courierPartners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const CarrierIntegration = () => {

    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    const [rotate, setRotate] = useState(true);

    setTimeout(() => {
        setRotate(false)
    }, [2000])

    return (
        <>
            <div className="carrier-integration">
                <header className="page-header">
                    {courierPartners.map((partner, index) => (
                        <img key={index} src={partner.image} alt={`Floating Image ${index}`} className={`bubble-image ${rotate ? 'rotate-image' : 'floating-image'}`} />
                    ))}
                    <h1 className=''>Courier integrations that <span className="">expand reach</span> like never before.</h1>
                    <p className="page-header-description">
                        Seamlessly connect with leading courier partners to ensure efficient and reliable shipping.
                    </p>
                    <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
                </header>

                <section className="carrier-integration__partners">
                    <div className='carrier-integration__header'>
                        <h2>Relying on a single option is not an option.</h2>
                        <p>Leveraging multiple courier services to deliver across 24,000+ pin codes in India feels effortless.</p>
                    </div>
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



        </>
    );
};

export default CarrierIntegration;
