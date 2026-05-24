import Image from "next/image";

const stats = [
  { value: "3+",   label: "Years Coding" },
  { value: "3+",   label: "Projects Built" },
  { value: "100%", label: "Self-Taught" },
  { value: "∞",    label: "Curiosity" },
];

const socials = [
  {
    icon: (
      <Image
        src="/images/logo/gmail.png"
        alt="Email"
        width={22}
        height={22}
        style={{ objectFit: "contain" }}
      />
    ),
    href: "mailto:jlerryteodoro@gmail.com",
    label: "Email",
  },
  {
    icon: (
      <Image
        src="/images/logo/github.png"
        alt="GitHub"
        width={22}
        height={22}
        style={{ objectFit: "contain" }}
      />
    ),
    href: "https://github.com/yrrell",
    label: "GitHub",
  },
  {
    icon: (
      <Image
        src="/images/logo/fb.png"
        alt="Facebook"
        width={22}
        height={22}
        style={{ objectFit: "contain" }}
      />
    ),
    href: "https://www.facebook.com/ler.ry.737",
    label: "Facebook",
  },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center dotgrid overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Glow orbs */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          top: "-120px",
          left: "-100px",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          bottom: "0",
          right: "-80px",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: Text content ── */}
          <div className="order-2 lg:order-1">
            <span
              className="slabel afu mb-5 inline-flex"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              👋 Hi, I&apos;m John Lerry
            </span>

            <h1
              className="afu d1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5"
              style={{
                fontFamily: "'Sora',sans-serif",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-white">Full-Stack</span>
              <br />
              <span className="gt">Web Developer</span>
            </h1>

            <p
              className="afu d2 text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-7 max-w-lg"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              I build responsive, community-driven web applications using{" "}
              <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
              <span className="text-blue-400 font-semibold">TypeScript</span>, and{" "}
              <span className="text-blue-400 font-semibold">Laravel</span>  all from
              my Android phone via{" "}
              <span className="text-cyan-400 font-semibold">Termux</span>, to VS Code on desktop.
            </p>

            {/* Social icon buttons */}
            <div
              className="afu d3 flex gap-3 mb-8"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:border-blue-400"
                  style={{
                    background: "rgba(37,99,235,0.1)",
                    border: "1px solid rgba(37,99,235,0.25)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="afu d4 flex flex-wrap gap-3"
              style={{ opacity: 0, animationFillMode: "forwards" }}
            >
              <button onClick={() => scrollTo("projects")} className="btn btn-primary">
                View My Work →
              </button>
              <button onClick={() => scrollTo("contact")} className="btn btn-ghost">
                Get In Touch
              </button>
              <a
                href="/cv/CV_John_Lerry_Teodoro.pdf"
                download
                className="btn btn-ghost"
                style={{ color: "#5eead4", borderColor: "rgba(45,212,191,0.35)" }}
              >
                ⬇ Hire Me / CV
              </a>
            </div>

            {/* Stats grid */}
            <div
              className="afu d5 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8"
              style={{
                opacity: 0,
                animationFillMode: "forwards",
                borderTop: "1px solid rgba(37,99,235,0.13)",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl sm:text-3xl font-bold text-white"
                    style={{ fontFamily: "'Sora',sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Photo with full-image display ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/*
              Outer float wrapper — no fixed height here so the frame can
              grow/shrink with the viewport width.
            */}
            <div
              className="aflt"
              style={{
                position: "relative",
                width: "min(300px, 85vw)",
              }}
            >
              {/* Ambient glow behind the frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  borderRadius: "36px",
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(6,182,212,0.22) 100%)",
                  filter: "blur(28px)",
                  pointerEvents: "none",
                }}
              />

              {/*
                Visible rectangular frame — a gradient border achieved via a
                wrapper div with padding acting as the "border" stroke.
                The inner div clips the image to rounded corners.
              */}
              <div
                style={{
                  position: "relative",
                  padding: "3px",                          /* border thickness */
                  borderRadius: "28px",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #818cf8 100%)",
                  boxShadow:
                    "0 0 0 1px rgba(37,99,235,0.18), " +
                    "0 8px 40px rgba(37,99,235,0.35), " +
                    "0 0 80px rgba(6,182,212,0.15)",
                }}
              >
                {/* Corner accents reinforce the rectangular shape */}
                {(["top-left", "top-right", "bottom-left", "bottom-right"] as const).map(
                  (corner) => (
                    <CornerAccent key={corner} position={corner} />
                  )
                )}

                {/*
                  Photo container — uses objectFit:"contain" so the ENTIRE
                  image is always visible with no cropping.
                  aspect-ratio keeps the frame proportional on every screen.
                */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    /* Portrait aspect ratio — adjust to match developer.png */
                    aspectRatio: "3 / 4",
                    borderRadius: "26px",
                    overflow: "hidden",
                    /* Dark fill behind the image for letterbox areas */
                    background: "rgba(2,12,27,0.85)",
                  }}
                >
                  <Image
                    src="/images/developer.png"
                    alt="John Lerry Teodoro"
                    fill
                    sizes="(max-width: 640px) 85vw, 300px"
                    style={{
                      objectFit: "contain",        /* show full image, no crop */
                      objectPosition: "center",
                    }}
                    priority
                  />
                </div>
              </div>

              {/* Bottom badge */}
              <div
                className="card absolute -bottom-4 -left-4 px-4 py-3 flex items-center gap-2"
                style={{ minWidth: 160 }}
              >
                <span className="text-xl">💻</span>
                <div>
                  <div
                    className="text-white text-xs font-semibold"
                    style={{ fontFamily: "'Sora',sans-serif" }}
                  >
                    John Lerry V. Teodoro
                  </div>
                  <div className="text-slate-500 text-[10px]">Full Stack Web Developer</div>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="card absolute -top-3 -right-3 px-3 py-2 text-center">
                <div className="text-blue-400 text-xs font-mono font-semibold">
                  &lt;/&gt; Self-Taught
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}

/* ── Corner accent marks that emphasise the rectangular frame ── */
type CornerPos = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function CornerAccent({ position }: { position: CornerPos }) {
  const SIZE = 14;   // px — length of each arm
  const THICK = 2.5; // px — arm thickness
  const OFFSET = -5; // px — how far outside the border box

  const isTop    = position.startsWith("top");
  const isLeft   = position.endsWith("left");

  const style: React.CSSProperties = {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    zIndex: 10,
    ...(isTop    ? { top:    OFFSET } : { bottom: OFFSET }),
    ...(isLeft   ? { left:   OFFSET } : { right:  OFFSET }),
    borderTop:    isTop    ? `${THICK}px solid #60a5fa` : "none",
    borderBottom: !isTop   ? `${THICK}px solid #60a5fa` : "none",
    borderLeft:   isLeft   ? `${THICK}px solid #60a5fa` : "none",
    borderRight:  !isLeft  ? `${THICK}px solid #60a5fa` : "none",
    borderTopLeftRadius:     (isTop && isLeft)  ? 4 : 0,
    borderTopRightRadius:    (isTop && !isLeft) ? 4 : 0,
    borderBottomLeftRadius:  (!isTop && isLeft) ? 4 : 0,
    borderBottomRightRadius: (!isTop && !isLeft)? 4 : 0,
  };

  return <div style={style} aria-hidden />;
}
