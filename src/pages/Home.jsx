import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Cta from "../components/Cta";
import { Wave } from "../components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Wave />
      <Contact />
      <Wave flip />
      <Blog />
      <Wave />
      <Cta />
    </>
  );
}
