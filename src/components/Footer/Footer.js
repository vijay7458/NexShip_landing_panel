import "./Footer.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../axios/config";
import Logo from '../../assets/image/white-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${BASE_URL}/core-api/shipease-admin/footer-configuration/`;
        const response = await axios.get(apiUrl);
        setData(response?.data);
      } catch (err) {
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo-section ">
            <img src={Logo} alt="Shipease Logo" className="footer-logo" />
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </div>
          </div>

          <h4>Reach Us At</h4>
          <ul className="mb-2">
            <li><i className="fas fa-envelope"></i> support@shipease.com</li>
            <li><i className="fas fa-envelope"></i> sales@shipease.com</li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Registered Office Address:<br />
              sdjnsjkdnsjkdankdja
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Corporate Office Address:<br />
              jkdnbsjkndkjasdnlksndlkan
            </li>
          </ul>
          <h4>Download App</h4>
          <div className="app-links">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/google-play.png" alt="Google Play" />
            </a>
            <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/app-store.png" alt="App Store" />
            </a>
          </div>
        </div>



        {/* Products Section */}
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>Shipease Shipping</li>
            <li>ShipeaseX</li>
            <li>Shipease Fulfillment</li>
            <li>Shipease Engage 360</li>
            <li>Shipease Capital</li>
            <li>Shipease Packaging</li>
            <li>Shipease Checkout</li>
            <li>Shipease Cargo</li>
            <li>Shipease Omuni</li>
            <li>Shipease Promise</li>
          </ul>
        </div>

        {/* Features Section */}
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>Cash on Delivery</li>
            <li>Serviceable Pin Codes</li>
            <li>API Integration</li>
            <li>Multiple Pickup Locations</li>
            <li>Print Shipping Labels</li>
            <li>Email & SMS Notifications</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Shipping Rate Calculator</li>
            <li>Volumetric Weight Calculator</li>
            <li>Free eCommerce Tools</li>
            <li>Knowledge Base</li>
            <li>FAQs</li>
          </ul>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
