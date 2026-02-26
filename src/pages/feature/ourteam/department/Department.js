import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./department.css";

const Department = () => {
  const departments = [
    {
      name: "Engineering & Product",
      desc: "Our engineers and product minds build scalable technology that simplifies logistics for thousands of sellers every day.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", // team working on laptops
    },
    {
      name: "Operations & Logistics",
      desc: "The backbone of our company — ensuring seamless shipping, faster deliveries, and smooth coordination across regions.",
      img: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlcmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D", // warehouse logistics
    },
    {
      name: "Data & Analytics",
      desc: "Turning data into decisions — optimizing routes, reducing RTOs, and forecasting demand with smart algorithms.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296", // data team
    },
    {
      name: "Marketing & Growth",
      desc: "The creative minds who craft our story, build partnerships, and help sellers discover smarter shipping solutions.",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fHww", // creative marketing
    },
  ];

  return (
    <section className="department-showcase">
      <div className="container">
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Departments That Drive Us
        </motion.h2>

        <div className="departments-wrapper">
          {departments.map((dept, index) => (
            <motion.div
              className={`department-row ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="dept-img-container">
                <motion.img
                  src={dept.img}
                  alt={dept.name}
                  className="dept-img"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
              <div className="dept-content">
                <h3 className="dept-title">{dept.name}</h3>
                <p className="dept-desc">{dept.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Department;
