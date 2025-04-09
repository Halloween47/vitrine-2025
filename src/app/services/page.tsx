// 'use client'

// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import { useState } from 'react';
// import { Details } from '@/components/Services/Details';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// const servicesData = [
//   {
//     title: "Landing page",
//     image: "https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg"
//   },
//   {
//     title: "WordPress",
//     image: "https://cdn.pixabay.com/photo/2020/06/01/16/58/wordpress-5247502_1280.jpg"
//   },
//   {
//     title: "E-commerce",
//     image: "https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
//   }
// ];


// export default function Services() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showDetails, setShowDetails] = useState(false);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
//     );
//   };

//   const handleShowDetails = () => {
//     if(showDetails) {
//       setShowDetails(false);
//     } else {
//       setShowDetails(true);
//     }
//   };

//   const currentService = servicesData[currentIndex];
//   return (
//     <div className="bg-[#D1B3C4] p-6 text-xl w-full h-screen flex flex-col">
//       <div className="zone-titre bg-[#735D78] w-full h-[30vh] flex justify-center items-center text-white font-bold text-2xl">
//         {currentService.title}
//       </div>

//       <div className="zone-intro bg-[#2541B2] w-full h-[90%] flex flex-col justify-center items-center">
//         <div className="intro bg-[#03256C] w-[70vw] h-[90%] flex flex-col justify-center items-center rounded-xl relative gap-4 p-4">
//           {/* <img 
//             src="https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg" 
//             alt="Poster de démonstration" 
//             className="rounded-xl w-[200px] h-[300px] object-cover shadow-lg"
//           /> */}
//           <img
//             src={currentService.image}
//             alt={currentService.title}
//             className="rounded-xl w-[200px] h-[300px] object-cover"
//           />
//           <div className="flex gap-4">
//             <Button
//               variant="contained"
//               onClick={handlePrev}
//               startIcon={<ArrowBackIosIcon />}
//             >
//               Précédent
//             </Button>

//             <Button
//               variant="contained"
//               onClick={handleNext}
//               endIcon={<ArrowForwardIosIcon />}
//             >
//               Suivant
//             </Button>
//           </div>

//           <Button 
//             variant="contained" 
//             endIcon={<SendIcon />} 
//             className="absolute bottom-4"
//             onClick={handleShowDetails}
//           >
//             Voir détails
//           </Button>
//         </div>
//           {showDetails && <Details />}
//       </div>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// 'use client'

// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// const servicesData = [
//   {
//     title: "Landing page",
//     image: "https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg"
//   },
//   {
//     title: "WordPress",
//     image: "https://cdn.pixabay.com/photo/2020/06/01/16/58/wordpress-5247502_1280.jpg"
//   },
//   {
//     title: "E-commerce",
//     image: "https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
//   }
// ];

// export default function Services() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="bg-[#D1B3C4] text-xl w-full min-h-screen flex flex-col items-center overflow-hidden">
//       <div className="bg-[#735D78] w-full h-[20vh] flex justify-center items-center text-white font-bold text-3xl">
//         {servicesData[currentIndex].title}
//       </div>

//       <div className="w-full flex justify-center items-center mt-8 relative">
//         <Button
//           onClick={handlePrev}
//           className="absolute left-2 z-10"
//           variant="contained"
//           startIcon={<ArrowBackIosIcon />}
//         />

//         <div className="overflow-hidden w-full px-4">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentIndex * 80}%)`, // 80% pour laisser voir les côtés
//             }}
//           >
//             {servicesData.map((service, index) => {
//               const isActive = index === currentIndex;

//               return (
//                 <div
//                   key={index}
//                   className={`flex-shrink-0 w-[80%] sm:w-[60%] mx-2 transition-all duration-500 ease-in-out ${
//                     isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
//                   }`}
//                 >
//                   <div className="bg-[#03256C] rounded-xl p-4 shadow-lg flex flex-col items-center">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="rounded-xl w-full h-[300px] object-cover"
//                     />
//                     <p className="text-white text-xl font-semibold mt-4 text-center">{service.title}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <Button
//           onClick={handleNext}
//           className="absolute right-2 z-10"
//           variant="contained"
//           endIcon={<ArrowForwardIosIcon />}
//         />
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// 'use client'

// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// const servicesData = [
//   {
//     title: "Landing page",
//     image: "https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg"
//   },
//   {
//     title: "WordPress",
//     image: "https://cdn.pixabay.com/photo/2020/06/01/16/58/wordpress-5247502_1280.jpg"
//   },
//   {
//     title: "E-commerce",
//     image: "https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
//   }
// ];

// export default function Services() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="bg-[#D1B3C4] text-xl w-full min-h-screen flex flex-col items-center overflow-hidden">
//       {/* Titre dynamique */}
//       <div className="bg-[#735D78] w-full h-[20vh] flex justify-center items-center text-white font-bold text-3xl">
//         {servicesData[currentIndex].title}
//       </div>

//       {/* Slider */}
//       <div className="w-full flex justify-center items-center mt-8 relative">
//         {/* Bouton gauche */}
//         <Button
//           onClick={handlePrev}
//           className="absolute left-2 z-10"
//           variant="contained"
//           startIcon={<ArrowBackIosIcon />}
//         />

//         {/* Zone scrollable */}
//         <div className="overflow-x-scroll w-full px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide">
//           <div className="flex w-max gap-4">
//             {servicesData.map((service, index) => (
//               // <div
//               //   key={index}
//               //   className={`flex-shrink-0 w-[80%] sm:w-[60%] snap-center transition-all duration-500 ${
//               //     index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
//               //   }`}
//               // >
//               <div
//   key={index}
//   className={`flex-shrink-0 w-[250px] md:w-[300px] snap-center transition-all duration-500 ${
//     index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
//   }`}
// >

