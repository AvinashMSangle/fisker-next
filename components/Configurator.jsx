"use client";

function Configurator() {
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
          {new Array(6).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100 ${index === 0 ? "border-b-2 border-blue-300 rounded full" : ""}`}
            >
              <img
                src="images/black_pearl.png"
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
          {new Array(2).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100 ${index === 0 ? "border-b-2 border-blue-300 rounded full" : ""}`}
            >
              <img
                src="images/black_pearl.png"
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
          {new Array(3).fill(1).map((_, index) => (
            <button
              key={index}
              onClick={() => console.log("Exterior Clicked")}
              className={`hover:scale-105 transition-transform duration-100 ${index === 0 ? "border-b-2 border-blue-300 rounded full" : ""}`}
            >
              <img
                src="images/wheel.webp"
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