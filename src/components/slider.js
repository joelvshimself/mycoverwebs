import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from "react";
import "../styles/Carousel.css";
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const startX = useRef(null);
    const images = [
        {
            "img": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnR5fGVufDB8fDB8fHww",
            "legend": "Eventos"
        },
        {
            "img": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "legend": "Fiestas"
        },
        {
            "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5fGVufDB8fDB8fHww",
            "legend": "Reuniones"
        }
    ];
    const handleLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const handleRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
    /** @note left, middle and right images */
    const getVisibleImages = () => {
        return [
            images[(currentIndex - 1 + images.length) % images.length],
            images[currentIndex],
            images[(currentIndex + 1) % images.length]
        ];
    };
    const handleTouchStart = (e) => {
        startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    };
    const handleTouchMove = (e) => {
        if (!startX.current)
            return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const difference = startX.current - currentX;
        if (difference > 50) {
            handleRight();
            startX.current = null;
        }
        else if (difference < -50) {
            handleLeft();
            startX.current = null;
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            handleRight();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, handleRight]);
    return (_jsx("section", { className: "carousel-sec", children: _jsxs("div", { className: "carousel", children: [_jsxs("h2", { children: ["La ", _jsx("span", { children: "Experiencia" }), " Perfecta Para Cada Ocasi\u00F3n"] }), _jsxs("div", { className: "container", children: [_jsx("button", { className: "left", onClick: handleLeft, children: _jsx(FontAwesomeIcon, { icon: faAngleLeft }) }), _jsx("div", { className: "cards", onMouseDown: handleTouchStart, onMouseMove: handleTouchMove, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, children: getVisibleImages().map((image, index) => (_jsxs("div", { className: `card ${index === 1 ? "activeCard" : ""}`, children: [_jsx("img", { src: image.img, alt: `sample ${index}` }), _jsx("span", { children: image.legend })] }, index))) }), _jsx("button", { className: "right", onClick: handleRight, children: _jsx(FontAwesomeIcon, { icon: faAngleRight }) })] }), _jsx("div", { className: "dots", children: images.map((_, index) => (_jsx("span", { className: `dot ${index === currentIndex ? "active" : "inactive"}`, onClick: handleDotClick.bind(null, index) }, index))) })] }) }));
};
export default Carousel;
