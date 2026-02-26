import React from "react";
import { motion } from "framer-motion";
import "./CustomerGrid.css";

const stories = [
  {
    id: 1,
    brand: "Swiss Military",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8P6ExbXkrMPcwJbk7BfSRLVHflrRBCLlRpA&s",
    category: "Watches",
    title: "Reduced delivery time by 50% using smart courier allocation.",
  },
  {
    id: 2,
    brand: "The Hatke",
    image:
      "https://content.jdmagicbox.com/v2/comp/delhi/u1/011pxx11.xx11.220205153045.w1u1/catalogue/the-hatke-tri-nagar-delhi-e-commerce-service-providers-5fbvwkxhbx.jpg",
    category: "Mobile Covers",
    title: "Automated shipping boosted customer satisfaction 2x.",
  },
  {
    id: 3,
    brand: "Nirvasa",
    image:
      "https://cdn.shopify.com/s/files/1/0589/3793/3956/files/Logo_1_9109a7f9-118e-4edb-ae85-28560464e54c.png?height=628&pad_color=ffffff&v=1678967597&width=1200",
    category: "Medicine",
    title: "Simplified returns and improved RTO detection accuracy.",
  },
  {
    id: 4,
    brand: "Shiv Naresh",
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQGxi_qXqMTlzA/company-logo_200_200/company-logo_200_200/0/1729491038697/shivnareshind_logo?e=2147483647&v=beta&t=84A2novFS5hTyN-q4THZ1wh1tIKfVDOhuZQJO_8bSCo",
    category: "Clothing",
    title: "Faster dispatch and 40% lower operational costs.",
  },
];

const CustomerGrid = () => {
  return (
    <section className="cs-grid-section">
      <motion.div
        className="cs-grid-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>More Success Stories</h2>
        <p>
          Explore how diverse brands from multiple industries grew faster with
          our shipping intelligence and automation.
        </p>
      </motion.div>

      <div className="cs-grid-container">
        {stories.map((story, index) => (
          <motion.div
            className="cs-grid-card"
            key={story.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cs-grid-image">
              <img src={story.image} alt={story.brand} />
            </div>
            <div className="cs-grid-content">
              <h3>{story.brand}</h3>
              <span className="cs-grid-category">{story.category}</span>
              <p>{story.title}</p>
              <button className="cs-grid-btn">Read Story →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerGrid;
