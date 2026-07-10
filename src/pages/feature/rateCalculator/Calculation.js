import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./calculation.css";

export default function Calculation() {
  const inputs = [
    { label: "Pick Up Pincode", key: "pickup" },
    { label: "Delivery Area Pincode", key: "delivery" },
    { label: "Weight (Kg)", key: "weight" },
    { label: "Length (cm)", key: "length" },
    { label: "Breadth (cm)", key: "breadth" },
    { label: "Height (cm)", key: "height" },
    { label: "Payment Type", key: "payment", options: ["Prepaid", "COD"] },
    { label: "Order Type", key: "order", options: ["Forward", "Reverse"] },
  ];

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [rate, setRate] = useState(null);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    inputs.forEach((input) => {
      if (!formData[input.key] || formData[input.key] === "") {
        newErrors[input.key] = `${input.label} is required`;
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Dummy calculation logic
    const baseRate = 40;
    const weight = parseFloat(formData.weight || 0);
    const distance =
      Math.abs(parseInt(formData.pickup || 0) - parseInt(formData.delivery || 0)) / 10000;
    const calculatedRate = baseRate + weight * 10 + distance * 5;
    setRate(calculatedRate.toFixed(2));
  };

  return (
    <div className="container py-5 d-flex flex-column calc-page-wrapper">
      <div className="w-100 mb-3">
        <h3 className="fw-bold mb-2 calc-heading">Calculate Shipping Rate</h3>
        <p className="calc-subheading small">
          Get instant courier charges and delivery estimates — compare rates, delivery speed,
          and partner performance in one click.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card border-0 shadow-sm p-4 calc-card rounded-4"
      >
        <div className="row">
          {/* Left side — Form */}
          <div className="col-lg-7 col-md-12 calc-form-col">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {inputs.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <label className="form-label small fw-semibold calc-label">
                      {item.label}
                    </label>
                    {item.options ? (
                      <select
                        className={`form-select form-select-sm calc-input ${
                          errors[item.key] ? "is-invalid" : ""
                        }`}
                        onChange={(e) => handleChange(item.key, e.target.value)}
                        value={formData[item.key] || ""}
                      >
                        <option value="">Select</option>
                        {item.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        className={`form-control form-control-sm calc-input ${
                          errors[item.key] ? "is-invalid" : ""
                        }`}
                        placeholder={item.label}
                        onChange={(e) => handleChange(item.key, e.target.value)}
                        value={formData[item.key] || ""}
                      />
                    )}
                    {errors[item.key] && (
                      <div className="invalid-feedback">{errors[item.key]}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 d-flex justify-content-start">
                <button type="submit" className="btn calc-btn-primary px-4 py-2 me-3 rounded-3">
                  Calculate
                </button>
                <button
                  type="button"
                  className="btn calc-btn-outline px-4 py-2 rounded-3"
                  onClick={() => {
                    setFormData({});
                    setRate(null);
                    setErrors({});
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Right side — Result */}
          <motion.div
            className="col-lg-5 col-md-12 d-flex flex-column align-items-center justify-content-center text-center p-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-auto w-100 d-flex justify-content-center align-items-center">
              {rate ? (
                <motion.div
                  key={rate} // <— IMPORTANT: re-triggers animation when rate changes
                  className="text-center p-4 calc-result-card"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.h5
                    className="fw-bold calc-result-title"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Estimated Shipping Rate
                  </motion.h5>

                  <motion.div
                    className="fw-bold mt-3 calc-result-value"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    ₹ {rate}
                  </motion.div>

                  <p className="mt-3 small calc-result-note">
                    *Estimated based on input data and base charges.
                  </p>
                </motion.div>
              ) : (
                <div className="text-center small mt-3 p-4 w-100 calc-placeholder-card">
                  Fill out the details and click{" "}
                  <strong className="calc-placeholder-highlight">Calculate</strong> to get your rate.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}