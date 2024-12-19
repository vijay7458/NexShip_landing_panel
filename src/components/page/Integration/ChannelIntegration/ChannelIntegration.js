import React from 'react';
import './ChannelIntegration.css';

const platforms = [
    {
        name: 'EasyEcom',
        description: 'AI-powered omnichannel platform for inventory, warehousing, payment reconciliation, and wholesale management.',
        image: 'https://via.placeholder.com/60', // Placeholder image
    },
    {
        name: 'Unicommerce',
        description: 'Efficient e-commerce solutions to simplify courier and logistics management for businesses.',
        image: 'https://via.placeholder.com/60',
    },
    {
        name: 'ClickPost',
        description: 'Comprehensive logistics management platform for businesses of all sizes.',
        image: 'https://via.placeholder.com/60',
    },
    {
        name: 'Vinculum',
        description: 'Integrated courier services as part of Vinculum’s advanced e-commerce and omnichannel solutions.',
        image: 'https://via.placeholder.com/60',
    },
    {
        name: 'OMS Guru',
        description: 'Order fulfillment tools that optimize courier operations for e-commerce businesses.',
        image: 'https://via.placeholder.com/60',
    },
    {
        name: 'EasyShip',
        description: 'All-in-one logistics platform for streamlining courier services and enhancing customer satisfaction.',
        image: 'https://via.placeholder.com/60',
    },
];

const ChannelIntegration = () => {
    return (
        <div className="channel-integration">
            <header className="channel-integration__header">
                <h1 className="channel-integration__title">Expand Your Reach, Ship Seamlessly with Shipease</h1>
                <p className="channel-integration__subtitle">
                    Leverage AI-driven selection to optimize your shipping processes and enhance efficiency.
                </p>
            </header>

            <section className="channel-integration__content">
                <h2 className="channel-integration__section-title">Seamless Integration with Top Platforms</h2>
                <div className="channel-integration__grid">
                    {platforms.map((platform, index) => (
                        <div key={index} className="channel-integration__item">
                            <img
                                src={platform.image}
                                alt={`${platform.name} Logo`}
                                className="channel-integration__image"
                            />
                            <h3>{platform.name}</h3>
                            <p>{platform.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ChannelIntegration;
