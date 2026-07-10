import React from 'react'

const HowToCalculateWeight = () => {
    return (
        <>
            <section className="shipping-rate-calculator__how-to">
                <div className='amazon-self-ship-container'>
                    <h2 className='heading text-center'>How to Calculate Shipping Rates</h2>
                    <div className="hyperlocal__steps">
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>01.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Enter the pickup pincode of the shipment.</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>02.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Enter the delivery pincode where the shipment will be sent.</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>03.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Specify the weight of the shipment in kilograms.</h3>
                            </div>
                        </div>
                        <hr />
                        <div className="hyperlocal__step">
                            <div>
                                <span className='hyperlocal-step-number'>04.</span>
                            </div>
                            <div>
                                <h3 className="hyperlocal__step-title">Click the "Calculate Rate" button to get the estimated shipping rate.</h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowToCalculateWeight