import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./ChannelCarousel.css";

const ChannelCarousel = () => {
    const channels = [
        { name: "Channel 1", image: "https://via.placeholder.com/100" },
        { name: "Channel 2", image: "https://via.placeholder.com/100" },
        { name: "Channel 3", image: "https://via.placeholder.com/100" },
        { name: "Channel 4", image: "https://via.placeholder.com/100" },
        { name: "Channel 5", image: "https://via.placeholder.com/100" },
        // Add more channels as needed
    ];

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 5, // Number of visible slides
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Speed for continuous scrolling
        cssEase: "linear", // Smooth animation
        pauseOnHover: true, // Pause on hover
        arrows: false, // Remove navigation arrows
    };

    return (
        <div className="channel-carousel">
            <Slider {...settings}>
                {channels.map((channel, index) => (
                    <div key={index} className="carousel-item">
                        <img src={channel.image} alt={channel.name} />
                        <p>{channel.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ChannelCarousel;
