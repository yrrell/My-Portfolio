import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Next.js / React",   pct: 85, color: "#2563eb" },
  { name: "TypeScript",        pct: 78, color: "#3b82f6" },
  { name: "Tailwind CSS",      pct: 90, color: "#06b6d4" },
  { name: "Laravel (PHP)",     pct: 80, color: "#818cf8" },
  { name: "MySQL / Supabase",  pct: 75, color: "#2563eb" },
  { name: "Turso / SQLite",    pct: 78, color: "#06b6d4" },
  { name: "Git & GitHub",      pct: 82, color: "#3b82f6" },
  { name: "Termux / Linux CLI",pct: 88, color: "#06b6d4" },
  { name: "UI / UX Design",    pct: 72, color: "#818cf8" },
];

const highlights = [
  {
    icon: "📱",
    title: "Mobile-First Developer",
    desc: "Built complete production apps using Termux (Linux on Android) and KSWeb — a full server stack on my phone — before having any desktop setup.",
  },
  {
    icon: "🚀",
    title: "Production Deployments",
    desc: "All projects are live on Vercel with CI/CD via GitHub — from community PWAs to Laravel-powered management systems.",
  },
  {
    icon: "🛠️",
    title: "Full-Stack Versatility",
    desc: "Equally at home building Next.js + Tailwind frontends and Laravel / Node.js backends with Supabase, Turso, or MySQL.",
  },
];

const milestones = [
  { title: "BSIT Graduate",        org: "Pampanga State University",   year: "2025" },
  { title: "Dean's Lister (5×)",   org: "PSU Lubao Campus",           year: "2021–2025" },
  { title: "KumpuniGo! Live",      org: "Vercel — kumpuni-go.vercel.app", year: "2025–2026" },
  { title: "T&J Motorshop System", org: "Vercel — tnj-motorshop.vercel.app",    year: "2026" },
  { title: "OJT Certificate",      org: "Sattlink Cable TV & Broadband", year: "2025" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative dotgrid" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <p className="slabel mb-4">02. Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Sora',sans-serif" }}>
            What I Work With
          </h2>
          <div className="section-divider mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skill bars */}
          <div className="space-y-5">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 text-sm font-medium">{s.name}</span>
                  <span className="text-xs font-mono" style={{ color: s.color }}>{s.pct}%</span>
                </div>
                <div style={{ height: 5, background: "rgba(37,99,235,0.1)", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    borderRadius: 99,
                    background: `linear-gradient(to right, ${s.color}, #06b6d4)`,
                    width: visible ? `${s.pct}%` : "0%",
                    transition: `width 1.1s cubic-bezier(0.4,0,0.2,1) ${i * 70}ms`,
                    boxShadow: visible ? `0 0 8px ${s.color}55` : "none",
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Highlights + milestones */}
          <div className="space-y-5">
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">
              Unique Highlights
            </h3>
            {highlights.map((h) => (
              <div key={h.title} className="card p-4 sm:p-5 flex gap-4 items-start">
                <span className="text-2xl mt-0.5 flex-shrink-0">{h.icon}</span>
                <div>
                  <div className="text-white font-semibold mb-1 text-sm sm:text-base" style={{ fontFamily: "'Sora',sans-serif" }}>
                    {h.title}
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}

            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-8 mb-4">
              Milestones
            </h3>
            {milestones.map((m) => (
              <div
                key={m.title}
                className="flex items-start sm:items-center justify-between gap-3 py-3"
                style={{ borderBottom: "1px solid rgba(37,99,235,0.1)" }}
              >
                <div>
                  <div className="text-white text-sm font-medium">{m.title}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{m.org}</div>
                </div>
                <span className="tag flex-shrink-0">{m.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
