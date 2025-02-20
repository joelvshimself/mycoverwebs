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
  ]

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index: number) => {
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
    if (!startX.current) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const difference = startX.current - currentX;

    if (difference > 50) {
      handleRight();
      startX.current = null;
    } else if (difference < -50) {
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

  return (
    <section className="carousel-sec">
      <div className="carousel">
        <h2>La <span>Experiencia</span> Perfecta Para Cada Ocasión</h2>
        <div className="container">
          <button className="left" onClick={handleLeft}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className="cards" onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}>
            {
              getVisibleImages().map((image, index) => (
                <div key={index} className={`card ${index === 1 ? "activeCard" : ""}`}>
                  <img src={image.img} alt={`sample ${index}`} />
                  <span>{image.legend}</span>
                </div>
              ))
            }
          </div>
          <button className="right" onClick={handleRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="dots">
          {
            images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : "inactive"}`}
                onClick={handleDotClick.bind(null, index)}
              >
              </span>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Carousel;
