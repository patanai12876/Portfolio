import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
     <Stats />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}