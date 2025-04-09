import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/image/logo.svg";
// import LogoAnimation from "./Effects/LogoAnimation/LogoAnimation";
// import AllFeaturesIcon from "./NavIcons/AllFeaturesIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faBoxOpen, faCalculator, faCloud, faHandHoldingDollar, faHandsHoldingCircle, faIndianRupeeSign, faLocationDot, faMapLocation, faMoneyBill1, faRightToBracket, faRoadBarrier, faShuffle, faSuitcase, faUserPlus, faUsers, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faAmazon, faMedium, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import sampleVideo from '../../assets/image/sample.webm'
// import mobileLogo from "../../assets/image/mobileLogo.svg";
import TrackingIcon from "./NavIcons/TrackingIcon";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  let navigate = useNavigate();

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

  const LearnMoreNav = (path) => {

    document.querySelector(".dropdown-menu").classList.add("d-none")
    setTimeout(() => {
      document.querySelector(".dropdown-menu").classList.remove("d-none")
    }, 1000);
    window.loading = true
    navigate(path)
  }

  useEffect(() => {
    const anchorTags = document.querySelectorAll("a");

    const handleClick = () => {
      const dropdowns = document.querySelectorAll(".dropdown-menu");

      dropdowns.forEach((menu) => {
        menu.classList.add("d-none");
      });

      setTimeout(() => {
        dropdowns.forEach((menu) => {
          menu.classList.remove("d-none");
        });
      }, 500); // Adjust the delay as needed
    };

    anchorTags.forEach((a) => a.addEventListener("click", handleClick));

    // Clean up the listeners on unmount
    return () => {
      anchorTags.forEach((a) => a.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div style={{ zIndex: '3', paddingInline: '62px' }} className=" d-flex justify-content-between align-items-center position-relative">
          {/* Logo Section */}
          <div className="logo">
            <Link to="/" className="text-decoration-none fw-bold">
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
            </Link>
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
                  <li className="col-12 col-lg-3">
                    <h4 className="mb-2">Powering Smarter Shipping for Modern Businesses</h4>
                    <p>From real-time NDR management to Amazon self-ship and daily COD remittance, ShipEase equips you with powerful tools to streamline logistics and accelerate growth. Built for scale, backed by innovation.</p>
                    <button onClick={() => LearnMoreNav("/support/home")} className="btn">Learn More</button>
                  </li>
                  <li className="col-12 col-lg-9">
                    <ul>
                      <li><FontAwesomeIcon icon={faSuitcase} /><Link className="dropdown-item" to="/all-features">All Features<hr /><span>Explore Our Full Feature Set</span></Link></li>
                      <li><FontAwesomeIcon icon={faBoxOpen} /><Link className="dropdown-item" to="/damaged-shipment">Damaged Shipment<hr /><span>Advanced Recommendation Engine</span></Link></li>
                      <li><FontAwesomeIcon icon={faHandsHoldingCircle} /><Link className="dropdown-item" to="/shipment-protection">Shipment Protection<hr /><span>Comprehensive Coverage</span></Link></li>
                      <li><FontAwesomeIcon icon={faBarsProgress} /><Link className="dropdown-item" to="/ndr-management">NDR Management<hr /><span>Streamlined NDR Automation</span></Link></li>
                      <li><FontAwesomeIcon icon={faMapLocation} /><Link className="dropdown-item" to="/hyper-local">Hyper Local<hr /><span>Fast and Reliable Hyper Local Delivery</span></Link></li>
                      <li><FontAwesomeIcon icon={faAmazon} /><Link className="dropdown-item" to="/amazon-self-ship">Amazon Self Ship<hr /><span>Seamless Amazon Self-Shipping with Shipease</span></Link></li>
                      <li><FontAwesomeIcon icon={faMoneyBill1} /><Link className="dropdown-item" to="/early-cod">Early COD<hr /><span>Enjoy Daily COD Remittance</span></Link></li>
                      <li><FontAwesomeIcon icon={faLocationDot} /><Link className="dropdown-item" to="/pickup-locations">Pickup Locations<hr /><span>Optimize Your Pickup Strategy</span></Link></li>
                      <li><FontAwesomeIcon icon={faUserPlus} /><Link className="dropdown-item signup-box" target="_blank" rel="noreferrer" to="https://app.shipease.in/sign-up">Create Account<hr /><span>Sign Up with Shipease Today</span></Link></li>
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
                    <h4 className="mb-2">Smart Tools. Simple Shipping.</h4>
                    <p>Discover essential tools built to make shipping decisions easier — from transparent pricing plans to automated rate calculations and seamless payment options.</p>
                    <button onClick={() => LearnMoreNav("/support/home")} className="btn">Learn More</button>

                  </li>
                  <li className="col-9">
                    <ul>
                      <li><FontAwesomeIcon icon={faIndianRupeeSign} /><Link className="dropdown-item" to="/plans-pricing">Plans and Pricing<hr /><span>Innovative Logistics Cost Solutions</span></Link></li>
                      <li><FontAwesomeIcon icon={faCalculator} /><Link className="dropdown-item" to="/rate-calculator">Rate Calculator<hr /><span>Simplify Shipping with Automation</span></Link></li>
                      <li><FontAwesomeIcon icon={faWallet} /><Link className="dropdown-item" to="/prepaid-cod">Prepaid and COD<hr /><span>Effortlessly Switch Payment Modes</span></Link></li>
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
                    <h4 className="mb-2">Integrate. Automate. Accelerate.</h4>
                    <p>Simplify your operations with robust integrations — from carrier networks to WhatsApp updates. Unlock real-time sync and smart automation to scale effortlessly.</p>
                    <button onClick={() => LearnMoreNav("/support/home")} className="btn">Learn More</button>
                  </li>
                  <li className="col-9">
                    <div>
                      <ul>
                        <li><FontAwesomeIcon icon={faRoadBarrier} /><Link className="dropdown-item" to="/carrier-integration">Carrier Integration<hr /><span>Sell Anywhere, Ship with Shipease</span></Link></li>
                        <li><FontAwesomeIcon icon={faCloud} /><Link className="dropdown-item" to="/api-integration">API Integration<hr /><span>Centralized API Integration Hub</span></Link></li>
                        <li><FontAwesomeIcon icon={faShuffle} /><Link className="dropdown-item" to="/channel-integration">Channel Integration<hr /><span>Achieve Seamless Channel Integration</span></Link></li>
                        <li><FontAwesomeIcon icon={faSquareWhatsapp} /><Link className="dropdown-item" to="/whatsapp-integration">WhatsApp Integration<hr /><span>Effortless WhatsApp Integration</span></Link></li>
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
                    <h4 className="mb-2">Share. Grow. Make an Impact.</h4>
                    <p>Dive into the world of ShipEase — from media stories to meaningful career paths and rewarding referral programs. It’s more than logistics — it’s a movement.</p>
                    <button onClick={() => LearnMoreNav("/support/home")} className="btn">Learn More</button>
                  </li>
                  <li className="col-9">
                    <ul>
                      <li><FontAwesomeIcon icon={faMedium} /><Link className="dropdown-item" to="/media">Media<hr /><span>Amplify Your Impact with Media</span></Link></li>
                      <li><FontAwesomeIcon icon={faHandHoldingDollar} /><Link className="dropdown-item" to="/refer-and-earn">Refer and Earn<hr /><span>Unlock Savings with Our Referral Program</span></Link></li>
                      <li><FontAwesomeIcon icon={faUsers} /><Link className="dropdown-item" to="/careers">Career<hr /><span>Join Our Team of Experts Driving Rapid Growth</span></Link></li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Contact Us */}
              <li className="nav-item">
                <Link className="nav-link cursor-pointer" to="/contact">
                  Contact Us
                </Link>
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
            <button onClick={handleToggle} id="toggle-icon" className={`btn ${ToggleOpen && "open"}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {
            ToggleOpen &&
            <div onClick={handleToggle} className={`backdrop ${!ToggleOpen && 'd-none'}`}></div>
          }

        </div>
      </header>
    </>
  );
};

export default Header;
