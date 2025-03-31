import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialCarousel.css"; // Importing the CSS
import Curefit from "../../../assets/image/clients/curefit.png"
import XYXX from "../../../assets/image/clients/xyxx.png"
import RareRabbit from "../../../assets/image/clients/rareRabbit.jpeg"
import TheAyurvedaExperience from "../../../assets/image/clients/ayurveda.png"
import SwissMilitary from "../../../assets/image/clients/swissMilitary.png"

const testimonials = [
    {
        name: "Curefit",
        logo: Curefit,
        class: "Curefit",
        feedback:
            "Partnering with ShipEase has streamlined our logistics like never before. Their efficiency and reliability have significantly improved our delivery timelines!",
        designation: "Operations Manager, Curefit",
    },
    {
        name: "XYXX",
        logo: XYXX,
        class: "XYXX",
        feedback:
            "With ShipEase, our shipments move faster and more efficiently. Their seamless network ensures timely deliveries, keeping our customers happy!",
        designation: "Founder, XYXX",
    },
    {
        name: "Rare Rabbit",
        logo: RareRabbit,
        class: "RareRabbit",
        feedback:
            "Our supply chain needed agility and precision, and ShipEase delivered exactly that. Their streamlined shipping process keeps us ahead in the fashion industry!",
        designation: "Logistics Head, Rare Rabbit",
    },
    {
        name: "The Ayurveda Experience",
        logo: TheAyurvedaExperience,
        class: "TheAyurvedaExperience",
        feedback:
            "Efficient, responsive, and highly professional—ShipEase has optimized our logistics operations, ensuring smooth order fulfillment across regions.",
        designation: "CEO, The Ayurveda Experience",
    },
    {
        name: "Swiss Military",
        logo: SwissMilitary,
        class: "SwissMilitary",
        feedback:
            "Reliability is key in logistics, and ShipEase consistently exceeds our expectations. Their commitment to excellence makes them an invaluable partner.",
        designation: "Supply Chain Director, Swiss Military",
    },
];

const TestimonialCarousel = () => {
    const [isAnimated, setIsAnimated] = useState(false); // Track if animation has been applied
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isAnimated) {
                    setIsAnimated(true); // Trigger animation only once
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isAnimated]);
    return (
        <>
            <div className="home-section" ref={sectionRef}>
                <div className="tc-testimonial-container">
                    <div className={`heading mb-5 ${isAnimated ? "animate__animated animate__pulse" : ""}`}>
                        <h3 className="subtitle">Trusted by Leading Brands</h3>
                        <h1>Real Experiences, Real Results</h1>
                    </div>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        navigation
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3 },
                        }}
                        className="tc-testimonial-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="tc-testimonial-card">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={testimonial.logo}
                                            alt={`${testimonial.name} Logo`}
                                            className={`tc-testimonial-logo ${testimonial.name}`}
                                        />
                                    </div>
                                    <div>
                                        <p className="tc-testimonial-text">
                                            &ldquo;{testimonial.feedback}&rdquo;
                                        </p>
                                        <h4 className="tc-testimonial-name">{testimonial.designation}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default TestimonialCarousel;
