"use client";

import styles from './Contact.module.css';
import { Mail, Linkedin, Briefcase } from "lucide-react";

export default function ContactSection() {

  return (
    <section id={styles.contact} className="text-white bg-sky-950 text-center 
      w-[40vw]       
        h-[20vh]">
  <h2 className="text-base">Me Contacter</h2>
  <p className="text-gray-400 text-xs w-full bg-white">
    Contactez-moi directement ou laissez-moi un message via le formulaire.
  </p>

  {/* 🚀 Ligne de contact rapide */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 p-6 rounded-md" id={styles.element}>
    <a href="mailto:lecontethomas.contact@proton.me" className="flex items-center gap-2 text-gray-400 hover:text-white" id={styles.test} >
      <Mail size={24} /> tonemail@example.com
    </a>
    <a href="https://www.linkedin.com/in/thomaslecontedeveloppeur" target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-400 hover:text-white" id={styles.test}>
      <Linkedin size={24} /> LinkedIn
    </a>
    <a href="https://www.malt.fr/profile/thomasleconte2?overview" target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-400 hover:text-white" id={styles.test}>
      <Briefcase size={24} /> Malt
    </a>
  </div>

  <br />
</section>

    // <section id="contact" className="text-white bg-sky-950 gap-2 p-[10px]">
    //     <h2 className="text-3xl mb-6">Me Contacter</h2>
    //     <p className="text-gray-400 mb-8">
    //         Contactez-moi directement ou laissez-moi un message via le formulaire.
    //     </p>
    //     {/* 🚀 Ligne de contact rapide */}
    //     <div className="flex flex-col sm:flex-row justify-center gap-4 my-2  bg-sky-900">
    //     <a href="mailto:tonemail@example.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
    //         <Mail size={24} /> tonemail@example.com
    //     </a>
    //     <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer"
    //         className="flex items-center gap-2 text-gray-400 hover:text-white">
    //         <Linkedin size={24} /> LinkedIn
    //     </a>
    //     <a href="https://www.malt.fr/profile/tonprofil" target="_blank" rel="noopener noreferrer"
    //         className="flex items-center gap-2 text-gray-400 hover:text-white">
    //         <Briefcase size={24} /> Malt
    //     </a>
    //     </div>
    //     <br></br>
    // </section>
  );
}
