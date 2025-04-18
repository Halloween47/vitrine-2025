// components/ServicesCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const services = [
  {
    title: "Landing page sur-mesure",
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
    <div className="px-4 py-8 w-[90vw]">
      <h2 className="text-2xl font-bold text-center mb-6">Mes Services</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1} 
        speed={600}
        resistanceRatio={0.85}
        threshold={10}
        touchRatio={0.5}
        grabCursor={true}
        className="pb-8"
        >


        {services.map((service, index) => (
        //   <SwiperSlide key={index}  className="!w-full">
          <SwiperSlide key={index}  className="w-[70vw]">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="mb-4 text-sm text-gray-700 space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <div className="text-lg font-bold mb-4">{service.price}</div>
              <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition">
                Me contacter
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
