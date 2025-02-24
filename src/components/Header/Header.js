import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/image/logo.svg";
import LogoAnimation from "./Effects/LogoAnimation/LogoAnimation";
import AllFeaturesIcon from "./NavIcons/AllFeaturesIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faBoxOpen, faCalculator, faCloud, faHandHoldingDollar, faHandsHoldingCircle, faIndianRupeeSign, faLocationDot, faMapLocation, faMoneyBill1, faRightToBracket, faRoadBarrier, faShuffle, faSuitcase, faUserPlus, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faMedium, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import sampleVideo from '../../assets/image/sample.webm'
import mobileLogo from "../../assets/image/mobileLogo.svg";
import TrackingIcon from "./NavIcons/TrackingIcon";
import { Link } from "react-router-dom";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [ToggleShow, setToggleShow] = useState(false)
  const [ToggleOpen, setToggleOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVideo((prev) => !prev);
    }, showVideo ? 5000 : 3000); // 8 seconds for video, 2 seconds for image

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [showVideo]);




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

  const handleNavigation = () => {
    window.open("https://app.shipease.in", "_blank", "noopener,noreferrer");
  };

  const handleToggle = () => {
    setToggleOpen(!ToggleOpen)
    setToggleShow(!ToggleShow)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div style={{ zIndex: '3', paddingInline: '62px' }} className=" d-flex justify-content-between align-items-center position-relative">
        {/* Logo Section */}
        <div className="logo">
          <a href="/" className="text-decoration-none fw-bold">
            <img src={Logo} alt="My Website Logo" className="mt-3" style={{ height: '30px', width: 'auto' }} />
            {/* <LogoAnimation /> */}
            {/* <img
              src={mobileLogo}
              alt="Logo"
              className={`logo-image ${showVideo ? 'logo-hidden' : ''}`}
            />
            <video
              className={`video-element ${showVideo ? '' : 'logo-hidden'}`}
              src={sampleVideo}
              autoPlay
              muted
              loop
              playsInline
            /> */}
          </a>
        </div>

        {/* Centered Navigation Section with Dropdowns */}
        <nav className="navigation mx-auto">
          <ul className={`d-flex mb-0 list-unstyled ${ToggleShow && 'show'}`}>
            {/* Features Dropdown */}
            {/* <li className="nav-item dropdown position-relative"> */}
            <li className="nav-item dropdown">
              <span className="cursor-pointer nav-link">
                Features
              </span>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">We understand the art of scaling rapidly</h4>
                  <p>Founded in 2020 by Ajay, Lalit, and Pawan, ShipEase has quickly emerged as one of India’s fastest-growing SaaS companies.</p>
                  <button className="btn">Explore More</button>
                </li>
                <li className="col-9">
                  <ul>
                    <li><FontAwesomeIcon icon={faSuitcase} /><a className="dropdown-item" href="/all-features">All Features<hr /><span>Explore Our Full Feature Set</span></a></li>
                    <li><FontAwesomeIcon icon={faBoxOpen} /><a className="dropdown-item" href="/damaged-shipment">Damaged Shipment<hr /><span>Advanced Recommendation Engine</span></a></li>
                    <li><FontAwesomeIcon icon={faHandsHoldingCircle} /><a className="dropdown-item" href="/shipment-protection">Shipment Protection<hr /><span>Comprehensive Coverage</span></a></li>
                    <li><FontAwesomeIcon icon={faBarsProgress} /><a className="dropdown-item" href="/ndr-management">NDR Management<hr /><span>Streamlined NDR Automation</span></a></li>
                    <li><FontAwesomeIcon icon={faMapLocation} /><a className="dropdown-item" href="/hyper-local">Hyper Local<hr /><span>Fast and Reliable Hyper Local Delivery</span></a></li>
                    <li><FontAwesomeIcon icon={faAmazon} /><a className="dropdown-item" href="/amazon-self-ship">Amazon Self Ship<hr /><span>Seamless Amazon Self-Shipping with Shipease</span></a></li>
                    <li><FontAwesomeIcon icon={faMoneyBill1} /><a className="dropdown-item" href="/early-cod">Early COD<hr /><span>Enjoy Daily COD Remittance</span></a></li>
                    <li><FontAwesomeIcon icon={faLocationDot} /><a className="dropdown-item" href="/pickup-locations">Pickup Locations<hr /><span>Optimize Your Pickup Strategy</span></a></li>
                    <li><FontAwesomeIcon icon={faUserPlus} /><a className="dropdown-item signup-box" target="_blank" href="https://app.shipease.in/sign-up">Create Account<hr /><span>Sign Up with Shipease Today</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Offering Dropdown */}
            <li className="nav-item dropdown">
              <span className="nav-link cursor-pointer">
                Offering
              </span>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">Support and Service</h4>
                  <p>An essential component of every organization, dedicated to delivering assistance, guidance, and effective solutions to customers, clients, or users.</p>
                  <button className="btn">Learn More</button>

                </li>
                <li className="col-9">
                  <ul>
                    <li><FontAwesomeIcon icon={faIndianRupeeSign} /><a className="dropdown-item" href="/plans-pricing">Plans and Pricing<hr /><span>Innovative Logistics Cost Solutions</span></a></li>
                    <li><FontAwesomeIcon icon={faCalculator} /><a className="dropdown-item" href="/rate-calculator">Rate Calculator<hr /><span>Simplify Shipping with Automation</span></a></li>
                    <li><FontAwesomeIcon icon={faWallet} /><a className="dropdown-item" href="/prepaid-cod">Prepaid and COD<hr /><span>Effortlessly Switch Payment Modes</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Integration Dropdown */}
            <li className="nav-item dropdown">
              <span className="nav-link cursor-pointer">
                Integration
              </span>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">Unlock Benefits with Referral Codes</h4>
                  <p>Take advantage of our exclusive referral program! Share your code with friends and colleagues to earn special discounts and rewards for both you and your referrals on premium logistics services.</p>
                  <button className="btn">Learn More</button>
                </li>
                <li className="col-9">
                  <div>
                    <ul>
                      <li><FontAwesomeIcon icon={faRoadBarrier} /><a className="dropdown-item" href="/carrier-integration">Carrier Integration<hr /><span>Sell Anywhere, Ship with Shipease</span></a></li>
                      <li><FontAwesomeIcon icon={faCloud} /><a className="dropdown-item" href="/api-integration">API Integration<hr /><span>Centralized API Integration Hub</span></a></li>
                      <li><FontAwesomeIcon icon={faShuffle} /><a className="dropdown-item" href="/channel-integration">Channel Integration<hr /><span>Achieve Seamless Channel Integration</span></a></li>
                      <li><FontAwesomeIcon icon={faSquareWhatsapp} /><a className="dropdown-item" href="/whatsapp-integration">WhatsApp Integration<hr /><span>Effortless WhatsApp Integration</span></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <span className="nav-link cursor-pointer">
                Resources
              </span>
              <ul className="dropdown-menu row">
                <li className="col-3">
                  <h4 className="mb-2">Instantly Calculate Your Shipping Rates</h4>
                  <p>Get quick and accurate shipping rate calculations with our tool. Share it with your network to unlock special discounts and exclusive benefits for both you and your referrals on premium logistics services.</p>
                  <button className="btn">Learn More</button>
                </li>
                <li className="col-9">
                  <ul>
                    <li><FontAwesomeIcon icon={faMedium} /><a className="dropdown-item" href="/media">Media<hr /><span>Amplify Your Impact with Media</span></a></li>
                    <li><FontAwesomeIcon icon={faHandHoldingDollar} /><a className="dropdown-item" href="/refer-and-earn">Refer and Earn<hr /><span>Unlock Savings with Our Referral Program</span></a></li>
                    <li><FontAwesomeIcon icon={faUsers} /><a className="dropdown-item" href="/careers">Career<hr /><span>Join Our Team of Experts Driving Rapid Growth</span></a></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <a className="nav-link cursor-pointer" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="track-login-nav">
          <Link to="/order-tracking" className="btn" title="Track Your Shipment">
            <TrackingIcon />
          </Link>
          <button onClick={handleNavigation} className="btn login-button" title="Login">
            Login
          </button>
          <button onClick={handleToggle} id="nav-icon3" className={`btn ${ToggleOpen && "open"}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>



      </div>
    </header>
  );
};

export default Header;
