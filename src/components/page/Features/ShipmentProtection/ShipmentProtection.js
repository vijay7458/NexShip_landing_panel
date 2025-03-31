import React from 'react';
import './ShipmentProtection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import SecurePackages from '../../../../assets/image/SecurePackages.png'
import SubmitClaimIcon from '../../../../assets/image/SubmitClaimIcon.png'
// import ReceiveReimbursement from '../../../../assets/image/ReceiveReimbursement.png'
import SelectCover from '../../../../assets/image/SelectCover.png'
import ElectronicsIcon from './Icons/ElectronicsIcon';
import MedicineIcon from './Icons/MedicineIcon';
import FashionApparelsIcon from './Icons/FashionApparelsIcon';
import SecurePackage from './Icons/SecurePackage';
import SubmitClaim from './Icons/SubmitClaim';
import ReceiveReimbursement from './Icons/ReceiveReimbursement';

const ShipmentProtection = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 550,
            behavior: "smooth",
        });
    };
    return (
        <>
            <header className="page-header">
                <div className="ripple-shape">
                    <span className="ripple-1" />
                    <span className="ripple-2" />
                    <span className="ripple-3" />
                    <span className="ripple-4" />
                    <span className="ripple-5" />
                </div>
                <h1 className=''>Comprehensive Shipment Protection Made Simple</h1>
                <p className="page-header-description">Safeguard Your Shipments Against Loss, Damage, and Theft with Easy Coverage Options</p>


                <button onClick={handleScroll} className='btn main-button'>Explore More <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
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
                            <SecurePackage />
                            <p>Easily secure your packages. The premium will be calculated based on the package value.</p>
                        </div>
                        <div className="shipment-protection__step">
                            <h3 className="shipment-protection__step-title">STEP 02</h3>
                            <p className="shipment-protection__step-heading">Submit Claims</p>
                            <SubmitClaim />
                            <p>Submit a claim for reimbursement in case the package is damaged, or stolen.</p>
                        </div>
                        <div className="shipment-protection__step">
                            <h3 className="shipment-protection__step-title">STEP 03</h3>
                            <p className="shipment-protection__step-heading">Receive Reimbursement</p>
                            <ReceiveReimbursement/>
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
                        <div className='shipment-protection-image'>
                            <img src={SelectCover} alt="" />
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
                            <ElectronicsIcon />
                            <span>Electronics</span>
                        </li>
                        <li className="shipment-protection__product-item">
                            <MedicineIcon />
                            <span>Medicine</span>
                        </li>
                        <li className="shipment-protection__product-item">
                            <FashionApparelsIcon />
                            <span>Fashion Apparels</span>
                        </li>
                    </ul>
                </section>
            </section>
        </>
    );
};

export default ShipmentProtection;
