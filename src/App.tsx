import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Transcript from './components/Transcript/Transcript';
import CoverLetter from './components/CoverLetter/CoverLetter';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/** Root application component — assembles all portfolio sections in order. */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Transcript />
        <CoverLetter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
