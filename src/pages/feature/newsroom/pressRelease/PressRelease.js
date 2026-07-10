import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./PressReleases.css";

const PressReleases = () => {
  const releases = [
    {
      title: "ShipEase Raises $1 Million in Pre-Series A",
      date: "August, 2023",
      desc: "ShipEase, a Gurgaon, India-based SaaS-based logistics provider helping D2C brands and SME e-tailers to make their supply chain efficient, raised $1 million in pre-Series A funding.",
      link: "https://www.thesaasnews.com/news/shipease-raises-1-million-in-pre-series-a",
    },
    {
      title: "ShipEase operates in Logistics industry. Initially focusing on streamlining parcel delivery within India,",
      date: "December 5, 2025",
      desc: " the company has since broadened its scope to include real-time tracking and analytics services. ShipEase has launched a tech-driven platform to enhance supply chain efficiency and formed partnerships with major e-commerce platforms.",
      link: "https://inc42.com/company/shipease/latest/",
    },
    {
      title: "ShipEase Opts for Non Dilutive Capital Route to raise $550k via Recur Club",
      date: "October 12, 2025",
      desc: "ShipEase, a SaaS-enabled logistics platform has bagged a deal worth $550k in non-dilutive funding via Recur Club. Shipease will use the funds primarily for technology advancements and further building its brand amongst the D2C segment.",
      link: "https://www.expresscomputer.in/news/shipease-opts-for-non-dilutive-capital-route-to-raise-550k-via-recur-club/98867/",
    },
    {
      title: "Logistics startup ShipEase raises funding from JITO Angel Network, others",
      date: "August 15, 2025",
      desc: "Logistics startup ShipEase has raised an undisclosed amount in funding from the JITO Angel Network Investment Arm of JITO Incubation and Innovation Foundation (JIIF), COGNIPHY.US and the Ministry of Electronics and Information Technology (MEITY",
      link: "https://indianstartupnews.com/funding/logistics-startup-shipease-raises-funding-from-jito-angel-network-and-others-4534258",
    },
  ];

  return (
    <section className="press-releases-section" id="press-releases">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="press-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Press Releases
        </motion.h2>

        <div className="row justify-content-center">
          {releases.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-6 col-md-12 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="press-card text-start"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="press-date">{item.date}</div>
                <h4 className="press-heading">{item.title}</h4>
                <p className="press-desc">{item.desc}</p>
                <a href={item.link} className="press-btn">
                  Read More
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressReleases;
