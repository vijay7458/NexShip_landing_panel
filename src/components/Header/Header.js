import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/image/logo.svg";
import mobileLogo from "../../assets/image/mobileLogo.svg";
import LogoAnimation from "./Effects/LogoAnimation/LogoAnimation";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Change 100 to any value that suits your needs
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div style={{ zIndex: '3' }} className="container d-flex justify-content-between align-items-center position-relative">
        {/* Logo Section */}
        <div className="logo">
          <a href="/" className="text-decoration-none fw-bold">
            {/* <img src={isScrolled ? mobileLogo : Logo} alt="My Website Logo" className="logo-img" /> */}
            <LogoAnimation />
          </a>
        </div>

        {/* Centered Navigation Section with Dropdowns */}
        <nav className="navigation mx-auto">
          <ul className="d-flex mb-0 list-unstyled justify-content-center">
            {/* Features Dropdown */}
            {/* <li className="nav-item dropdown position-relative"> */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#features">
                Features
              </a>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">We understand the art of scaling rapidly</h4>
                  <p>Founded in 2020 by Ajay, Lalit, and Pawan, ShipEase has quickly emerged as one of India’s fastest-growing SaaS companies.</p>
                  <button className="btn main-button">Explore More</button>
                </li>
                <li className="col-8">
                  <ul>
                    <li><a className="dropdown-item" href="/all-features">All Features</a> Exploring Our Feature Set</li>
                    <li><a className="dropdown-item" href="#feature2">Damaged Shipment</a> Recommendation Engine</li>
                    <li><a className="dropdown-item" href="#feature3">Shipment Protection</a> We've Got You Covered</li>
                    <li><a className="dropdown-item" href="#feature3">NDR Management</a> Automated NDR Management</li>
                    <li><a className="dropdown-item" href="#feature3">Hyper Local</a> Ultra Fast Hyper Local Delivery</li>
                    <li><a className="dropdown-item" href="#feature3">Amazon Self Ship</a> Amazon Self Ship + Shipease</li>
                    <li><a className="dropdown-item" href="#feature3">Early COD</a> Daily COD Remittance</li>
                    <li><a className="dropdown-item" href="#feature3">Pickup Locations</a> Optimizing Pickup Locations</li>
                    <li><a className="dropdown-item signup-box" href="#feature3">Create Account</a> Sign Up With Shipease</li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Offering Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#offering">
                Offering
              </a>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">Support and Service</h4>
                  <p>Refers to a crucial aspect of any organization's operations focused on providing assistance, guidance, and solutions to its customers, clients, or users.</p>
                  <button className="btn main-button">Explore More</button>
                </li>
                <li className="col-8">
                  <ul>
                    <li><a className="dropdown-item" href="#product">Plans And Pricing</a> Innovations In Logistics Costing</li>
                    <li><a className="dropdown-item" href="#service">Rate Calculator</a> Automated Shipping Faster</li>
                    <li><a className="dropdown-item" href="#service">Prepaid And COD</a> Change Payment mode Easily</li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Integration Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#integration">
                Integration
              </a>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">The Power of Referral Codes</h4>
                  <p>Introducing our exclusive referral code for logistics services! Share this code with your network and both you and your referred friends can enjoy special discounts and benefits on our top-notch logistics solutions.</p>
                  <button className="btn main-button">Explore More</button>
                </li>
                <li className="col-8">
                  <ul>
                    <li><a className="dropdown-item" href="#api">Carrier Integration</a> Sell Anywhere, Ship Using Shipease</li>
                    <li><a className="dropdown-item" href="#third-party">API Integraton</a> API Integration Hub</li>
                    <li><a className="dropdown-item" href="#third-party">Channel Integraton</a> Achieving Seamless Integration</li>
                    <li><a className="dropdown-item" href="#third-party">WhatsApp Integraton</a> Mastering WhatsApp Integration</li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link" href="#resources">
                Resources
              </a>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">Calculate Shipping Rates Instantly</h4>
                  <p>Introducing our exclusive referral code for logistics services! Share this code with your network and both you and your referred friends can enjoy special discounts and benefits on our top-notch logistics solutions.</p>
                  <button className="btn main-button">Explore More</button>
                </li>
                <li className="col-8">
                  <ul>
                    <li><a className="dropdown-item" href="#docs">Media</a> Maxiising Impact with Media</li>
                    <li><a className="dropdown-item" href="#blog">Refer And Earn</a> Savings with Our Referral Code!</li>
                    <li><a className="dropdown-item" href="#faq">Career</a> We're Experts in Rapid Expansion</li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
