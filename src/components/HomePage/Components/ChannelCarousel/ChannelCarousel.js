import axios from "axios";
import "./ChannelCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../axios/config";

const ChannelCarousel = () => {
    const [data, setData] = useState(null);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
              const apiUrl = `${BASE_URL}/core-api/shipease-admin/channel-partner-list/`;
              const response = await axios.get(apiUrl); 
              setData(response?.data); 
            } catch (err) {
            }
          };
      
          fetchData(); 
    }, []); 

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
                {data?.map((channel, index) => (
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
