import React, { useState } from 'react';
import './ContactUs.css';
import MapboxComponent from './MapboxComponent';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        userType: '',
        name: '',
        mobile: '',
        companyName: '',
        companyUrl: '',
        email: '',
        monthlyShipment: '',
        channels: []
    });



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
            channels: checked
                ? [...formData.channels, name]
                : formData.channels.filter(channel => channel !== name)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };






    return (
        <div className="contact-us">
            <header className="contact-us__header">
                <h1 className='heading text-center'>Contact Us</h1>
                <p>Have any questions? We're here to help you.</p>
            </header>

            <section className="contact-us__container">
                <section className="contact-us__info">
                    <h2>Contact Information</h2>
                    <div className="contact-us__details">
                        <div className="contact-us__detail">
                            <h3>Email</h3>
                            <p>sales@shipease.in</p>
                        </div>
                        <div className="contact-us__detail">
                            <h3>Phone</h3>
                            <p>+91 93992 62217</p>
                        </div>
                        <div className="contact-us__detail">
                            <h3>Registered Address</h3>
                            <p>476B 2nd & 3rd Floor, Sector 39 Block C, Gurugram, Haryana, 122001</p>
                        </div>
                        <div className="contact-us__detail">
                            <h3>Gurugram Office</h3>
                            <p>Unit 321, Tower B1, M3M Cosmopolitan, Sector-66, Gurugram, Haryana, Pin-122101</p>
                        </div>
                        <div className="contact-us__detail">
                            <h3>Surat Office</h3>
                            <p>Unit 129, Althan, Surat, Gujarat, Pin - 395017</p>
                        </div>
                        <MapboxComponent />
                    </div>
                </section>

                <section className="contact-us__form">
                    <h2>Get in Touch with Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="contact-us__form-group">
                            <label htmlFor="userType">I am a:</label>
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="Business">Business</option>
                                <option value="Customer">Customer</option>
                            </select>
                        </div>

                        <div className="contact-us__form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-us__form-group">
                            <label htmlFor="mobile">Mobile Number:</label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-us__form-group">
                            <label htmlFor="companyName">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact-us__form-group">
                            <label htmlFor="companyUrl">Company URL:</label>
                            <input
                                type="url"
                                id="companyUrl"
                                name="companyUrl"
                                value={formData.companyUrl}
                                onChange={handleChange}
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
                            />
                        </div>

                        <div className="contact-us__form-group">
                            <label htmlFor="monthlyShipment">Monthly Shipments:</label>
                            <select
                                name="monthlyShipment"
                                value={formData.monthlyShipment}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select</option>
                                <option value="<100">Less than 100</option>
                                <option value="100-1000">100 to 1000</option>
                                <option value="1000-5000">1000 to 5000</option>
                                <option value=">5000">More than 5000</option>
                            </select>
                        </div>

                        <div className="contact-us__form-group">
                            <label>Preferred Channels (select multiple):</label>
                            <div className="contact-us__channels">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="Shopify"
                                        checked={formData.channels.includes('Shopify')}
                                        onChange={handleCheckboxChange}
                                    />
                                    Shopify
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="Amazon"
                                        checked={formData.channels.includes('Amazon')}
                                        onChange={handleCheckboxChange}
                                    />
                                    Amazon
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="WooCommerce"
                                        checked={formData.channels.includes('WooCommerce')}
                                        onChange={handleCheckboxChange}
                                    />
                                    WooCommerce
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="StoreHippo"
                                        checked={formData.channels.includes('StoreHippo')}
                                        onChange={handleCheckboxChange}
                                    />
                                    StoreHippo
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="Magento"
                                        checked={formData.channels.includes('Magento')}
                                        onChange={handleCheckboxChange}
                                    />
                                    Magento
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="Custom"
                                        checked={formData.channels.includes('Custom')}
                                        onChange={handleCheckboxChange}
                                    />
                                    Custom
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn main-button">Submit</button>
                    </form>
                </section>
            </section>


        </div>
    );
};

export default ContactUs;
