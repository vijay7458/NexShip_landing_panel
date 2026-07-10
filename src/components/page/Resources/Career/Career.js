import React from 'react';
import './Career.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import OpportunityBG from '../../../../assets/image/OpportunityBG.png';
import CheckIcon from '../../Features/NDRManagement/Icons/CheckIcon';
import AccordionComponent from './AccordionComponent';
import success from '../../../../assets/image/success.webp'
import spirit from '../../../../assets/image/spirit.webp'
import QuickDelivery from '../../../../assets/image/QuickDelivery.webp'
import KeepItSimple from '../../../../assets/image/KeepItSimple.webp'
import DiversityAndInclusion from '../../../../assets/image/DiversityAndInclusion.webp'
import WhoWeAreImageTransparent from '../../../../assets/image/WhoWeAreImageTransparent.png'
import BlobSvg from './BlobSvg';
import CarrerSection from './CarrerUi/CarrerSection';
import { motion } from 'framer-motion';
import img1 from "../../../../assets/image/showing-data-group-people-business-conference-modern-classroom-daytime.jpg"
import img2 from "../../../../assets/image/meeting-2284501_1280.jpg"
import img3 from "../../../../assets/image/brooke-lark-nMffL1zjbw4-unsplash.jpg"
import img4 from "../../../../assets/image/business-3468267.jpg"
import img5 from "../../../../assets/image/work-life-balance-5333818.jpg"


const Career = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    const accordionData = [
        { title: "Customer Success", content: "The success of our customers is at the core of what we do. We succeed when our customers succeed.", image: success },
        { title: "Geeky Spirit", content: "We are curious and passionate about what we do. We thrive when we are continuously raising the bar for ourselves and our team.", image: spirit },
        { title: "Quick Delivery", content: "We work in a highly competitive market and must deliver quality work as fast as possible to stay ahead.", image: QuickDelivery },
        { title: "Keep it Simple", content: "We put all our energy into work and aim for continual progress. ‘We adhere to a flat organizational structure, keeping our communications simple and straight forward.", image: KeepItSimple },
        { title: "Diversity and Inclusion", content: "‘We value talent and drive above all else. We welcome and respect diversity in all its forms - race, language, culture, beliefs, gender, and identity.", image: DiversityAndInclusion },
    ];
    const careerBenefits = [
        {
            title: 'Comprehensive Training',
            description: 'Upskill and grow with our structured training programs designed for continuous learning.',
            image: img1,
        },
        {
            title: 'Impactful Projects',
            description: 'Work on real-world projects that create value and reach a global audience.',
            image: img2,
        },
        {
            title: 'Creative Freedom',
            description: 'Thrive in a culture that celebrates creativity and encourages individuality.',
            image: img3,
        },
        {
            title: 'Expert Mentorship',
            description: 'Learn from experienced industry leaders and mentors who guide your journey.',
            image: img4,
        },
        {
            title: 'Work-Life Balance',
            description: 'Enjoy flexible policies that support your health, happiness, and productivity.',
            image: img5,
        },
    ];

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
            <CarrerSection />

            <div className="career-page">
                <div className="career-content">
                    {/* <section className="career-section">
                        <div className='amazon-self-ship-container'>
                            <div className='row align-items-center justify-content-between'>
                                <div className='col-12 col-md-6 whoweare-img'>
                                    <img src={WhoWeAreImageTransparent} alt="" />
                                    <BlobSvg />
                                </div>
                                <div className='col-12 col-md-6'>
                                    <h2 className="heading text-center">Why Work with Us?</h2>
                                    <p style={{ textAlign: 'justify' }}>
                                        At ShipEase, we cultivate a dynamic work environment built on collaboration, innovation, and a commitment to excellence. Our team thrives on solving complex logistics challenges, continuously pushing the boundaries of technology to develop cutting-edge solutions. We believe in fostering a culture where creativity and problem-solving go hand in hand, empowering our employees to think outside the box and drive meaningful change. By leveraging advanced technology and data-driven strategies, we streamline logistics processes, enhance operational efficiency, and deliver seamless solutions that create a real-world impact. Our goal is not just to keep up with the evolving industry landscape but to lead the way in redefining logistics with smarter, more efficient, and customer-centric solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> */}


                    <section className='w-100 d-flex justify-content-center'>
                        <div className='amazon-self-ship-container'>
                            <h2 style={{ color: "#1975c9", marginTop: "-4rem", marginBottom: "20px" }} className="heading text-center">Our Values</h2>
                            <AccordionComponent items={accordionData} />
                        </div>
                    </section>
                    {/* <section className="career-section">
                        <div className='amazon-self-ship-container'>
                            <h2 className="heading text-center">How We Help Build Your Career</h2>
                            <div className='row align-items-center mt-4'>
                                <div className='col-12 col-md-6'>
                                    <ul className="career-list">
                                        <li><CheckIcon />Comprehensive training programs to upskill and grow.</li>
                                        <li><CheckIcon />Opportunities to work on impactful projects with global reach.</li>
                                        <li><CheckIcon />A supportive environment that values creativity and individuality.</li>
                                        <li><CheckIcon />Mentorship programs with industry experts.</li>
                                        <li><CheckIcon />Flexible work policies that promote work-life balance.</li>
                                    </ul>
                                </div>
                                <div className='career-image-sec col-12 col-md-6'>
                                    <img src={OpportunityBG} alt="" />
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="career-growth-wrapper">
                        <motion.h2
                            className="career-growth-title"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            How We Help Build Your Career
                        </motion.h2>

                        <div className="container career-grid">
                            {careerBenefits.map((item, idx) => (
                                <motion.div
                                    className="career-card"
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <img src={item.image} alt={item.title} className="career-image" />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section>

                    </section>
                    {/* <section  className="career-section no-openings">
                        <div className='amazon-self-ship-container'>
                            <p className="career-text">
                                While we don’t have any openings at the moment, we’re always excited to connect with passionate individuals. Keep an eye on this space for future opportunities or send us your resume for future consideration at <a href="mailto:hr@shipease.in">hr@shipease.in</a>.
                            </p>
                        </div>
                    </section> */}
                </div>
                {/* <section className="career-footer">
                    <div className='amazon-self-ship-container'>
                        <h2 className="career-footer-text">
                            Join the journey of redefining logistics,<br />one step at a time.
                        </h2>
                    </div>
                </section> */}

            </div>
           <div className="m-2 m-sm-2 m-lg-4">
                {/* Join the Journey Section */}
                <motion.div
                    className="why-cta-section"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        While we don’t have any openings at the moment,<br /> we’re always excited to connect with passionate individuals.<br /><p className='mt-4'> Keep an eye on this space for future opportunities or send us your resume for future consideration at </p><a className="cta-button" href="mailto:hr@shipease.in">hr@shipease.in</a>
                    </h2>

                </motion.div>
            </div>
            {/* <div className='m-4'>
                <motion.div
                    className="why-cta-section"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Join the journey of redefining logistics,<br />one step at a time.</h2>
                    <p>
                        Be part of a team where innovation meets impact. At ShipEase, your work creates real change.
                    </p>
                    <a href="/careers" className="cta-button">Explore Careers</a>
                </motion.div>
            </div> */}

        </>
    );
};

export default Career;
