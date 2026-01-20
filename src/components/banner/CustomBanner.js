import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../globalstyle/banner.css";

export default function CustomBanner(props) {

  const bannerImages = [
    "https://plus.unsplash.com/premium_photo-1665203442280-1118daf3de38?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?q=80&w=1332&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1683120796013-f2f18451a907?w=600&auto=format&fit=crop&q=60",
  ];

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  console.log(6777, isScrolled)

  return (
    <motion.div
      className={`feature-banner  d-flex pb-4 align-items-center`}
      animate={{
        backgroundColor: isScrolled ? "#000000" : "#f8f9fa",
        color: isScrolled ? "#ffffff" : "#212529",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <div className="container">
        <div className="row mt-4 align-items-center">
          {/* Left Section (Animated Text) */}
          <motion.div
            className="col-lg-6 col-md-12"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 style={{lineHeight:"1"}} className={`display-5 fw-bold text-uppercase  ${isScrolled ? "text-light" : "text-dark"}`}>
              {props?.mainHedingFirst}
            </h1>
            <h1 style={{lineHeight:"1"}}  className={`display-5 fw-bold text-uppercase  ${isScrolled ? "text-light" : "text-dark"}`}>  
              {props?.mainHedingSecond}</h1>
            <p className="lead mt-4 text-secondary pe-3">
              {props?.subHeading}
            </p>
            <button className={`btn  btn-sm rounded-4 px-3 mt-4 fw-semibold ${isScrolled ? "btn-light text-dark" : "text-light bg-dark"}`}>
              {props?.btnText}
            </button>
          </motion.div>

          {/* Right Section (Images, Static) */}
          <div className="mt-4 col-lg-6 col-md-12 position-relative fade-in-right">
            <div className="floating-wrapper mt-4 mb-4">
              <img src={props?.imgArr[0]} alt="Courier" className="floating-img main-img" />
              <img src={props?.imgArr[1]} alt="Warehouse" className="floating-img side-img-1" />
              <img src={props?.imgArr[2]} alt="Delivery Woman" className="floating-img side-img-2" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
