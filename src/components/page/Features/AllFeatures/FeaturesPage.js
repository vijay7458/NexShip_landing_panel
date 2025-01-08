import React from 'react';
import './FeaturesPage.css';
import features from "./features.json"
import ArrowFeature from '../../../../assets/image/arrowFeature.png'

const FeaturesPage = () => {
    return (
        <>
            <div>
                <h1 className="heading text-center mt-5">Our Amazing Features</h1>
            </div>
            <ul id="logistics-feature-cards">
                {features.map((card) => (
                    <li className="logistics-feature-card" key={card.id} id={`card-${card.id}`}>
                        <div className="feature-card-content">
                            <div>
                                <div className='logistics-feature-icon'>
                                    <span>{card.icon}</span>
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
