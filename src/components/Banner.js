import React, { useState, useEffect, useRef } from 'react';
import '../styles/Banner.css';

const images = [
  require('../pics/banner.jpg'),
  require('../pics/banner2.jpg'),
  require('../pics/banner3.jpg')
];

const delay = 3500;

const Slideshow = () => {
  
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleDotClick = (idx) => {
    setIndex(idx);
  };

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image, idx) => (
          <img key={idx} src={image} alt={`slide-${idx}`} className="img-fluid" />
        ))}
      </div>
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => handleDotClick(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
