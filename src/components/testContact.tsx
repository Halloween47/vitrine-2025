"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, Linkedin, Briefcase, Calendar } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Ajouter la logique d’envoi du formulaire
    console.log("Formulaire soumis:", formData);
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-white mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Me Contacter</h2>
        <p className="text-gray-400 mb-8">
          Contactez-moi directement ou laissez-moi un message via le formulaire.
        </p>

        {/* 🚀 Ligne de contact rapide */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <a href="mailto:tonemail@example.com" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Mail size={24} /> tonemail@example.com
          </a>
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Linkedin size={24} /> LinkedIn
          </a>
          <a href="https://www.malt.fr/profile/tonprofil" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Briefcase size={24} /> Malt
          </a>
        </div>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
          <Button type="submit" className="w-full">Envoyer</Button>
        </form>

        {/* Liens sociaux + Calendly */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://calendly.com/toncalendly" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-gray-400 hover:text-white">
            <Calendar size={28} /> Prendre un rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
