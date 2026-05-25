import { useState } from "react";
import Image from "next/image";

// ── KumpuniGo slides ─────────────────────────────────────────────────────────
const kumpuniSlides = [
  {
    img: "/images/mockup/kumpunigo-hero.png",
    title: "KumpuniGo!",
    subtitle: "Community Shop Finder PWA",
    desc: "Your community-powered guide to finding the nearest vulcanizing and motor repair shops anywhere in the Philippines.",
    tags: ["Next.js", "TypeScript", "Supabase", "Leaflet", "Vercel"],
    feature: "🔍 Overview",
  },
  {
    img: "/images/mockup/kumpunigo-nearby.png",
    title: "Find Nearby Shops",
    subtitle: "Location-aware listing",
    desc: "Locate nearest shops sorted by open status and distance using real-time GPS.",
    tags: ["Geolocation API", "Open-First Sort", "PWA"],
    feature: "📍 GPS-Powered",
  },
  {
    img: "/images/mockup/kumpunigo-map.png",
    title: "Live Interactive Map",
    subtitle: "Leaflet.js integration",
    desc: "All approved shops pinned on a live map with type icons and open/closed status indicators.",
    tags: ["Leaflet.js", "Real-time", "Map Pins"],
    feature: "🗺️ Live Map",
  },
  {
    img: "/images/mockup/kumpunigo-community.png",
    title: "Community Contributions",
    subtitle: "Admin-reviewed submissions",
    desc: "Registered users submit shops with photo proof for admin review — keeping data trustworthy.",
    tags: ["Google Auth", "Supabase Storage", "Admin Panel"],
    feature: "👥 Community",
  },
  {
    img: "/images/mockup/kumpunigo-antiscam.png",
    title: "Anti-Scam System",
    subtitle: "3-strike ban system",
    desc: "Google sign-in required with a 3-strike warning system that permanently bans repeat fake submitters.",
    tags: ["Google OAuth", "3-Strike", "Auto-ban"],
    feature: "🛡️ Anti-Scam",
  },
  {
    img: "/images/mockup/kumpunigo-email.png",
    title: "Email Notifications",
    subtitle: "Automated contributor updates",
    desc: "Contributors receive email updates when their submission is approved or rejected by admin.",
    tags: ["Email API", "Admin Panel", "Auto Notify"],
    feature: "📧 Notifications",
  },
  {
    img: "/images/mockup/kumpunigo-updates.png",
    title: "Shop Updates",
    subtitle: "Community-driven data",
    desc: "Users can report changes — contact numbers, hours, moved location, permanently closed — with optional photo evidence.",
    tags: ["Contribution Flow", "Admin Review", "Photo Upload"],
    feature: "✏️ Updates",
  },
  {
    img: "/images/mockup/kumpunigo-nationwide.png",
    title: "Nationwide Coverage",
    subtitle: "Built to scale across PH",
    desc: "Designed to scale nationally as the community grows — v2.0.0 is live.",
    tags: ["Philippines 🇵🇭", "Scalable", "v2.0.0"],
    feature: "🌏 Nationwide",
  },
  {
    img: "/images/mockup/kumpunigo-qr.png",
    title: "Try It Now",
    subtitle: "Scan or visit directly",
    desc: "Live on Vercel — scan the QR or visit the URL to try KumpuniGo! on mobile right now.",
    tags: ["Live", "Vercel", "Mobile PWA"],
    feature: "📱 QR Ready",
  },
];

