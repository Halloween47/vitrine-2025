// import Image from "next/image";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/Contact";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Contact />
      </main>
    </div>
  );
}
