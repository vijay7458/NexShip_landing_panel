import React from 'react';
import './Customers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import CustomerCarousel from './CustomerCarousel';
import Curefit from "../../../assets/image/clients/curefit.png"
import XYXX from "../../../assets/image/clients/xyxx.png"
import RareRabbit from "../../../assets/image/clients/rareRabbit.jpeg"
import TheAyurvedaExperience from "../../../assets/image/clients/ayurveda.png"
import SwissMilitary from "../../../assets/image/clients/swissMilitary.png"

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
            company_name: "aabhar ventures",
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

                <section className='customer-counts'>
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
                </section>


                {/* Customer Testimonials */}
                <section className="customer-testimonials">
                    <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center">What Our Clients Say</h2>
                        <div className="testimonials-container">
                            {Testimonials.map((item, id) => (
                                <div key={id} className="testimonial-card">
                                    <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
                                    <p>"{item.message}"</p>
                                    {/* <h4>{item.name}</h4> */}
                                    <span>{item.designation}, {item.company_name}</span>
                                </div>
                            ))}
                        </div>
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
                <section section className="get-started" >
                    <div className='amazon-self-ship-container'>
                        <h2 className="heading text-center">Partner With Us</h2>
                        <p>Join the growing network of businesses that trust <strong>ShipEase</strong> for efficient logistics solutions. Get started today!</p>
                        <button className="btn main-button">Get Started</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Customers;
