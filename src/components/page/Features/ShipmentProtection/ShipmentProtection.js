import React from 'react';
import './ShipmentProtection.css';

const ShipmentProtection = () => {
    return (
        <section className="shipment-protection__page-container">
            {/* Page Title */}
            <h1 className="heading text-center">Secure Your Shipments with Confidence</h1>

            {/* How It Works Section */}
            <section className="shipment-protection__how-it-works">
                <h2 className="heading text-center">How Does It Work?</h2>
                <div className="shipment-protection__steps">
                    <div className="shipment-protection__step">
                        <h3 className="shipment-protection__step-title">STEP 01</h3>
                        <p className="shipment-protection__step-heading">Secure Packages</p>
                        <p>Easily secure your packages. The premium will be calculated based on the package value.</p>
                    </div>
                    <div className="shipment-protection__step">
                        <h3 className="shipment-protection__step-title">STEP 02</h3>
                        <p className="shipment-protection__step-heading">Submit Claims</p>
                        <p>Submit a claim for reimbursement in case the package is damaged, or stolen.</p>
                    </div>
                    <div className="shipment-protection__step">
                        <h3 className="shipment-protection__step-title">STEP 03</h3>
                        <p className="shipment-protection__step-heading">Receive Reimbursement</p>
                        <p>Receive reimbursement up to the total value of the package.</p>
                    </div>
                </div>
            </section>

            {/* How to Opt for Cover */}
            <section className="shipment-protection__opt-for-cover">
                <h2 className="heading text-center">How Can You Opt For Cover?</h2>
                <div className="shipment-protection__cover-options">
                    <div className="shipment-protection__cover">
                        <h3 className="shipment-protection__cover-title">Selective Cover</h3>
                        <p>
                            Opt for protection on individual shipments above Rs. 5000 and below Rs. 25 Lakhs.
                            Click on the ‘Ship Now’ button and choose ‘Secured or Unsecured.’ Freight cost changes
                            will reflect based on the option selected.
                        </p>
                    </div>
                    <div className="shipment-protection__cover">
                        <h3 className="shipment-protection__cover-title">Blanket Cover</h3>
                        <p>
                            Opt for protection on all shipments in the Rs. 5000 to Rs. 25 Lakh bracket.
                            Under the ‘Shipment Security’ tab, enable ‘Auto secure all shipments above 5K.’ Once enabled,
                            all shipments will be covered.
                        </p>
                    </div>
                </div>
            </section>

            {/* Eligible Products Section */}
            <section className="shipment-protection__eligible-products">
                <h2 className="heading text-center">Eligible Products</h2>
                <ul className="shipment-protection__product-list">
                    <li className="shipment-protection__product-item">
                        <img src="https://via.placeholder.com/220x180?text=Electronics" alt="Electronics" className="shipment-protection__product-image" />
                        <span>Electronics</span>
                    </li>
                    <li className="shipment-protection__product-item">
                        <img src="https://via.placeholder.com/220x180?text=Medicine" alt="Medicine" className="shipment-protection__product-image" />
                        <span>Medicine</span>
                    </li>
                    <li className="shipment-protection__product-item">
                        <img src="https://via.placeholder.com/220x180?text=Fashion" alt="Fashion Apparels" className="shipment-protection__product-image" />
                        <span>Fashion Apparels</span>
                    </li>
                </ul>
            </section>
        </section>
    );
};

export default ShipmentProtection;
