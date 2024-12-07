import React from "react";
import "./OperationsPanel.css"; // CSS file for styling

const OperationsPanel = () => {
    return (
        <div className="operations-panel-container">
            <div className="header">
                <h5>Lead Generation & Analytics</h5>
                <h1>Your Operations, Streamlined</h1>
            </div>
            <div className="content">
                <div className="dashboard-image">
                    {/* Placeholder for the main dashboard image */}
                    <img
                        src="dashboard-placeholder.png"
                        alt="Dashboard"
                        className="dashboard-img"
                    />
                </div>
                <div className="features">
                    <div className="feature-card">
                        <div className="icon gear-icon">
                            {/* Replace with appropriate icon */}
                            ⚙️
                        </div>
                        <h3>Personalized Workflow</h3>
                        <p>
                            Tailor workflows to suit your business processes and goals.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="icon lightning-icon">
                            ⚡
                        </div>
                        <h3>Quick Access</h3>
                        <p>
                            Access critical tools and data quickly with a user-friendly
                            interface.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="icon live-icon">
                            🔴
                        </div>
                        <h3>Real-Time Updates</h3>
                        <p>
                            Stay updated with live metrics and notifications in one place.
                        </p>
                    </div>
                </div>
            </div>
            <div className="insight-footer">
                <p>
                    Designed to simplify your workflow, the Focused Panel brings all your
                    critical operations into one easy-to-navigate interface. It’s your
                    command center for seamless business management.
                </p>
            </div>
        </div>
    );
};

export default OperationsPanel;
