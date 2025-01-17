import React from 'react';
import './ReferAndEarn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import BoostIcon from './Icons/BoostIcon';
import RewardsIcon from './Icons/RewardsIcon';
import GrowIcon from './Icons/GrowIcon';

const ReferAndEarn = () => {
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
                <h1>Refer a Business, Earn Big!</h1>
                <p className="page-header-description">As a trusted logistics partner, you can now earn rewards by referring other businesses to join our platform.
                    Help them streamline their logistics and grow your rewards in the process.
                    Start referring today and benefit from every successful onboarding</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="refer-and-earn">
                {/* <header className="refer-and-earn__header">
                    <h1 className='heading text-center'>Refer a Business, Earn Big!</h1>
                    <p className="refer-and-earn__description">
                        As a trusted logistics partner, you can now earn rewards by referring other businesses to join our platform.
                        Help them streamline their logistics and grow your rewards in the process.
                        Start referring today and benefit from every successful onboarding.
                    </p>
                </header> */}

                <section className="refer-and-earn__benefits">
                    <h2>Why Refer Other Businesses?</h2>
                    <div className="refer-and-earn__benefit-list">
                        <div className="refer-and-earn__benefit-item">
                            {/* <img
                                src="https://via.placeholder.com/150?text=Benefit+1"
                                alt="Benefit 1"
                                className="refer-and-earn__benefit-image"
                            /> */}
                            <div className='my-3'>
                                <GrowIcon />
                            </div>
                            <h3>Grow Your Network</h3>
                            <p>Expand your network of business partners while helping other companies streamline their logistics operations.</p>
                        </div>
                        <div className="refer-and-earn__benefit-item">
                            {/* <img
                                src="https://via.placeholder.com/150?text=Benefit+2"
                                alt="Benefit 2"
                                className="refer-and-earn__benefit-image"
                            /> */}
                            <div className='my-3'>
                                <RewardsIcon />
                            </div>
                            <h3>Exclusive Rewards</h3>
                            <p>Earn financial incentives and exclusive perks for every successful referral that joins our platform.</p>
                        </div>
                        <div className="refer-and-earn__benefit-item">
                            {/* <img
                                src="https://via.placeholder.com/150?text=Benefit+3"
                                alt="Benefit 3"
                                className="refer-and-earn__benefit-image"
                            /> */}
                            <div className='my-3'>
                                <BoostIcon />
                            </div>
                            <h3>Boost Your Business</h3>
                            <p>By referring businesses to our platform, you not only help them optimize their logistics, but also enhance your own business growth.</p>
                        </div>
                    </div>
                </section>

                <section className="refer-and-earn__how-it-works">
                    <h2>How It Works</h2>
                    <div className="refer-and-earn__steps-list">
                        <div className="refer-and-earn__step">
                            <h3>Step 1: Get Your Referral Link</h3>
                            <p>Sign up to get your unique referral link. Share it with other businesses in your network to help them discover our logistics platform.</p>
                        </div>
                        <div className="refer-and-earn__step">
                            <h3>Step 2: Share and Connect</h3>
                            <p>Send your referral link via email, social media, or direct contact, and invite businesses to join our platform.</p>
                        </div>
                        <div className="refer-and-earn__step">
                            <h3>Step 3: Earn Rewards</h3>
                            <p>When a business you referred signs up and successfully starts using our services, you’ll receive rewards based on their engagement.</p>
                        </div>
                    </div>
                </section>

                <section className="refer-and-earn__cta">
                    <button className="btn main-button">Get My Referral Link</button>
                </section>

                <section className="refer-and-earn__faq">
                    <h2>Frequently Asked Questions</h2>
                    <div className="refer-and-earn__faq-item">
                        <h3>How do I earn rewards?</h3>
                        <p>For every business that signs up through your referral link and uses our platform for shipping, you earn rewards, including monetary bonuses and platform credits.</p>
                    </div>
                    <div className="refer-and-earn__faq-item">
                        <h3>Is there a limit to how many businesses I can refer?</h3>
                        <p>No, there’s no limit! The more businesses you refer, the more rewards you can earn!</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ReferAndEarn;
