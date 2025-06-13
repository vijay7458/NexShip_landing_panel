import React, { useRef, useEffect } from 'react';
import './Carousel.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PickedUp from '../../../../assets/image/whatsapp/Pickedup.png'
import Manifest from '../../../../assets/image/whatsapp/Manifested.png'
import Delivered from '../../../../assets/image/whatsapp/Delivered.png'
import OutForDelivery from '../../../../assets/image/whatsapp/OutForDelivery.png'
import InTransit from '../../../../assets/image/whatsapp/InTransit.png'

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
    const containerRef = useRef(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const carousel = carouselRef.current;

        const totalScrollWidth = carousel.scrollWidth;
        const viewportWidth = container.offsetWidth;
        const horizontalScrollableWidth = totalScrollWidth - viewportWidth;

        const scrollableHeight = horizontalScrollableWidth + window.innerHeight;

        // Set the height of the container to allow scrolling
        // container.style.height = `${scrollableHeight}px`;
        container.style.height = `100%`;

        gsap.to(carousel, {
            x: () => `-${horizontalScrollableWidth}px`,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${scrollableHeight}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const items = [
        {
            title: '',
            description: '',
            image: 'https://via.placeholder.com/300x150',
        },
        {
            title: 'Picked Up',
            description: 'Instantly notify your customer when their order has been collected for shipping.',
            image: PickedUp,
        },
        {
            title: 'In Transit',
            description: 'Share real-time movement updates as the package travels through delivery checkpoints.',
            image: InTransit,
        },
        {
            title: 'Out For Delivery',
            description: 'Let customers know their order is arriving today, reducing failed delivery attempts.',
            image: OutForDelivery,
        },
        {
            title: 'Delivered',
            description: 'Confirm successful delivery and offer a moment of delight through personalized thank-you messages.',
            image: Delivered,
        },
        {
            title: 'Manifest Created',
            description: 'Alert customers when their shipment is packed and scanned, prepping them for upcoming updates.',
            image: Manifest,
        },
    ];

    return (
        <section className="wi-carousel-section" ref={containerRef}>
            <div className="wi-carousel-track" ref={carouselRef}>
                {items.map((item, index) => (
                    <div className="wi-carousel-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
