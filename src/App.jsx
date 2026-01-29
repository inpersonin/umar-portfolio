import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  const neonColors = [
    '#c6f46d',
    '#4deeea',
    '#ff9f43',
    '#f30b0b',
    '#fd2ff3',
    '#00d2d3',
    '#ff6b6b',
    '#feca57',
    '#2617fc',
  ];

  useEffect(() => {
    const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
    document.documentElement.style.setProperty('--accent', randomColor);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075, // heavier, viscous scroll feel
        smoothWheel: true,
        wheelMultiplier: 1.25,
        smoothTouch: false,
      }}
    >
      <div className="min-h-screen bg-dark font-body selection:bg-accent selection:text-black">
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="loader" setLoading={setLoading} />
          ) : (
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <Hero />
              <Projects />
              <About />
              <Footer />
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;

