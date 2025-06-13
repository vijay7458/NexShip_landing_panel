import React, { useEffect, useRef, useState } from "react";
import "./InvestorsSection.css"; // Importing the CSS
import Meity from "../../../assets/image/investors/meity.png"
import Cogniphy from "../../../assets/image/investors/cogniphy.webp"
import Jito from "../../../assets/image/investors/Jito.jpg"
import Ipv from "../../../assets/image/investors/Ipv.png"
import InvestorSideImage from "../../../assets/image/investors/InvestorSideImage4.svg"

const InvestorsData = [
    {
        name: "Inflection Point Ventures",
        logo: Ipv,
        link: "https://ipventures.in/",
        description: "IPV is an angel network empowering startups with capital, mentorship, and investor access."
    },
    {
        name: "JITO Angel Network",
        logo: Jito,
        link: "https://www.jitojiif.com/",
        description: "JITO invests in and incubates startups, fostering entrepreneurship among Jain professionals."
    },
    {
        name: "Cogniphy",
        logo: Cogniphy,
        link: "https://cogniphy.com/",
        description: "Cogniphy enables community-driven investments in Indian and U.S. tech startups."
    },
    {
        name: "MeitY",
        logo: Meity,
        link: "https://www.meity.gov.in/",
        description: "MeitY promotes innovation, digital governance, and IT growth in India."
    },
];




const InvestorsSection = () => {
    const [isAnimated, setIsAnimated] = useState(false); // Track if animation has been applied
    const sectionRef = useRef(null);

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

    const openInNewTab = (url) => {
        if (!url) return;
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <>
            <div id="investor-section" className="home-section" ref={sectionRef}>
                <div className="tc-invester-container">
                    <div className={`heading mb-5 ${isAnimated ? "animate__animated animate__pulse" : ""}`}>
                        <h3 className="subtitle">Our Investors</h3>
                        <h1>Fueling Innovation Through Strategic Partnerships</h1>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="iv-container-left">
                            {
                                InvestorsData?.map((investor, index) => (
                                    <div key={index} className="investor-card" onClick={() => openInNewTab(investor?.link)}>
                                        <img src={investor?.logo} alt={`${investor?.name} logo`} />
                                        <p>{investor?.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="iv-container-right">
                            <img src={InvestorSideImage} alt="Investor section illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvestorsSection;
