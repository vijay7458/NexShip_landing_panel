import React from 'react';
import './APIIntegration.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ApiIntegrationImg from '../../../../assets/image/ApiIntegrationImg.png'
import FasterIcon from './Icons/FasterIcon';
import OperationsIcon from './Icons/OperationsIcon';
import SyncingIcon from './Icons/SyncingIcon';
import AutomatedProcessIcon from './Icons/AutomatedProcessIcon';
import Integration from './integrationSection/Integration';
import ApiIntegrationBenefits from './integrationSection/ApiIntegrationBenefits';
import MainApi from './integrationSection/MainApi';
import GenericFaq from '../../../generic/GenericFaq';

const APIIntegration = () => {
    const faqData = [
        {
            question: "What is API integration in logistics?",
            answer:
                "API integration in logistics connects your eCommerce store or order management system directly with a logistics provider like Shipease. It automates order syncing, shipping label generation, tracking, and more—eliminating manual tasks.",
        },
        {
            question: "How does API integration help my business?",
            answer:
                "With API integration, you can sync orders in real time, manage shipments from a single dashboard, reduce manual data entry errors, and speed up the order fulfillment process, improving efficiency and customer satisfaction.",
        },
        {
            question: "Is technical knowledge required to integrate the API?",
            answer:
                "Some basic technical knowledge is helpful, but most logistics APIs come with detailed documentation and support. Your development team or platform provider can usually handle the integration easily.",
        },
        {
            question: "Can I track shipments automatically through the API?",
            answer:
                "Yes, once integrated, you can fetch real-time tracking updates for all your shipments directly through the API or within your integrated system dashboard.",
        },
        {
            question: "What platforms can be connected via the API?",
            answer:
                "You can connect popular platforms like Shopify, WooCommerce, Magento, custom-built sites, or any system that supports API communication to streamline your logistics operations.",
        },
        {
            question: "Will API integration support bulk order processing?",
            answer:
                "Yes, API integration allows you to push and manage bulk orders in one go, saving time and effort, especially during high-volume sales periods.",
        },
    ];


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
                <h1>Streamline processes with seamless API integration for enhanced functionality</h1>
                <p className="page-header-description">Stay connected to your store anytime, anywhere, ensuring seamless monitoring and control</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="api-integration-container">
                {/* <section className="api-integration-intro">
                    <div className="amazon-self-ship-container row">
                        <div className='ool-12 col-md-6'>
                            <h1 className="heading text-center">API Integration</h1>
                            <p className="api-integration-description">
                                Connect your eCommerce store to your Shipease account and manage all your orders from a single platform.
                                Seamlessly sync your website's inventory and catalog to receive incoming orders directly in the panel.
                                Stay updated on new orders while efficiently processing existing ones—ensuring no order is missed.
                                Maintain a flawless workflow and keep operations running smoothly with API integration.
                                Stay on top of your shipments, streamline processes, and never lose track of an order again.
                            </p>
                        </div>
                        <div className='ool-12 col-md-6 d-flex align-items-center justify-content-center'>
                            <img src={ApiIntegrationImg} alt="API Integration" />
                        </div>
                    </div>
                </section> */}

                {/* <section className="api-integration-benefits">
                    <div className="amazon-self-ship-container">
                        <h2 className="heading text-center">How API Integration Will Help You</h2>
                        <div className="api-integration-pointers">
                            <div className="api-integration-pointer-item">
                                <FasterIcon />
                                <div className='mt-3'>
                                    <h3 className="heading">Faster Order Processing</h3>
                                    <p>When you get all orders on one single platform, the processing time is bound to reduce.</p>
                                </div>
                            </div>
                            <div className="api-integration-pointer-item">
                                <OperationsIcon />
                                <div className='mt-3'>
                                    <h3 className="heading">Organized Operations</h3>
                                    <p>With a regular incoming order flow, follow a particular procedure for every shipment.</p>
                                </div>
                            </div>
                            <div className="api-integration-pointer-item">
                                <SyncingIcon />
                                <div className='mt-3'>
                                    <h3 className="heading">On-Demand Syncing</h3>
                                    <p>Sync your catalog and fetch new orders whenever needed, giving you complete control over order management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <MainApi />
                <ApiIntegrationBenefits />
            </div>
            <Integration />
            <div style={{ marginTop: "-5rem" }}>
                <GenericFaq data={faqData} />
            </div>


        </>
    );
};

export default APIIntegration;
