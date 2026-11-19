export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <span className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">Get In Touch</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Contact Me</h2>
        <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's talk about everything!</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <a href="mailto:your.email@example.com" className="font-medium hover:text-cyan-400 transition">
                    jabedhosen5475@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-xs text-slate-500">Phone / WhatsApp</p>
                  <a href="tel:+8801827905475" className="font-medium hover:text-cyan-400 transition">
                    +880 1827-905475
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Connect with me</p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/Jabed75" 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              >
                GitHub
              </a>
              <a 
                href="https://www.facebook.com/mdjabed.speaking" 
                target="_blank" 
                rel="noreferrer" 
                className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        
        <form className="space-y-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Your Email</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
            <textarea 
              rows="4" 
              placeholder="Write your message here..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/60 transition resize-none"
              required 
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-lg shadow-cyan-500/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}