// ── T&J Motorshop slides ─────────────────────────────────────────────────────
const tnjSlides = [
  {
    img: "/images/mockup/tnj/tnj-1.jpg",
    title: "T&J Motorcycle Shop",
    subtitle: "Inventory & Sales Management System",
    desc: "T&J Motorcycle Shop is an inventory and sales management system built specifically for motorcycle parts and repair shops. Deployed on Vercel and powered by a Turso cloud database — accessible from any device, no installation required.",
    tags: ["Next.js", "TypeScript", "Turso/SQLite", "Recharts"],
    feature: "🏍️ Overview",
  },
  {
    img: "/images/mockup/tnj/tnj-2.jpg",
    title: "Inventory Management",
    subtitle: "Low-stock sorted & highlighted",
    desc: "Track all motorcycle parts and accessories. Products are sorted by low-stock first, with row highlights and a floating panel architecture for category and supplier forms — no layout conflicts.",
    tags: ["FloatingPanel", "Row Highlights", "SKU", "CRUD"],
    feature: "📦 Inventory",
  },
  {
    img: "/images/mockup/tnj/tnj-3.jpg",
    title: "Business Intelligence",
    subtitle: "Revenue dashboards & KPI summaries",
    desc: "Comprehensive snapshot of shop performance — today/month/year revenue, inventory value, low stock count, avg daily sales, a 7-day revenue bar chart, and a Top Products ranking list.",
    tags: ["Recharts", "KPI Cards", "Top Products", "Reports"],
    feature: "📊 Analytics",
  },
  {
    img: "/images/mockup/tnj/tnj-4.jpg",
    title: "Point of Sale",
    subtitle: "Quick sales with barcode scanner",
    desc: "Fast sales transactions powered by the browser's native BarcodeDetector API — scan a product barcode to add it instantly. Includes customer tracking, multiple payment methods, discount fields, and receipt generation.",
    tags: ["BarcodeDetector API", "Receipt", "Multi-Payment", "Customer Tracking"],
    feature: "🛒 POS",
  },
  {
    img: "/images/mockup/tnj/tnj-5.jpg",
    title: "Low Stock Alerts",
    subtitle: "Automatic reorder notifications",
    desc: "An amber alert banner appears on the dashboard the moment a product drops below its reorder level. The inventory list is sorted by stock urgency so critical items are always at the top.",
    tags: ["Real-time Alerts", "Reorder Level", "Stock Sort", "Dashboard"],
    feature: "⚠️ Alerts",
  },
  {
    img: "/images/mockup/tnj/tnj-6.jpg",
    title: "Transaction History",
    subtitle: "Complete transaction records",
    desc: "Full transaction log with date-range filtering, receipt number search, and a detailed receipt viewer — showing item name, SKU, quantity, unit price, and total due. Clear audit trail for the shop owner.",
    tags: ["Receipt Viewer", "Date Filter", "Sales History", "PDF Export"],
    feature: "📋 History",
  },
  {
    img: "/images/mockup/tnj/tnj-7.jpg",
    title: "Categories & Suppliers",
    subtitle: "Floating panel architecture",
    desc: "Organize products by category and manage suppliers. Fixed-position FloatingPanel overlay (z-[200]) prevents grid layout conflicts.",
    tags: ["FloatingPanel", "z-[200]", "Category CRUD", "Supplier CRUD"],
    feature: "🏷️ Management",
  },
  {
    img: "/images/mockup/tnj/tnj-8.jpg",
    title: "Dark / Light Mode",
    subtitle: "Theme toggle with auto-save",
    desc: "Switch between dark and light themes at any time — the preference is persisted automatically so the shop always opens in the last-used theme.",
    tags: ["Dark Mode", "Light Mode", "Theme Toggle", "CSS Variables"],
    feature: "🌙 Theme",
  },
  {
    img: "/images/mockup/tnj/tnj-9.png",
    title: "Dual Access Portal",
    subtitle: "Separate Admin & User logins",
    desc: "Two password-protected entry points — the full Admin system for inventory and reporting, and a simplified User Sales Portal for counter staff. Both are mobile-optimized and accessible via Vercel.",
    tags: ["Admin Portal", "User Portal", "Password Lock", "Mobile First"],
    feature: "📱 Access",
  },
  {
    img: "/images/mockup/tnj/tnj-10.png",
    title: "About the App",
    subtitle: "Tech stack, developer & version info",
    desc: "Built with Next.js, TypeScript, Tailwind CSS, Turso/SQLite, Recharts, and deployed on Vercel. Developed and designed by John Lerry V. Teodoro. Version 1.0.0 — May 2026.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Turso/SQLite", "Vercel"],
    feature: "🔖 About",
  },
];

