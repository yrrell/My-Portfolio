import { useState, useEffect } from "react";
import Image from "next/image";

const links = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

/* ── Hire Me button ─────────────────────────────────────────────────────────
   The envelope emoji/icon is REMOVED.
   gmail.png is used as the leading icon instead.
   ─────────────────────────────────────────────────────────────────────────── */
function HireMeButton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href="mailto:jlerryteodoro@gmail.com"
      className={`btn btn-primary ${className ?? ""}`}
      style={style}
    >
      {/* gmail.png replaces the ✉ envelope icon */}
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 18,
          height: 18,
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/logo/gmail.png"
          alt="Gmail"
          width={18}
          height={18}
          style={{ objectFit: "contain", display: "block" }}
        />
      </span>
      Hire Me
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => l.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (section: string) => {
    setOpen(false);
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:   scrolled ? "rgba(2,12,27,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(37,99,235,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <span
          className="font-heading font-bold text-xl tracking-tight cursor-pointer select-none"
          style={{ fontFamily: "'Sora',sans-serif" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-white">JLerry</span>
          <span
            style={{
              background: "linear-gradient(135deg,#2563eb,#06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            .dev
          </span>
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className={`navlink${active === l ? " active" : ""}`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Desktop Hire Me — gmail.png icon */}
        <HireMeButton
          className="hidden md:inline-flex"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}
        />

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="block h-[2px] w-6 bg-white transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }}
          />
          <span
            className="block h-[2px] bg-white transition-all duration-300"
            style={{ width: open ? "0" : "24px", opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-white transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "500px" : "0",
          background: "rgba(2,12,27,0.98)",
          borderTop: open ? "1px solid rgba(37,99,235,0.1)" : "none",
        }}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="text-left text-slate-300 text-sm font-medium py-3 px-3 rounded-xl transition-colors hover:bg-blue-900/20 hover:text-white"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {l}
            </button>
          ))}

          {/* Mobile Hire Me — same gmail.png icon */}
          <HireMeButton className="mt-3 justify-center" />
        </div>
      </div>
    </nav>
  );
}
