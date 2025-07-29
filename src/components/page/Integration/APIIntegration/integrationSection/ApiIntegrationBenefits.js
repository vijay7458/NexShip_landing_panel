import React from 'react';
import { motion } from 'framer-motion';
import './integration.css';
import FasterIcon from '../Icons/FasterIcon';
import OperationsIcon from '../Icons/OperationsIcon';
import SyncingIcon from '../Icons/SyncingIcon';
// import AutomatedProcessIcon from './Icons/AutomatedProcessIcon'; // Uncomment if using

// If using images instead of icons
// import fasterImg from '../../../../assets/image/faster.png';
// import operationsImg from '../../../../assets/image/operations.png';
// import syncingImg from '../../../../assets/image/syncing.png';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 50,
    },
  }),
};

const ApiIntegrationBenefits = () => {
  const benefits = [
    {
      title: 'Faster Order Processing',
      description:
        'When you get all orders on one single platform, the processing time is bound to reduce.',
      icon: <FasterIcon />, // Or replace with <img src={fasterImg} alt="" />
    },
    {
      title: 'Organized Operations',
      description:
        'With a regular incoming order flow, follow a particular procedure for every shipment.',
      icon: <OperationsIcon />,
    },
    {
      title: 'On-Demand Syncing',
      description:
        'Sync your catalog and fetch new orders whenever needed, giving you complete control over order management.',
      icon: <SyncingIcon />,
    },
    // Add more cards here if needed
  ];

  return (
    <section className="api-benefits-section">
      <div className="api-benefits-container">
        <h2 className="api-benefits-heading">How API Integration Will Help You</h2>
        <div className="api-benefits-cards">
          {benefits.map((item, index) => (
            <motion.div
              className="api-benefits-card"
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="api-icon">{item.icon}</div>
              <h3 className="api-card-title">{item.title}</h3>
              <p className="api-card-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiIntegrationBenefits;
