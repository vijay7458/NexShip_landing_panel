import React from 'react';
import './Career.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import OpportunityBG from '../../../../assets/image/OpportunityBG.png';
import CheckIcon from '../../Features/NDRManagement/Icons/CheckIcon';

const Career = () => {
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
                <h1>Join Us to Build a Stronger Future Together</h1>
                <p className="page-header-description"> At ShipEase, we believe in empowering individuals to unlock their full potential. Join us to grow, innovate, and excel in your career</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="career-page">
                <div className="career-content">
                    <section className="career-section">
                        <div className='amazon-self-ship-container'>
                            <h2 className="heading text-center">Why Work with Us?</h2>
                            <p className='text-center'>
                                At ShipEase, we foster a culture of collaboration, innovation, and excellence. Our team is committed to making a real-world impact by solving complex logistics challenges with cutting-edge solutions.
                            </p>
                        </div>
                    </section>
                    <section className="career-section">
                        <div className='amazon-self-ship-container'>
                            <h2 className="heading text-center">How We Help Build Your Career</h2>
                            <div className='row align-items-center mt-4'>
                                <div className='col-6'>
                                    <ul className="career-list">
                                        <li><CheckIcon />Comprehensive training programs to upskill and grow.</li>
                                        <li><CheckIcon />Opportunities to work on impactful projects with global reach.</li>
                                        <li><CheckIcon />A supportive environment that values creativity and individuality.</li>
                                        <li><CheckIcon />Mentorship programs with industry experts.</li>
                                        <li><CheckIcon />Flexible work policies that promote work-life balance.</li>
                                    </ul>
                                </div>
                                <div className='career-image-sec col-6'>
                                    <img src={OpportunityBG} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="career-section no-openings">
                        <div className='amazon-self-ship-container'>
                            {/* <h2 className="heading text-center">Currently No Open Positions</h2> */}
                            <p className="career-text">
                                While we don’t have any openings at the moment, we’re always excited to connect with passionate individuals. Keep an eye on this space for future opportunities or send us your resume for future consideration at <a href="mailto:hr@shipease.in">hr@shipease.in</a>.
                            </p>
                        </div>
                    </section>
                </div>
                <section className="career-footer">
                    <p className="career-footer-text">Join the journey of redefining logistics, one step at a time.</p>
                </section>
            </div>
        </>
    );
};

export default Career;
