import React, { useEffect, useState } from "react";
import "./topNav.css";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";
import { HiLocationMarker } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";

export default function TopNav() {
  const NavList = [
    { title: "Features", path: "/" },
    { title: "Our Team", path: "/team" },
    { title: "Seller Stories", path: "/stories" },
    { title: "Contact Us", path: "/contact" },
    { title: "Track Order", path: "/track" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (url) => {
    navigate(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`topnav w-100 d-flex justify-content-between align-items-center ${
        isScrolled ? "scroll-navbar px-2 py-2 top-0" : "px-4 top-1"
      }`}
      style={{ zIndex: 999, transition: "all 0.3s ease" }}
    >
      {/* Left Logo + Nav */}
      <div className="nav-left d-flex align-items-center gap-4">
        <img
          src="./logo512.png"
          alt="Logo"
          className="nav-logo"
          onClick={() => handleClick("/")}
          style={{ cursor: "pointer" }}
        />

        {/* Desktop Menu */}
        <div className="nav-links d-none d-md-flex gap-3 fw-semibold">
          {NavList.map((item) => (
            <div
              key={item.title}
              onClick={() => handleClick(item.path)}
              className={`${
                isScrolled
                  ? "nav-menuitems-light small m-0"
                  : "nav-menuitems small m-0"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="nav-right d-none d-md-flex align-items-center gap-3 bg-secondary-subtle rounded-5 px-1 py-1">
        <a
          className="text-dark fw-semibold small py-1 px-3 d-flex align-items-center"
          href="https://app.shipease.in/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
        <div
          className="bg-dark text-light small rounded-4 py-1 px-3 fw-semibold d-flex align-items-center"
          onClick={() => handleClick("/track")}
        >
          Track
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="menu-icon d-md-none d-flex align-items-center justify-content-between gap-3 py-2"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="d-flex align-items-center gap-2 bg-secondary-subtle px-2 py-1 rounded-2">
          <div
            onClick={() => handleClick("/track")}
            className="mobile-track-btn d-flex align-items-center"
          >
            Track <HiLocationMarker size={16} />
          </div>

          <a
            href="https://app.shipease.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-login-link d-flex align-items-center"
          >
            Log In <IoLogIn style={{ marginLeft: "4px" }} />
          </a>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: "pointer", zIndex: 1001 }}
        >
          {menuOpen ? <FiX size={22} color="#000" /> : <FiMenu size={22} color="#000" />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NavList.map((item) => (
          <p
            key={item.title}
            className="mobile-item"
            onClick={() => handleClick(item.path)}
          >
            {item.title}
          </p>
        ))}
        <div className="mobile-buttons">
          <a
            href="https://app.shipease.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fw-semibold small py-1 px-3 mb-2 d-inline-block text-decoration-none"
          >
            Log In
          </a>
          <div
            className="bg-dark text-light small rounded-4 py-1 px-3 fw-semibold"
            onClick={() => handleClick("/track")}
          >
            Track Order
          </div>
        </div>
      </div>
    </nav>
  );
}