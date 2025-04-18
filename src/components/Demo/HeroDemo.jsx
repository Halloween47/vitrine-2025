'use client';

import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const mockups = [
  "/mockups/test.png",
  "/mockups/test.png",
  "/mockups/test.png",
];

const taglines = [
  "Transformez vos idées en expériences web exceptionnelles",
  "Des sites modernes, rapides et pensés pour convertir",
  "Je conçois des interfaces qui captivent et performent",
  "Votre présence en ligne mérite mieux qu’un simple site",
  "Un site web pro, rapide, et taillé pour vos objectifs"
];

const HeroDemo = () => {
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * taglines.length);
    setTagline(taglines[randomIndex]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="bg-black text-white text-center py-16 px-4 relative">
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {tagline}
        </h1>
        <p className="text-lg text-gray-400">
          Des interfaces modernes, performantes et optimisées pour votre succès.
        </p>
      </div>

      {/* iPhone Carousel */}
      <div className="max-w-sm mx-auto relative">
        <Slider {...settings}>
          {mockups.map((src, index) => (
            <div key={index}>
              <div className="relative w-full mx-auto flex">
                <img
                  src={src}
                  alt={`Mockup ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroDemo;
