import React, { useEffect, useRef, useState } from "react";
import BannerImage from "../../../../assets/image/banner-image.webp";
import axios from "axios";
import { BASE_URL } from "../../../../axios/config";
import CountUp from "react-countup";
import "animate.css";
import "./OverviewSection.css"; // Import custom CSS file

const OverviewSection = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAnimated, setIsAnimated] = useState(false); // Track if animation has been applied
    const sectionRef = useRef(null);

    // Fetch API data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${BASE_URL}/core-api/shipease-admin/stats-list/`;
                const response = await axios.get(apiUrl);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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


    const [scale, setScale] = useState(1); // Scale of the image
    const [isInView, setIsInView] = useState(false); // Track if the section is in view
    const imageSectionRef = useRef(null); // Ref for the section containing the image
    const imageRef = useRef(null); // Ref for the image

    useEffect(() => {
        // IntersectionObserver to detect when the section is in the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting); // Update state based on intersection
            },
            { threshold: 0.2 } // Trigger when at least 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const handleScroll = () => {
            if (imageRef.current) {
                const sectionTop = sectionRef.current.getBoundingClientRect().top;
                const sectionHeight = sectionRef.current.offsetHeight;

                // Calculate scroll progress within the section (0 to 1)
                const progress = Math.min(
                    Math.max(1 - sectionTop / sectionHeight, 0),
                    1
                );

                // Update scale based on scroll progress (1x to 2x)
                setScale(1 + progress * 0.2);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isInView]);



    return (
        <section
            className={`home-section ${isAnimated ? "animate__animated animate__fadeInLeft" : ""}`}
            ref={sectionRef}
        >
            <div className="overview-container">
                {/* Heading */}
                <div className="heading">
                    <p className="subtitle">A Reliable Partner for Accelerated Growth</p>
                    <h1>
                        Lakhs of eCommerce businesses trust and chose<br />
                        <span className="highlight-overview">
                            <strong>Shipease</strong> to enhance their customer experience—
                            <br />
                            seamlessly managing everything from shipping to returns and more.
                        </span>
                    </h1>
                </div>

                <div className="row" ref={imageSectionRef}>
                    {/* Stats Section */}
                    <div className="col-6 stats">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : Array.isArray(data) ? (
                            data.map((item, index) => (
                                <div key={index} className="stat-item">
                                    <h2>
                                        {isAnimated && (
                                            <CountUp
                                                start={0}
                                                end={item?.number}
                                                duration={3}
                                                separator=","
                                            />
                                        )}{" "}
                                        +
                                    </h2>
                                    <p>{item?.title}</p>
                                </div>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>

                    {/* Visual Section */}
                    <div className="col-6 visuals">
                        <img
                            ref={imageRef}
                            src={BannerImage} alt="Banner"
                            style={{
                                transition: "transform 1s ease",
                                transform: `scale(${scale})`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
