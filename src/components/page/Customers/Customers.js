import React, { useRef } from 'react';
import './Customers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import CustomerCarousel from './CustomerCarousel';
import Curefit from "../../../assets/image/clients/curefit.png"
import XYXX from "../../../assets/image/clients/xyxx.png"
import RareRabbit from "../../../assets/image/clients/rareRabbit.jpeg"
import TheAyurvedaExperience from "../../../assets/image/clients/ayurveda.png"
import SwissMilitary from "../../../assets/image/clients/swissMilitary.png"
import { motion } from 'framer-motion';


const Customers = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: 'smooth',
        });
    };



    const Testimonials = [
        {
            id: "1",
            name: "Aabhar Ventures",
            designation: "CEO",
            company_name: "Aabhar Ventures",
            company_logo: "/images/xyz-retail-logo.png",
            message: "ShipEase has transformed our logistics operations, providing seamless order fulfillment and faster deliveries. A true game-changer!"
        },
        {
            id: "2",
            name: "ASM Traders",
            designation: "Operations Manager",
            company_name: "ASM Traders",
            company_logo: "/images/abc-electronics-logo.png",
            message: "The real-time tracking and automated solutions have significantly improved our supply chain efficiency. Highly recommended!"
        },
        {
            id: "3",
            name: "Atomic Food",
            designation: "Founder",
            company_name: "Atomic Food",
            company_logo: "/images/global-fashion-hub-logo.png",
            message: "With ShipEase, we’ve streamlined our shipping process, reduced delays, and improved customer satisfaction. It's a must-have for eCommerce brands!"
        },
        {
            id: "4",
            name: "Tatsat Ayurveda",
            designation: "Logistics Head",
            company_name: "Tatsat Ayurveda",
            company_logo: "/images/home-essentials-logo.png",
            message: "The AI-driven recommendations and cost-effective shipping solutions have been invaluable for our growing business. Fantastic service!"
        },
        {
            id: "5",
            name: "Zoe Nails",
            designation: "Supply Chain Director",
            company_name: "Zoe Nails",
            company_logo: "/images/techgear-solutions-logo.png",
            message: "ShipEase provides unmatched visibility into our logistics, allowing us to optimize routes and reduce shipping costs. Highly efficient!"
        }
    ];



    const metrics = [
        { value: '75%', label: 'Decrease in WISMO inquiries' },
        { value: '55', label: 'Point improvement in NPS score' },
        { value: '30%', label: 'Growth in repeat purchases' },
        { value: '50%', label: 'Boost in customer retention' },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
        }),
    };
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left')
            current.scrollBy({ left: -300, behavior: 'smooth' });
        else current.scrollBy({ left: 300, behavior: 'smooth' });
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
                <h1>Over 100,000+ brands trust ShipEase's logistics.</h1>
                <p className="page-header-description">  At <strong>ShipEase</strong>, we provide seamless, efficient, and
                    cost-effective logistics solutions that help businesses scale without
                    logistical barriers. Our trusted clients range from startups to global
                    enterprises, all relying on us to streamline their supply chain.</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>

            <div className="customers-page">

                {/* <section className='customer-counts'>
                    <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center">Enhance your customer's experience with ShipEase.</h2>
                        <p className='customer-counts-des'>Our platform optimizes supply chain efficiency, reduces operational costs, and enhances customer satisfaction, driving long-term business growth.</p>
                        <ul>
                            <li>
                                <p>75%</p>
                                <p>Decrease in WISMO inquiries</p>
                            </li>
                            <li>
                                <p>55</p>
                                <p>Point improvement in NPS score</p>
                            </li>
                            <li>
                                <p>30%</p>
                                <p>Growth in repeat purchases</p>
                            </li>
                            <li>
                                <p>50%</p>
                                <p>Boost in customer retention</p>
                            </li>
                        </ul>
                    </div>
                </section> */}

                <section className='customer-metrics-section'>
                    <div className='customer-metrics-container'>
                        <motion.h2
                            className="metrics-heading text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        >
                            Enhance your customer's experience with ShipEase.
                        </motion.h2>

                        <motion.p
                            className='metrics-description'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={1}
                        >
                            Our platform optimizes supply chain efficiency, reduces operational costs, and enhances customer satisfaction, driving long-term business growth.
                        </motion.p>

                        <ul className='metrics-list'>
                            {metrics.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className='metric-item'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    custom={index + 2}
                                >
                                    <p className='metric-value'>{item.value}</p>
                                    <p className='metric-label'>{item.label}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Trusted By */}
                <section section className="trusted-by" >
                    <h2 className="heading text-center">Trusted By Leading Brands</h2>
                    <p>Our logistics network supports a diverse range of industries.</p>
                    <div className="brands-logos">
                        <img src={Curefit} alt="Brand 1" />
                        <img src={SwissMilitary} alt="Brand 2" />
                        <img src={TheAyurvedaExperience} alt="Brand 3" />
                        <img src={RareRabbit} alt="Brand 4" />
                        <img src={XYXX} alt="Brand 4" />
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className="customer-testimonials">
                    <div className='amazon-self-ship-container'>
                        <div style={{ display: "flex", justifyContent: "space-around", position: "relative" }}>
                            {/* <div></div> */}
                            <h2 className="heading text-center">What Our Clients Say</h2>
                            <div className="testimonial-controls">
                                <button className='btn-first' onClick={() => scroll('left')}>←</button>
                                <button className='btn-second' onClick={() => scroll('right')}>→</button>
                            </div>
                        </div>

                        {/* <div className="testimonials-container">
                            {Testimonials.map((item, id) => (
                                <div key={id} className="testimonial-card">
                                    <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                                    <p>"{item.message}"</p>
                                    <span>{item.designation}, {item.company_name}</span>
                                </div>
                            ))}
                        </div> */}
                    </div>
                    {/* slider -- component  */}
                    <div className="testimonial-wrapper">


                        <div className="testimonial-scroll" ref={scrollRef}>
                            {Testimonials?.map((item, index) => (
                                <div className="testimonial-card" key={item?.id}>
                                    <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                                    <p>"{item.message}"</p>
                                    <span>{item.designation}, {item.company_name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>




                {/* Case Studies */}
                <section section className="case-studies" >
                    <h2 className="heading text-center">Success Stories</h2>
                    <div className="case-studies-container">
                        <div className="case-study-card">
                            <h3 className='heading text-center'>Retail Giant<br /> Optimizes Logistics</h3>
                            <p>By integrating our AI-driven route optimization, a leading retail chain
                                reduced delivery costs by 30%.</p>
                        </div>
                        <div className="case-study-card">
                            <h3 className='heading text-center'>E-commerce Startup<br /> Scales Rapidly</h3>
                            <p>Our fulfillment centers enabled a startup to process 50,000+ orders monthly
                                with zero delays.</p>
                        </div>
                    </div>
                </section>

                {/* <section className='customer-carousel'>
                    <div className='amazon-self-ship-container'>
                        <CustomerCarousel />
                    </div>
                </section> */}

                {/* Get Started */}
                <section section  >
                    {/* <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center">Partner With Us</h2>
                        <p>Join the growing network of businesses that trust <strong>ShipEase</strong> for efficient logistics solutions. Get started today!</p>
                        <button className="btn main-button">Get Started</button>
                    </div> */}

                    <div className="m-2 m-sm-2 m-lg-4">
                        {/* Join the Journey Section */}
                        <motion.div
                            className="why-cta-section"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>
                               Join the growing network of businesses that trust <strong>ShipEase</strong> for efficient logistics solutions. Get started today!<br />
                                <a className="cta-button">Get Started</a>
                            </h2>

                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Customers;
