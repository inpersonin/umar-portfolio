const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-gray-800 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="font-display text-5xl md:text-[8vw] text-white uppercase leading-none mb-4">
            Let's <span className="text-accent">Talk</span>
          </h2>
          <a href="mailto:workumarshaikh@gmail.com" className="font-body text-lg md:text-2xl text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            workumarshaikh@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-10 md:mt-0">
          <a href="https://github.com/inpersonin" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent uppercase font-bold tracking-wider text-sm md:text-base">
            Github
          </a>
          <a href="https://www.linkedin.com/in/umar-shaikh-1a9784334/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent uppercase font-bold tracking-wider text-sm md:text-base">
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between text-gray-600 text-xs md:text-sm font-body uppercase gap-2">
        <span>© 2024 Umar Shaikh</span>
        <span>Made with React & Tailwind</span>
      </div>
    </footer>
  );
};

export default Footer;