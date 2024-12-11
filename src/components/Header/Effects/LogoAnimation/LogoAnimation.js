import React from 'react';
import './LogoAnimation.css';
import logoImage from '../../../../assets/image/mobileLogo.svg'

const LogoAnimation = () => {
    return (
      <div className="animation-container">
        {/* Rotating Cube Container */}
        <div className="scene">
          <div className="rotating-cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
  
        {/* Fixed logo centered */}
        <div className="center-logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      </div>
    );
  };
  
  export default LogoAnimation;
  
