import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    InstagramIcon,
    YoutubeIcon,
} from "lucide-react";
import "./footer.css";
import logo from "../assets/logo512.png";

export default function Footer() {
    const navigate = useNavigate();

    const handleLinkClick = (url) => {
        navigate(url);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const sections = [
        {
            title: "Company",
            links: [
                { label: "About Us", url: "/about" },
                { label: "Careers", url: "/careers" },
                // { label: "Our Team", url: "/team" },
                { label: "Partner With Us", url: "/partners" },
                // { label: "Investor Relations", url: "/investors" },
                // { label: "Newsroom", url: "/newsroom" },
                // { label: "Seller Stories", url: "/stories" },
            ],
        },
        {
            title: "Solutions",
            links: [
                { label: "E-commerce Shipping", url: "/solutions/ecommerce" },
                { label: "RTO Prediction", url: "/solutions/rto-prediction" },
                { label: "Tracking Order", url: "/solutions/tracking-api" },
                { label: "Rate Calculator", url: "/rate-calculator" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", url: "/blog" },
                { label: "Help Center", url: "/help" },
                { label: "Knowledge Base", url: "/knowledge" },
            ],
        },
        {
            title: "Support",
            links: [
                { label: "Contact Us", url: "/contact" },
                { label: "Track Shipment", url: "/track" },
                { label: "Privacy Policy", url: "/privacy" },
                { label: "Terms & Conditions", url: "/terms" },
                { label: "Shipping Calculator", url: "/calculator" },
            ],
        },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-light pt-5 pb-4 mb-0 site-footer"
        >
            <div className="container">
                {/* ======= TOP ROW ======= */}
                <div className="row mt-3 align-items-start justify-content-between gy-4">
                    {/* Logo & Info */}
                    <div className="col-lg-3 col-md-6">
                        <h3 className="fw-bold text-light mb-3">
                            <img
                                src={logo}
                                className="me-2"
                                style={{ height: "30px" }}
                                alt="NexShyp Logo"
                            />{" "}
                            NexShyp
                        </h3>
                        <p className="small mb-3 footer-desc">
                            Simplifying eCommerce shipping with technology and
                            AI-driven logistics. Manage orders, automate courier
                            selection, and deliver faster — all in one platform.
                        </p>
                        <div className="mt-3">
                            <h6 className="fw-semibold mb-2 footer-subheading">Office Address</h6>
                            <p className="small mb-0 footer-desc">
                                NexShyp Technologies Pvt. Ltd.
                                <br />
                                Plot No. B1, PU 4, Scheme No. 54
                                <br />
                                Vijay Nagar Square, AB Rd, Vijay Nagar, Indore, Madhya Pradesh 452010
                                <br />
                                <span className="d-block mt-1">
                                    ops@nexshyp.com
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {sections.map((section, idx) => (
                        <div key={idx} className="col-lg-2 col-md-3 col-6 mb-4">
                            <h6 className="fw-bold text-light mb-3 footer-subheading">
                                {section.title}
                            </h6>
                            <ul className="list-unstyled m-0 p-0">
                                {section.links.map((link, i) => (
                                    <li key={i} className="mb-1">
                                        <span
                                            onClick={() =>
                                                handleLinkClick(link.url)
                                            }
                                            className="footer-link small text-decoration-none d-inline-block position-relative"
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color =
                                                    "#ffffff";
                                                e.currentTarget.style.transform =
                                                    "translateX(4px)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color =
                                                    "#94A3B8";
                                                e.currentTarget.style.transform =
                                                    "translateX(0)";
                                            }}
                                        >
                                            {link.label}
                                            {link.label === "RTO Prediction" && (
                                                <span className="ms-2 footer-new-badge fw-semibold px-2 py-1 small rounded-pill">
                                                    New
                                                </span>
                                            )}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ======= DIVIDER ======= */}
                <hr className="footer-divider mt-5" />
            </div>

            {/* ======= BOTTOM ROW ======= */}
            <div className="container pb-2 mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 footer-bottom-row">
                <p className="small mb-2 mb-md-0 footer-copyright">
                    © {new Date().getFullYear()} NexShyp Technologies Pvt. Ltd.
                    All rights reserved.
                </p>
                <div className="d-flex gap-3 align-items-center">
                    {/* <a href="https://www.facebook.com/shipease.in/" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <FacebookIcon size={20} />
                    </a>
                    <a href="https://x.com/Shipease_IN" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <TwitterIcon size={20} />
                    </a>
                    <a href="https://in.linkedin.com/company/shipease-technologies-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <LinkedinIcon size={20} />
                    </a>
                    <a href="https://www.instagram.com/shipease.in/?hl=en" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <InstagramIcon size={20} />
                    </a>
                    <a href="https://www.youtube.com/@ShipEaseTechnologies" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <YoutubeIcon size={20} />
                    </a> */}
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <FacebookIcon size={20} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <TwitterIcon size={20} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <LinkedinIcon size={20} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <InstagramIcon size={20} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-light icon-hover">
                        <YoutubeIcon size={20} />
                    </a>
                </div>
            </div>
        </motion.footer>
    );
}