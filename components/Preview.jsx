import Image from "next/image";

function Preview() {
  return (
    <>
      {/* EXTERIOR IMAGE*/}
      <Image
        src={"/images/fiskerCar.jpg"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      {/* DESCCRIPTION */}
      <div className="py-3">
        <h3 className="font-bold text-xl text-blue-950">Metallic Gloss</h3>
        <p>A mysterious, seductive black with a metallic blue shimmer.</p>
      </div>

      {/* Interior Image */}
      <Image
        src={"/images/dark.jpeg"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      <p className="uppercase font-semibold text-stone-950 py-3">
        Interior Image
      </p>
    </>
  );
}

export default Preview;
