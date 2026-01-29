import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-between px-6 md:px-12 bg-dark pt-10 pb-10 md:pt-12 md:pb-12">
      {/* Center: huge one-line name starting with a 30% left gap, role below in one line */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[10vw] md:text-[7vw] text-gray-300 uppercase ml-[30vw] whitespace-nowrap"
          >
            Umar <span className="text-accent">Shaikh</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-2 md:mt-4">
          <motion.h2
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[6vw] md:text-[4vw] text-gray-400 uppercase ml-0 md:ml-[30vw] whitespace-nowrap"
          >
            Full Stack <span className="text-accent">Developer</span>
          </motion.h2>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-end border-t border-gray-800 pt-6">
        <span className="font-body text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.25em]">
          Based in India
        </span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-accent text-2xl md:text-4xl"
        >
          &darr;
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;