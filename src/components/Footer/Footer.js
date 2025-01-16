import "./Footer.css";
import axios from "axios";
import "./Footer.css";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../axios/config";
import Logo from '../../assets/image/white-logo.png'
import { faEnvelope, faEnvelopeOpenText, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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

  console.log(data, 'lllllllll')

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
          <ul className="reach-us mb-2">
            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:support@shipease.com">support@shipease.com</a></li>
            <li><FontAwesomeIcon icon={faEnvelope} /> <a href="sales@shipease.com" target="_blank">sales@shipease.com</a></li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} /><p>
                <strong>Registered Office Address:</strong><br />
                <a href="https://maps.app.goo.gl/WaManVxH3wV6xP1m7" target="_blank">{data?.address1}</a>
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <p>
                <strong>Corporate Office Address:</strong><br />
                {data?.address2}
              </p>
            </li>
          </ul>
          {/* <h4>Download App</h4>
          <div className="app-links">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlay} alt="Google Play" />
            </a>
            <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
              <img src={AppleStore} alt="App Store" />
            </a>
          </div> */}
        </div>



        {/* Products Section */}
        {/* <div className="footer-column">
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
            <li>Shipease Amplify</li>
            <li>Shipease Quick</li>
            <li>Delivery Boost</li>
            <li>Shipease Sense</li>
          </ul>
        </div> */}

        {/* Features Section */}
        <div className="footer-column">
          <h4>Features</h4>
          <ul>
            <li>Cash on Delivery</li>
            <li>Serviceable Pin Codes</li>
            <li><Link to="/api-integration">API Integration</Link></li>
            <li><Link to="/pickup-locations">Multiple Pickup Locations</Link></li>
            <li>Print Shipping Labels</li>
            <li>Email & SMS Notifications</li>
            <li><Link to="/amazon-self-ship">Amazon Self-Ship</Link></li>
            <li><Link to="/all-features">All Features</Link></li>
          </ul>
          <h4>Partner</h4>
          <ul>
            <li><Link to="/carrier-integration">Carrier</Link></li>
            <li><Link to="/channel-integration">Technology</Link></li>
            <li>Become a Partner</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/rate-calculator">Shipping Rate Calculator</Link></li>
            <li>Volumetric Weight Calculator</li>
            <li>Free eCommerce Tools</li>
            <li>Knowledge Base</li>
            <li>FAQs</li>
            <li>Developers</li>
            <li><Link to="/media">Blog</Link></li>
            <li>Ebook</li>
            <li>Encyclopedia</li>
            <li>Video And Podcast</li>
            <li>eCommerce Report 2023</li>
            <li>Customer Stories</li>
            <li>Showcase Your Brand</li>
            <li>Tech Sphere</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Customers</li>
            <li><Link to="/careers">Careers</Link></li>
            <li>Company Updates</li>
            <li>Event</li>
          </ul>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
          </ul>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
