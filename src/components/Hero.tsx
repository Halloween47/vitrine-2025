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
              Votre site mérite mieux<br/> qu’un simple template.
          </h1>
          <p className="text-[14px] opacity-90 leading-tight pt-6">
          Créons ensemble une interface unique et performante pour votre activité.
          </p>
        </div>
        
          {/* <EarthGlobe /> */}
        <div className="testGlobe relative bg-[#ffffff] h-[4vh]">
          <EarthGlobe />
        </div>
      </section>
    );
  }
  