import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function GenericCard({ titles, cardData }) {
    const sectionRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    useEffect(() => {
        const handleScroll = () => {
            const element = sectionRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how much of the element is visible in the viewport (0 → 1)
            const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
            const visibilityRatio = Math.max(0, visibleHeight / rect.height);

            // Mark as "scrolled" when 20% of it is visible
            if (visibilityRatio >= 0.5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log("Component 20% visible:", isScrolled);

    return (
        <motion.div
            ref={sectionRef}
            className="mt-4 py-5"
            style={{
                background: isScrolled ? "#000" : "#f8f9fa",
                color: isScrolled ? "#fff" : "#000",
                transition: "all 0.6s ease",
            }}
        >
            <motion.div
                className="container"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="d-flex flex-column">

                    <div className="mt-4 mb-4">
                        <h2 className="mb-3 h2" style={{ lineHeight: "0.3" }}>{titles?.[0]}</h2>
                        <p className="text-secondary h2" style={{ lineHeight: "0.8" }}>{titles?.[1]}</p>
                    </div>

                    <div className="row mt-4">
                        {cardData?.map((item, index) => (
                            <motion.div
                                key={index}
                                className="col-lg-4 mb-4"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="rounded p-2"
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                    style={{
                                        background: isScrolled ? "#000000" : "#fff",
                                        transition: "all 0.6s ease",
                                    }}
                                >

                                    <img
                                        src={item.imgUrl}
                                        alt={item.cardTitle}
                                        className="img-fluid rounded mb-3"
                                        style={{ objectFit: "cover", minHeight: 450 }}
                                    />
                                    <div className="h5 mt-2">{item?.cardTitle}</div>
                                    <div className="small text-primary text-uppercase mt-4 mb-4">{item?.cardSubtitle}</div>
                                    <p className="small text-secondary" >{item.description}</p>
                                    <button className={`btn fw-semibold px-4 mt-4 rounded-pill ${isScrolled ? "btn-light text-dark" : "btn-dark text-light"}`}>{item?.btnText}</button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
