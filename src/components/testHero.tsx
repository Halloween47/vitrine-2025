export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-b from-blue-600 to-blue-800 text-white text-center">
        <h1 className="text-4xl font-bold leading-tight">
          Développeur Front-end Freelance
        </h1>
        <p className="text-lg mt-3 opacity-90">
          Je conçois des interfaces modernes et performantes pour le web.
        </p>
        <a href="#contact" className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md transition hover:bg-gray-200">
          Discutons de votre projet
        </a>
      </section>
    );
  }
  