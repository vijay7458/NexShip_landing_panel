import React, { useEffect, useRef, useState } from "react";
import InsightsGraph from '../../../../assets/image/InsightsGraph1.png'
import "animate.css";
import "./Insights.css";

const InsightsFooter = () => {
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
            <div className="row insights-footer" ref={sectionRef}>
                <p className={`col-12 col-md-6 highlight ${isAnimated ? "animate__animated animate__fadeInLeft" : ""}`}>
                    Empower your business with tools that not only attract new leads but
                    also provide actionable data to refine strategies and drive growth.
                    Monitor your progress and make data-driven decisions for success.
                </p>
                <div className={`col-12 col-md-6 text-end ${isAnimated ? "animate__animated animate__fadeInRight" : ""}`}>
                    <img src={InsightsGraph} alt="Insights Graph" />
                </div>
            </div>
        </>
    )
}

export default InsightsFooter