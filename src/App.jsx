import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LiquidBackground from "./components/LiquidBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#021208]">
      <LiquidBackground className="pointer-events-none fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Resume />
        <Projects />
        <Blog />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