// ── Other / smaller projects ─────────────────────────────────────────────────
// NOTE: "Laravel Auth System" has been intentionally removed per the
//       developer's request. Only active/public projects are listed here.
const otherProjects = [
  {
    emoji: "🗺️",
    title: "Lubao Community Share Hub",
    desc: "Community mapping platform using OpenStreetMap & Supabase. Contributors can add/update shops with OSM pinning, Google Maps cross-verification, photo evidence upload, contributor history, and an admin review dashboard.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenStreetMap", "Vercel"],
    date: "2026 — Coming Soon",
    badge: "🚀 Deploying",
    badgeColor: "#06b6d4",
    url: null,
  },
];

// ── Corner accent marks ───────────────────────────────────────────────────────
// Small L-shaped brackets at each corner that visually reinforce the frame.
type CP = "tl" | "tr" | "bl" | "br";
function CornerMark({ pos, color }: { pos: CP; color: string }) {
  const SIZE = 12;
  const THICK = 2;
  const isTop  = pos === "tl" || pos === "tr";
  const isLeft = pos === "tl" || pos === "bl";
  const style: React.CSSProperties = {
    position: "absolute",
    width: SIZE, height: SIZE,
    zIndex: 20,
    ...(isTop  ? { top: 4 }    : { bottom: 4 }),
    ...(isLeft ? { left: 4 }   : { right: 4 }),
    borderTop:    isTop  ? `${THICK}px solid ${color}` : "none",
    borderBottom: !isTop ? `${THICK}px solid ${color}` : "none",
    borderLeft:   isLeft ? `${THICK}px solid ${color}` : "none",
    borderRight:  !isLeft ? `${THICK}px solid ${color}` : "none",
  };
  return <div style={style} aria-hidden />;
}

