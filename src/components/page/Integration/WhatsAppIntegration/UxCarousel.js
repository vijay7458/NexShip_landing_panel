import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./UxCarousel.css";

const UxCarousel = ({ slides, interval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => resetTimeout();
  }, [current, slides.length, interval]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="ux-carousel">
      <div className="ux-carousel-inner">
        <img
          src={slides[current].image}
          alt={slides[current].alt}
          className="ux-carousel-image"
        />

        {/* Gradient Overlay */}
        <div className="ux-carousel-overlay"></div>

        {/* Arrows */}
        <button className="ux-carousel-arrow left" onClick={prevSlide} aria-label="Previous Slide">
          <ChevronLeft size={28} />
        </button>
        <button className="ux-carousel-arrow right" onClick={nextSlide} aria-label="Next Slide">
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="ux-carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`ux-carousel-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UxCarousel;
