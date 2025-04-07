// import Image from "next/image";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";
import Ressources from "@/components/Ressources/Ressources";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Ressources />
        <Contact />
      </main>
    </div>
  );
}
