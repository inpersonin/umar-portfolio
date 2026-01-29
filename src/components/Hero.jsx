import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center px-6 md:px-12 bg-dark pt-20">
      <div className="flex flex-col uppercase leading-[0.85]">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[22vw] md:text-[18vw] text-gray-300 mix-blend-difference"
          >
            Umar
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="font-display text-[22vw] md:text-[18vw] text-accent"
          >
            Shaikh
          </motion.h1>
        </div>
      </div>

      <div className="flex justify-between items-end mt-12 md:mt-16 border-t border-gray-800 pt-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-body text-gray-400 text-xs md:text-xl uppercase tracking-widest max-w-[200px] md:max-w-xs"
        >
          Full Stack Developer<br/>
          <span className="text-gray-600 text-[10px] md:text-xs normal-case mt-2 block">
            Based in India &bull; Scroll to explore
          </span>
        </motion.div>
        
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