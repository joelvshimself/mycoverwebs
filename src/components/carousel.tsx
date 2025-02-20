import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [1, 2, 3, 4, 5];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Slide inicial en el centro

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] bg-black">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={activeIndex}
        loop={true} // Loop infinito activado
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        keyboard={{ enabled: true }} // Navegación con teclado
        mousewheel={{ enabled: false }} // Navegación con scroll del mouse
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Usamos `realIndex` para que funcione con loop
        className="w-[90vw] max-w-[80vw] pb-10 flex items-center justify-center"
      >
        {slides.map((number, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`w-[50vw] max-w-[40vw] h-[30vh] max-h-[25vh] flex items-center justify-center text-white text-[4vw] font-bold shadow-lg rounded-[2vw] transition-transform duration-300 ${
                index === activeIndex
                  ? "bg-blue-600 scale-110"
                  : "bg-blue-400"
              }`}
            >
              {number}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginación más abajo */}
      <div className="mt-6">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Carousel;
