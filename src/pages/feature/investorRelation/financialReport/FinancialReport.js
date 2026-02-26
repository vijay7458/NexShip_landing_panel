import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./financialReport.css";

const FinancialReports = () => {
  const reports = [
    {
      title: "Annual Report 2025",
      desc: "Detailed insights into yearly financial performance, strategies, and corporate governance.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    },
    {
      title: "Quarterly Report Q4 2025",
      desc: "Comprehensive analysis of quarterly results, revenue growth, and business highlights.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/337/337940.png",
    },
    {
      title: "Investor Presentation",
      desc: "An overview of company progress, key metrics, and future plans for stakeholders.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/2991/2991115.png",
    },
    {
      title: "Press Releases",
      desc: "Official announcements, media coverage, and major partnership updates.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/709/709496.png",
    },
  ];

  return (
    <section className="financial-reports-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="reports-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Financial Reports & Filings
        </motion.h2>

        <div className="row justify-content-center">
          {reports.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="report-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="report-icon-wrapper">
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="report-icon"
                    whileHover={{ rotate: 5 }}
                  />
                </div>
                <h4 className="report-title">{item.title}</h4>
                <p className="report-desc">{item.desc}</p>
                <a href={item.file} className="download-btn" target="_blank" rel="noreferrer">
                  Download
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialReports;
