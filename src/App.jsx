import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Programs from './components/Programs';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CommandPalette from './components/CommandPalette';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-grid font-body text-ink selection:bg-yellow selection:text-ink">
        <ScrollProgress />
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-20 md:space-y-28">
          <Hero />
          <TechMarquee />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Programs />
          <GithubSection />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <CommandPalette />
      </div>
    </MotionConfig>
  );
}
