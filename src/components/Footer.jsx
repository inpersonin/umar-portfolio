const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-800 px-6 py-12 md:px-12 md:py-16 bg-dark">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-gray-500">
            Wannabe starting something?
          </p>
          <h2 className="font-display text-5xl uppercase leading-none text-white md:text-[7vw]">
            Let&apos;s <span className="text-accent">Talk</span>
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <a
            href="mailto:workumarshaikh@gmail.com"
            className="border-b border-transparent pb-1 font-body text-lg text-gray-300 transition-colors hover:border-accent hover:text-white md:text-2xl"
          >
            workumarshaikh@gmail.com
          </a>
          <div className="flex gap-6 text-xs md:text-sm font-body uppercase tracking-[0.25em] text-gray-500">
            <a
              href="https://github.com/inpersonin"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/umar-shaikh-1a9784334/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 font-body text-[10px] uppercase tracking-[0.25em] text-gray-600 md:mt-16 md:flex-row md:items-center md:justify-between">
        <span>© 2024 Umar Shaikh</span>
        <span>Made with React</span>
      </div>
    </footer>
  );
};

export default Footer;