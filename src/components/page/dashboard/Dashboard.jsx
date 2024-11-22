import React from 'react';
import './dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome to the Home Page</h1>
          <button className="logout-button">Track</button>
        </header>
        <div className="dashboard-content">
          <div className="content-card">
            <h2>Profile</h2>
            <p>Update your personal information and settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
