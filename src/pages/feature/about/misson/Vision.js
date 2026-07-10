import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./vision.css";

const Vision = () => {
  return (
    <section className="mission-vision-section mb-4">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          {/* Mission */}
          <div className="col-lg-6 col-md-12 mission animate-left">
            <h2 className="section-title text-light">Our Mission</h2>
            <p className="section-desc">
              To empower every online seller with fast, reliable, and affordable
              logistics solutions — helping businesses scale without delivery
              barriers. We believe in making shipping seamless through smart
              technology and human support.
            </p>
          </div>

          {/* Vision */}
          <div className="col-lg-6 col-md-12 vision animate-right">
            <h2 className="section-title text-light">Our Vision</h2>
            <p className="section-desc">
              To become India’s most trusted logistics technology platform,
              connecting millions of sellers to their customers with speed,
              transparency, and sustainability at the core of every shipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
