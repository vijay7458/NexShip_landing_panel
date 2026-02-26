import React, { useEffect, useState } from "react";
import "./topNav.css";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";

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

  const handleClickRouteMain = () => {
    window.open("/login", "_blank");
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
        <img src="./logo512.png" alt="Logo" className="nav-logo" />

        {/* Desktop Menu */}
        <div className="nav-links d-none d-md-flex gap-3 fw-semibold">
          {NavList.map((item) => (
            <p
              key={item.title}
              className={`${
                isScrolled
                  ? "nav-menuitems-light small m-0"
                  : "nav-menuitems small m-0"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(item.path)}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>

      {/* Right Side Buttons */}
      <div className="nav-right d-none d-md-flex align-items-center gap-3 bg-secondary-subtle rounded-5 px-1 py-1">
        <div
          className="text-dark fw-semibold small py-1 px-3"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Log In
        </div>
        <div
          className="bg-dark text-light small rounded-4 py-1 px-3 fw-semibold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/track")}
        >
          Track Order
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="menu-icon d-md-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
          <div
            className="text-dark fw-semibold small py-1 px-3 mb-2"
            style={{ cursor: "pointer" }}
            onClick={handleClickRouteMain}
          >
            Log In
          </div>
          <div
            className="bg-dark text-light small rounded-4 py-1 px-3 fw-semibold"
            style={{ cursor: "pointer" }}
            onClick={() => handleClick("/track")}
          >
            Track Order
          </div>
        </div>
      </div>
    </nav>
  );
}