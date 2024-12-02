import Image from "next/image";

function Header() {
  return (
    <div className="text-stone-900">
      {/* HEADER */}
      <div className="bg-stone-100">
        <p className="text-1xl text-center font-semibold py-2">
          All electric &#xb7; Dynamic &#xb7; Driver Range
        </p>
      </div>
      <header className="flex justify-between px-10 py-3">
        <Image
          src="fisker.svg"
          alt="fisker-logo"
          height={100}
          width={100}
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-transform duration-100"
        />
        {/* REGION */}
        <a href="#" className="flex gap-2 items-center">
          <Image src="globe.svg" alt="globe-logo" height={20} width={20} />
          <p className="text-sm sm:text-base"></p>
        </a>
      </header>
    </div>
  );
}
export default Header;
