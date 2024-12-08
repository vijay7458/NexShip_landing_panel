import React from "react";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import "./HomePage.css";
import ChannelCarousel from "./Components/ChannelCarousel/ChannelCarousel";
import AboutSection from "./Components/AboutSection/AboutSection";
import OverviewSection from "./Components/OverviewSection/OverviewSection";
import WeightAccuracy from "./Components/WeightAccuracy/WeightAccuracy";
import SmartReportScheduling from "./Components/SmartReportScheduling/SmartReportScheduling";
import BusinessGrowth from "./Components/BusinessGrowth/BusinessGrowth";
import AbandonedCartFlow from "./Components/AbandonedCartFlow/AbandonedCartFlow";
import CheckoutRecovery from "./Components/CheckoutRecovery/CheckoutRecovery";
import OperationsPanel from "./Components/OperationsPanel/OperationsPanel";
import Insights from "./Components/Insights/Insights";

const HomePage = () => {
    return (
        <div className="homepage">

            <HeroBanner />

            {/* <ChannelCarousel /> */}

            <OverviewSection />

            <WeightAccuracy />

            <SmartReportScheduling />

            <BusinessGrowth />

            <CheckoutRecovery />
            <AbandonedCartFlow />

            <Insights />

            <OperationsPanel />

        </div>
    );
};

export default HomePage;
