import React, { useEffect, useRef, useState } from 'react'
import './WeightAccuracy.css'
import WeightD from '../../../../assets/image/WeightD.png'
import bgCircleOne from '../../../../assets/image/bgCircle.png'
import bgCircleTwo from '../../../../assets/image/bgCircle2.png'

const WeightAccuracy = () => {
    const [isAnimated, setIsAnimated] = useState(false); // Track if animation has been applied
    const sectionRef = useRef(null);
    // Set up Intersection Observer
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
            <section className="home-section bg-white py-5 position-relative" ref={sectionRef}>
                <div className='bg-container-wt'>
                    <img src={bgCircleOne} alt="Background Image" />
                    <img src={bgCircleTwo} alt="Background Image" />
                </div>
                <div className="overview-container position-relative" style={{ zIndex: 1 }}>
                    <div className='row align-items-center'>
                        {/* Heading */}
                        <div className={`col-12 col-lg-7 px-0 heading ${isAnimated ? "animate__animated animate__fadeInLeft" : ""}`}>
                            <p className="subtitle">Weight Discrepancies</p>
                            <h1>Accuracy Matters</h1>
                            <p className="highlight">Prevent disruptions with accurate weight tracking and quick resolution of discrepancies. Trust us to keep your shipments on track.</p>
                        </div>
                        <div className={`col-12 col-lg-5 ${isAnimated ? "animate__animated animate__fadeInRight" : ""}`}>
                            <img src={WeightD} alt="Weight Discrepancies" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default WeightAccuracy