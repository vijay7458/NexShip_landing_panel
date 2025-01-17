import React from 'react';
import './Media.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Media = () => {
    const mediaContent = [
        {
            date: "June 19, 2023",
            title: "ShipEase Technologies Pvt Ltd: Leveraging Technology to Enhance Your Shipping Experience",
            description: "ShipEase Technologies is revolutionizing logistics with cutting-edge technology, optimizing every aspect of the shipping journey.",
            author: "Startup Story™",
        },
        {
            date: "June 19, 2023",
            title: "Not All Funding Announcements Are Equal",
            description: "We’re excited to share that we've received validation from a major financial institution, a huge step forward for our growth.",
            author: "Ajay K",
        },
        {
            date: "June 19, 2023",
            title: "Logistics Tech: ShipEase Technologies",
            description: "With Recur Club’s non-dilutive funding, we now have the capital to continue innovating and advancing our solutions.",
            author: "Recur Club",
        },
        {
            date: "June 19, 2023",
            title: "ShipEase Technologies Pvt Ltd: Tech for the Future",
            description: "Success in business isn’t about offering discounts—it’s about solving real-world problems with impactful solutions.",
            author: "Startup Story™",
        },
        {
            date: "June 19, 2023",
            title: "The Supply Chain Observer: Industry News & Insights",
            description: "The Supply Chain Observer offers the latest updates and in-depth articles on the global supply chain and logistics sectors.",
            author: "Pranav Jyoti",
        },
        {
            date: "June 19, 2023",
            title: "Shipping Your Products Made Easy",
            description: "Wondering how you’ll ship your products? With ShipEase, your goods are in trusted hands, ensuring safe and timely delivery.",
            author: "ShipEase",
        },
        {
            date: "July 09, 2023",
            title: "Exciting Partnership Announcement",
            description: "We're thrilled to announce our exclusive partnership, helping D2C brands manage checkout and shipping with ease.",
            author: "Lalit Singh",
        },
        {
            date: "June 19, 2023",
            title: "Effortless Cash on Delivery Shipments",
            description: "ShipEase makes cash on delivery orders hassle-free, offering reliable shipping solutions for a seamless experience.",
            author: "ShipEase",
        },
        {
            date: "June 20, 2023",
            title: "Exclusive Interview: Pawan Kumar, Co-founder of ShipEase",
            description: "In an exclusive chat with MediaBrief, Pawan Kumar, Co-founder of ShipEase, discusses the company’s mission and vision for the future of logistics.",
            author: "Mediabrief.com",
        },
        {
            date: "July 09, 2023",
            title: "Reliable Shipping Solutions with ShipEase",
            description: "Trust ShipEase to handle your shipments with care and precision, wherever your business takes you.",
            author: "ShipEase Technology",
        },
    ];
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    return (
        <>
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1>Featured Media Coverage and Industry Insights</h1>
                <p className="page-header-description">Explore coverage, recognition, and insightful articles on business, eCommerce, and industry trends.</p>
                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="media-page">
                <h1 className="media-heading">Media Highlights</h1>
                <p className="media-intro">Stay updated with the latest news and stories about ShipEase.</p>
                <div className="media-grid">
                    {mediaContent.map((item, index) => (
                        <div className="media-card" key={index}>
                            <div className="media-date">{item.date}</div>
                            <h2 className="media-title">{item.title}</h2>
                            <p className="media-description">{item.description}</p>
                            <div className="media-author">By {item.author}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Media;
