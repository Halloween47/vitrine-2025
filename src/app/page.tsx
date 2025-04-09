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
        <Projets />
        <Tarifs />
        <Ressources />
        <Contact />
      </main>
    </div>
  );
}
