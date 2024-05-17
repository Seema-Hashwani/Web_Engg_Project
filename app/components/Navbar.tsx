import Image from "next/image";
import logo from ".//../../public/assets/logo.png";
import Link from "next/link";

export function Navbar() {
  return (
    <div>
      <nav className="text-white flex flex-row justify-between items-center bg-black px-8 py-2">
        <div className="flex flex-row gap-x-3 font-bold justify-center items-center">
          <Image src={logo} alt="logo" className="w-16 h-16" />
          <p>Caristaniyan</p>
        </div>

        <div className="flex flex-row gap-x-8">
          <Link href="\Home">Home</Link>
          <Link href="\Issues">Car  Issues</Link>
          <Link href="\Mechanic">Mechanics Info</Link>
        </div>
      </nav>
    </div>
  );
}
