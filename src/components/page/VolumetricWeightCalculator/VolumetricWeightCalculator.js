import React, { useState } from 'react';
import './VolumetricWeightCalculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import volumetricWeightImage from '../../../assets/image/volumetricWeightImage.png'
import HowToCalculate from '../../../assets/image/HowToCalculate.png'

const VolumetricWeightCalculator = () => {
    const [length, setLength] = useState('');
    const [breadth, setBreadth] = useState('');
    const [height, setHeight] = useState('');
    const [volumetricWeight, setVolumetricWeight] = useState(0);

    const handleCalculate = () => {
        const volume = length * breadth * height;
        const volumetricWeight = volume / 5000; // Assuming 5000 is the divisor for volumetric weight
        setVolumetricWeight(volumetricWeight);
    };

    const handleReset = () => {
        setLength('');
        setBreadth('');
        setHeight('');
        setVolumetricWeight(0);
    };

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
                <h1 className=''>Quickly Calculate Volumetric Weight with Ease</h1>
                <p className="page-header-description">
                    Calculate the volumetric weight for your package based on the dimensions you provide. Volumetric weight helps in determining shipping costs, especially for light but bulky items.
                </p>
                <button onClick={handleScroll} className='btn main-button'>Calculate Now <FontAwesomeIcon className='ms-2' icon={faArrowDown} /></button>
            </header>
            <div className="volumetric-weight-calculator">
                <section className="calculator">
                    <div className="amazon-self-ship-container">
                        <h2 className='heading text-center'>Volumetric Weight Calculator</h2>
                        <p className='text-center'>Enter the dimensions of your package to calculate its volumetric weight.<br />This will help you estimate shipping costs based on space occupied rather than actual weight.</p>
                        <div className='d-flex align-items-center gap-5 justify-content-center'>
                            <div className='volumetric-weight-inputs'>
                                <label>
                                    <input
                                        type="number"
                                        value={length}
                                        onChange={(e) => setLength(e.target.value)}
                                        placeholder="Enter Length"
                                    />
                                    <span className='input-unit'>cm</span>
                                </label>
                                <label>
                                    <input
                                        type="number"
                                        value={breadth}
                                        onChange={(e) => setBreadth(e.target.value)}
                                        placeholder="Enter Breadth"
                                    />
                                    <span className='input-unit'>cm</span>
                                </label>
                                <label>
                                    <input
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        placeholder="Enter Height"
                                    />
                                    <span className='input-unit'>cm</span>
                                </label>
                            </div>
                            <div className='d-flex gap-3 align-items-center justify-content-end'>
                                <button className='btn main-button' onClick={handleCalculate}>Calculate</button>
                                <button className='reset-button' onClick={handleReset}>Reset</button>
                            </div>
                        </div>

                        <div className={`calculated-weight ${volumetricWeight > 0 && "open"}`}>
                            <div>
                                <h3>Calculated Volumetric Weight: {volumetricWeight.toFixed(1)} kg</h3>
                                <p>This will be the weight based on the size of your package, not the actual weight. Shipping companies use this to determine pricing for large but light shipments.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="info">
                    <div className="amazon-self-ship-container">
                        <h2 className='heading text-center'>What is Volumetric Weight?</h2>
                        <div className='row justify-content-between align-items-center'>
                            <p className='col-8'>Volumetric weight, also known as dimensional weight, is a measurement used by shipping carriers to determine the shipping cost of a package based on its volume. It takes into account the space a package occupies in a shipping vehicle or container, rather than just its actual weight. For lightweight but large packages, volumetric weight can be higher than the actual weight, resulting in higher shipping costs.</p>
                            <div className='col-4 text-end'>
                                <img src={volumetricWeightImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="calculation">
                    <div className="amazon-self-ship-container">
                        <h2 className='heading text-center'>How is Volumetric Weight Calculated?</h2>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-6'>
                                <p>Volumetric weight is calculated using the following formula:</p>
                                <p className='volumetric-formula'>(Length × Breadth × Height) / 5000</p>
                                <p>Here, the dimensions are in centimeters, and the divisor (5000) is a standard value used by most shipping companies. The result is then expressed in kilograms. This method helps shipping carriers charge for the space your package occupies, which can be much more important for bulky, low-weight items.</p>
                            </div>
                            <div className='col-6 text-end'>
                                <img src={HowToCalculate} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="faq">
                    <div className="amazon-self-ship-container">
                        <h2 className='heading text-center'>Frequently Asked Questions</h2>
                        <ul>
                            <li><strong>Q:</strong> Why is volumetric weight important?</li>
                            <li><strong>A:</strong> Volumetric weight allows shipping companies to charge based on the volume a package occupies rather than its actual weight. This is especially important for large but lightweight packages, ensuring fair pricing for both shippers and customers.</li>

                            <li><strong>Q:</strong> Can my package's volumetric weight exceed its actual weight?</li>
                            <li><strong>A:</strong> Yes, if the volume of your package is large but it is lightweight, its volumetric weight will be higher than its actual weight. This may result in higher shipping costs.</li>

                            <li><strong>Q:</strong> How can I reduce the volumetric weight of my package?</li>
                            <li><strong>A:</strong> To reduce volumetric weight, consider using smaller packaging that fits your item more closely. Ensure the box is as compact as possible while still protecting the item inside.</li>

                            <li><strong>Q:</strong> Does volumetric weight affect all shipping carriers?</li>
                            <li><strong>A:</strong> Yes, most major shipping carriers (e.g., FedEx, UPS, DHL) use volumetric weight as a factor in calculating shipping costs. However, the divisor used in the formula may vary slightly between carriers.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default VolumetricWeightCalculator;
