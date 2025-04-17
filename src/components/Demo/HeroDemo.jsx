'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const mockups = [
  "/mockups/phone_035.jpg",
  "/mockups/test.jpg",
  "/mockups/test2.png",
];

const HeroDemo = () => {
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
    <section className=" bg-black text-center py-16 px-0">
      {/* Hero Message */}
      Un message ici
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          message impactant ici
        </h1>
        <p className="text-lg text-gray-600">
          Un petit sous-texte ou accroche si besoin
        </p>
      </div>

      {/* iPhone Carousel */}
      <div className="max-w-sm mx-auto relative">
        <div className='relative bg-white'>
          <iframe className=' border-[1px] border-gray-700 w-[90vw] h-[80vh] z-33 absolute left-0' src="https://embed.figma.com/proto/sCNA2RHeSvhp5q41g9UV0R/VITRINE-2025?node-id=983-1960&scaling=scale-down&content-scaling=fixed&page-id=932%3A290&starting-point-node-id=983%3A1960&embed-host=share" ></iframe>
          <img src="/mockups/test2.png" className='w-full absolute z-5' />
            {/* <iframe src="/boat.jpg"
              className='absolute top-[60px] left-[28px] z-1'>
            </iframe> */}
        </div>
{/* 
        <Slider {...settings}>
          {mockups.map((src, index) => (
            <div key={index}>
              <div className="relative w-[400px] mx-auto">
                <img
                  src="/mockups/test2.png"
                  alt="iPhone"
                  className="w-full"
                />
                <img
                  src={src}
                  alt={`Mockup ${index}`}
                  className="absolute top-[12.5%] left-[11.5%] w-[77%] h-[75%] object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
         */}
      </div>
    </section>
  );
};

export default HeroDemo;
