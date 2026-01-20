import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GenericFaq({ queAns }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpenAns = (e, index) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Parent fade + upward motion
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

  // Child fade-in for each question
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container w-100 d-flex justify-content-between align-items-start"
      style={{ marginTop: "2rem", marginBottom: "6rem" }}
      variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
    >
      {/* Left side heading */}
      <motion.div variants={itemVariants} className="mt-2">
        <p className="text-dark h2 fw-semibold">Questions?</p>
        <p className="h2 text-muted" style={{ lineHeight: "0.4" }}>
          We’re glad you asked..
        </p>
      </motion.div>

      {/* FAQ list */}
      <motion.div variants={itemVariants} className="w-50">
        {queAns?.map((item, index) => (
          <motion.div
            key={index}
            className="border-bottom border-muted pt-3 pb-3"
            onClick={(e) => handleOpenAns(e, index)}
            style={{ cursor: "pointer" }}
            variants={itemVariants}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="fw-semibold">{item?.question}</div>
              <div>
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
                  className="small mt-2 text-muted overflow-hidden"
                >
                  {item?.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
