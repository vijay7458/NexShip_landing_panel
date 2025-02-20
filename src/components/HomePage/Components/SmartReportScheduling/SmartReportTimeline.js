import React, { useEffect, useState } from "react";
import "./SmartReportTimeline.css";

const SmartReportTimeline = () => {
    const [visibleEvents, setVisibleEvents] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".timeline-event");
            elements.forEach((el, index) => {
                const position = el.getBoundingClientRect().top;
                if (position < window.innerHeight - 100) {
                    setVisibleEvents((prev) => [...new Set([...prev, index])]);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const timelineData = [
        {
            step: "Step 1",
            title: "Select Your Report",
            description: "Pick the insights that matter most.",
            icon: "📊",
        },
        {
            step: "Step 2",
            title: "Schedule with Ease",
            description: "Set a time that fits your workflow.",
            icon: "⏳",
        },
        {
            step: "Step 3",
            title: "Get It, Your Way",
            description: "Receive reports automatically, hassle-free.",
            icon: "📩",
        },
    ];

    return (
        <div className="timeline-container">
            {/* <h2>Smart Report Scheduling</h2>
      <p className="timeline-subtitle">Seamless Reports, On Your Terms</p> */}

            <div className="timeline">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className={`timeline-event ${visibleEvents.includes(index) ? "visible" : ""} ${index % 2 === 0 ? "left" : "right"
                            }`}
                    >
                        <div className="timeline-icon">{item.icon}</div>
                        <div className="timeline-content">
                            <span className="timeline-step">{item.step}</span>
                            <h3 className="timeline-title">{item.title}</h3>
                            <p className="timeline-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmartReportTimeline;
