const skillGroups = [
  {
    category: "Frontend Development",
    skills: ["Next.js", "React", "JavaScript (ES6+)", "Tailwind CSS", "DaisyUI", "HeroUI"]
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "MongoDB", "Better Auth", "REST APIs"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git & GitHub", "Vite", "Vercel Deployment", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Capabilities</span>
        <h2 className="text-3xl font-bold text-white mt-1">Tech Stack & Tools</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-white font-semibold mb-4 text-base">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="bg-slate-950/80 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-cyan-500/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}