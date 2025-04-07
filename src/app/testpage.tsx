// import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/testHeroSection";
import Projets from "@/components/testProjets";
import Offres from "@/components/testOffres";
import Contact from "@/components/testContact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <Projets />
        <Offres />
        <Contact />
      </main>
    </div>
  );
}
