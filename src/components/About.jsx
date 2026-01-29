const About = () => {
  const skills = [
    "JavaScript", "CSS", "React", "Node.js", "MongoDB", 
    "PostgreSQL", "Express", "Python", "C/C++", "Java"
  ];

  return (
    <section className="py-20 px-4 md:px-10 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="font-display text-6xl md:text-8xl text-white uppercase mb-10 leading-none">
          Always <span className="text-accent">Building</span>,<br />
          Always <span className="text-outline text-transparent stroke-white" style={{WebkitTextStroke: "1px gray"}}>Learning</span>.
        </h2>
      </div>
      
      <div className="flex flex-col justify-center">
        <p className="font-body text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
          I create immersive web experiences that merge technical depth with visual polish. 
          Specializing in the MERN stack and creative fullstack development.
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 border border-gray-700 rounded-full text-gray-300 font-body text-sm hover:border-accent hover:text-accent transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;