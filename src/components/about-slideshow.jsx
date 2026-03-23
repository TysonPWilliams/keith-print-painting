import { useState, useEffect } from 'react';
import hero from '../assets/hero.jpeg';
import gutterAfter from '../assets/gutter-after.jpg';
import gutterBefore from '../assets/gutter-before.jpg';



const AboutSlideshow = () => {
  const images = [gutterAfter, gutterBefore];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-image-container">
      <img
        src={images[index]}
        className="about-main-image"
        alt="slideshow"
      />
    </div>
  );
};

export default AboutSlideshow;