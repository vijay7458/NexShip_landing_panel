import React from 'react'
import './WeightAccuracy.css'
import WeightD from '../../../../assets/image/WeightD.png'

const WeightAccuracy = () => {
    return (
        <>
            <section className="home-section">
                <div className="overview-container">
                    <div className='row'>
                        {/* Heading */}
                        <div className="col-7 heading">
                            <p className="subtitle">Weight Discrepancies</p>
                            <h1>Accuracy Matters</h1>
                            <p className="highlight">Prevent disruptions with accurate weight tracking and quick resolution of discrepancies. Trust us to keep your shipments on track.</p>
                        </div>
                        <div className='col-5'>
                            <img src={WeightD} alt="Weight Discrepancies" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default WeightAccuracy