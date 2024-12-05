import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/image/logo.svg";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <header className={`header py-3 ${isScrolled ? "scrolled" : ""}`}>
      <div style={{ zIndex: '3' }} className="container d-flex justify-content-between align-items-center position-relative">
        {/* Logo Section */}
        <div className="logo">
          <a href="/" className="text-decoration-none fw-bold">
            <img src={Logo} alt="My Website Logo" className="logo-img" />
          </a>
        </div>

        {/* Centered Navigation Section with Dropdowns */}
        <nav className="navigation mx-auto">
          <ul className="d-flex mb-0 list-unstyled justify-content-center">
            {/* Features Dropdown */}
            <li className="nav-item dropdown position-relative">
              <a className="nav-link" href="#features">
                Features
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#feature1">Feature 1</a></li>
                <li><a className="dropdown-item" href="#feature2">Feature 2</a></li>
                <li><a className="dropdown-item" href="#feature3">Feature 3</a></li>
              </ul>
            </li>

            {/* Offering Dropdown */}
            <li className="nav-item dropdown position-relative">
              <a className="nav-link" href="#offering">
                Offering
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#product">Product</a></li>
                <li><a className="dropdown-item" href="#service">Service</a></li>
              </ul>
            </li>

            {/* Integration Dropdown */}
            <li className="nav-item dropdown position-relative">
              <a className="nav-link" href="#integration">
                Integration
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#api">API</a></li>
                <li><a className="dropdown-item" href="#third-party">Third-Party Tools</a></li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown position-relative">
              <a className="nav-link" href="#resources">
                Resources
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#docs">Documentation</a></li>
                <li><a className="dropdown-item" href="#blog">Blog</a></li>
                <li><a className="dropdown-item" href="#faq">FAQ</a></li>
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
