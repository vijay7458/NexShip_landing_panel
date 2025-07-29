import React from 'react';
import { motion } from 'framer-motion';
import GenericFaq from '../../../generic/GenericFaq';
import './TrackingUi.css';

export default function TrackingComp() {
    const features = [
        {
            icon: (
                <svg width="32" height="32" fill="#1975c9" viewBox="0 0 24 24">
                    <path d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.01 9.01 0 01-9 9zm.5-9.59V7a.5.5 0 00-1 0v5a.5.5 0 00.15.35l3.54 3.54a.5.5 0 00.7-.7z" />
                </svg>
            ),
            title: 'Real-Time Updates',
            desc: 'Know exactly where your package is with live tracking info.',
        },
        {
            icon: (
                <svg width="32" height="32" fill="#1975c9" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 00-3.83 19.29c.3.05.42-.13.42-.3v-1.12c-1.72.37-2.08-.8-2.08-.8a1.64 1.64 0 00-.69-.91c-.57-.39 0-.38 0-.38a1.3 1.3 0 01.95.64 1.3 1.3 0 001.77.51 1.3 1.3 0 01.38-.81c-1.37-.16-2.81-.69-2.81-3.07a2.4 2.4 0 01.64-1.65 2.24 2.24 0 01.06-1.63s.52-.17 1.7.65a5.87 5.87 0 013.1 0c1.18-.82 1.7-.65 1.7-.65a2.24 2.24 0 01.06 1.63 2.4 2.4 0 01.64 1.65c0 2.38-1.44 2.91-2.81 3.07a1.46 1.46 0 01.41 1.13v1.67c0 .17.12.36.43.3A10 10 0 0012 2z" />
                </svg>
            ),
            title: 'Global Coverage',
            desc: 'Track shipments across the globe seamlessly.',
        },
        {
            icon: (
                <svg width="32" height="32" fill="#1975c9" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V5l-9-4zm0 2.18l7 3.11V11c0 4.28-3.05 8.75-7 9.88C8.05 19.75 5 15.28 5 11V6.29l7-3.11zM11 14h2v2h-2zm0-7h2v5h-2z" />
                </svg>
            ),
            title: 'Secure Tracking',
            desc: 'Your shipment details are safe and secure.',
        },
    ];

    const faqData = [
        {
            question: "How can I track my shipment?",
            answer: "You can track your shipment by entering your Order ID or your registered Mobile Number in the tracking field above...",
        },
        {
            question: "Can I track my order using just my mobile number?",
            answer: "Yes, you can use your registered mobile number to track your order...",
        },
        {
            question: "What should I do if my tracking information is not showing?",
            answer: "If your tracking details are not appearing, please double-check the Order ID or mobile number you entered...",
        },
        {
            question: "How often is the tracking information updated?",
            answer: "Tracking information is updated in real-time as your shipment moves through different locations...",
        },
        {
            question: "Can I track multiple orders with the same mobile number?",
            answer: "Yes, if you’ve placed multiple orders using the same mobile number, all related shipments will be shown...",
        },
    ];

    return (
        <>
        <div className="p-4 tracking-wrapper">
            {/* Section 1: Banner */}
            <div className="p-4 tracking-section">
                <motion.div
                    className="tracking-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="https://plus.unsplash.com/premium_photo-1665203442280-1118daf3de38?q=80&w=870&auto=format&fit=crop" alt="Track Your Order" />
                </motion.div>

                <motion.div
                    className="tracking-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="tracking-title">Track Your <span>Shipment</span></h2>
                    <p className="tracking-description">
                        Enter your AWB number above to get the live status of your order.
                        We help you stay informed with real-time tracking.
                    </p>
                </motion.div>
            </div>

            {/* Section 2: Features */}
            <div className="tracking-features flex-wrap d-flex justify-content-center p-4">
                {features.map((item, index) => (
                    <motion.div
                        className="feature-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                    >
                        <div className="icon">{item.icon}</div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Section 3: Why Use Our Tracking */}
            <div className="p-4 tracking-why">
                <h3 className="section-heading">Why Use Our Tracking?</h3>
                <div className="why-grid">
                    {[
                        { title: 'Instant Notifications', desc: 'Get notified whenever there is a movement or delay in your shipment.', icon: '🔔' },
                        { title: 'Better Planning', desc: 'Knowing when your package will arrive helps you schedule accordingly.', icon: '📅' },
                        { title: 'Customer Satisfaction', desc: 'Provide your customers with full visibility for better trust.', icon: '👍' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="emoji">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section 4: Steps */}
            <div className="px-4 tracking-steps">
                <h3 className="section-heading">How It Works</h3>
                <div className="steps-row">
                    {[
                        'Enter your AWB number in the field above.',
                        'Click the "Track Now" button to fetch updates.',
                        'Get live details about your shipment’s journey.',
                    ].map((text, index) => (
                        <motion.div
                            key={index}
                            className="step-box"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        >
                            <div className="step-number">{index + 1}</div>
                            <p>{text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

         
        </div>

           {/* Section 5: FAQ */}
            <div className="p-4 mt-4">
                <GenericFaq data={faqData} />
            </div>
            </>
    );
}
