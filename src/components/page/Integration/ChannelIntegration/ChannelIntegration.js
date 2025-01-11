import React, { useState } from 'react';
import './ChannelIntegration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
        <div className="channel-integration">
            <header className="page-header">
                {platforms.map((partner, index) => (
                    <img key={index} src={partner.image} alt={`Floating Image ${index}`} className={`bubble-image ${rotate ? 'rotate-image' : 'floating-image'}`} />
                ))}
                <h1 className=''>Expand Your Reach, Ship Seamlessly with Shipease</h1>
                <p className="page-header-description">
                    Leverage AI-driven selection to optimize your shipping processes and enhance efficiency.
                </p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
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
