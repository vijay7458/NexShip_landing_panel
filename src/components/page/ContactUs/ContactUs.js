import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import MapboxComponent from './MapboxComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ShopifyLogo from "../../../assets/image/Channels/logo/shopify.jpg"
import AmazonLogo from "../../../assets/image/Channels/logo/AmazonLogo.png"
import WooLogo from "../../../assets/image/Channels/logo/WCLogo.png"
import HippoLogo from "../../../assets/image/Channels/logo/StoreHippo.png"
import MagentoLogo from "../../../assets/image/Channels/logo/magento.png"
import CustomLogo from "../../../assets/image/Channels/logo/Manual.png"
import { Button, Modal } from 'react-bootstrap';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        type: '',
        first_name: '',
        mobile: '',
        company_name: '',
        website: '',
        email: '',
        monthly_shipment: '',
        channel_name: []
    });

    const [error, seterror] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            channel_name: checked
                ? [...formData.channel_name, name]
                : formData.channel_name.filter(channel => channel !== name)
        });
    };

    const [showModal, setShowModal] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://app.shipease.in/core-api/seller/contact-us/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();
            console.log('Success:', data);
            setShowModal(true); // show modal on success
            seterror(false)
        } catch (error) {
            console.error('Error submitting form:');
            seterror(true)
            setShowModal(true);
            // alert("Something went wrong. Please try again.");
        }
    };

    useEffect(() => {
        if (!showModal) {
            setFormData({
                type: '',
                first_name: '',
                mobile: '',
                company_name: '',
                website: '',
                email: '',
                monthly_shipment: '',
                channel_name: []
            })
            seterror(false)
        }
    }, [showModal])


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
                <h1>Got questions? We're here to listen and assist!</h1>
                <p className="page-header-description">Our team is skilled, prepared, and dedicated to guiding you from start to success.</p>
                <button onClick={handleScroll} className='btn main-button'>Contact Us <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="contact-us">
                {/* <header className="contact-us__header">
                    <h1 className='heading text-center'>Contact Us</h1>
                    <p>Have any questions? We're here to help you.</p>
                </header> */}

                <section className="contact-us__container">
                    <section className="contact-us__info">
                        <h2 className='heading text-center'>Contact Information</h2>
                        <div className="contact-us__details">
                            <div className="contact-us__detail">
                                <h3>Email</h3>
                                <p>sales@shipease.in</p>
                            </div>
                            <div className="contact-us__detail">
                                <h3>Phone</h3>
                                <p>+91 97172 00551</p>
                            </div>

                            <div className="contact-us__detail">
                                <h3>Office Address</h3>
                                <p>Unit 321, Tower B1, M3M Cosmopolitan, Sector-66, Gurugram, Haryana, Pin-122101</p>
                            </div>
                            <div className='contact-us__detail p-0'>
                                <MapboxComponent />
                            </div>
                        </div>
                    </section>

                    <section className="contact-us__form">
                        <h2 className='heading text-center'>Get in Touch with Us</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="contact-us__form-group">
                                <label htmlFor="type">I am a:</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                >
                                    {/* <option value="">Select type</option> */}
                                    <option value="Business">Business</option>
                                    <option value="Customer">Customer</option>
                                </select>
                            </div>

                            <div className="contact-us__form-group">
                                <label htmlFor="first_name">Your Name:</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter your name'
                                />
                            </div>

                            <div className="contact-us__form-group">
                                <label htmlFor="mobile">Mobile Number:</label>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        if (/^\d{0,10}$/.test(val)) {
                                            handleChange(e);
                                        }
                                    }}
                                    required
                                    placeholder='Enter your mobile number'
                                />
                            </div>

                            <div className="contact-us__form-group">
                                <label htmlFor="company_name">Company Name:</label>
                                <input
                                    type="text"
                                    id="company_name"
                                    name="company_name"
                                    value={formData.company_name}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter your company name'
                                />
                            </div>

                            <div className="contact-us__form-group">
                                <label htmlFor="website">Company URL:</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder='Enter your company URL'
                                />
                            </div>

                            <div className="contact-us__form-group">
                                <label htmlFor="email">Email Address:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='Enter your email address'
                                />
                            </div>

                            <div className="contact-us__form-group">
                                <label htmlFor="monthly_shipment">Monthly Shipments:</label>
                                <select
                                    name="monthly_shipment"
                                    value={formData.monthly_shipment}
                                    onChange={handleChange}
                                    required
                                    placeholder="Select your monthly shipments"
                                >
                                    {/* <option value="">Select your monthly shipments</option> */}
                                    <option value="less than 100">Less than 100</option>
                                    <option value="100-1000">100 to 1000</option>
                                    <option value="1000-5000">1000 to 5000</option>
                                    <option value="more than 5000">More than 5000</option>
                                </select>
                            </div>

                            <div className="contact-us__form-group">
                                <label>Preferred Channels (select multiple):</label>
                                <div className="contact-us__channels">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Shopify"
                                            checked={formData.channel_name.includes('Shopify')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <img src={ShopifyLogo} alt="" />Shopify
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Amazon"
                                            checked={formData.channel_name.includes('Amazon')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <img src={AmazonLogo} alt="" />Amazon
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="WooCommerce"
                                            checked={formData.channel_name.includes('WooCommerce')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <img src={WooLogo} alt="" />WooCommerce
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="StoreHippo"
                                            checked={formData.channel_name.includes('StoreHippo')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <img src={HippoLogo} alt="" />StoreHippo
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Magento"
                                            checked={formData.channel_name.includes('Magento')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <img src={MagentoLogo} alt="" />Magento
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="Custom"
                                            checked={formData.channel_name.includes('Custom')}
                                            onChange={handleCheckboxChange}
                                        />
                                        <img src={CustomLogo} alt="" />Custom
                                    </label>
                                </div>
                            </div>

                            <button type="submit" className="btn main-button">Submit</button>
                        </form>
                    </section>
                </section>


            </div>
            {/* Bootstrap Modal */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                backdrop="static"
                keyboard={false}
                className={`contact-us-modal ${error && "error-message"}`}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {error ? "Oops! Something Went Wrong" : "Thank You for Reaching Out!"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {error
                            ? "We encountered an issue while submitting your message. Please try again later. If the problem persists, feel free to reach out to us directly at +91 97172 00551 or sales@shipease.in"
                            : "We have successfully received your message. Our team will get back to you as soon as possible. If your request is urgent, please feel free to call us directly at +91 97172 00551."}
                    </p>
                    <div className="text-center mt-4">
                        <button className={`btn ${error ? "red-button" : "main-button"}`} onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Bootstrap Modal Backdrop */}
            {/* {showModal && <div className="modal-backdrop fade show"></div>} */}
        </>
    );
};

export default ContactUs;
