import React from 'react';
import './FeaturesPage.css';
import features from "./features"
import ArrowFeature from '../../../../assets/image/arrowFeature.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const FeaturesPage = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
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
                <h1 className=''>Comprehensive Features for an Effortless Logistics Experience</h1>
                <p className="page-header-description">
                    Partner with the Leading Logistics Platform to Ensure Timely Deliveries for Your Customers
                </p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div>
                <h1 className="heading text-center mt-5">Our Amazing Features</h1>
            </div>
            <ul id="logistics-feature-cards">
                {features.map((card) => (
                    <li className="logistics-feature-card" key={card.id} id={`card-${card.id}`}>
                        <div className="feature-card-content">
                            <div>
                                <div className='logistics-feature-icon'>
                                    {
                                        card.iconNew ?
                                            <card.iconNew /> :
                                            <span>{card.icon}</span>
                                    }
                                </div>
                                <div style={{ maxWidth: 'calc(100% - 70px' }}>
                                    <h2>{card.title}</h2>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                            <ul className='benefit-list'>
                                {card.benefits.map((benefit, i) => (
                                    <li key={i} className="benefit-item">
                                        <img src={ArrowFeature} alt="ArrowFeature" /> {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FeaturesPage;
