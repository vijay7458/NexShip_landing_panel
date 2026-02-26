import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ShipmentCounter() {
    const shipmentData = [
        { count: 2500, title: "Delighted Businesses" },
        { count: 12000, title: "Shipments Processed Daily" },
        { count: 28000, title: "Pincodes Successfully Covered" },
        { count: 150, title: "Dedicated Shipping Experts" },
    ];

    const AutomateCounter = ({ number, start }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!start) return; // run only when visible
            let startVal = 0;
            const end = number;
            const duration = 2000; // total time (2s)
            const stepTime = 50; // interval (ms)
            const increment = end / (duration / stepTime);

            const timer = setInterval(() => {
                startVal += increment;
                if (startVal >= end) {
                    startVal = end;
                    clearInterval(timer);
                }
                setCount(Math.floor(startVal));
            }, stepTime);

            return () => clearInterval(timer);
        }, [number, start]);

        return <span>{count} </span>;
    };

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // detect when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.4 } // trigger when 40% visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <motion.div
            ref={sectionRef}
            className="mt-4 d-flex flex-column container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="w-100 mt-4 mb-2 h2 fw-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="h2" style={{ color: "#000000", lineHeight: "0.3" }}>
                    Tried and tested
                </div>
                <div className="h2 text-secondary">With proven results at scale</div>
            </motion.div>

            <div className="w-100 d-flex flex-wrap gap-4 py-4">
                <div className="w-50">
                    {shipmentData?.slice(0, 2).map((item, index) => (
                        <motion.div
                            key={index}
                            className="py-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="display-2 fw-semibold mt-2"
                                style={{ color: "#000000" }}
                            >
                                <AutomateCounter number={item.count} start={isVisible} />+
                            </div>
                            <div className="text-muted fw-semibold h1 small mb-4">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div>
                    {shipmentData?.slice(2, 4).map((item, index) => (
                        <motion.div
                            key={index}
                            className="py-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="display-2 fw-semibold mt-2"
                                style={{ color: "#000000" }}
                            >
                                <AutomateCounter number={item.count} start={isVisible} />+
                            </div>
                            <div className="text-muted fw-semibold h1 small mb-4">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
