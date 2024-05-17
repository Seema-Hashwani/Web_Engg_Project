import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Solution } from "../components/Solution";



export default function Home() {
    return (
      <main className="bg-slate-900 h-full w-full min-h-screen min-w-screen">
        <Navbar/>
        <Solution/>
        <Footer/>
      </main>
    );
  }
  