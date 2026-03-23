import { useState, useEffect } from 'react';
import hero from '../assets/hero.jpeg';
import garageBefore from '../assets/garage-before.jpg';
import garageAfter from '../assets/garage-after.jpg';
import gutter from '../assets/gutter-after.jpg';

const HeroSlideshow = () => {
  const images = [garageBefore, garageAfter, hero];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-image-container">
      <img
        src={images[index]}
        className="hero-main-image"
        alt="slideshow"
      />
    </div>
  );
};

export default HeroSlideshow;