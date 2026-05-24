import Image from "next/image";

const logos = [
  { src: "/images/logo/nextjs.png",      name: "Next.js" },
  { src: "/images/logo/react.png",       name: "React" },
  { src: "/images/logo/typescript.png",  name: "TypeScript" },
  { src: "/images/logo/tailwind.png",    name: "Tailwind CSS" },
  { src: "/images/logo/javascript.png",  name: "JavaScript" },
  { src: "/images/logo/php.png",         name: "PHP" },
  { src: "/images/logo/mysql.png",       name: "MySQL" },
  { src: "/images/logo/postgresql.png",  name: "PostgreSQL" },
  { src: "/images/logo/github.png",      name: "GitHub" },
  { src: "/images/logo/html.png",        name: "HTML5" },
  { src: "/images/logo/css.png",         name: "CSS3" },
  { src: "/images/logo/termux.png",      name: "Termux" },
  { src: "/images/logo/vscode.png",      name: "VS Code" },
  { src: "/images/logo/acode.png",       name: "Acode" },
  { src: "/images/logo/xampp.png",       name: "XAMPP" },
  { src: "/images/logo/ksweb.png",       name: "KSWeb" },
];

// Duplicate for seamless loop
const doubled = [...logos, ...logos];

export default function TechMarquee() {
  return (
    <div
      className="py-10 relative overflow-hidden"
      style={{
        background: "rgba(10,22,40,0.6)",
        borderTop: "1px solid rgba(37,99,235,0.1)",
        borderBottom: "1px solid rgba(37,99,235,0.1)",
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #020c1b, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #020c1b, transparent)" }} />

      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 mx-6 group cursor-default"
            style={{ minWidth: 72 }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400/50"
              style={{
                background: "rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.15)",
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={28}
                height={28}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-[10px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
