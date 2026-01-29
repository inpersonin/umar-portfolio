import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-between px-6 md:px-12 bg-dark pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="flex flex-1 flex-col justify-center">

        {/* Name Section */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            // Mobile: Increased to 22vw | Desktop: Stays 9.5vw
            className="font-display text-[16vw] md:text-[9.5vw] text-gray-400 uppercase ml-[9vw] md:whitespace-nowrap leading-[0.85] md:leading-tight"
          >
            Umar
            {/* Break line only visible on mobile */}
            <br className="block md:hidden" />
            <span className="text-accent">Shaikh</span>
          </motion.h1>
        </div>

        {/* Role Section */}
        <div className="overflow-hidden mt-20 md:mt-4">
          <motion.h2
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            // Mobile: Increased to 14vw | Desktop: Stays 5.5vw
            className="font-display text-[11vw] md:text-[5.5vw] text-gray-400 uppercase ml-0 md:ml-[0vw] md:whitespace-nowrap leading-[0.9] md:leading-tight"
          >
            <span className="text-accent">Full Stack</span>
            {/* Break line only visible on mobile */}
            <br className="block md:hidden" />
            Developer
          </motion.h2>
        </div>
      </div>

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