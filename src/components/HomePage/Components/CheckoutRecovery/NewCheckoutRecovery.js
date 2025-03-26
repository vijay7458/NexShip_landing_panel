import React from 'react'
import "./NewCheckoutRecovery.css"
import CrLeftBg from "../../../../assets/image/cr-left-bg.png"
import crLeftRings from "../../../../assets/image/cr-left-rings.png"
import crLeftLogo from "../../../../assets/image/KPI-Interaction-Illustration-3.webp"
import Pointer from './Pointer'

const NewCheckoutRecovery = () => {
    return (
        <>
            <div className="home-section">
                <div className='row cr-section justify-content-between mb-5'>
                    <div className='col-6 col-lg-3 blue-half order-2 order-lg-1'>
                        <img src={crLeftLogo} alt="crLeftLogo" className='cr-left-logo' />
                        <img src={CrLeftBg} alt="CrLeftBg" className='cr-left-bg' />
                        <img src={crLeftRings} alt="crLeftRings" className='cr-ring-one' />
                        <img src={crLeftRings} alt="crLeftRings" className='cr-ring-two' />
                    </div>
                    <div className='cr-section-info col-12 col-lg-6 order-1 order-lg-2'>
                        <div className='heading text-end'>
                            <h3 className="subtitle">Abandoned Checkout Recovery</h3>
                            <h1>Bring Customers Back to Complete Their Journey</h1>
                        </div>
                        <div className='text-end'>
                            With WhatsApp, SMS and Email
                        </div>
                        <div className='text-end'>
                            <p>Send timely reminders & personalized offers <Pointer /></p>
                            <p>Nudge customers with quick updates and easy links <Pointer /></p>
                            <p>Provide detailed order summaries & exclusive discounts <Pointer /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCheckoutRecovery