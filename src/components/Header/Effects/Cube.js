import React from 'react'
import './Cube.css'
import MobileLogo from '../../../assets/image/mobileLogo.svg'

const Cube = () => {
  return (
    <>
      <div className="cube">
        {/* Creating 6 divs for each face of the cube */}
        <div className="box box1">
          <img
            src={MobileLogo}
            alt="image 1"
          />
        </div>
        <div className="box box2">
          <img
            src={MobileLogo}
            alt="image 2"
          />
        </div>
        <div className="box box3">
          <img
            src={MobileLogo}
            alt="image 3"
          />
        </div>
        <div className="box box4">
          <img
            src={MobileLogo}
            alt="image 4"
          />
        </div>
        <div className="box box5">
          <img
            src={MobileLogo}
            alt="image 5"
          />
        </div>
        <div className="box box6">
          <img
            src={MobileLogo}
            alt="image 6"
          />
        </div>
      </div>

    </>
  )
}

export default Cube