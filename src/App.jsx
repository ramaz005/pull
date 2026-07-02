import Navbar from "./components/sections/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Programs from "./components/sections/Programs/Programs";
import Benefits from "./components/sections/Benefits/Benefits";
import About from "./components/sections/About/About";
import Coaches from "./components/sections/Coaches/Coaches";
import Gallery from "./components/sections/Gallery/Gallery";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import Pricing from "./components/sections/Pricing/Pricing";
import FAQ from "./components/sections/FAQ/FAQ";

/**
 * Root component. Assembles the landing-page sections in reading order.
 * Navbar renders above the main content; each section owns its own anchor id
 * (see src/data/navLinks.js) so the sticky nav + scroll spy can target them.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Benefits />
        <About />
        <Coaches />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
    </>
  );
}
