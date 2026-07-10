import React from "react";
import { motion } from "framer-motion";
import "../Partners/partnerCard.css";
import {
    ArrowBoxIcon,
    HeartIcon,
    RocketIcon,
    GlobeIcon,
    BagIcon,
    CartIcon,
    TruckIcon,
    BriefcaseIcon,
    BoltIcon,
    ChatIcon,
    LizardIcon,
    BoxIcon,
} from "./partnerIcons";

const cardData = [
    { title: "Amazon", subtitle: "Marketplace Fulfilment", icon: ArrowBoxIcon, color: "#F59E0B" },
    { title: "Bluedart", subtitle: "Premium Air & Ground", icon: HeartIcon, color: "#3B82F6" },
    { title: "Delhivery", subtitle: "Express · Surface", icon: RocketIcon, color: "#EF4444" },
    { title: "DTDC", subtitle: "Pan-India Coverage", icon: GlobeIcon, color: "#38BDF8" },
    { title: "E-com", subtitle: "Economy Shipping", icon: BagIcon, color: "#22C55E" },
    { title: "Ekart", subtitle: "E-commerce Logistics", icon: CartIcon, color: "#94A3B8" },
    { title: "Pickndel", subtitle: "Pickup & Delivery", icon: TruckIcon, color: "#F59E0B" },
    { title: "Professional", subtitle: "B2B Logistics", icon: BriefcaseIcon, color: "#A78BFA" },
    { title: "Shadowfax", subtitle: "Hyperlocal · Express", icon: LizardIcon, color: "#F97316" },
    { title: "Smartr", subtitle: "D2C Specialist", icon: BoltIcon, color: "#FACC15" },
    { title: "SMC", subtitle: "Surface & Freight", icon: BoxIcon, color: "#A8896A" },
    { title: "Xpressbees", subtitle: "Fast D2C Delivery", icon: BoltIcon, color: "#F59E0B" },
    { title: "Pragma", subtitle: "Commerce Platform", icon: ChatIcon, color: "#E2E8F0" },
    { title: "WooCommerce", subtitle: "Store Integration", icon: BagIcon, color: "#A78BFA" },
    { title: "Shopify", subtitle: "Store Integration", icon: BagIcon, color: "#22C55E" },
];

export default function PartnerCard() {
    return (
        <div className="partner-section-wrapper">
            <div className="container mb-4 mt-4">
                <div>
                    <div
                        className="h2 mt-4 fw-semibold text-start partner-heading-title"
                        style={{ lineHeight: "0.7" }}
                    >
                        Our Trusted Integration Partners
                    </div>

                    <div
                        className="h2 text-start partner-heading-subtitle"
                        style={{ lineHeight: "1" }}
                    >
                        India's leading courier &amp; commerce integrations.
                    </div>
                </div>
            </div>

            <div className="mb-4 overflow-hidden py-4 partner-marquee-section">
                <motion.div
                    className="d-flex mb-4"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {[...cardData, ...cardData].map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="mx-3 px-4 py-3 rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-center partner-card"
                                style={{ minWidth: "170px" }}
                            >
                                <div
                                    className="partner-card-icon"
                                    style={{ color: item.color }}
                                >
                                    <Icon />
                                </div>
                                <p className="mt-2 mb-0 fw-semibold small text-nowrap partner-card-title">
                                    {item.title}
                                </p>
                                <p className="mb-0 partner-card-subtitle text-nowrap">
                                    {item.subtitle}
                                </p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}