import React from "react";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import "./HomePage.css";
import ChannelCarousel from "./Components/ChannelCarousel/ChannelCarousel";

const HomePage = () => {
    return (
        <div>

            {/* Hero Section */}
            <HeroBanner />

            <ChannelCarousel />

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="service-list">
                        <div className="service-item">Service 1</div>
                        <div className="service-item">Service 2</div>
                        <div className="service-item">Service 3</div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" className="form-control" />
                        <input type="email" placeholder="Your Email" className="form-control" />
                        <textarea placeholder="Your Message" className="form-control"></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
