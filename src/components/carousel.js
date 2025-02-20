import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-[90vh] bg-black", children: [_jsx(Swiper, { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: 3, initialSlide: activeIndex, loop: true, coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: false,
                }, keyboard: { enabled: true }, mousewheel: { enabled: false }, pagination: { clickable: true }, modules: [EffectCoverflow, Pagination, Keyboard, Mousewheel], onSlideChange: (swiper) => setActiveIndex(swiper.realIndex), className: "w-[90vw] max-w-[80vw] pb-10 flex items-center justify-center", children: slides.map((number, index) => (_jsx(SwiperSlide, { className: "flex justify-center", children: _jsx("div", { className: `w-[50vw] max-w-[40vw] h-[30vh] max-h-[25vh] flex items-center justify-center text-white text-[4vw] font-bold shadow-lg rounded-[2vw] transition-transform duration-300 ${index === activeIndex
                            ? "bg-blue-600 scale-110"
                            : "bg-blue-400"}`, children: number }) }, index))) }), _jsx("div", { className: "mt-6", children: _jsx("div", { className: "swiper-pagination" }) })] }));
};
export default Carousel;
