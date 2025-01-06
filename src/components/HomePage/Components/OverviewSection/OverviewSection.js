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
            { threshold: 0.5 }
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

                <div className="row">
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
                        <img src={BannerImage} alt="Banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
