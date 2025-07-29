import React from 'react';
import { motion } from 'framer-motion';
import './CarrerUi.css';

const features = [
  {
    title: 'Collaborative Culture',
    description:
      'Work in a team that values ideas, feedback, and collaboration across all departments.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Innovative Environment',
    description:
      'Join a tech-driven company that encourages creativity and forward thinking.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Meaningful Impact',
    description:
      'Contribute to solutions that solve real-world logistics challenges and improve lives.',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const growth = {
  title: 'Employee Growth & Learning',
  description:
    'At ShipEase, we believe that when our people grow, our business grows. We provide regular training programs, mentoring opportunities, and access to tools that enable you to continuously evolve and succeed in your career.',
  image: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fDB8fHww',
};

const techCulture = {
  title: 'Technology-Driven Culture',
  description:
    'Innovation is at the core of everything we do. From automating logistics to leveraging AI and data science, we are building smart, scalable solutions that redefine the industry standard.',
  image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fDB8fHww',
};


export default function CarrerSection() {
  return (
    <section className="why-work-wrapper" style={{overflow:"none"}}>
      <motion.h2
        className="why-work-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Why Work with Us?
      </motion.h2>

      <motion.p
        className="why-work-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        At ShipEase, we cultivate a dynamic work environment built on collaboration,
        innovation, and a commitment to excellence.
      </motion.p>

      {/* Feature Cards Section */}
      <div className="why-work-features">
        {features.map((item, idx) => (
          <motion.div
            className="feature-card"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
          >
            <img src={item.image} alt={item.title} className="feature-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Growth Section */}
      <motion.div
        className="why-work-section reverse"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={growth.image} alt="Growth and Learning" className="section-image" />
        <div className="section-content">
          <h3>{growth.title}</h3>
          <p>{growth.description}</p>
        </div>
      </motion.div>

      {/* Tech Section */}
      <motion.div
        className="why-work-section"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={techCulture.image} alt="Tech Culture" className="section-image" />
        <div className="section-content">
          <h3>{techCulture.title}</h3>
          <p>{techCulture.description}</p>
        </div>
      </motion.div>

      {/*  */}



      
    </section>
  );
}
