import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Skills from '../components/landing/Skills';
import Projects from '../components/landing/Projects';
import Contact from '../components/landing/Contact';
import Footer from '../components/layout/Footer';

const HomePage = () => (
  <div className="relative z-10">
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default HomePage;
