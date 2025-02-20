import React, { useEffect, useState } from "react";
import "animate.css"; // Import Animate.css
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import OverviewSection from "./Components/OverviewSection/OverviewSection";
import WeightAccuracy from "./Components/WeightAccuracy/WeightAccuracy";
import SmartReportScheduling from "./Components/SmartReportScheduling/SmartReportScheduling";
import BusinessGrowth from "./Components/BusinessGrowth/BusinessGrowth";
import AbandonedCartFlow from "./Components/AbandonedCartFlow/AbandonedCartFlow";
import CheckoutRecovery from "./Components/CheckoutRecovery/CheckoutRecovery";
import Insights from "./Components/Insights/Insights";
import OperationsPanel from "./Components/OperationsPanel/OperationsPanel";
import "./HomePage.css";
import InsightsFooter from "./Components/Insights/InsightsFooter";

const sectionsData = [
    { id: "hero-banner", Component: HeroBanner, animation: "" },
    { id: "overview-section", Component: OverviewSection, animation: "" },
    { id: "weight-accuracy", Component: WeightAccuracy, animation: "" },
    { id: "smart-report", Component: SmartReportScheduling, animation: "" },
    { id: "business-growth", Component: BusinessGrowth, animation: "animate__zoomIn" },
    { id: "checkout-recovery", Component: CheckoutRecovery, animation: "" },
    { id: "abandoned-cart", Component: AbandonedCartFlow, animation: "" },
    { id: "insights", Component: Insights, animation: "" },
    { id: "insights-footer", Component: InsightsFooter, animation: "" },
    { id: "operations-panel", Component: OperationsPanel, animation: "animate__fadeInLeft" },
];

const Section = ({ id, Component, animation, isVisible }) => {
    return (
        <div
            id={id}
            className={`section animate__animated ${isVisible ? animation : ""
                }`}
            style={{
                animationDuration: "0.8s",
                opacity: isVisible ? 1 : 0, // Fallback for smoother appearance
            }}
        >
            <Component />
        </div>
    );
};

const HomePage = () => {
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        sectionsData.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="homepage">
            {sectionsData.map(({ id, Component, animation }) => (
                <Section
                    key={id}
                    id={id}
                    Component={Component}
                    animation={animation}
                    isVisible={visibleSections[id]}
                />
            ))}
        </div>
    );
};

export default HomePage;
