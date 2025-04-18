// import Image from "next/image";
import Hero from "@/components/Hero";
// import Hero1 from "@/components/tests/Hero1";
// import Hero3 from "@/components/tests/Hero3";
// import ServicesButtonGroup from "@/components/Services/ServicesButtonGroup";
// import ServicesCards from "@/components/Services/ServicesCard";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";
import Ressources from "@/components/Ressources/Ressources";
import Projets from "@/components/Projets/Projets";
import Tarifs from "@/components/Tarifs/Tarifs";
import BetaBanner from "@/components/Beta/BetaBanner";
import HeroDemo from "@/components/Demo/HeroDemo";
import Dispo from "@/components/Beta/Dispo";
import Services from "@/components/Services/Services";
import TestServicesCard from "@/components/Services/TestServiceCard";
import ServicesCarousel from "@/components/Services/ServicesCarousel";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <BetaBanner />
        <Dispo />
        <HeroDemo />
        {/* <Hero1 /> */}
        {/* <Hero3 /> */}
        <TestServicesCard />
        <ServicesCarousel />
        {/* <ServicesButtonGroup /> */}
        {/* <ServicesCards /> */}
        <Services />
        <Hero />
        <div className="home-content flex flex-wrap justify-between mt-5 gap-5">
          <Projets />
          <Tarifs />
          <Ressources />
          <Contact />
        </div>
      </main>
    </div>
  );
}
