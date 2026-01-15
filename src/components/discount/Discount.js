import React from "react";

export default function Discount() {
  return (
    <div
      className="bg-dark d-flex flex-wrap justify-content-center align-items-center text-center gap-3 px-3"
      style={{ height: "70px" }}
    >
      <p className="text-light small fw-medium">
        ⏰ Ends soon — claim your discount with
        <span className="fw-bold ms-1">SALE24</span>
      </p>

      <button className="btn btn-light btn-sm fw-semibold px-3 rounded-pill" style={{marginTop:"-15px"}}>
        Claim Offer
      </button>
    </div>
  );
}
