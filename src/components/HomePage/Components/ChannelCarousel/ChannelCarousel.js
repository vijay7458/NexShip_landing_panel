import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./ChannelCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../../../axios/config";

const DEFAULT_IMAGE = "default-placeholder.png";

const ChannelCarousel = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${BASE_URL}/core-api/shipease-admin/channel-partner-list/`
                );
                setData(response?.data);
            } catch (error) {
                console.error("Error fetching channel data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const settings = {
        infinite: true,
        speed: 1500, // Default speed when not hovered
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: true, // Reacts to hover by default
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="channel-carousel">
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : Array.isArray(data) && data.length > 0 ? (
                <Slider {...settings}>
                    {data.map((channel, index) => (
                        <div key={index} className="carousel-item">
                            <img
                                src={channel.image || DEFAULT_IMAGE}
                                alt={channel.name || "Channel Partner"}
                                className="carousel-image"
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="no-data">No channel data available.</div>
            )}
        </div>
    );
};

export default ChannelCarousel;
