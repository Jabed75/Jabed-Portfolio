const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Chittagong University of Engineering & Technology(CUET)",
    duration: "2026 - Present",
    description: "Focused on Software Engineering, Data Structures, Algorithms, and Web Development."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chittagong College",
    duration: "2019 - 2021",
    description: "Science Background."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Background</span>
        <h2 className="text-3xl font-bold text-white mt-1">Education</h2>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div 
            key={idx} 
            className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <span className="text-xs text-cyan-400 font-medium bg-slate-800/80 px-3 py-1 rounded-full w-fit mt-1 md:mt-0">
                {edu.duration}
              </span>
            </div>
            <p className="text-indigo-400 font-medium text-sm mb-3">{edu.institution}</p>
            <p className="text-slate-400 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}