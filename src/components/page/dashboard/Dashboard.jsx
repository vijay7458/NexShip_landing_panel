import React, { useEffect, useState } from 'react';
import './dashboard.css';
import Slider from './components/slider/Slider';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://bus-sewa.onrender.com/bus-seva/employee-storage`;
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data?.data[0].imagestore, "datadatadata")

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome to the Home Page</h1>
          <img src={data?.data[0].imagestore} width={"100px"} height={"100px"} alt="" />
          <div className="container mt-3">
            <ul className="list-group d-flex flex-row">
              <li className="list-group-item me-2">
                <Link to="/" className="text-decoration-none text-dark fw-bold">
                  Home
                </Link>
              </li>
              <li className="list-group-item me-2">
                <Link to="/about-us" className="text-decoration-none text-dark fw-bold">
                  About
                </Link>
              </li>
              <li className="list-group-item me-2">
                <Link to="/blogs" className="text-decoration-none text-dark fw-bold">
                  Blog
                </Link>
              </li>
              <li className="list-group-item me-2">
                <Link to="/blogs" className="text-decoration-none text-dark fw-bold">
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="dashboard-content">
          <div className="content-card">
            <h2>Profile</h2>
            <p>Update your personal information and settings.</p>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
