import React, { useRef, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './HorizontalScrollCarousel.css';

const items = [
  { image: 'https://source.unsplash.com/400x300/?interior', alt: 'Interior' },
  { image: 'https://source.unsplash.com/400x300/?kitchen', alt: 'Kitchen' },
  { image: 'https://source.unsplash.com/400x300/?bathroom', alt: 'Bathroom' },
  { image: 'https://source.unsplash.com/400x300/?livingroom', alt: 'Living Room' },
  { image: 'https://source.unsplash.com/400x300/?furniture', alt: 'Furniture' },
  { image: 'https://source.unsplash.com/400x300/?office', alt: 'Office' },
];

const HorizontalScrollCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const containerRef = useRef();

  // Handle scroll event to scroll horizontally
  const handleWheel = (event) => {
    if (containerRef.current) {
      const scrollAmount = event.deltaY;
      containerRef.current.scrollBy({
        left: scrollAmount > 0 ? 300 : -300,
        behavior: 'smooth',
      });
      event.preventDefault(); // Prevent default page scroll
    }
  };

  // Add event listener for the wheel scroll
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="horizontal-scroll-carousel">
      <div className="horizontal-scroll-carousel__viewport" ref={emblaRef}>
        <div className="horizontal-scroll-carousel__container" ref={containerRef}>
          {items.map((item, index) => (
            <div className="horizontal-scroll-carousel__slide" key={index}>
              <img src={item.image} alt={item.alt} className="horizontal-scroll-carousel__img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
