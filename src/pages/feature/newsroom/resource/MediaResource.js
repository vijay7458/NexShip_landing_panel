import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./mediaResource.css";

const MediaResources = () => {
  const resources = [
    {
      title: "Official Logo Pack",
      desc: "Download high-resolution versions of our logo in PNG, SVG, and EPS formats for media and partner use.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    },
    {
      title: "Brand Guidelines",
      desc: "Our brand guide includes color codes, typography, and visual standards to ensure consistent brand usage across platforms.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Company Fact Sheet",
      desc: "A quick overview of our mission, vision, leadership, and operational scale — ideal for journalists and analysts.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    },
    {
      title: "Product & Office Photos",
      desc: "Access a curated gallery of approved images showcasing our team, facilities, and products for editorial use.",
      file: "#",
      icon: "https://cdn-icons-png.flaticon.com/512/833/833524.png",
    },
  ];

  return (
    <section className="media-resources-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="media-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Media Resources & Press Kit
        </motion.h2>

        <div className="row justify-content-center">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="resource-card text-center w-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="resource-icon-wrapper">
                  <motion.img
                    src={item.icon}
                    alt={item.title}
                    className="resource-icon"
                    whileHover={{ rotate: 5 }}
                  />
                </div>
                <h4 className="resource-title">{item.title}</h4>
                <p className="resource-desc">{item.desc}</p>
                <div className="btn-wrapper">
                  <a
                    href={item.file}
                    className="download-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaResources;
