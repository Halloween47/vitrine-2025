'use client'

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { Details } from '@/components/Services/Details';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const servicesData = [
  {
    title: "Landing page",
    image: "https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg"
  },
  {
    title: "WordPress",
    image: "https://cdn.pixabay.com/photo/2020/06/01/16/58/wordpress-5247502_1280.jpg"
  },
  {
    title: "E-commerce",
    image: "https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
  }
];


export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
    );
  };

  const handleShowDetails = () => {
    if(showDetails) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
    }
  };

  const currentService = servicesData[currentIndex];
  return (
    <div className="bg-[#D1B3C4] p-6 text-xl w-full h-screen flex flex-col">
      <div className="zone-titre bg-[#735D78] w-full h-[30vh] flex justify-center items-center text-white font-bold text-2xl">
        {currentService.title}
      </div>

      <div className="zone-intro bg-[#2541B2] w-full h-[90%] flex flex-col justify-center items-center">
        <div className="intro bg-[#03256C] w-[70vw] h-[90%] flex flex-col justify-center items-center rounded-xl relative gap-4 p-4">
          {/* <img 
            src="https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg" 
            alt="Poster de démonstration" 
            className="rounded-xl w-[200px] h-[300px] object-cover shadow-lg"
          /> */}
          <img
            src={currentService.image}
            alt={currentService.title}
            className="rounded-xl w-[200px] h-[300px] object-cover"
          />
          <div className="flex gap-4">
            <Button
              variant="contained"
              onClick={handlePrev}
              startIcon={<ArrowBackIosIcon />}
            >
              Précédent
            </Button>

            <Button
              variant="contained"
              onClick={handleNext}
              endIcon={<ArrowForwardIosIcon />}
            >
              Suivant
            </Button>
          </div>

          <Button 
            variant="contained" 
            endIcon={<SendIcon />} 
            className="absolute bottom-4"
            onClick={handleShowDetails}
          >
            Voir détails
          </Button>
        </div>
          {showDetails && <Details />}
      </div>
    </div>
  );
}
