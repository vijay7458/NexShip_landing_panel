import React from 'react';
import './FeaturesPage.css';
import features from "./features.json"
import ArrowFeature from '../../../../assets/image/arrowFeature.png'

const featureCards = [
    { id: 1, title: "Card One", content: "This is the content of card one.", imgSrc: "https://assets.codepen.io/210284/flower-9.jpg", alt: "card one" },
    { id: 2, title: "Card Two", content: "This is the content of card two.", imgSrc: "https://assets.codepen.io/210284/flower-8.jpg", alt: "card two" },
    { id: 3, title: "Card Two", content: "This is the content of card two.", imgSrc: "https://assets.codepen.io/210284/flower-8.jpg", alt: "card two" },
    { id: 4, title: "Card Two", content: "This is the content of card two.", imgSrc: "https://assets.codepen.io/210284/flower-8.jpg", alt: "card two" },
    { id: 5, title: "Card Two", content: "This is the content of card two.", imgSrc: "https://assets.codepen.io/210284/flower-8.jpg", alt: "card two" },
    // Add more cards here
];

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
