import axios from "axios";
import "./ChannelCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../axios/config";

const ChannelCarousel = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${BASE_URL}/core-api/shipease-admin/channel-partner-list/`;
                const response = await axios.get(apiUrl);
                setData(response?.data);
            } catch (err) {
                console.error("Error fetching channel data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const settings = {
        infinite: true, // Continuous looping of slides
        speed: 3500, // Transition duration for smooth scrolling
        slidesToShow: 5, // Number of slides visible at once
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enables automatic sliding
        autoplaySpeed: 0, // Continuous scrolling with no interval between slides
        cssEase: "linear", // Ensures consistent, smooth scrolling
        pauseOnHover: true, // Pauses the carousel immediately when hovered
        arrows: false, // Removes navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="channel-carousel">
            {loading ? (
                <div className="loading-spinner">Loading...</div>
            ) : data?.length > 0 ? (
                <Slider {...settings}>
                    {data.map((channel, index) => (
                        <div key={index} className="carousel-item">
                            <img
                                src={channel.image || "default-placeholder.png"}
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
