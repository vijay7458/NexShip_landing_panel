import React from "react";
import "./OperationsPanel.css"; // CSS file for styling
import OperationsDashboard from '../../../../assets/image/OperationsDashboard.png'
import PersonalisedWorkflow from '../../../../assets/image/PersonalisedWorkflow.png'
import QuickAccess from '../../../../assets/image/QuickAccess.png'
import RealTimeUpdates from '../../../../assets/image/RealTimeUpdates.png'


const OperationsPanel = () => {
    return (
        <>
            <div className="home-section">
                <div className='overview-container'>
                    <div className='heading'>
                        <h3 className="subtitle">Lead Generation & Analytics</h3>
                        <h1>Your Operations, Streamlined</h1>
                    </div>
                    <div className="content">
                        <div className="operations-dashboard-image">
                            {/* Placeholder for the main dashboard image */}
                            <img
                                src={OperationsDashboard}
                                alt="Dashboard"
                                className="dashboard-img"
                            />
                        </div>
                        <div className="features">
                            <div className="feature-card">
                                <div className="operatons-icon">
                                    <img src={PersonalisedWorkflow} alt="" />
                                </div>
                                <h3>Personalized Workflow</h3>
                                <p>
                                    Tailor workflows to suit your business processes and goals.
                                </p>
                            </div>
                            <div className="feature-card">
                                <div className="operatons-icon">
                                    <img src={QuickAccess} alt="" />
                                </div>
                                <h3>Quick Access</h3>
                                <p>
                                    Access critical tools and data quickly with a user-friendly
                                    interface.
                                </p>
                            </div>
                            <div className="feature-card">
                                <div className="operatons-icon">
                                    <img src={RealTimeUpdates} alt="" />
                                </div>
                                <h3>Real-Time Updates</h3>
                                <p>
                                    Stay updated with live metrics and notifications in one place.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="highlight insights-footer">
                        <p>
                            Designed to simplify your workflow, the Focused Panel brings all your
                            critical operations into one easy-to-navigate interface. It’s your
                            command center for seamless business management.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OperationsPanel;
