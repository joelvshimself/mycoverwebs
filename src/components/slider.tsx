import { useState } from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcnR5fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcnR5fGVufDB8fDB8fHww"
  ]

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <section>
      <div className="carousel">
        <div className="container">
          <button className="left" onClick={handleLeft}>
            &lt;
          </button>
          <div className="cards">
            {
              visibleImages.map((image, index) => (
                <img key={index} src={image} alt={`sample ${index}`} />
              ))
            }
          </div>
          <button className="right" onClick={handleRight}>
            &gt;
          </button>
        </div>
        <div className="dots">
          {
            images.map((_, index) => (
              <span key={index} className={`dot ${index === 1 ? "active" : "inactive"}`}>
              </span>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Carousel;
