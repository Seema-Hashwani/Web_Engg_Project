import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Other } from "../components/Other";

export default function Home() {
    return (
      <main className="bg-slate-900 h-full w-full min-h-screen min-w-screen">
        <Navbar/>
        <Other/>
        <Footer/>
      </main>
    );
  }