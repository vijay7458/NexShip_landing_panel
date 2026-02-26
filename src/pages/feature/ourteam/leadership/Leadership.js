import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./Leadership.css";
import img1 from "../../../../assets/image/lalit.jpg"
import img2 from "../../../../assets/image/pawan.jpg"


const Leadership = () => {
  const leaders = [
    {
      
      name: "Pawan Kumar",
      role: "Founder & CEO",
      img: img2,
      quote:
        "We build scalable solutions that empower businesses to deliver faster and smarter.",
    },
    {
      name: "Lalit Kumar Singh",
      role: "Co-Founder & COO",
      img: img1,
      quote: "Our mission is to simplify shipping for every seller — efficiently and intelligently.",
    },
  ];

  return (
    <section className="leadership-section">
      <div className="container d-flex flex-column text-center">
        <motion.h2
          className="section-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{color:"#fff"}}
        >
          Leadership Team
        </motion.h2>

        <div className="row justify-content-center">
          {leaders.map((leader, index) => (
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="leader-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                <div className="leader-img-wrapper">
                  <motion.img
                    src={leader.img}
                    alt={leader.name}
                    className="leader-img"
                    whileHover={{ rotate: 1 }}
                  />
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{leader.name}</h4>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-quote">“{leader.quote}”</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
