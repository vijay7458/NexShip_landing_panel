import React from "react";
import { motion } from "framer-motion";
import "./refundPolicy.css";

const policyIcons = {
  header: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path className="icon-primary" d="M9.5 12l2 2 3.5-4" />
    </svg>
  ),
  cancel: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect className="icon-secondary" x="3" y="5" width="18" height="14" rx="2" />
      <path className="icon-primary" d="M3 7l9 6 9-6" />
    </svg>
  ),
  delete: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M5 7h14" />
      <path className="icon-secondary" d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" />
      <path className="icon-primary" d="M6.5 7l1 12a2 2 0 002 2h5a2 2 0 002-2l1-12" />
      <path className="icon-primary" d="M10 11v6M14 11v6" />
    </svg>
  ),
  invoice: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M6 3h9l3 3v15H6V3z" />
      <path className="icon-primary" d="M15 3v3h3" />
      <path className="icon-primary" d="M9 12h6M9 15.5h6M9 8.5h3" />
    </svg>
  ),
  modify: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle className="icon-secondary" cx="12" cy="12" r="3" />
      <path className="icon-primary" d="M19.4 13.5a7.5 7.5 0 000-3l1.6-1.2-1.5-2.6-1.9.6a7.6 7.6 0 00-2.6-1.5L14.5 3h-3l-.5 2.3a7.6 7.6 0 00-2.6 1.5l-1.9-.6-1.5 2.6L6 10.5a7.5 7.5 0 000 3l-1.6 1.2 1.5 2.6 1.9-.6c.75.66 1.63 1.17 2.6 1.5L9.5 21h3l.5-2.3a7.6 7.6 0 002.6-1.5l1.9.6 1.5-2.6-1.6-1.2z" />
    </svg>
  ),
  fraud: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path className="icon-secondary" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path className="icon-primary" d="M12 8v5" />
      <path className="icon-primary" d="M12 16h.01" />
    </svg>
  ),
};

const policyItems = [
  {
    icon: policyIcons.cancel,
    text: (
      <>
        You may cancel your account at anytime by emailing{" "}
        <a href="mailto:sales@nexshyp.com" className="policy-link">
          sales@nexshyp.com
        </a>
      </>
    ),
  },
  {
    icon: policyIcons.delete,
    text: (
      <>
        Once your account is cancelled all of your Content will be immediately
        deleted{" "}
        <a
          href={`${process.env.REACT_APP_BASE_URL}/login`}
          target="_blank"
          rel="noopener noreferrer"
          className="policy-link"
        >
          from the Service
        </a>
        . Since deletion of all data is final please be sure that you do in
        fact want to cancel your account before doing so.
      </>
    ),
  },
  {
    icon: policyIcons.invoice,
    text: "If you cancel the Service in the middle of the month, you will receive one final invoice via email. Once that invoice has been paid you will not be charged again.",
  },
  {
    icon: policyIcons.modify,
    text: "We reserve the right to modify or terminate the KartRocket service for any reason, without notice at any time.",
  },
  {
    icon: policyIcons.fraud,
    text: "Fraud: Without limiting any other remedies, KartRocket may suspend or terminate your account if we suspect that you (by conviction, settlement, insurance or escrow investigation, or otherwise) have engaged in fraudulent activity in connection with the Site.",
  },
];

const RefundPolicy = () => {
  return (
    <section className="refund-policy-section">
      <div className="refund-policy-container">
        <motion.div
          className="refund-policy-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="refund-policy-icon">{policyIcons.header}</div>
          <h2>
            Refund & <span>Cancellation Policy</span>
          </h2>
        </motion.div>

        <div className="refund-policy-list">
          {policyItems.map((item, i) => (
            <motion.div
              className="refund-policy-item"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="refund-item-icon">{item.icon}</div>
              <div className="refund-item-content">
                <span className="refund-item-number">{`0${i + 1}`}</span>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="refund-policy-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="refund-note-icon"
          >
            <path d="M12 3l9 16H3l9-16z" />
            <path d="M12 10v4" />
            <path d="M12 17h.01" />
          </svg>
          <p>
            <strong>Note:</strong> No refunds shall be provided for
            subscription plans.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundPolicy;