import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutHero.css";

const AboutHero = () => {
  const [chnageBg, setChangeBg] = useState()

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 20){
        setChangeBg(true)
      }else{
        setChangeBg(false)
      }
    }
    window.addEventListener("scroll" , handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [chnageBg])

  console.log(7888, chnageBg)

  const handleClick = () => {
    window.open(  "https://nexshyp.com/sign-up"
            ,"_blank")
  } 
  return (
    <section className={`about-hero d-flex align-items-center justify-content-center `}>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-section">
            <h1 className={`hero-title animate-slide-up`}>
              Simplifying Shipping for Every Seller
            </h1>
            <p className="hero-subtitle animate-fade-in">
              We empower businesses to deliver faster, smarter, and more
              reliably — from your store to your customer’s door.
            </p>
            <button className="hero-btn animate-pop" onClick={handleClick}>Learn More</button>
          </div>

          <div className="col-lg-6 col-md-12 image-section">
            <img
              src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Courier Illustration"
              className="hero-img animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;