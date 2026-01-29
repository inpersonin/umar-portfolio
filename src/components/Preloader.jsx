import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="relative">
        <span
          className="font-display text-[50vw] md:text-[35vw] leading-none select-none"
          style={{ color: '#1f1f1f' }}
        >
          ☢&#xfe0e;
        </span>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            clipPath: `inset(${100 - progress}% 0px 0px 0px)`,
          }}
        >
          <span className="font-display text-[50vw] md:text-[35vw] leading-none select-none text-accent">
            ☢&#xfe0e;
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
