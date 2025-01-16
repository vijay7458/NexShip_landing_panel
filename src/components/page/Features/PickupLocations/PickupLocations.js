import React from 'react';
import './PickupLocations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const PickupLocations = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <div className="pickup-locations">
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1>Effortlessly Manage and Streamline Your Pickup Locations</h1>

                <p className="page-header-description">Simplify your logistics by adding and managing multiple pickup locations effortlessly.
                </p>

                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
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
