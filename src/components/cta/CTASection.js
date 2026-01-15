import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <motion.div
            className="container d-flex flex-column rounded-4 text-center py-5"
            style={{
                  background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.85) 60%, rgba(40,40,40,0.8) 100%)",
                marginBottom: "6rem",
                marginTop:"6rem"
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >

            {/* Title */}
            <motion.h2
                className="fw-bold mb-3 text-light"
                style={{ fontSize: "2.6rem" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Ship Smarter. Deliver Faster.
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                className="mb-4 mx-auto"
                style={{ fontSize: "1.15rem", color: "#d1d1d1", maxWidth: "720px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
            >
                Join thousands of businesses using our platform to optimize deliveries,
                reduce costs, and delight customers.
            </motion.p>

            {/* CTA Button */}
            <motion.a
                href="/signup"
                className="btn fw-bold px-5 p-2 rounded-4"
                style={{
                    background: "linear-gradient(135deg, #ffffff 0%, #f2f2f2 100%)",
                    color: "#000000",
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(255,255,255,0.15)",
                    textDecoration: "none",
                }}
                whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow: "0 16px 40px rgba(255,255,255,0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
                Get Started
            </motion.a>
        </motion.div>
    );
}
