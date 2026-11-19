export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Introduction</span>
        <h2 className="text-3xl font-bold text-white mt-1">About Me</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900/40 border border-slate-800/80 p-8 rounded-2xl">
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            My journey into programming started with curiosity about how complex websites are built from scratch. What began as simple HTML/CSS experiments quickly turned into a strong passion for modern JavaScript frameworks and full-stack development.
          </p>
          <p>
            I love working on project ideas that solve real-world problems. Building responsive interfaces, optimizing web applications, and writing clean, maintainable architecture are the aspects of software development I enjoy the most.
          </p>
          <p>
            When I am not coding, I enjoy playing sports, painting, exploring new technologies, and reading books to keep a healthy balance between logic and creativity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-cyan-400 font-bold text-2xl mb-1">1+</h3>
            <p className="text-slate-400 text-xs">Years Experience</p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-indigo-400 font-bold text-2xl mb-1">10+</h3>
            <p className="text-slate-400 text-xs">Completed Projects</p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-cyan-400 font-bold text-2xl mb-1">100%</h3>
            <p className="text-slate-400 text-xs">Commitment</p>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-indigo-400 font-bold text-2xl mb-1">24/7</h3>
            <p className="text-slate-400 text-xs">Learning Mindset</p>
          </div>
        </div>
      </div>
    </section>
  );
}