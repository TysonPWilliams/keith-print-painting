import { useState, useEffect } from 'react';
import hero from '../assets/hero.jpg';
import wallpaper from '../assets/wallpaper.jpg';


const HeroSlideshow = () => {
  const images = [wallpaper, hero];
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