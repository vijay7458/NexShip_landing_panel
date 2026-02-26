import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./matrix.css";

const MetricCard = ({ number, label, duration }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        count: number,
        transition: { duration: duration, ease: "easeOut" },
      });
    }
  }, [isInView, number, controls, duration]);

  return (
    <motion.div
      ref={ref}
      className="metric-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h5
      style={{fontSize:"20px"}}
        className="metric-number"
        animate={controls}
        initial={{ count: 0 }}
      >
        {Math.floor(number).toLocaleString()}+
      </motion.h5>
      <p className="metric-label">{label}</p>
    </motion.div>
  );
};

const Matrix = () => {
  const metrics = [
    { number: 100000000, label: "Shipments Delivered", duration: 1.5 },
    { number: 29000, label: "Pincodes Covered", duration: 1.3 },
    { number: 50000, label: "Active Sellers", duration: 1.2 },
    { number: 99, label: "Uptime Reliability (%)", duration: 1 },
  ];

  return (
    <section className="key-metrics-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="metrics-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Key Performance Metrics
        </motion.h2>

        <div className="row justify-content-center">
          {metrics.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <MetricCard
                number={item.number}
                label={item.label}
                duration={item.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Matrix;
