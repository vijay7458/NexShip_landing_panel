import React, { useState } from 'react';
import './ChannelIntegration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import EasyCommLogo from '../../../../assets/image/Channels/EasyCommLogo.png'
import UCLogo from '../../../../assets/image/Channels/UCLogo.png'
import ClickPostLogo from '../../../../assets/image/Channels/ClickPostLogo.png'
import OmsGuruLogo from '../../../../assets/image/Channels/OmsGuruLogo.png'
import EasyShipLogo from '../../../../assets/image/Channels/EasyShipLogo.png'
import VinculumLogo from '../../../../assets/image/Channels/VinculumLogo.png'
import { CarrierPartners } from './CarrierPartners';

const platforms = [
    {
        name: 'EasyEcom',
        image: EasyCommLogo,
    },
    {
        name: 'Unicommerce',
        image: UCLogo,
    },
    {
        name: 'ClickPost',
        image: ClickPostLogo,
    },
    {
        name: 'OMS Guru',
        image: OmsGuruLogo,
    },
    {
        name: 'EasyShip',
        image: EasyShipLogo,
    },

    {
        name: 'VinculumLogo',
        image: VinculumLogo,
    },
]

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
                    {CarrierPartners.map((platform, index) => (
                        <div key={index} className="channel-integration__item">
                            <div className='ci-image-container'>
                                <img
                                    src={platform.image}
                                    alt={`${platform.name} Logo`}
                                    className="channel-integration__image"
                                />
                            </div>
                            {/* <h3>{platform.name}</h3> */}
                            <p>{platform.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ChannelIntegration;
