import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OrderStep.css";
// import vid1 from "../../assets/image/video/You_are_using_blue_color_a_lot.mp4"
// import vid3 from "../../assets/image/3.mp4"
// import vid4 from "../../assets/image/video/4.mp4"
// import vid5 from "../../assets/image/video/5.mp4"
// import vid6 from "../../assets/image/video/6.mp4"
// import vid7 from "../../assets/image/video/7.mp4"



export default function OrderStep() {
    // const steps = [
    //     {
    //         title: "Processing Started",
    //         desc: "Our team is preparing your items for shipment. Items are carefully packaged and quality-checked before leaving the warehouse.",
    //         img: "https://images.unsplash.com/photo-1606813904092-6a51861e3c49?auto=format&fit=crop&w=400&q=80",
    //         video: vid3,
    //     },
    //     {
    //         title: "Courier Selected & Ready to Ship",
    //         desc: "The seller has packed your order and chosen a courier partner. It’s now marked as Ready to Ship and will be dispatched shortly.",
    //         img: "https://images.unsplash.com/photo-1590080873859-fc53d1a5d9b2?auto=format&fit=crop&w=400&q=80",
    //         video: vid4,
    //     },
    //     {
    //         title: "Awaiting Courier Pickup",
    //         desc: "The shipment is ready for pickup. The courier partner has been assigned and will collect the parcel shortly from the seller.",
    //         img: "https://images.unsplash.com/photo-1581091215365-944fbd3b3b6e?auto=format&fit=crop&w=400&q=80",
    //         video: vid5,
    //     },
    //     {
    //         title: "Manifest Ready for Pickup",
    //         desc: "The shipping manifest has been generated and verified. Your order is now queued for courier pickup.",
    //         img: "https://images.unsplash.com/photo-1580927752452-8a3c73f0f69c?auto=format&fit=crop&w=400&q=80",
    //         video: vid6,
    //     },
    //     {
    //         title: "Order Placed",
    //         desc: "We received your order and it is now being processed in our system. You can review your order details and estimated shipping date.",
    //         img: "https://images.unsplash.com/photo-1612831455544-8cf6e3a246f6?auto=format&fit=crop&w=400&q=80",
    //         video: vid7,
    //     },
    // ];

    // const stepRefs = useRef([]);
    // const [activeStep, setActiveStep] = useState(0);
    // const [lineHeight, setLineHeight] = useState(0); // height of the filled line

    // // Intersection Observer to detect active step
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     setActiveStep(Number(entry.target.dataset.index));
    //                 }
    //             });
    //         },
    //         { threshold: 0.6 }
    //     );

    //     stepRefs.current.forEach((el) => {
    //         if (el) observer.observe(el);
    //     });

    //     return () => {
    //         stepRefs.current.forEach((el) => {
    //             if (el) observer.unobserve(el);
    //         });
    //     };
    // }, []);

    // // Scroll progress calculation
    // const stepsContainerRef = useRef(null);
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (!stepsContainerRef.current) return;

    //         const containerTop = stepsContainerRef.current.getBoundingClientRect().top;
    //         const containerHeight = stepsContainerRef.current.offsetHeight;
    //         const windowHeight = window.innerHeight;

    //         // scroll ratio from 0 to 1
    //         const scrollRatio = Math.min(Math.max((windowHeight - containerTop) / containerHeight, 0), 1);

    //         setLineHeight(scrollRatio * containerHeight);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     handleScroll(); // init on load

    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // return (
    //     <div className="container py-5 position-relative">
    //         <div className="row">
    //             {/* Left section */}
    //             <div className="main-step-class col-lg-5 mb-5 mb-lg-0 " >
    //                 <motion.div
    //                     initial={{ opacity: 0, x: -50 }}
    //                     animate={{ opacity: 1, x: 0 }}
    //                     transition={{ duration: 0.8 }}
    //                 >
    //                     <h2 className="h4 fw-bold mb-2">Track Your Order in Real-Time</h2>
    //                     <p className="text-muted mb-5 small" style={{ lineHeight: "1.1", fontWeight: "400" }}>
    //                         Stay informed at every step. Know exactly where your package is and get real-time updates with our interactive tracking system.
    //                     </p>
    //                 </motion.div>
    //             </div>

    //             {/* Right section */}
    //             <div className="col-lg-7 position-relative" ref={stepsContainerRef}>
    //                 <div className="position-relative ps-5">
    //                     {/* Background line */}
    //                     <div
    //                         className="position-absolute top-0 start-0"
    //                         style={{
    //                             width: "4px",
    //                             height: "100%",
    //                             backgroundColor: "#ccc",
    //                             left: "10px",
    //                             zIndex: -1,
    //                         }}
    //                     ></div>
    //                     {/* Filled line */}
    //                     <motion.div
    //                         className="position-absolute top-0 start-0"
    //                         style={{
    //                             width: "4px",
    //                             backgroundColor: "#000",
    //                             left: "10px",
    //                             zIndex: -1,

    //                         }}
    //                         animate={{ height: lineHeight }}
    //                         transition={{ type: "spring", stiffness: 200, damping: 30 }}
    //                     ></motion.div>

    //                     {/* Steps */}
    //                     {/* Border step circles */}
    //                     {steps.map((_, index) => (
    //                         <motion.div
    //                             key={`line-circle-${index}`}
    //                             style={{
    //                                 position: "absolute",
    //                                 left: "-5.3px",
    //                                 top: `${(index / (steps.length - 1)) * 100}%`,
    //                                 transform: "translate(-50%, -50%)",
    //                                 width: "14px",
    //                                 bottom: "5px",
    //                                 height: "14px",
    //                                 borderRadius: "50%",
    //                                 border: "2px solid #000",
    //                                 backgroundColor: index <= activeStep ? "#000" : "#fff",
    //                                 zIndex: 2,
    //                             }}
    //                             animate={{
    //                                 scale: index === activeStep ? 1.3 : 1,
    //                                 backgroundColor: index <= activeStep ? "#000" : "#fff",
    //                             }}
    //                             transition={{ type: "spring", stiffness: 300, damping: 20 }}
    //                         />
    //                     ))}

    //                     {steps.map((step, index) => (
    //                         <motion.div
    //                             key={index}
    //                             className="mb-5 d-flex align-items-start position-relative cursor-pointer"
    //                             ref={(el) => (stepRefs.current[index] = el)}
    //                             data-index={index}
    //                             initial={{ opacity: 0, x: 50 }}
    //                             whileInView={{ opacity: 1, x: 0 }}
    //                             transition={{ duration: 0.6, delay: index * 0.2 }}
    //                             viewport={{ once: true }}
    //                         >

    //                             {/* Animated Circle */}

    //                             {/* Step content */}
    //                             <div>
    //                                 <motion.div
    //                                     className={`fw-bold ${index <= activeStep ? "text-dark" : "text-secondary"}`}
    //                                     animate={{ color: index <= activeStep ? "#000" : "#777" }}
    //                                 >
    //                                     {`STEP 0${index + 1}`}
    //                                 </motion.div>

    //                                 <motion.h4
    //                                     className={`fw-bold mb-1 ${index <= activeStep ? "text-dark" : "text-secondary"}`}
    //                                     animate={{ color: index <= activeStep ? "#000" : "#777" }}
    //                                 >
    //                                     {step.title}
    //                                 </motion.h4>
    //                                 <motion.p className="text-muted small" style={{ lineHeight: "1.1" }}>{step.desc}</motion.p>
    //                                 <div
    //                                     className="mb-4 mt-4 d-flex justify-content-center align-items-center"
    //                                     style={{
    //                                         width: "100%",
    //                                         textAlign: "center",
    //                                     }}
    //                                 >
    //                                     <video
    //                                         src={step?.video}
    //                                         controls
    //                                         style={{
    //                                             width: "99%",
    //                                             height: "auto",
    //                                             borderRadius: "8px",
    //                                             objectFit: "cover",
    //                                             display: "block",
    //                                         }}
    //                                     />
    //                                 </div>
    //                             </div>
    //                         </motion.div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}
