import { motion } from 'framer-motion';

const projects = [
  { name: "GIGACHAT", link: "https://github.com/inpersonin/Messenger", cat: "Realtime Chat" },
  { name: "WHERE'S WALDO", link: "https://github.com/inpersonin/wheres-waldo", cat: "Game Logic" },
  { name: "SHOPPING CART", link: "https://github.com/inpersonin/react-shopping-cart", cat: "E-Commerce" },
  { name: "AI FAKE NEWS", link: "https://github.com/inpersonin/Hackathon", cat: "Machine Learning" },
];

const Projects = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-dark">
      <div className="flex justify-between items-end mb-12 md:mb-20 border-b border-gray-800 pb-6">
        <h2 className="font-body text-gray-500 uppercase tracking-widest text-xs md:text-sm">Selected Projects</h2>
        <span className="font-body text-gray-700 text-[10px] md:text-xs">2024 &mdash; Present</span>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group relative border-b border-gray-800 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-500 hover:border-accent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div className="flex items-baseline gap-4 md:gap-6 overflow-hidden">
              <span className="font-body text-gray-600 text-xs md:text-sm">0{index + 1}</span>
              <h3 className="font-display text-4xl md:text-8xl text-gray-300 group-hover:text-accent transition-colors duration-300 uppercase leading-none">
                {project.name}
              </h3>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0 overflow-hidden pl-8 md:pl-0">
              <span className="font-body text-gray-500 text-[10px] md:text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                {project.cat}
              </span>
              <span className="text-gray-600 text-xl md:text-2xl group-hover:-rotate-45 group-hover:text-accent transition-transform duration-300">
                &rarr;
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;