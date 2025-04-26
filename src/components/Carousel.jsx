import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

import Banner1 from '../assets/images/Banner1.png';
import Banner2 from '../assets/images/Banner2.png';
import Banner3 from '../assets/images/Banner3.png';

const images = [Banner1, Banner2, Banner3]; 

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="carousel-overlay">
              <h2>Haz feliz a tu mascota 🐾</h2>
              <p>Productos de calidad, atención con amor y todo lo que necesita tu mejor amigo peludo.</p>
            <button>Explorar productos</button>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
