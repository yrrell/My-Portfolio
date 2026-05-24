import { useState } from "react";
import Image from "next/image";

/* ── Direct-contact link definitions ── */
const directLinks = [
  {
    key: "email",
    label: "Email",
    href: "mailto:jlerryteodoro@gmail.com",
    /* gmail.png replaces the envelope icon entirely */
    icon: (
      <Image
        src="/images/logo/gmail.png"
        alt="Gmail"
        width={20}
        height={20}
        style={{ objectFit: "contain", display: "block" }}
      />
    ),
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/yrrell",
    /* github.png replaces the Octocat / any previous icon */
    icon: (
      <Image
        src="/images/logo/github.png"
        alt="GitHub"
        width={20}
        height={20}
        style={{ objectFit: "contain", display: "block" }}
      />
    ),
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/ler.ry.737",
    icon: (
      <Image
        src="/images/logo/fb.png"
        alt="Facebook"
        width={20}
        height={20}
        style={{ objectFit: "contain", display: "block" }}
      />
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative dotgrid">
      {/* Ambient glow */}
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
        <p className="slabel mb-4 justify-center">06. Contact</p>

        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Sora',sans-serif" }}
        >
          Let&apos;s Build Something 👋
        </h2>

        <p className="text-slate-400 mb-12 text-sm sm:text-base max-w-lg mx-auto">
          Whether you have a project in mind, need a developer, or just want to
          connect — my inbox is always open.
        </p>

        {/* ── Contact form card ── */}
        <div className="card p-6 sm:p-8 text-left mb-8">
          {sent ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3
                className="text-white text-xl font-bold mb-2"
                style={{ fontFamily: "'Sora',sans-serif" }}
              >
                Message sent!
              </h3>
              <p className="text-slate-400 text-sm">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn btn-ghost mt-6 mx-auto"
                style={{ fontSize: "0.8rem" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-mono uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-mono uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-mono uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry / Hiring / Collaboration…"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5 font-mono uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project…"
                  className="input-field resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full justify-center">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* OR divider */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(37,99,235,0.12)" }}
          />
          <span className="text-slate-600 text-xs font-mono">
            or reach out directly
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(37,99,235,0.12)" }}
          />
        </div>

        {/*
          ── "Hire Me" direct links ──
          • Envelope icon REMOVED — replaced by gmail.png
          • GitHub icon   REMOVED — replaced by github.png
        */}
        <div className="flex flex-wrap justify-center gap-3">
          {directLinks.map(({ key, icon, label, href }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost flex items-center gap-2"
              style={{ fontSize: "0.82rem", padding: "0.55rem 1.2rem" }}
            >
              {/* Image icon — no emoji or SVG fallback */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                }}
              >
                {icon}
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
