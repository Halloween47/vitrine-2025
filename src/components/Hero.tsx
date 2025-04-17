import EarthGlobe from "./tests/EarthGlobe";

export default function Hero() {
    return (
      <section className="
        flex   
        justify-between
        min-h-30 
        bg-[#0E5317]
        text-white 
        text-left
        rounded-[5px]
        gap-4
        h-[20vh]
        relative
      ">
        <div className="hero-disposition w-[80%] flex flex-col justify-center pl-5">
          <h1 className="text-xs font-bold leading-tight uppercase">
              Transformez vos idées en expériences web exceptionnelles
          </h1>
          <p className="text-[14px] opacity-90 leading-tight pt-6">
          Des interfaces modernes, performantes et optimisées pour votre succès.
          </p>
        </div>
          {/* <EarthGlobe /> */}
        <div className="testGlobe relative bg-[#ffffff] h-[4vh]">
          <EarthGlobe />
        </div>
      </section>
    );
  }
  