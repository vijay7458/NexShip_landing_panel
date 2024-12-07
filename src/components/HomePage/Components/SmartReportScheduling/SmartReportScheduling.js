import React from 'react';
import './SmartReportScheduling.css';

const SmartReportScheduling = () => {
    return (
        <div className="home-section">
            <div className='overview-container'>
                <div className='heading'>
                    <h3 className="subtitle">Smart Report Scheduling</h3>
                    <h1>Your Data, Delivered Your Way</h1>
                </div>
                <div className="grid">
                    <div className="grid-item">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="Choose Report Type"
                            className="icon"
                        />
                        <p className="text">Choose Report Type</p>
                    </div>
                    <div className="grid-item">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="Set Your Schedule"
                            className="icon"
                        />
                        <p className="text">Set Your Schedule</p>
                    </div>
                    <div className="grid-item">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual icon URL
                            alt="Relax and Receive"
                            className="icon"
                        />
                        <p className="text">Relax and Receive</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartReportScheduling;
