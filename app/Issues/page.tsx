import { Footer } from "../components/Footer";
import { Issue } from "../components/Issue";
import { Navbar } from "../components/Navbar";


export default function Home() {
    return (
      <main className="bg-slate-900 h-full w-full min-h-screen min-w-screen">
        <Navbar/>
        <Issue/>
        <Footer/>
      </main>
    );
  }