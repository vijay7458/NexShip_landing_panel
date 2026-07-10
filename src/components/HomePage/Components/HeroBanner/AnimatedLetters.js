import React from "react";
import "./HeroBanner.css";

const AnimatedText = ({ text }) => {
    // const text = "Logistics Industry Dynamics Unveiled.";

    return (
        <>
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className="text-animate-hover"
                    style={{
                        animationDelay: `${index * 0.05}s`, // Dynamically calculate delay
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </>
    );
};

export default AnimatedText;
