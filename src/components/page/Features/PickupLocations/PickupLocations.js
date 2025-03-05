import React, { useEffect, useRef, useState } from 'react';
import './PickupLocations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MultiplePickupBG from '../../../../assets/image/MultiplePickupBG.png'
import FaqBg from '../../../../assets/image/FAQ-bg.svg'
import FasterDeliveryIcom from './Icons/FasterDeliveryIcom';
import ConvenienceIcon from './Icons/ConvenienceIcon';
import CostSavingsIcon from './Icons/CostSavingsIcon';

const PickupLocations = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    const [activeId, setActiveId] = useState(1); // Default to first FAQ
    const [height, setHeight] = useState({});
    const faqRefs = useRef({}); // To store references for each FAQ answer container

    useEffect(() => {
        if (activeId) {
            const currentHeight = faqRefs.current[activeId]?.scrollHeight || 0;
            setHeight((prevHeight) => ({ ...prevHeight, [activeId]: currentHeight }));
        }
    }, [activeId]);

    const toggleFAQ = (id) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    const faqData = [
        {
            id: 1,
            question: "What are the advantages of using Multiple Pickup Locations?",
            answer:
                "Using multiple pickup locations can significantly streamline your logistics operations. If you run a business with several warehouses or branches, you no longer need to ship products separately from each location. By scheduling pickups from all your locations, you can ship orders from any of your warehouses at the same time, saving time, reducing manual work, and allowing you to manage your shipments efficiently from anywhere in the world.",
            link: {
                url: "https://www.shipease.in/blog/ecommerce-multi-pickup-locations-facility/",
                text: "Read More",
            },
        },
        {
            id: 2,
            question: "How can I start adding multiple pickup locations?",
            answer:
                "To get started with adding multiple pickup locations, simply follow these steps: Navigate to the 'Settings' menu, select 'Pickup Address', and click on 'Add Pickup Addresses'. This will allow you to input your additional pickup addresses. Once added, you can start scheduling pickups for those locations.",
        },
        {
            id: 3,
            question: "Is it possible to edit the addresses I’ve added?",
            answer:
                "Yes, you can easily edit the addresses you've previously added. To do so, go to 'Settings' → 'Pickup Address' → 'Manage Pickup Addresses'. Here, you'll find a list of all the addresses you've entered, and you can modify the details or delete them if necessary. This flexibility ensures that your address details are always up-to-date.",
        },
        {
            id: 4,
            question: "Do I need to follow additional steps to set up multiple locations?",
            answer:
                "There are no complicated or additional steps to set up multiple pickup locations. Simply log into your Shipease account, go to the 'Settings' section, and add the addresses you want to use. Once you've entered your pickup addresses, you're ready to start scheduling pickups for those locations without any further setup.",
            link: {
                url: "http://app.shipease.in/register",
                text: "Get Started",
            },
        },
        {
            id: 5,
            question: "Is there an additional fee for adding multiple pickup locations?",
            answer:
                "No, there are no extra fees for adding multiple pickup locations. You can add as many pickup addresses as needed at no additional cost. This is part of the flexibility that Shipease offers to help you manage your business more effectively without worrying about additional charges for logistics.",
        },
    ];





    return (
        <div className="pickup-locations">
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1>Effortlessly Manage and Streamline Your Pickup Locations</h1>

                <p className="page-header-description">Simplify your logistics by adding and managing multiple pickup locations effortlessly.
                </p>

                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>

            <section className="pickup-locations__section">
                <div className='amazon-self-ship-container'>
                    <h2 className="heading text-center">How to Manage Pickup Locations</h2>
                    <div className="pickup-locations__steps">
                        <div className="pickup-locations__step">
                            <h3 className="pickup-locations__step-title">Add New Pickup Address</h3>
                            <p>Go to <b>Settings &gt; Warehouses</b>, click <b>Manage Warehouses</b>, and click <b>Add Warehouse</b>.</p>
                        </div>
                        <div className="pickup-locations__step">
                            <h3 className="pickup-locations__step-title">Edit Existing Pickup Address</h3>
                            <p>Go to <b>Settings &gt; Warehouses &gt; Manage Warehouses</b>, select an address and click the edit icon to change details.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pickup-locations__benefits">
                <div className='amazon-self-ship-container'>
                    <h2 className="heading text-center">Why You Should Optimize Your Pickup Locations</h2>
                    <div className='row'>
                        <div className='col-12 col-lg-6 pickup-benefits-items'>
                            <div className="pickup-locations__benefit">
                                <FasterDeliveryIcom />
                                <h3 className="pickup-locations__benefit-title">Faster Delivery</h3>
                                <p>Select the nearest pickup location to reduce transit time, enabling faster deliveries and better customer satisfaction.</p>
                            </div>
                            <div className="pickup-locations__benefit">
                                <ConvenienceIcon />
                                <h3 className="pickup-locations__benefit-title">Convenient & Flexible</h3>
                                <p>Upload bulk pickup addresses with ease. Add and manage as many locations as needed for maximum convenience.</p>
                            </div>
                            <div className="pickup-locations__benefit">
                                <CostSavingsIcon />
                                <h3 className="pickup-locations__benefit-title">Cost Savings</h3>
                                <p>Reduce shipping costs by selecting a nearby pickup location, minimizing transportation expenses.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center'>
                            <img className='pickup-benefits-bg' src={MultiplePickupBG} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pickup-locations__faqs-section">
                <div className='amazon-self-ship-container position-relative'>
                    <div className='pickup-locations-faq-bg'>
                        <img src={FaqBg} alt="" />
                    </div>
                    <p className='subtitle text-center mb-3'>FAQ</p>
                    <h2 className="heading text-center">Frquently Asked Questions <br />
                        <span className='pickup-locations__subtitle'>about Multiple Pickup Locations</span>
                    </h2>
                    <div className="pickup-locations__faqs-list">
                        {faqData.map(({ id, question, answer, link }) => (
                            <div
                                key={id}
                                className={`pickup-locations__faq-item ${activeId === id ? "active" : ""}`}
                                onClick={() => toggleFAQ(id)}
                            >
                                <strong className="pickup-locations__faq-question">{question}</strong>
                                <div
                                    className="pickup-locations__faq-answer-container"
                                    style={{
                                        maxHeight: activeId === id ? `${height[id]}px` : '0',
                                        overflow: "hidden",
                                        transition: "max-height 0.3s ease, margin 0.3s ease",
                                        marginTop: activeId === id ? "30px" : "0",
                                    }}
                                    ref={(el) => (faqRefs.current[id] = el)}
                                >
                                    <p className="pickup-locations__faq-answer">{answer}</p>
                                    {link && (
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pickup-locations__faq-link"
                                        >
                                            {link.text}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default PickupLocations;
