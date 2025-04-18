'use client'

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const mockups = [
  "/mockups/test.png",
  "/mockups/test.png",
  "/mockups/test.png",
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
    <section className=" bg-black text-center py-16 px-0 relative">
      Bienvenu
      <div className="max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Transformez vos idées en expériences web exceptionnelles
        </h1>
        <p className="text-lg text-gray-600">
        Des interfaces modernes, performantes et optimisées pour votre succès.
        </p>
      </div>

      {/* iPhone Carousel */}
      <div className="max-w-sm mx-auto relative">
        {/* <div className='relative bg-white flex justify-center items-center'>
          <iframe className=' border-[1px] border-gray-700 w-[60vw] h-[80vh] z-33 absolute left-0' src="https://embed.figma.com/proto/sCNA2RHeSvhp5q41g9UV0R/VITRINE-2025?node-id=983-1960&scaling=scale-down&content-scaling=fixed&page-id=932%3A290&starting-point-node-id=983%3A1960&embed-host=share" ></iframe>
          <img src="/mockups/test.png" className='w-full  z-5 absolute' />
            <iframe src="/boat.jpg"
              className='absolute top-[60px] left-[28px] z-1'>
            </iframe>
        </div> */}
        {/* <Slider {...settings}>
          <img src="/mockups/test.png" className='w-full  z-5 absolute' />
        </Slider> */}

        <Slider {...settings}>
          {mockups.map((src, index) => (
            <div key={index}>
              <div className="relative w-full mx-auto flex">
                <img
                  src="/mockups/elu.png"
                  alt="iPhone"
                />
                {/* <img
                  src={src}
                  alt={`Mockup ${index}`}
                  className="absolute top-[12.5%] left-[11.5%] w-[77%] h-[75%] object-cover rounded-xl"
                /> */}
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </section>
  );
};

export default HeroDemo;
