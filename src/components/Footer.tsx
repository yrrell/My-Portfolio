export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ borderTop: "1px solid rgba(37,99,235,0.1)" }}>
      {/* CTA Banner */}
      <div
        className="py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(13,31,56,0.95), rgba(10,22,40,0.98))" }}
      >
        {/* Glow */}
        <div className="orb" style={{
          width: 500, height: 300, top: "-50px", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }} />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
          <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">Ready to work together?</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Sora',sans-serif" }}>
            Let&apos;s build something great
          </h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Open to full-time roles, freelance projects, and collaborative builds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="btn btn-ghost"
            >
              👁 View My Work
            </button>
            <a
              href="mailto:jlerryteodoro@gmail.com?subject=Hiring Inquiry"
              className="btn btn-primary"
            >
              ✉ Hire Me
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-ghost"
              style={{ color: "#5eead4", borderColor: "rgba(45,212,191,0.35)" }}
            >
              💬 Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-6 px-4 sm:px-6"
        style={{ background: "rgba(2,12,27,0.98)", borderTop: "1px solid rgba(37,99,235,0.08)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="font-mono text-xs text-slate-600">
            © {year} John Lerry Teodoro · jlerryteodoro@gmail.com
          </span>
          <span className="font-mono text-xs text-slate-700">
            Built with Next.js · TypeScript · Tailwind CSS · Deployed on Vercel
          </span>
          <div className="flex gap-4">
            {[
              { label: "GitHub",  href: "https://github.com/yrrell" },
              { label: "Email",   href: "mailto:jlerryteodoro@gmail.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-300 text-xs font-mono transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
