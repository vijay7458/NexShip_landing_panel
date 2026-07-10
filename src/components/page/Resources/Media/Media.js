import React from 'react';
import './Media.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MediaContent from './MediaContent';

const Media = () => {


    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };

    const handleOpenLink = (url) => {
        window.open(url, '_blank')
    }

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
                <h2 className="heading text-center pt-5">Media Highlights</h2>
                <p className="media-intro">Stay updated with the latest news and stories about ShipEase.</p>
                <div className="media-grid mb-5">
                    {MediaContent.map((item, index) => (
                        <div onClick={() => handleOpenLink(item?.url)} className="print-media-card" key={index}>
                            <div className="image-container">
                                <img src={item?.image} alt="" />
                            </div>
                            <div>
                                <div className="media-date">{item.date}</div>
                                <h2 className="media-title">{item.title}</h2>
                                <p className="media-description">{item.description}</p>
                            </div>
                            <div className='w-100 text-right'>
                                <div className="media-author">By {item.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Media;
