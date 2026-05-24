export default function Resume() {
  return (
    <section id="resume" className="py-24 relative" style={{ background: "rgba(10,22,40,0.5)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="slabel mb-4 justify-center">05. Resume / CV</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Sora',sans-serif" }}>
            My Curriculum Vitae
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            A summary of my education, skills, and experience — available to view or download.
          </p>
          <div className="section-divider mt-3 mx-auto" />
        </div>

        {/* CV Card */}
        <div className="cv-preview">
          {/* Header bar */}
          <div
            className="px-6 py-4 flex flex-wrap items-center gap-4"
            style={{ background: "rgba(37,99,235,0.08)", borderBottom: "1px solid rgba(37,99,235,0.12)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.25)" }}>
                📄
              </div>
              <div>
                <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Sora',sans-serif" }}>
                  CV_John_Lerry_Teodoro.pdf
                </div>
                <div className="text-slate-500 text-xs font-mono">Curriculum Vitae · 2025</div>
              </div>
            </div>
            <div className="flex gap-3 ml-auto">
              <a
                href="/cv/CV_John_Lerry_Teodoro.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}
              >
                👁 View
              </a>
              <a
                href="/cv/CV_John_Lerry_Teodoro.pdf"
                download
                className="btn btn-primary"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem" }}
              >
                ⬇ Download
              </a>
            </div>
          </div>

          {/* CV content summary */}
          <div className="p-6 sm:p-8 grid sm:grid-cols-2 gap-8">
            {/* Personal */}
            <div>
              <h3 className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">Personal Info</h3>
              <div className="space-y-2">
                {[
                  { k: "Name",       v: "John Lerry V. Teodoro" },
                  { k: "Location",   v: "Lubao, Pampanga 🇵🇭" },
                  { k: "Email",      v: "jlerryteodoro@gmail.com" },
                  { k: "GitHub",     v: "github.com/yrrell" },
                  { k: "Age",        v: "23" },
                  { k: "Civil",      v: "Single" },
                  { k: "Languages",  v: "Kapampangan · Tagalog · English" },
                ].map((f) => (
                  <div key={f.k} className="flex gap-3 text-sm">
                    <span className="text-slate-500 font-mono w-20 flex-shrink-0">{f.k}:</span>
                    <span className="text-slate-300">{f.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">Education</h3>
              <div className="space-y-4">
                <div className="card p-4">
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Sora',sans-serif" }}>
                    BSIT — Pampanga State University
                  </div>
                  <div className="text-slate-500 text-xs mt-1">Lubao Campus · 2021–2025</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["Dean's Lister ×5"].map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="card p-4">
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'Sora',sans-serif" }}>
                    OJT — Sattlink Cable TV & Broadband
                  </div>
                  <div className="text-slate-500 text-xs mt-1">Guagua, Pampanga · Feb–Apr 2025</div>
                </div>
              </div>
            </div>

            {/* Skills summary */}
            <div>
              <h3 className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js","TypeScript","React","Laravel","PHP","MySQL","Supabase","Turso","Tailwind CSS","Git","Termux","Linux CLI"].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Character refs */}
            <div>
              <h3 className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-4">Character References</h3>
              <div className="space-y-2 text-sm">
                {[
                  { name: "Mr. Lougin A. Miranda",      role: "IT Instructor I" },
                  { name: "Mr. Aldrin S. Duana LPT MIT",role: "IT Instructor I" },
                  { name: "Ms. Xena Pring",              role: "Sattlink Admin Staff" },
                ].map((r) => (
                  <div key={r.name}>
                    <div className="text-white font-medium text-xs">{r.name}</div>
                    <div className="text-slate-500 text-xs">{r.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/cv/CV_John_Lerry_Teodoro.pdf"
            download
            className="btn btn-primary"
          >
            ⬇ Download Full CV
          </a>
          <a
            href="mailto:jlerryteodoro@gmail.com?subject=Hiring Inquiry"
            className="btn btn-ghost"
          >
            ✉ Get In Touch
          </a>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn btn-ghost"
            style={{ color: "#5eead4", borderColor: "rgba(45,212,191,0.35)" }}
          >
            👁 View My Work
          </button>
        </div>
      </div>
    </section>
  );
}
