import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Skills />
      <Contact />
    </>
  );
}
