import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import customerOne from '../../../assets/image/customers/group-26288.svg'
import customerTwo from '../../../assets/image/customers/gymshark.svg'
import customerThree from '../../../assets/image/customers/harry-s.svg'
import customerFour from '../../../assets/image/customers/mous.svg'
import customerFive from '../../../assets/image/customers/pelagic-logo-v3.svg'
import customerSix from '../../../assets/image/customers/rakuten-logo-1.svg'

const customers = [
  { id: 1, name: "Customer One", logo: customerOne },
  { id: 2, name: "Customer Two", logo: customerTwo },
  { id: 3, name: "Customer Three", logo: customerThree },
  { id: 4, name: "Customer Four", logo: customerFour },
  { id: 5, name: "Customer Five", logo: customerFive },
  { id: 5, name: "Customer Six", logo: customerSix }
];

export default function CustomerCarousel() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {customers.map((customer) => (
          <SwiperSlide key={customer.id} className="p-4 bg-white shadow-md rounded-xl flex flex-col items-center">
            <img src={customer.logo} alt={customer.name} className="w-16 h-16 rounded-full mb-2" />
            <p className="text-lg font-semibold">{customer.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
