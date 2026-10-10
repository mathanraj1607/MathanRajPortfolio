import { MotionConfig } from "framer-motion";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Atmosphere } from "./components/ui/Atmosphere";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
