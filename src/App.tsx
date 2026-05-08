import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Background } from './components/Scene/Background';
import { Navbar } from './components/UI/Navbar';
import { LoadingScreen } from './components/UI/LoadingScreen';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { Projects } from './components/Sections/Projects';
import { Skills } from './components/Sections/Skills';
import { Certificates } from './components/Sections/Certificates';
import { Contact } from './components/Sections/Contact';
import { Footer } from './components/UI/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-dark-bg selection:bg-brand-blue selection:text-black scroll-smooth">
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* 3D Background Layer */}
          <Background />
          
          {/* UI Layer */}
          <Navbar />
          
          <div className="relative z-10">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
            <Footer />
          </div>

          {/* Cinematic Overlays */}
          <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none -z-5" />
          <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-5" />
        </>
      )}
    </main>
  );
}

export default App;
