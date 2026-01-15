import React, { useEffect, useState } from "react";
import "../globalstyle/navbar.css";

export default function TopNav() {
  const NavList = [
    { title: "Features", path: "/feature" },
    { title: "Offers", path: "/feature" },
    { title: "Integration", path: "/feature" },
    { title: "Resources", path: "/feature" },
    { title: "Contact Us", path: "/feature" },
    { title: "Track Order", path: "/feature" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`topnav  position-fixed  w-100 d-flex justify-content-between align-items-center  ${isScrolled ? "scroll-navbar px-2 py-2 top-0" : "px-4  top-1"
        }`}
      style={{ zIndex: 999, transition: "all 0.3s ease",  }}
    >
      <div className="ms-2 d-flex align-items-center gap-4">
        <img
          src="./logo512.png"
          alt="Logo"
          style={{ height: "30px", marginTop: "2px" }}
        />
        <div className="d-flex gap-3 fw-semibold">
          {NavList.map((item) => (
            <p
              key={item.title}
              className={`${isScrolled ? "nav-menuitems-light small m-0 " : "nav-menuitems small m-0 "}`}
              style={{ cursor: "pointer" }}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center gap-3 bg-secondary-subtle rounded-5 px-1 py-1">
        <div
          className="text-dark fw-semibold small py-1 px-3"
          style={{ cursor: "pointer" }}
        >
          Log In
        </div>
        <div
          className="bg-dark text-light small rounded-4 py-1 px-3 fw-semibold"
          style={{ cursor: "pointer" }}
        >
          Book a Demo
        </div>
      </div>
    </div>
  );
}
