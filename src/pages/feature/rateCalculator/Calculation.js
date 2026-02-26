import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container py-5 d-flex flex-column">
      <div className="w-100 mb-3">
        <h3 className="fw-bold mb-2 text-dark">Calculate Shipping Rate</h3>
        <p className="text-muted small">
          Get instant courier charges and delivery estimates — compare rates, delivery speed,
          and partner performance in one click.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card border-0 shadow-sm p-4 bg-secondary-subtle rounded-1"
      >
        <div className="row">
          {/* Left side — Form */}
          <div className="col-lg-7 col-md-12 border-end">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {inputs.map((item, index) => (
                  <div key={index} className="col-md-6">
                    <label className="form-label small fw-semibold text-dark">
                      {item.label}
                    </label>
                    {item.options ? (
                      <select
                        className={`form-select form-select-sm ${
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
                        className={`form-control form-control-sm ${
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
                <button type="submit" className="btn btn-dark px-4 py-2 me-3 rounded-0">
                  Calculate
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4 py-2 rounded-0"
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
                  className="text-center p-4"
                  style={{
                    background: "linear-gradient(135deg, #111 0%, #222 60%, #333 100%)",
                    color: "#fff",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    width: "100%",
                    maxWidth: "400px",
                  }}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.h5
                    className="fw-bold"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Estimated Shipping Rate
                  </motion.h5>

                  <motion.div
                    className="fw-bold mt-3"
                    style={{
                      fontSize: "2.5rem",
                      color: "#00ffb0",
                      background: "rgba(255,255,255,0.1)",
                      padding: "18px 40px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    ₹ {rate}
                  </motion.div>

                  <p className="mt-3 text-light small opacity-75">
                    *Estimated based on input data and base charges.
                  </p>
                </motion.div>
              ) : (
                <div
                  className="text-center text-light small mt-3 p-4 w-100"
                  style={{
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%)",
                    borderRadius: "12px",
                    maxWidth: "400px",
                  }}
                >
                  Fill out the details and click{" "}
                  <strong  style={{color:"#00ffb0"}}>Calculate</strong> to get your rate.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
