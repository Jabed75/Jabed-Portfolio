export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-12 overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl text-center z-10 flex flex-col items-center">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mb-8 shadow-xl shadow-cyan-500/20 overflow-hidden group">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 ring-4 ring-slate-950 group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/my-profile.jpg" 
              alt="Md Jabed Profile" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-semibold mb-5 shadow-inner shadow-cyan-900">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
         Software & Web Developer
        </div>
        
        <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white mb-5 leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Md Jabed</span>
        </h1>
        
        <p className="text-slate-400 text-base sm:text-xl mb-8 max-w-2xl leading-relaxed">
          Crafting modern, performant web applications with seamless user experiences using Next.js, React, and Tailwind CSS.
        </p>

        <div className="flex items-center gap-4 mb-8">
          <a 
            href="https://github.com/Jabed75" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center gap-2 text-sm font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://www.facebook.com/mdjabed.speaking" 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center gap-2 text-sm font-medium"
          >
            Facebook
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a 
            href="/resume.pdf" 
            download="Md_Jabed_Resume.pdf"
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-8 py-4 rounded-2xl hover:opacity-95 transition shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2.5"
          >
            <span className="text-xl group-hover:rotate-6 transition-transform">📥</span> 
            Download Resume
          </a>
          <a 
            href="#contact" 
            className="bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-200 font-semibold px-8 py-4 rounded-2xl hover:border-cyan-500/40 hover:bg-slate-800/60 transition inline-flex items-center gap-2"
          >
            <span>💬</span> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}