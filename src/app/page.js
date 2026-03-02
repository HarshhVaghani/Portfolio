import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Scene3D from "@/components/Scene3D";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene3D />

      <div className="relative z-10 w-full">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-0">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
