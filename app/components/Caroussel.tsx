import Image from "next/image";
import cars from "../../public/assets/cars.jpeg";
import mechanics from "../../public/assets/mechanic.jpeg";
import parts from "../../public/assets/parts.jpg";
import cars3 from "../../public/assets/cars3.png";


export function Caroussel() {
  return (
    <div className="relative flex items-center">
      <div className="flex h-80 w-screen justify-center items-center m-3">
        <Image src={cars3} alt="Slide 1" className="w-5/6 h-80 rounded-lg" />
        {/* 
         */}
      </div>

      <button className="absolute bg-slate-800 bg-opacity-60 text-white font-extrabold py-2 px-4 rounded-full flex items-center right-0 mr-40 text-xl">
        <p>&gt;</p>
      </button>

      <button className="absolute bg-slate-800 bg-opacity-60 text-white font-extrabold py-2 px-4 rounded-full flex items-center left-0 ml-40 text-xl">
        <p>&lt;</p>
      </button>
    </div>
  );
}
