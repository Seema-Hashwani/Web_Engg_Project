import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Caroussel } from "../components/Caroussel";
import { About } from "../components/About";
import { Footer } from "../components/Footer";



export default function Home() {
  return (
    <main className="bg-slate-900 h-full w-full min-h-screen min-w-screen">
      <Navbar/>
      <Caroussel/>
      <About/>
      <Footer/>
    </main>
  );
}
