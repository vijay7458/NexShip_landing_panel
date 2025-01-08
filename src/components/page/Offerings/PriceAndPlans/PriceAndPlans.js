import React from 'react'
import './PriceAndPlans.css'
import ListIcon from './ListIcon'

const PriceAndPlans = () => {
    return (
        <>
            <section className='business-plan-page'>
                <h2 className='mt-3 text-center'>Grab The Perfect Plan for Your Needs</h2>
                <p className='text-center text-sh-primary'>Our transparent pricing makes it easy to find a plan that works within your financial constraints.</p>
                <div className='plans-container'>
                    <div className='plan-item'>
                        <h4>Standard</h4>
                        <div className='plan-price'>
                            {/* <span>₹</span> */}
                            <p>26.27 per</p>
                        </div>
                        <p className='mt-3'>Unlock advanced features and receive priority support.</p>
                        <div className='plans-features'>
                            <ul className=''>
                                <li><ListIcon /> 1 Ecommerce Channel Integration</li>
                                <li><ListIcon /> Chat, Call & Email Support</li>
                                <li><ListIcon /> Automated Channel Order Sync</li>
                                <li><ListIcon /> Domestic And International Shipping</li>
                            </ul>
                        </div>
                        <button className='btn main-button-outline mt-4'>Get Started</button>
                    </div>
                    <div className='plan-item'>
                        <h4>Pro</h4>
                        <div className='plan-price'>
                            {/* <span>₹</span> */}
                            <p>23.88 per</p>
                        </div>
                        <p className='mt-3'>Access premium tools and team colaboration options.</p>
                        <div className='plans-features'>
                            <ul className=''>
                                <li><ListIcon /> 5 Ecommerce Channel Integration</li>
                                <li><ListIcon /> Chat, Call & Email Support</li>
                                <li><ListIcon /> Automated Channel Order Sync</li>
                                <li><ListIcon /> Domestic And International Shipping</li>
                            </ul>
                        </div>
                        <button className='btn main-button-outline mt-4'>Get Started</button>
                    </div>
                    <div className='plan-item'>
                        <h4>Pro Plus</h4>
                        <div className='plan-price'>
                            <p>20.34 per</p>
                        </div>

                        <p className='mt-3'>Customizable solutions for large shipping and dedicated support.</p>
                        <div className='plans-features'>
                            <ul className=''>
                                <li><ListIcon /> Intelligent Courier Allocation</li>
                                <li><ListIcon /> Unlimited Ecommerce Channel Integration</li>
                                <li><ListIcon /> Domestic Shipping</li>
                                <li><ListIcon /> Automated Channel Order Sync</li>
                                <li><ListIcon /> Ndr Calling And Ivr Response Setup</li>
                            </ul>
                        </div>
                        <button className='btn main-button-outline mt-4'>Get Started</button>
                    </div>
                </div>
                <div className='book-demo-sec'>
                    <p className='mb-0'>Grab It Fast to Get Special Price!</p>
                    <button className='btn'>Book Demo Now!</button>
                </div>
            </section>
        </>
    )
}

export default PriceAndPlans