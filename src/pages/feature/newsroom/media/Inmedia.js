import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./inMedia.css";

const InTheMedia = () => {
  const mediaArticles = [
    {
      title: "Transforming Indian Logistics with AI and Automation",
      publication: "Economic Times",
      date: "February 5, 2026",
      link: "#",
      img: "https://plus.unsplash.com/premium_photo-1661963318752-c7e105de9362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Startup Expands Nationwide Delivery Network Amid Growth",
      publication: "Business Standard",
      date: "January 18, 2026",
      link: "#",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    },
    {
      title: "How Tech is Powering India's E-commerce Fulfillment Revolution",
      publication: "YourStory",
      date: "December 22, 2025",
      link: "#",
      img: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
    },
  ];

  return (
    <section className="in-media-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="media-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          In The Media
        </motion.h2>

        <div className="row justify-content-center">
          {mediaArticles.map((item, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="media-card"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="media-img-wrapper">
                  <img src={item.img} alt={item.title} className="media-img" />
                </div>

                <div className="media-content text-start">
                  <div className="media-publication">
                    {/* <img src={item.logo} alt={item.publication} className="media-logo" /> */}
                    <span className="media-date">{item.date}</span>
                  </div>
                  <h4 className="media-heading">{item.title}</h4>
                  <p className="media-source">Published in {item.publication}</p>
                  <a href={item.link} className="media-btn" target="_blank" rel="noreferrer">
                    Read Article
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

export default InTheMedia;
