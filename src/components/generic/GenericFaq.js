import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UpArrowIcon from '../page/Features/PickupLocations/Icons/UpArrow';

export default function GenericFaq(props) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ backgroundColor: "#fff", borderRadius: "20px" }} className='m-2 m-md-4 mt-4 px-0 py-4 px-md-4 py-md-4'>
            <p
                className='text-center'
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(20px, 5vw, 46px)",
                    fontWeight: "bold"
                }}
            >
                Frequently <span style={{color:"rgb(122, 177, 228)"}}>Asked Questions</span>
            </p>

            <div className="container-fluid px-4">
                <div className="d-flex flex-column gap-3 px-0 py-2 px-md-4 py-md-4">
                    {props?.data.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-4"
                            style={{ boxShadow: "0 6px 6px #00000008", border: "none", borderRadius: "0px" }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                className="d-flex justify-content-between align-items-center w-100"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClick(index)}
                            >
                                <p className="mb-0 text-dark" style={{ fontFamily: "Poppins, sans-serif" }}>
                                    {item.question}
                                </p>

                                <motion.div
                                    initial={false}
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='donwArr'>
                                        <UpArrowIcon color={"#fff"} />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Animated Answer */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <p className="mb-0 py-2 text-muted" style={{ fontFamily: "Poppins, sans-serif" }}>
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
