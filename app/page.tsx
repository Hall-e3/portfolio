import Contact from "@/components/home/Contact";
import EngineeringMethodology from "@/components/home/EngineeringMethodology";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <EngineeringMethodology />
      <Process />
      <Skills />
      <Contact />
    </>
  );
}
