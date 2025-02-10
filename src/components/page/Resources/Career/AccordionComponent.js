import { useState } from "react";
import "./AccordionComponent.css"; // Component-specific styles

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "open" : ""}`}
          onMouseEnter={() => handleMouseEnter(index)}
        >
          <div className="accordion-text-content">
            <div className="accordion-header">{item.title}</div>
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          </div>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
