import React from 'react';
import './PickupLocations.css';

const PickupLocations = () => {
    return (
        <div className="pickup-locations">
            <header className="pickup-locations__header">
                <h1 className="pickup-locations__title">Manage Pickup Locations</h1>
                <p className="pickup-locations__subtitle">
                    Simplify your logistics by adding and managing multiple pickup locations effortlessly.
                </p>
            </header>

            <section className="pickup-locations__section">
                <h2 className="pickup-locations__section-title">How to Manage Pickup Locations</h2>
                <div className="pickup-locations__steps">
                    <div className="pickup-locations__step">
                        <h3 className="pickup-locations__step-title">Add New Pickup Address</h3>
                        <p>Go to <b>Settings &gt; Menu</b>, select <b>Pickup Address</b>, and click <b>Add New Pickup Address</b>.</p>
                    </div>
                    <div className="pickup-locations__step">
                        <h3 className="pickup-locations__step-title">Edit Existing Pickup Address</h3>
                        <p>Go to <b>Settings &gt; Pickup Address &gt; Manage Pickup Addresses</b>, select an address and click the edit icon to change details.</p>
                    </div>
                </div>
            </section>

            <section className="pickup-locations__benefits">
                <h2 className="pickup-locations__section-title">Why You Should Optimize Your Pickup Locations</h2>
                <div className="pickup-locations__benefit">
                    <h3 className="pickup-locations__benefit-title">Faster Delivery</h3>
                    <p>Select the nearest pickup location to reduce transit time, enabling faster deliveries and better customer satisfaction.</p>
                </div>
                <div className="pickup-locations__benefit">
                    <h3 className="pickup-locations__benefit-title">Convenient & Flexible</h3>
                    <p>Upload bulk pickup addresses with ease. Add and manage as many locations as needed for maximum convenience.</p>
                </div>
                <div className="pickup-locations__benefit">
                    <h3 className="pickup-locations__benefit-title">Cost Savings</h3>
                    <p>Reduce shipping costs by selecting a nearby pickup location, minimizing transportation expenses.</p>
                </div>
            </section>
        </div>
    );
};

export default PickupLocations;
