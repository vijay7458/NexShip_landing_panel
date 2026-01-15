import React from "react";
import { motion } from "framer-motion";

import Amazon from "../../assets/image/Couriers/Amazon.svg";
import Bluedart from "../../assets/image/Couriers/Bluedart.svg";
import Delhivery from "../../assets/image/Couriers/Delhivery.svg";
import Dtdc from "../../assets/image/Couriers/Dtdc.svg";
import Ecom from "../../assets/image/Couriers/Ecom.svg";
import Ekart from "../../assets/image/Couriers/Ekart.svg";
import Pickndel from "../../assets/image/Couriers/Pickndel.svg";
import Professional from "../../assets/image/Couriers/Professional.svg";
import Shodowfax from "../../assets/image/Couriers/Shodowfax.svg";
import Smartr from "../../assets/image/Couriers/Smartr.svg";
import Smc from "../../assets/image/Couriers/Smc.svg";
import Xpressbees from "../../assets/image/Couriers/Xpressbees.svg";
import Pragma from "../../assets/image/Channels/PragmaLogo.svg";
import woocommerceLogo from "../../assets/image/Channels/woocommerceLogo.png";
import ShopifyLogo from "../../assets/image/Channels/ShopifyLogo.png";

const cardData = [
    { title: "Amazon", src: Amazon },
    { title: "Bluedart", src: Bluedart },
    { title: "Delhivery", src: Delhivery },
    { title: "DTDC", src: Dtdc },
    { title: "E-com", src: Ecom },
    { title: "Ekart", src: Ekart },
    { title: "Pickndel", src: Pickndel },
    { title: "Professional", src: Professional },
    { title: "Shadowfax", src: Shodowfax },
    { title: "Smartr", src: Smartr },
    { title: "SMC", src: Smc },
    { title: "Xpressbees", src: Xpressbees },
    { title: "Pragma", src: Pragma },
    { title: "WooCommerce", src: woocommerceLogo },
    { title: "Shopify", src: ShopifyLogo },
];

export default function PartnerCard() {
    return (
        <>

            <div className="container mb-4 mt-4">
                <div>
                    <div
                        className="h2 mt-4 fw-semibold text-start"
                        style={{ lineHeight: "0.7" }}
                    >
                        Our Trusted Integration Partners
                    </div>

                    <div
                        className="h2 text-start text-body-tertiary"
                        style={{ lineHeight: "1" }}
                    >
                        India’s leading courier & commerce integrations.
                    </div>
                </div>

            </div>
            <div className="mb-4 overflow-hidden py-4 bg-light">
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
                    {[...cardData, ...cardData].map((item, i) => (
                        <div
                            key={i}
                            className="mx-3 px-4 py-3 bg-secondary-subtle rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-center"
                            style={{ minWidth: "160px" }}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                style={{ height: "45px", objectFit: "contain" }}
                            />
                            <p className="mt-2 mb-0 fw-semibold text-muted small text-nowrap">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}
