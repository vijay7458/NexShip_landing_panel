import React from 'react';
import './Career.css';

const Career = () => {
    return (
        <div className="career-page">
            <div className="career-header">
                <h1 className="career-title">Build Your Future with Us</h1>
                <p className="career-subtitle">
                    At ShipEase, we believe in empowering individuals to unlock their full potential. Join us to grow, innovate, and excel in your career.
                </p>
            </div>
            <div className="career-content">
                <div className="career-section">
                    <h2 className="career-heading">Why Work with Us?</h2>
                    <p className="career-text">
                        At ShipEase, we foster a culture of collaboration, innovation, and excellence. Our team is committed to making a real-world impact by solving complex logistics challenges with cutting-edge solutions.
                    </p>
                </div>
                <div className="career-section">
                    <h2 className="career-heading">How We Help Build Your Career</h2>
                    <ul className="career-list">
                        <li>Comprehensive training programs to upskill and grow.</li>
                        <li>Opportunities to work on impactful projects with global reach.</li>
                        <li>A supportive environment that values creativity and individuality.</li>
                        <li>Mentorship programs with industry experts.</li>
                        <li>Flexible work policies that promote work-life balance.</li>
                    </ul>
                </div>
                <div className="career-section no-openings">
                    <h2 className="career-heading">Currently No Open Positions</h2>
                    <p className="career-text">
                        While we don’t have any openings at the moment, we’re always excited to connect with passionate individuals. Keep an eye on this space for future opportunities or send us your resume for future consideration at <a href="mailto:careers@shipease.com">careers@shipease.com</a>.
                    </p>
                </div>
            </div>
            <div className="career-footer">
                <p className="career-footer-text">Join the journey of redefining logistics, one step at a time.</p>
            </div>
        </div>
    );
};

export default Career;
