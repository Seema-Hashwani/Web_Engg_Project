import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Mechanic } from "../components/Mechanic";


export default function Home() {
    return (
      <main className="bg-slate-900 h-full w-full min-h-screen min-w-screen">
        <Navbar/>
        <Mechanic/>
        <Footer/>
      </main>
    );
  }