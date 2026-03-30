import { useState, useEffect } from 'react';
import hero from '../assets/hero.jpeg';
import doorBefore from '../assets/door-before.jpg';
import doorAfter from '../assets/door-after.jpg';



const AboutSlideshow = () => {
  const images = [doorBefore, doorAfter];
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