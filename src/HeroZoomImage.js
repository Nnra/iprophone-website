// HeroZoomImage.js
import React, { useEffect, useState } from "react";
import "./HeroZoomImage.css";

const HeroZoomImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + scrollY / 1000;
  const translateY = scrollY / 5;

  return (
    <div className="hero-container">
      <img
        src="/iprophone-website/images/hero.jpg"
        alt="Hero Zoom"
        className="hero-image"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`
        }}
      />
      <div className="hero-text">
        <h1>I PRO PHONE</h1>
        <p>Advanced Repair Solutions & Stylish Gear</p>
      </div>
    </div>
  );
};

export default HeroZoomImage;
