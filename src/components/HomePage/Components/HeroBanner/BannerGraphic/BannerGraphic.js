import React from "react";
// import planetImg from "./img/Box.svg";
import planetImg from "../../../../../assets/image/mobileLogo.svg";
// import planetImg from "./img/transparent.svg";
import planetShadow from "./img/PlanetShadow.svg";
import "./BannerGraphic.css";
import Transparent from "./img/transparent.svg";
import Amazon from '../../../../../assets/image/Couriers/Amazon.svg'
import Bluedart from '../../../../../assets/image/Couriers/Bluedart.svg'
import Delhivery from '../../../../../assets/image/Couriers/Delhivery.svg'
import Dtdc from '../../../../../assets/image/Couriers/Dtdc.svg'
import Ecom from '../../../../../assets/image/Couriers/Ecom.svg'
import Ekart from '../../../../../assets/image/Couriers/Ekart.svg'
import Pickndel from '../../../../../assets/image/Couriers/Pickndel.svg'
import Professional from '../../../../../assets/image/Couriers/Professional.svg'
import Shodowfax from '../../../../../assets/image/Couriers/Shodowfax.svg'
import Smartr from '../../../../../assets/image/Couriers/Smartr.svg'
import Smc from '../../../../../assets/image/Couriers/Smc.svg'
import Xpressbees from '../../../../../assets/image/Couriers/Xpressbees.svg'

const BannerGraphic = () => {
  return (
    <>
      <div id="orbit-system">
        <div className="system">
          <div className="satellite-orbit2">
            <div className="satellite55">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Ekart} alt="" />
              </a>
            </div>
          </div>
          <div className="satellite-orbit3">
            <div className="satellite">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Amazon} alt="" />
              </a>
            </div>
            <div className="satellite3">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Bluedart} alt="" />
              </a>
            </div>
            <div className="satellite33">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Delhivery} alt="" />
              </a>
            </div>
          </div>
          <div className="satellite-orbit4">
            <div className="satellite4">
              <a
                href="earn"
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Xpressbees} alt="" />
              </a>
            </div>
            <div className="satellite44">
              <a
                className=""
                href=""
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Shodowfax} alt="" />
              </a>
            </div>
            <div className="satellite22">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Dtdc} alt="" />
              </a>
            </div>
            <div className="satellite2">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                style={{ width: "50px", height: "50px", display: "flex" }}
              >
                <img src={Ecom} alt="" />
              </a>
            </div>
          </div>
          <div className="planet">
            <img src={planetImg} className="planet-image" alt="lkdPlanet" />
            <img src={planetShadow} className="planet-shadow" alt="lkdPlanet" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerGraphic;
