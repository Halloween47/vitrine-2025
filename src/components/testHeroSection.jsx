"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import { useEffect, useState } from "react";
import Hero3D from "./testHero3D";
import Hero3D2 from "./testHero3D2";

export default function HeroSection() {
    const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/hero.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 lg:px-24">
      {/* Texte d'introduction */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Développeur Front-end Freelance <br />
          <span className="text-indigo-500">Créons une expérience unique</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          J’aide les entreprises et entrepreneurs à construire des interfaces performantes et modernes avec Next.js & Tailwind CSS.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-indigo-700 transition"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white text-lg font-semibold rounded-2xl hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Travaillons ensemble
          </a>
        </div>
      </motion.div>

      {/* Image d’illustration */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 md:mt-0"
      >
      </motion.div>
      {/* Animation Lottie */}
      <div className="mt-10 md:mt-0 w-full max-w-md">
        {animationData && <Lottie animationData={animationData} loop={true} />}
      </div>
      {/* Animation 3D */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <Hero3D />
        <Hero3D2 />
      </div>
    </section>
  );
}
