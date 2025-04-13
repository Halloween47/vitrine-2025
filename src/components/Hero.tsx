import EarthGlobe from "./tests/EarthGlobe";

export default function Hero() {
    return (
      <section className="
        flex 
        flex-col 
        items-center 
        justify-center 
        min-h-30 
        bg-[#0E5317]
        text-white 
        text-center
        rounded-[5px]
        gap-5
        h-[20vh]
        relative
      ">
        <h1 className="text-1xl font-bold leading-tight uppercase">
            Votre site mérite mieux<br/> qu’un simple template.
        </h1>
        <p className="text-[14px] opacity-90 leading-tight pt-6">
        Créons ensemble une interface unique et performante pour votre activité.
        </p>
          <EarthGlobe />
        <div className="testGlobe flex justify-center items-center absolute bottom-2">
          {/* <EarthGlobe /> */}
        </div>
      </section>
    );
  }
  