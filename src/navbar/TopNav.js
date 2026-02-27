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


  const handleClickRouteMain = () => {
    window.open("https://app.shipease.in/login", "_blank");
  };

  return (
    <nav
      className={`topnav w-100 d-flex justify-content-between align-items-center ${isScrolled ? "scroll-navbar px-2 py-2 top-0" : "px-4 top-1"
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
              className={`${isScrolled
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
        <a
          className="text-dark fw-semibold small py-1 px-3"
          style={{ cursor: "pointer", textDecoration: "none" }}
          // onClick={handleClickRouteMain}
          href="https://app.shipease.in/login"
          target="_blank"

        >
          Log In
        </a>
        <div
          className="bg-dark text-light small rounded-4 py-1 px-3 fw-semibold"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/track")}
        >
          Track
        </div>
      </div>
      {/* Mobile Menu Toggle */}
      <div
        className="menu-icon d-md-none d-flex align-items-center justify-content-between gap-3  py-2 "
        style={{
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="d-flex align-items-center gap-2 bg-secondary-subtle px-1 py-1 rounded-2">

          <div

            onClick={() => navigate("/track")}
            style={{
              background: "linear-gradient(90deg, #000000, #333333)",
              color: "#fff",
              padding: "3px 10px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            Track <HiLocationMarker className="main-track-icon" size={16} />
          </div>
          <a
            href="https://app.shipease.in/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "600",
              color: "#111",
              textDecoration: "none",
              fontSize: "14px",
              marginRight: "4px"
            }}
          >
            Log In <IoLogIn />
          </a>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={22} color="#000" />
          ) : (
            <FiMenu size={22} color="#000" />
          )}

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
            style={{ cursor: "pointer" }}
          >
            Log In
          </a>
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