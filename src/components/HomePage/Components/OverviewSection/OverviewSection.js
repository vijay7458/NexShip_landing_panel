import React, { useEffect, useState } from "react";
import "./OverviewSection.css"; // Import custom CSS file
import BannerImage from '../../../../assets/image/banner-image.webp'
import axios from "axios";
import { BASE_URL } from "../../../../axios/config";

const OverviewSection = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `${BASE_URL}/core-api/shipease-admin/stats-list/`;
                const response = await axios.get(apiUrl);
                setData(response.data);

            } catch (err) {

            }
        };

        fetchData();
    }, []);




    return (
        <section className="home-section">
            <div className="overview-container">
                {/* Heading */}
                <div className="heading">
                    <p className="subtitle">A trusted growth partner</p>
                    <h1>
                        Lakhs of eCommerce businesses chose<br />
                        <span className="highlight-overview"><strong>Shipease</strong> to streamline their customer<br /> journey—from shipping to returns and beyond</span>
                    </h1>
                </div>
                <div className="row">
                    {/* Stats Section */}
                    <div className="col-6 stats">
                        {data?.map((item) => (
                            <div className="stat-item">
                                <h2>{item?.number} +</h2>
                                <p>{item?.title}</p>
                            </div>
                        ))}

                    </div>
                    {/* Visual Section */}
                    <div className="col-6 visuals">
                        <img src={BannerImage} alt="" />
                        {/* <div className="image-box">
                            <img
                                src="path/to/your-woman-image.jpg"
                                alt="A woman managing orders"
                                className="main-image"
                            />
                        </div>
                        <div className="process-image">
                            <img
                                src="path/to/your-process-image.jpg"
                                alt="Shipping process illustration"
                                className="secondary-image"
                            />
                        </div>
                        <div className="truck-image">
                            <img
                                src="path/to/your-truck-image.jpg"
                                alt="Delivery truck"
                                className="tertiary-image"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
