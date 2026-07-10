import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GenericFaq({ queAns }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpenAns = (e, index) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const parentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="faq-container container d-flex flex-lg-row flex-column justify-content-between align-items-start"
      style={{
        marginTop: "2rem",
        marginBottom: "6rem",
        gap: "2rem",
      }}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left side heading */}
      <motion.div variants={itemVariants} className="faq-heading mt-2">
        <p className="faq-heading-primary h2 fw-semibold mb-1">Questions?</p>
        <p className="faq-heading-secondary h2" style={{ lineHeight: "1.1", fontSize: "1.8rem" }}>
          We're glad you asked..
        </p>
      </motion.div>

      {/* FAQ List */}
      <motion.div
        variants={itemVariants}
        className="faq-list w-100 w-lg-50"
        style={{
          maxWidth: "600px",
        }}
      >
        {queAns?.map((item, index) => (
          <motion.div
            key={index}
            className="faq-item pt-3 pb-3"
            onClick={(e) => handleOpenAns(e, index)}
            style={{ cursor: "pointer" }}
            variants={itemVariants}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="faq-question fw-semibold" style={{ fontSize: "1rem" }}>
                {item?.question}
              </div>
              <div className="faq-toggle-icon">
                {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="faq-answer small mt-2 overflow-hidden"
                >
                  {item?.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>

      {/* Inline Responsive + Theme Styles */}
      <style>{`
        .faq-heading-primary {
          color: #FFFFFF;
        }
        .faq-heading-secondary {
          color: #94A3B8;
        }
        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
        }
        .faq-item:hover {
          border-bottom-color: #3B82F6;
        }
        .faq-question {
          color: #FFFFFF;
        }
        .faq-toggle-icon {
          color: #3B82F6;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.25);
        }
        .faq-answer {
          color: #CBD5E1;
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .faq-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 0 1rem;
          }
          .faq-heading {
            text-align: left;
          }
          .faq-list {
            width: 100% !important;
          }
          .faq-heading p.h2 {
            font-size: 1.6rem !important;
          }
        }

        @media (max-width: 576px) {
          .faq-container {
            margin-top: 1.5rem;
            margin-bottom: 3rem;
          }
          .faq-heading p.h2 {
            font-size: 1.4rem !important;
          }
          .faq-list div.fw-semibold {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
}