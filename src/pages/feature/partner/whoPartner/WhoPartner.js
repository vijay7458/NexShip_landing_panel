import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./whoPartner.css";

const WhoPartner = () => {
  const partners = [
    {
      title: "Courier / Delivery Partners",
      desc: "Join our growing logistics network and deliver across India with advanced routing and reliable payment systems.",
      img: "https://plus.unsplash.com/premium_photo-1665203442280-1118daf3de38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y291cmllcnxlbnwwfHwwfHx8MA%3D%3D", // courier
    },
    {
      title: "Technology Partners",
      desc: "Integrate your SaaS, ERP, or eCommerce platform with our API ecosystem to enhance customer delivery experiences.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", // tech
    },
    {
      title: "Channel / Business Partners",
      desc: "Collaborate with us to expand reach, onboard new sellers, and drive shared business growth opportunities.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216", // business
    },
  ];

  return (
    <section className="who-partner-section">
      <div className="container text-center d-flex flex-column">
        <motion.h2
          className="section-title mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Who Can Partner With Us
        </motion.h2>

        <div className="row justify-content-center">
          {partners.map((item, index) => (
            <motion.div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="partner-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="partner-img-wrapper">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="partner-img"
                    whileHover={{ scale: 1.03 }}
                  />
                </div>
                <div className="partner-card-content">
                  <h4 className="partner-title">{item.title}</h4>
                  <p className="partner-desc">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoPartner;
