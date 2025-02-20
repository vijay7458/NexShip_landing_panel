import React from 'react';
import './SmartReportScheduling.css';
import ReportType from '../../../../assets/image/ReportType.png'
import Scheduling from '../../../../assets/image/Schedule.png'
import Receiving from '../../../../assets/image/Receive.png'
import SmartReportTimeline from './SmartReportTimeline';

const SmartReportScheduling = () => {
    return (
        <>
            <div className="home-section">
                <div className='overview-container'>
                    <div className='heading'>
                        <h3 className="subtitle">Smart Report Scheduling</h3>
                        <h1>Your Data, Delivered Your Way</h1>
                    </div>
                    <SmartReportTimeline />
                    {/* <div className="grid">
                        <div className="grid-item">
                            <img
                                src={ReportType}
                                alt="Choose Report Type"
                                className="icon"
                            />
                            <p className="text">Choose Report Type</p>
                        </div>
                        <div className="grid-item">
                            <img
                                src={Scheduling}
                                alt="Set Your Schedule"
                                className="icon"
                            />
                            <p className="text">Set Your Schedule</p>
                        </div>
                        <div className="grid-item">
                            <img
                                src={Receiving}
                                alt="Relax and Receive"
                                className="icon"
                            />
                            <p className="text">Relax and Receive</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default SmartReportScheduling;
