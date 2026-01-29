import { motion } from 'framer-motion';

const projects = [
  { name: 'GIGACHAT', link: 'https://github.com/inpersonin/Messenger', cat: 'Messaging App' },
  { name: "WHERE'S WALDO", link: 'https://github.com/inpersonin/wheres-waldo', cat: 'Game Project' },
  { name: 'SHOPPING CART', link: 'https://github.com/inpersonin/react-shopping-cart', cat: 'E-Commerce Website' },
  { name: 'FAKE NEWS DETECTOR', link: 'https://github.com/inpersonin/Hackathon', cat: 'Machine Learning Project' },
];

const Projects = () => {
  return (
    <section className="bg-dark px-6 py-20 md:px-12 md:py-32">

      <div className="mb-10 flex items-end justify-between border-b border-gray-800 pb-4 md:mb-16 md:pb-6">
        <h2 className="font-body text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-500">
          Selected Works
        </h2>
        <span className="font-body text-[9px] md:text-[11px] text-gray-600">
          ({projects.length})
        </span>
      </div>

      <div className="space-y-6 md:space-y-8">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden border-y border-gray-900 py-6 md:py-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
          >

            <motion.div
              className="flex gap-10 md:gap-16"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                duration: 10 + index,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={`${project.name}-${i}`}
                  className="font-display text-4xl md:text-7xl lg:text-8xl uppercase text-gray-200 whitespace-nowrap transition-colors duration-200 group-hover:text-accent"
                >
                  {project.name}
                </span>
              ))}
            </motion.div>


            <div className="pointer-events-none absolute bottom-3 left-4 md:bottom-4 md:left-6">
              <span className="font-body text-[9px] uppercase tracking-[0.25em] text-gray-500 md:text-[11px]">
                {project.cat}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;