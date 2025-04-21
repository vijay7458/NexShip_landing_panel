import React from 'react'
import DifferentLocationsIcon from './Icons/DifferentLocationsIcon';
import PackageWeightIcon from './Icons/PackageWeightIcon';
import RemoteLocationIcon from './Icons/RemoteLocationIcon';
import FragileItemIcon from './Icons/FragileItemIcon';

const WeightFactors = () => {
    return (
        <>
            <section className="shipping-rate-calculator__factors">
                <div className='amazon-self-ship-container row'>
                    <div className='col-12'>
                        <h2 className='heading text-center'>Weigh All The Factors Involved</h2>
                        <p className='text-center'>Avoid overspending on eCommerce shipping! Our free calculator lets you determine courier charges based on all the key factors that matter.</p>
                        <ul className=''>
                            <li><DifferentLocationsIcon />The distance between the pickup and delivery locations.</li>
                            <li><PackageWeightIcon />The weight of the shipment, as heavier items cost more to ship.</li>
                            <li><RemoteLocationIcon />Additional charges for remote or difficult-to-access locations.</li>
                            <li><FragileItemIcon />Any special handling requirements for fragile or oversized items.</li>
                        </ul>
                    </div>
                    {/* <div className='col-6'></div> */}
                </div>
            </section>
        </>
    )
}

export default WeightFactors