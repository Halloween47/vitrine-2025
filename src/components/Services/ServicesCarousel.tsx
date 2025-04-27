// components/ServicesCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const services = [
  {
    title: "Landing page",
    test: "sur mesure",
    price: "350 €",
    description: "Une page unique, moderne et optimisée pour convertir vos visiteurs en clients.",
    features: [
      "Design responsive",
      "Dév Next.js + Tailwind",
      "Formulaire ou CTA",
      "Optimisation performance",
      "Livraison en 5 jours",
      "1 retouche offerte",
    ],
  },
  {
    title: "Site vitrine",
    price: "1350 €",
    description: "lancé votre activité et convertissé vos clients",
    features: [
      "Design responsive",
      "Dév Next.js + Tailwind",
      "Formulaire ou CTA",
      "Optimisation performance",
      "Livraison en 5 jours",
      "1 retouche offerte",
      "Optimisation performance",
      "1 retouche offerte",
      "Livraison en 5 jours",
    ],
  },
  {
    title: "Prototype / UX UI",
    price: "130 €",
    description: "Reflechir ensemble à la conception d'un prototype pour vos idées",
    features: [
      "Design responsive",
      "Dév Next.js + Tailwind",
      "Formulaire ou CTA",
      "Optimisation performance",
      "Livraison en 5 jours",
      "1 retouche offerte",
      "Optimisation performance",
      "1 retouche offerte",
      "Livraison en 5 jours",
    ],
  },
  {
    title: "Intégration Web",
    price: "130 €",
    description: "j'intégre vos design/maquettes/vos idees",
    features: [
      "Design responsive",
      "Dév Next.js + Tailwind",
      "Formulaire ou CTA",
      "Optimisation performance",
      "Livraison en 5 jours",
      "1 retouche offerte",
      "Optimisation performance",
      "1 retouche offerte",
      "Livraison en 5 jours",
    ],
  },
  {
    title: "Solution Composant dédié",
    price: "130 €",
    description: "résolution de probleme",
    features: [
      "Design responsive",
      "Dév Next.js + Tailwind",
      "Formulaire ou CTA",
      "Optimisation performance",
      "Livraison en 5 jours",
      "1 retouche offerte",
      "Optimisation performance",
      "1 retouche offerte",
      "Livraison en 5 jours",
    ],
  },
  {
    title: "Refonte complète",
    price: "950 €",
    description: "Redonnez vie à votre site avec un design moderne et une UX optimisée.",
    features: [
      "Analyse UX/UI",
      "Design Figma personnalisé",
      "Intégration responsive",
      "SEO technique de base",
      "Support post-livraison",
    ],
  },
  {
    title: "Maintenance mensuelle",
    price: "90 €/mois",
    description: "Gardez votre site à jour, sécurisé et performant sans y penser.",
    features: [
      "Mises à jour régulières",
      "Sauvegardes automatiques",
      "Support rapide",
      "Optimisation continue",
    ],
  },
];

export default function ServicesCarousel() {
  return (
    <div className="pl-5 py-8 w-[100vw]">
      <div className="">
        <h2 className="text-2xl font-bold text-left mb-6">Mes Services</h2>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.4} 
        // centeredSlides={true} 
        speed={600}
        resistanceRatio={0.85}
        threshold={10}
        touchRatio={0.5}
        grabCursor={true}
        className="pb-8"
        >



        {services.map((service, index) => (
          <SwiperSlide key={index}>
            {/* <div className="bg-white rounded-md p-6 shadow-md border border-gray-200 h-[500px] flex flex-col"> */}
            <div className="bg-white rounded-md p-6 shadow-md border border-gray-200 h-[500px] flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <em className="text-sm text-gray-800">{service.test}</em>
              <p className="text-gray-600 mt-2 mb-4">{service.description}</p>
                <div className="text-[2rem] font-bold mb-4 text-gray-700 text-center">{service.price}</div>
              {/* <ul className="mb-4 text-sm text-gray-700 space-y-1"> */}
              <ul className="mb-4 text-sm text-gray-700 space-y-1 h-[200px]">
                {service.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              {/* <button className=" bg-black text-white py-2 rounded hover:bg-gray-900 transition absolute bottom-3"> */}
              <button className=" bg-black text-white py-2 rounded hover:bg-gray-900 transition">
                Me contacter
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