// ── Slide viewer (shared between both featured projects) ─────────────────────
function SlideViewer({
  slides,
  active,
  setActive,
  accentColor,
  cta,
}: {
  slides: typeof kumpuniSlides;
  active: number;
  setActive: (i: number) => void;
  accentColor: string;
  cta: { label: string; url: string };
}) {
  return (
    <div>
      {/*
        ┌─────────────────────────────────────────────────────────────────────┐
        │ Layout strategy                                                      │
        │  • Mobile (portrait): single column — image stacks above text.      │
        │  • Tablet/desktop:    two columns side-by-side (md:grid-cols-2).    │
        │                                                                      │
        │ The `minHeight: 360` on the grid has been REMOVED because it        │
        │ conflicts with the aspect-ratio approach below and causes clipping   │
        │ on narrow portrait screens.                                          │
        └─────────────────────────────────────────────────────────────────────┘
      */}
      <div className="grid md:grid-cols-2 gap-0">

        {/* ── Image frame ──────────────────────────────────────────────────
            Design decisions:
            1. aspectRatio "16/10" on mobile / "4/3" equivalent via padding
               — gives the container a FIXED height proportional to its
               width, so it NEVER overflows or clips on any screen size.
            2. objectFit: "contain" — the full image is always visible.
               Dark background fills any letterbox areas cleanly.
            3. A gradient-border wrapper (padding trick) + corner accents
               give the "floating frame" visual.
            4. position:relative on the outer shell + position:absolute
               fill on the inner shell means Next.js <Image fill> works
               correctly inside a sized parent.
        ──────────────────────────────────────────────────────────────────── */}
        <div
          style={{
            /* Gradient border via padding — acts as the visible frame */
            padding: "3px",
            background: `linear-gradient(135deg, ${accentColor}cc, ${accentColor}55, ${accentColor}cc)`,
            borderRadius: "0px",          /* flush with card corners */
            boxShadow: `0 0 32px ${accentColor}22, inset 0 0 0 1px ${accentColor}18`,
          }}
        >
          {/*
            Inner shell — this is the SIZED parent Next.js needs.
            • aspectRatio drives the height from the width automatically.
            • overflow:hidden clips the cross-fade layers to the frame.
            • No minHeight here — aspect ratio handles it on every viewport.
          */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              /*
                56.25% = 16:9 on tiny phones (compact but not squashed).
                On md+ the grid splits so the column is naturally taller —
                the aspect ratio still keeps it proportional.
                Adjust to "75%" (4:3) or "100%" (1:1) to taste.
              */
              aspectRatio: "16 / 9",
              background: "#060f1e",
            }}
          >
            {/* Cross-fade slide layers */}
            {slides.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: active === i ? 1 : 0,
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    /*
                      KEY FIX: "contain" shows the ENTIRE image.
                      "cover" (the old value) zoomed and cropped it.
                      The dark background above handles letterbox gaps.
                    */
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            ))}

            {/* Slide counter badge */}
            <div
              className="absolute bottom-3 left-3 font-mono text-xs px-2 py-1 rounded-lg z-10"
              style={{
                background: "rgba(2,12,27,0.85)",
                border: `1px solid ${accentColor}55`,
                color: accentColor,
                backdropFilter: "blur(6px)",
              }}
            >
              {active + 1} / {slides.length}
            </div>

            {/* Corner accent marks reinforce the rectangular frame */}
            {(["tl","tr","bl","br"] as const).map((c) => (
              <CornerMark key={c} pos={c} color={accentColor} />
            ))}
          </div>
        </div>

        {/* Slide info panel */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span
              className="inline-block mb-4 text-xs font-mono px-3 py-1 rounded-full"
              style={{
                background: `${accentColor}20`,
                border: `1px solid ${accentColor}40`,
                color: accentColor,
              }}
            >
              {slides[active].feature}
            </span>

            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Sora',sans-serif" }}
            >
              {slides[active].title}
            </h3>

            <p className="text-sm mb-4" style={{ color: accentColor }}>
              {slides[active].subtitle}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {slides[active].desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {slides[active].tags.map((t) => (
                <span
                  key={t}
                  className={
                    accentColor === "#06b6d4" || accentColor === "#0d9488"
                      ? "tag-teal"
                      : "tag"
                  }
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            {/* Dot navigation */}
            <div className="flex gap-2 flex-wrap mb-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? 22 : 7,
                    height: 7,
                    borderRadius: 99,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    background:
                      active === i ? accentColor : `${accentColor}30`,
                  }}
                />
              ))}
            </div>

            {/* CTA + Prev / Next */}
            <div className="flex flex-wrap gap-2">
              {/* View Live */}
              <a
                href={cta.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  accentColor === "#0d9488" ? "btn btn-teal" : "btn btn-primary"
                }
                style={{ fontSize: "0.78rem", padding: "0.55rem 1.3rem" }}
              >
                {cta.label} →
              </a>

              {/* Prev */}
              <button
                onClick={() =>
                  setActive((active - 1 + slides.length) % slides.length)
                }
                className={
                  accentColor === "#0d9488"
                    ? "btn btn-ghost-teal"
                    : "btn btn-ghost"
                }
                style={{ fontSize: "0.78rem", padding: "0.55rem 1.1rem" }}
                aria-label="Previous slide"
              >
                ← Prev
              </button>

              {/* Next */}
              <button
                onClick={() => setActive((active + 1) % slides.length)}
                className={
                  accentColor === "#0d9488"
                    ? "btn btn-ghost-teal"
                    : "btn btn-ghost"
                }
                style={{ fontSize: "0.78rem", padding: "0.55rem 1.1rem" }}
                aria-label="Next slide"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div
        className="flex gap-2 px-4 sm:px-6 py-4 overflow-x-auto"
        style={{
          borderTop: "1px solid rgba(37,99,235,0.1)",
          background: "rgba(2,12,27,0.5)",
        }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            title={s.title}
            style={{
              flexShrink: 0,
              width: 60,
              height: 40,
              borderRadius: 7,
              overflow: "hidden",
              border: `2px solid ${active === i ? accentColor : `${accentColor}25`}`,
              position: "relative",
              cursor: "pointer",
              transition: "border-color 0.2s",
              background: "#060f1e",
            }}
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Projects() {
  const [kActive, setKActive] = useState(0);
  const [tActive, setTActive] = useState(0);

  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "rgba(10,22,40,0.4)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-14">
          <p className="slabel mb-4">03. Projects</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Sora',sans-serif" }}
          >
            What I&apos;ve Built
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base">
            Real applications, deployed and used — not just demos.
          </p>
          <div className="section-divider mt-3" />
        </div>

        {/* ── Featured: KumpuniGo ── */}
        <div className="card p-0 overflow-hidden mb-10" style={{ borderRadius: 20 }}>
          <div
            className="px-5 sm:px-6 py-3 flex flex-wrap items-center gap-2"
            style={{
              background: "rgba(37,99,235,0.08)",
              borderBottom: "1px solid rgba(37,99,235,0.12)",
            }}
          >
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              ⭐ Featured Project
            </span>
            <span
              className="ml-auto text-xs font-mono px-2 py-1 rounded-full"
              style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa" }}
            >
              v2.0.0 · Live on Vercel
            </span>
          </div>
          <SlideViewer
            slides={kumpuniSlides}
            active={kActive}
            setActive={setKActive}
            accentColor="#2563eb"
            cta={{ label: "View Live", url: "https://kumpuni-go.vercel.app/" }}
          />
        </div>

        {/* ── Featured: T&J Motorshop ── */}
        <div
          className="card-teal p-0 overflow-hidden mb-10"
          style={{ borderRadius: 20 }}
        >
          <div
            className="px-5 sm:px-6 py-3 flex flex-wrap items-center gap-2"
            style={{
              background: "rgba(13,148,136,0.08)",
              borderBottom: "1px solid rgba(13,148,136,0.15)",
            }}
          >
            <span
              className="text-xs font-mono uppercase tracking-widest"
              style={{ color: "#2dd4bf" }}
            >
              🔧 T&amp;J Motorshop — Inventory &amp; POS System
            </span>
            <span
              className="ml-auto text-xs font-mono px-2 py-1 rounded-full"
              style={{ background: "rgba(13,148,136,0.15)", color: "#5eead4" }}
            >
              v1.0.0 · Live on Vercel
            </span>
          </div>
          <SlideViewer
            slides={tnjSlides}
            active={tActive}
            setActive={setTActive}
            accentColor="#0d9488"
            cta={{ label: "View Live", url: "https://tnj-motorshop.vercel.app" }}
          />
        </div>

        {/* ── Other Projects ── */}
        <h3 className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-5">
          Other Projects
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map((p) => (
            <div key={p.title} className="card p-5 sm:p-6 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{p.emoji}</span>
                {p.badge && (
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-full"
                    style={{
                      background: `${p.badgeColor}20`,
                      color: p.badgeColor,
                      border: `1px solid ${p.badgeColor}40`,
                    }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>

              <h4
                className="text-white font-semibold mb-2 text-sm sm:text-base"
                style={{ fontFamily: "'Sora',sans-serif" }}
              >
                {p.title}
              </h4>

              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600 font-mono">{p.date}</span>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:text-blue-300 font-mono transition-colors"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* More coming soon placeholder */}
          <div
            className="card p-6 flex flex-col items-center justify-center text-center"
            style={{ minHeight: 160, borderStyle: "dashed" }}
          >
            <div className="text-3xl mb-3">🚧</div>
            <div className="text-slate-500 text-sm">More projects coming soon…</div>
          </div>
        </div>
      </div>
    </section>
  );
}
