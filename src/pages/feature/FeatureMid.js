import React from "react";
import vid1 from "../../assets/image/video/You_are_using_blue_color_a_lot.mp4";
import "../feature/feature.css"
export default function FeatureMid() {
  return (
    <div
      className="mb-4 d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
        textAlign: "center",
        marginTop:"6rem"
      }}
    >
      <video
        src={vid1}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "99%",              // responsive width
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
