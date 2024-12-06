import React from "react";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import "./HomePage.css";
import ChannelCarousel from "./Components/ChannelCarousel/ChannelCarousel";
import AboutSection from "./Components/AboutSection/AboutSection";
import OverviewSection from "./Components/OverviewSection/OverviewSection";

const HomePage = () => {
    return (
        <div className="homepage">

            <HeroBanner />

            <ChannelCarousel />

            <OverviewSection />


        </div>
    );
};

export default HomePage;
