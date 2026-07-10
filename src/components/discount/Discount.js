import React from "react";
import "./discount.css";

export default function Discount() {
  const handleClick = () => {
    window.open("/sign-up", "_blank")
  }
  return (
    <div className="discount-bar-main">
      <div className="discount-content-main">
        <p className="discount-text-main">
          Don't Rush 🚀 — Go with Ease
        </p>
      </div>
    </div>
  );
}