import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Curefit from "../../../assets/image/clients/curefit.png"
import XYXX from "../../../assets/image/clients/xyxx.png"
import RareRabbit from "../../../assets/image/clients/rareRabbit.jpeg"
import TheAyurvedaExperience from "../../../assets/image/clients/ayurveda.png"
import SwissMilitary from "../../../assets/image/clients/swissMilitary.png"

const customers = [
  { id: 1, name: "Curefit", logo: Curefit },
  { id: 2, name: "XYXX", logo: XYXX },
  { id: 3, name: "Rare Rabbit", logo: RareRabbit },
  { id: 4, name: "The Ayurveda Experience", logo: TheAyurvedaExperience },
  { id: 5, name: "Swiss Military", logo: SwissMilitary },
];

export default function CustomerCarousel() {

  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  const updateWidth = () => setscreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [])


  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        slidesPerView={screenWidth < 767 ? 1 : 3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 200000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id} className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
            <img src={customer.logo} alt={customer.name} className="w-16 h-16 rounded-full mb-2" />
            <p className="text-lg fw-bold mt-2">{customer.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
