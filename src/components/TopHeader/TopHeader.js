import React from "react";
import "./TopHeader.css";

const TopHeader = () => {
    return (
        <div className="top-header py-2">
            <div className="container d-flex align-items-center gap-2 justify-content-center">
                <div className="announcement">
                    <span className="offer-highlight">🎉</span> Special offers waiting for you: <strong>SALE24</strong>
                </div>
                <a href="#learn-more" className="btn learn-more-btn">
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default TopHeader;
