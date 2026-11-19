const projects = [
  {
    title: "Keen-keeper",
    category: "Full-Stack Application",
    description: "A contact and timeline management platform designed to organize interactions with structured historical records.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blood Donation Platform",
    category: "Full Stack / Frontend Design",
    description: "A responsive blood donation web application connecting donors with recipients, featuring donor search by blood group and location, emergency request management, and user dashboards.",
    tags: ["Next.js", "Tailwind CSS", "DaisyUI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  
  {
    title: "Tutor Booking Systems",
    category: "Web Application",
    description: "A dynamic web app featuring detail view routing, responsive layouts, and smooth modal integrations.",
    tags: ["Next.js", "MongoDB", "HeroUI"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl font-bold text-white mt-1">Selected Projects</h2>
        </div>
        <p className="text-slate-400 text-sm mt-2 md:mt-0 max-w-md">
          A showcase of recent work focusing on clean architecture, performance, and user-centric design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800/80 hover:border-cyan-500/50 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            <div>
              <span className="text-xs text-indigo-400 font-medium">{project.category}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 text-xs mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-slate-800/80 text-slate-300 border border-slate-700/50 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-800/60">
                <a href={project.liveUrl} className="text-cyan-400 font-medium hover:underline inline-flex items-center gap-1">
                  Live Preview <span>&rarr;</span>
                </a>
                <a href={project.githubUrl} className="text-slate-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}