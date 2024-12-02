import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-col  h-screen">
      <p className="text-1xl text-center font-semibold py-2">
        All electric &#xb7; Dynamic &#xb7; Driver Range{" "}
      </p>
      {/* <h1 className="text-6xl font-bold">Fisker Ocean</h1> */}

      <header className="flex flex-col ">
        <Image
          src="fisker.svg"
          alt="fisker-logo"
          height={100}
          width={100}
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-transform duration-100"
        />
        <span>
          <Image src="globe.svg" alt="globe-logo" height={20} width={20} />
          <p className="text-sm sm:text-base"></p>
        </span>
      </header>
    </div>
  );
}
export default Header;
