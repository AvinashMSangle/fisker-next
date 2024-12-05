function Configurator({ updateOptions}) {
const exteriorSwatch = [
  {
    id:0,
    name:"Black Pearl",
    src:"/swatch/black_pearl.png"
  },
  {
    id:1,
    name:"Red Planet",
    src:"/swatch/red_planet.png"
  },
  {
    id:2,
    name:"Sea Grass",
    src:"/swatch/sea_grass.png"
  },
  {
    id:3,
    name:"Sun Soaked",
    src:"/swatch/sun_soaked.png"
    
  },
  {
    id:4,
    name:"Stealth Green",
    src:"/swatch/stealth_green.png"
  },
  {
    id:5,
    name:"Blue Planet",
    src:"/swatch/blue_planet.png"
  },
]


const interiorSwatch = [
  {
    id:0,
    name:"dark",
    src:"/swatch/interior/dark.png"
  },
  {
    id:1,
    name:"light",
    src:"/swatch/interior/light.png"
  }
]

const wheelsOption= [
  {
    id:0,
    name:"SlipStream Black",
    src:"/wheels/slipstream_black.webp"
  },
  {
    id:1,
    name:"AeroStealth",
    src:"/wheels/aerostealth.webp"
  },
  {
    id:2,
    name:"Vortex",
    src:"/wheels/vortex.webp"
  }
]

  return (
    <div>
      {/* HEADINGS */}
      <h1 className="text-2xl md:text-4xl font-semibold text-blue-950">
        Fisker Ocean
      </h1>
      <p className="py-2 text-xl">
        Configure your very own, with the options to choose from 6 exterior, 2
        interior and 3 wheels options.
      </p>

      {/* EXTERIOR COLORS */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Exterior Color</h3>
        <div className="flex gap-2">
          {exteriorSwatch.map((color) => (
            <button
              key={color.id}
              onClick={() => updateOptions("color",color.name)}
              className={`hover:scale-105 transition-transform duration-100 ${color.id === 0 ? "border-b-2 border-blue-300 rounded full" : ""}`}
            >
              <img
                src={color.src}
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>

      {/* INTERIOR COLORS */}
      <div className="my-12">
        <h3 className="font-bold uppercase mb-3">Interior Color</h3>
        <div className="flex gap-2">
          {interiorSwatch.map((color) => (
            <button
              key={color.id}
              onClick={() => updateOptions("interior",color.name)}
              className={`hover:scale-105 transition-transform duration-100 ${color.id === 0 ? "border-b-2 border-blue-300 rounded full" : ""}`}
            >
              <img
                src={color.src}
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>

      {/* WHELL OPTIONS */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Wheel Options</h3>
        <div className="flex gap-2">
          {wheelsOption.map((wheel) => (
            <button
              key={wheel.id}
              onClick={() => updateOptions("wheel",wheel.name)}
              className={`hover:scale-105 transition-transform duration-100 ${wheel.id === 0 ? "border-b-2 border-blue-300 rounded full" : ""}`}
            >
              <img
                src={wheel.src}
                alt="Black Pearl"
                className="w-12"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;