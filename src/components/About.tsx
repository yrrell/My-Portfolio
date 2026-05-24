import Image from "next/image";

const tools = [
  { logo: "/images/logo/vscode.png",     name: "VS Code",      desc: "Desktop editor" },
  { logo: "/images/logo/acode.png",      name: "Acode",        desc: "Android code editor" },
  { logo: "/images/logo/termux.png",     name: "Termux",       desc: "Linux on Android" },
  { logo: "/images/logo/ksweb.png",      name: "KSWeb",        desc: "Web server on Android" },
  { logo: "/images/logo/xampp.png",      name: "XAMPP",        desc: "Local PHP + MySQL" },
  { logo: "/images/logo/nextjs.png",     name: "Next.js",      desc: "React framework" },
  { logo: "/images/logo/typescript.png", name: "TypeScript",   desc: "Typed JavaScript" },
  { logo: "/images/logo/tailwind.png",   name: "Tailwind CSS", desc: "Utility-first CSS" },
  { logo: "/images/logo/javascript.png", name: "JavaScript",   desc: "Core web language" },
  { logo: "/images/logo/php.png",        name: "PHP",          desc: "Server-side scripting" },
  { logo: "/images/logo/mysql.png",      name: "MySQL",        desc: "Relational database" },
  { logo: "/images/logo/postgresql.png", name: "PostgreSQL",   desc: "Advanced SQL database" },
  { logo: "/images/logo/github.png",     name: "GitHub",       desc: "Version control" },
  { logo: "/images/logo/react.png",      name: "React",        desc: "JavaScript UI library" },
  { logo: "/images/logo/html.png",       name: "HTML5",        desc: "Markup language" },
  { logo: "/images/logo/css.png",        name: "CSS3",         desc: "Styling" },
];

const facts = [
  { k: "Location", v: "Lubao, Pampanga 🇵🇭" },
  { k: "Focus",    v: "Full-Stack Dev" },
  { k: "Deploy",   v: "Vercel + GitHub" },
  { k: "Mobile",   v: "Termux + KSWeb" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative" style={{ background: "rgba(10,22,40,0.5)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <p className="slabel mb-4">01. About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "'Sora',sans-serif" }}>
            Who I Am
          </h2>
          <div className="section-divider mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
              I&apos;m a self-taught Filipino full-stack web developer passionate about building
              real-world, community-driven web applications. What sets me apart is that I started
              coding{" "}
              <span className="text-white font-semibold">entirely on my Android phone</span>{" "}
               using Termux and KSWeb  before transitioning to a full desktop setup with VS Code and XAMPP.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5 text-sm sm:text-base">
              My flagship project{" "}
              <span className="text-blue-400 font-semibold">KumpuniGo!</span> is a community-powered
              PWA helping Filipinos find the nearest vulcanizing and motor repair shops nationwide built end-to-end, from design to Vercel deployment.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I&apos;m also experienced with{" "}
              <span className="text-blue-400 font-semibold">Laravel</span>,{" "}
              <span className="text-blue-400 font-semibold">Turso/SQLite</span>, and{" "}
              <span className="text-cyan-400 font-semibold">Supabase</span>  building full
              authentication systems, POS apps, and community platforms with admin dashboards.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="flex items-center gap-2"
                  style={{
                    padding: "10px 14px",
                    background: "rgba(37,99,235,0.07)",
                    border: "1px solid rgba(37,99,235,0.14)",
                    borderRadius: 10,
                  }}
                >
                  <span className="text-slate-500 text-xs font-mono">{f.k}:</span>
                  <span className="text-white text-xs font-medium">{f.v}</span>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/yrrell"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}
              >
                GitHub
              </a>
              <a
                href="mailto:jlerryteodoro@gmail.com"
                className="btn btn-ghost"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}
              >
                Email Me
              </a>
              <a
                href="/cv/CV_John_Lerry_Teodoro.pdf"
                download
                className="btn btn-primary"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}
              >
                ⬇ Download CV
              </a>
            </div>
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-5">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {tools.map((t) => (
                <div key={t.name} className="card p-3 sm:p-4 flex items-center gap-3">
                  <div style={{
                    width: 36, height: 36, borderRadius: 8, overflow: "hidden",
                    background: "rgba(255,255,255,0.05)", display: "flex",
                    alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Image src={t.logo} alt={t.name} width={24} height={24} style={{ objectFit: "contain" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-semibold truncate" style={{ fontFamily: "'Sora',sans-serif" }}>
                      {t.name}
                    </div>
                    <div className="text-slate-500 text-xs truncate">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