//                 <div className="bg-[#03256C] rounded-xl p-4 shadow-lg flex flex-col items-center">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="rounded-xl w-full h-[300px] object-cover"
//                   />
//                   <p className="text-white text-xl font-semibold mt-4 text-center">
//                     {service.title}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bouton droit */}
//         <Button
//           onClick={handleNext}
//           className="absolute right-2 z-10"
//           variant="contained"
//           endIcon={<ArrowForwardIosIcon />}
//         />
//       </div>
//     </div>
//   );
// }


///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

// 'use client'

// import { useEffect, useRef, useState } from 'react';
// import Button from '@mui/material/Button';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// const servicesData = [
//   {
//     title: "Landing page",
//     image: "https://cdn.pixabay.com/photo/2023/12/05/10/08/hd-iphone-wallpaper-8431262_1280.jpg"
//   },
//   {
//     title: "WordPress",
//     image: "https://cdn.pixabay.com/photo/2020/06/01/16/58/wordpress-5247502_1280.jpg"
//   },
//   {
//     title: "E-commerce",
//     image: "https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg"
//   }
// ];

// export default function Services() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Navigation manuelle (flèches)
//   const scrollToCard = (index: number) => {
//     cardRefs.current[index]?.scrollIntoView({
//       behavior: 'smooth',
//       inline: 'center',
//       block: 'nearest',
//     });
//   };

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % servicesData.length;
//     scrollToCard(nextIndex);
//   };

//   const handlePrev = () => {
//     const prevIndex =
//       (currentIndex - 1 + servicesData.length) % servicesData.length;
//     scrollToCard(prevIndex);
//   };

//   // IntersectionObserver pour mise à jour automatique
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
//             const index = Number(entry.target.getAttribute('data-index'));
//             setCurrentIndex(index);
//           }
//         });
//       },
//       {
//         root: containerRef.current,
//         threshold: 0.6,
//       }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <div className="bg-[#D1B3C4] text-xl w-full min-h-screen flex flex-col items-center overflow-hidden">
//       {/* Titre dynamique */}
//       <div className="bg-[#735D78] w-full h-[20vh] flex justify-center items-center text-white font-bold text-3xl">
//         {servicesData[currentIndex].title}
//       </div>

//       {/* Slider */}
//       <div className="w-full flex justify-center items-center mt-8 relative">
//         {/* Bouton gauche */}
//         <Button
//           onClick={handlePrev}
//           className="absolute left-2 z-10"
//           variant="contained"
//           startIcon={<ArrowBackIosIcon />}
//         />

//         {/* Scrollable container */}
//         <div
//           className="overflow-x-scroll w-full px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
//           ref={containerRef}
//         >
//           <div className="flex w-max gap-4">
//             {servicesData.map((service, index) => (
//               <div
//                 key={index}
//                 data-index={index}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className={`flex-shrink-0 w-[250px] md:w-[300px] snap-center transition-all duration-500 ${
//                   index === currentIndex
//                     ? 'scale-100 opacity-100'
//                     : 'scale-95 opacity-80'
//                 }`}
//               >
//                 <div className="bg-[#03256C] rounded-xl p-4 shadow-lg flex flex-col items-center">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="rounded-xl w-full h-[300px] object-cover"
//                   />
//                   <p className="text-white text-xl font-semibold mt-4 text-center">
//                     {service.title}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bouton droit */}
//         <Button
//           onClick={handleNext}
//           className="absolute right-2 z-10"
//           variant="contained"
//           endIcon={<ArrowForwardIosIcon />}
//         />
//       </div>
//     </div>
//   );
// }


///////////////////
///////////////////
///////////////////
///////////////////

'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el
  }
  

  // Fonction pour faire défiler jusqu'à une carte
  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % servicesData.length
    scrollToCard(nextIndex)
  }

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + servicesData.length) % servicesData.length
    scrollToCard(prevIndex)
  }

  // Observer pour mettre à jour automatiquement l'index selon la carte visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const index = Number(entry.target.getAttribute('data-index'))
            setCurrentIndex(index)
          }
        })
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="bg-[#D1B3C4] text-xl w-full min-h-screen flex flex-col items-center overflow-hidden">
      {/* Titre dynamique */}
      <div className="bg-[#735D78] w-full h-[20vh] flex justify-center items-center text-white font-bold text-3xl">
        {servicesData[currentIndex].title}
      </div>

      {/* Slider */}
      <div className="w-full flex justify-center items-center mt-8 relative">
        {/* Bouton gauche */}
        <Button
          onClick={handlePrev}
          className="absolute left-2 z-10"
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        />

        {/* Scrollable zone */}
        <div
          className="overflow-x-scroll w-full px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          ref={containerRef}
        >
          <div className="flex w-max gap-4">
            {servicesData.map((service, index) => (
              <div
                key={index}
                data-index={index}
                ref={setCardRef(index)}
                className={`flex-shrink-0 w-[250px] md:w-[300px] snap-center transition-all duration-500 ${
                  index === currentIndex
                    ? 'scale-100 opacity-100'
                    : 'scale-95 opacity-80'
                }`}
              >
                <div className="bg-[#03256C] rounded-xl p-4 shadow-lg flex flex-col items-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl w-full h-[300px] object-cover"
                  />
                  <p className="text-white text-xl font-semibold mt-4 text-center">
                    {service.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton droit */}
        <Button
          onClick={handleNext}
          className="absolute right-2 z-10"
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        />
      </div>
    </div>
  )
}
