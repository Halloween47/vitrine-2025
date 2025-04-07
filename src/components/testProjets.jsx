import Image from "next/image";

const projects = [
  {
    title: "Refonte d'une plateforme e-commerce",
    context: "Un site e-commerce souffrait de lenteurs et d'un taux de conversion faible.",
    problem: "Le chargement des pages était trop long, entraînant une perte de clients.",
    solution: "Mise en place d'un système de cache, optimisation des images et migration vers Next.js.",
    results: "⏳ Temps de chargement réduit de 50% | 💰 Taux de conversion +20%",
    image: "/images/ecommerce.png", // Remplace par tes propres images
    link: "https://www.exemple.com",
    testimonial: "Grâce à cette refonte, notre chiffre d'affaires a explosé ! - Client satisfait"
  },
  {
    title: "Développement d'un tableau de bord Big Data",
    context: "Une entreprise avait besoin d'un outil de visualisation de données en temps réel.",
    problem: "L'ancienne solution était lente et peu ergonomique.",
    solution: "Création d'une interface moderne avec React + D3.js et connexion à une API en temps réel.",
    results: "⚡ Visualisation 10x plus rapide | 🎯 Adoption par 100% des équipes",
    image: "/images/dashboard.png",
    link: "https://www.exemple.com",
    testimonial: "L'outil a transformé notre façon d'analyser nos données ! - CTO"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          🚀 Projets & Réalisations
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={600} 
                height={300} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-700"><strong className="text-indigo-600">📌 Contexte :</strong> {project.context}</p>
                <p className="mt-1 text-gray-700"><strong className="text-red-500">⚠️ Problème :</strong> {project.problem}</p>
                <p className="mt-1 text-gray-700"><strong className="text-green-500">✅ Solution :</strong> {project.solution}</p>
                <p className="mt-3 text-blue-600 font-medium">{project.results}</p>
                {project.testimonial && (
                  <blockquote className="mt-4 italic text-gray-600 bg-gray-100 p-4 rounded-lg border-l-4 border-blue-500">
                    "{project.testimonial}"
                  </blockquote>
                )}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
