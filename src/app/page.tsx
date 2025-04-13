// import Image from "next/image";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";
import Ressources from "@/components/Ressources/Ressources";
import Projets from "@/components/Projets/Projets";
import Tarifs from "@/components/Tarifs/Tarifs";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
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
