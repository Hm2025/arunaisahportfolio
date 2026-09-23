"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";

/* ============================================================
   Isah Aruna — Portfolio Site (Updated)
   Tech: Next.js + Tailwind CSS
   ============================================================ */

/* ─── Icons (inline SVGs to keep file self-contained) ─── */
const Icons = {
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  arrowRight: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  ),
  external: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
  ),
  briefcase: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
  ),
  mapPin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
};

/* ─── Data ─── */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "12+", label: "Live Projects" },
  { value: "3", label: "Continents" },
];

const CLIENTS = [
  "Cluebox Nigeria", "DSTRCT Group", "Twitwi Ltd", "IPI Solutions",
  "Craftechnologies", "Bradama", "Rampart", "CISSI Group",
  "Parametric GC", "The Granton Hotel", "Turtle & Bloom", "MyTwitwi",
];

const SKILLS = [
  {
    category: "WordPress Page Builders",
    items: ["Elementor", "Bricks Builder", "Divi"],
  },
  {
    category: "Landing Pages & Conversion Design",
    items: ["Figma-to-WordPress", "A/B Testing", "CRO", "Lead Gen"],
  },
  {
    category: "SEO & Performance",
    items: ["On-Page SEO", "Core Web Vitals", "Local SEO", "Google Business Profile"],
  },
  {
    category: "Integrations",
    items: ["REST APIs", "Webhooks", "CRM / Marketing Tool Integrations", "Google Analytics"],
  },
  {
    category: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Hosting & Security",
    items: ["VPS", "DNS / MX", "SSL / TLS", "Cloudflare"],
  },
  {
    category: "Collaboration",
    items: ["Slack", "Notion", "Gmail Workspace", "Discord"],
  },
];

const SERVICES = [
  {
    title: "Custom WordPress Website Design",
    desc: "Figma-to-WordPress builds using Elementor, Bricks, and Divi — pixel-perfect, fully responsive across all devices.",
  },
  {
    title: "Landing Pages That Convert",
    desc: "High-converting landing pages built for lead generation, product launches, and paid traffic campaigns.",
  },
  {
    title: "WooCommerce Store Builds",
    desc: "Product setup, shipping rules, payment gateways, order flow — everything you need to start selling online.",
  },
  {
    title: "Site Speed & Core Web Vitals",
    desc: "Performance audits, caching, image optimization, and SEO fundamentals to rank higher and load faster.",
  },
  {
    title: "Hosting, Security & Maintenance",
    desc: "VPS setup, DNS/MX configuration, SSL/TLS, Cloudflare CDN, and ongoing site care packages.",
  },
  {
    title: "API & Third-Party Integrations",
    desc: "CRMs, payment gateways, analytics, marketing automation — seamlessly connected via REST APIs & webhooks.",
  },
];

const FEATURED_PROJECT = {
  name: "DSTRCT Group",
  tagline: "Enterprise WordPress Web Presence — Netherlands",
  challenge:
    "International client needed a fast, on-brand WordPress site launched from a Figma handoff with no existing dev infrastructure. Tight deadline and high design fidelity requirements.",
  solution:
    "Custom WordPress theme build, CRM + REST API integration, WooCommerce setup, full hosting/DNS/SSL configuration. Delivered pixel-perfect Figma-to-WordPress translation.",
  stats: [
    { value: "40%", label: "Page Load Time Cut" },
    { value: "100%", label: "Mobile Responsiveness" },
    { value: "3", label: "Weeks to Launch" },
    { value: "A+", label: "GTmetrix Grade" },
  ],
};

const PROJECTS = [
  { name: "mytwitwi.com", desc: "Marketplace ecosystem", url: "https://mytwitwi.com", image: "/mytwitwi.png", tags: ["Marketplace","Security","AI"] },
  { name: "dstrctgroup.com", desc: "Enterprise WordPress web presence", url: "https://dstrctgroup.com", image: "/dstrsct.png", tags: ["WordPress","Agency"] },
  { name: "wearecluebox.com", desc: "High-speed React/WordPress theme platform", url: "https://wearecluebox.com", image: "/cluebox.png", tags: ["WordPress","React.js","Hosting"] },
  { name: "turtleandbloom.com", desc: "Global WooCommerce store", url: "https://turtleandbloom.com", image: "/turtleandbloom.png", tags: ["WooCommerce","Ecommerce"] },
  { name: "thegrantonhotel.com", desc: "Full-stack WordPress booking site", url: "https://thegrantonhotel.com", image: "/thegranton hoel.png", tags: ["Booking","WordPress"] },
  { name: "cissigroup.com", desc: "Consulting/finance corporate site (Elementor)", url: "https://cissigroup.com", image: "/cissi.png", tags: ["Elementor","Corporate"] },
  { name: "bradama.com", desc: "Engineering/industrial services site (WordPress)", url: "https://bradama.com", image: "/bradama.png", tags: ["WordPress","Engineering"] },
  { name: "rampart.ng", desc: "Civil engineering & construction site (Elementor)", url: "https://rampart.ng", image: "/ramparts.png", tags: ["Elementor","Construction"] },
  { name: "parametric-gules.vercel.app", desc: "Strategic advisory/consulting firm site", url: "https://parametric-gules.vercel.app/", image: "/parametrics.png", tags: ["Consulting"] },
  { name: "kiddualove.com", desc: "Islamic children’s education brand (React)", url: "https://kiddualove.com", image: "/kidsdua.png", tags: ["React","Education"] },
  { name: "tilecraft.ng", desc: "Tile and stone installation company website", url: "https://tilecraft.ng/", image: "/tilecrafe.png", tags: ["Construction","WordPress"] },
];

const LOCAL_SEO_PROJECTS = [
  { name: "sulummaglobalmedical.com", url: "https://sulummaglobalmedical.com" },
  { name: "tilecraft.ng", desc: "Tile and stone installation company website", url: "https://tilecraft.ng/", image: "/tilecraft.png", tags: ["Construction","WordPress"] },
  { name: "jemsbeautysalon.ng", url: "https://jemsbeautysalon.ng" },
  { name: "wearecluebox.com", url: "https://wearecluebox.com" },
  { name: "elijaahie.wearecluebox.com", url: "https://elijaahie.wearecluebox.com" },
];

const EXPERIENCE = [
  {
    title: "Web Developer, WordPress Developer & IT Support",
    company: "Cluebox Nigeria",
    location: "Nigeria",
    period: "2024 – Present",
    current: true,
  },
  {
    title: "Web Developer & WordPress Developer",
    company: "DSTRCT Group",
    location: "Netherlands · Remote",
    period: "2024 – 2025",
    current: false,
  },
  {
    title: "Technical Project Manager & Security Engineer",
    company: "Twitwi Ltd",
    location: "UK · Remote",
    period: "2025 – Present",
    current: true,
  },
  {
    title: "Cloud & DevOps Engineer",
    company: "IPI Solutions",
    location: "Nigeria",
    period: "2023 – 2025",
    current: false,
  },
  {
    title: "Web Developer & IT Support Intern",
    company: "Craftechnologies Limited",
    location: "Nigeria",
    period: "2022 – 2023",
    current: false,
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Discovery & Design Review",
    desc: "Review Figma files, brand requirements, and project scope. Align on goals, target audience, and technical requirements before writing a single line of code.",
  },
  {
    step: "02",
    title: "Build & Customize",
    desc: "Elementor/Bricks/Divi build or custom theme development. Pixel-perfect translation from design to functional website with clean, maintainable code.",
  },
  {
    step: "03",
    title: "Responsive QA",
    desc: "Cross-device and cross-browser testing. Ensuring flawless experience on mobile, tablet, and desktop — tested down to 375px width.",
  },
  {
    step: "04",
    title: "Performance & SEO Pass",
    desc: "Core Web Vitals optimization, speed tuning, image compression, caching setup, and on-page SEO fundamentals for maximum visibility.",
  },
  {
    step: "05",
    title: "Launch & Support",
    desc: "Hosting setup, DNS configuration, SSL/TLS deployment, and post-launch maintenance. Ongoing support to keep your site secure and up-to-date.",
  },
];

const CERTS = [
  "Google Cloud Cybersecurity",
  "Google Cybersecurity Professional",
  "IBM DevOps Engineering",
  "Ethical Hacking Essentials",
  "Agentic AI & Prompt Engineering",
];

/* ─── Components ─── */

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = parseInt(target.replace(/\D/g, ""), 10);
  const hasPlus = target.includes("+");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numeric));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [numeric]);

  return (
    <span ref={ref}>
      {count}
      {hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
        {title.split("  ").map((part, i) => (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {part}
          </React.Fragment>
        ))}
      </h2>
    </div>
  );
}

/* ─── Main Page ─── */
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Isah Aruna — WordPress Developer | Elementor, Bricks Builder & Divi | Front-End Developer</title>
        <meta name="description" content="5+ years building WordPress sites with Elementor, Bricks Builder, and Divi. Figma-to-pixel-perfect responsive pages, landing pages optimized for conversions, SEO & Core Web Vitals." />
      </Head>

      {/* ====== NAVIGATION ====== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-lg tracking-tight">
            Isah Aruna
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? Icons.close : Icons.menu}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-emerald-400 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center bg-emerald-500 text-black font-semibold px-4 py-3 rounded-full"
            >
              Hire Me
            </a>
          </div>
        )}
      </header>

      <main className="bg-[#0a0a0a] text-gray-300">
        {/* ====== HERO ====== */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* subtle gradient orb */}
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-emerald-400 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new projects
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                WordPress Developer{" "}
                <span className="text-emerald-400">|</span> Elementor, Bricks Builder &amp; Divi{" "}
                <span className="text-emerald-400">|</span> Front-End Developer
              </h1>

              <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                5+ years building fast, responsive WordPress websites — from Figma to production — for clients across Nigeria, the UK, and Europe. Specialized in Elementor, Bricks Builder, Divi, WooCommerce, and React.js.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-all"
                >
                  View My Work {Icons.arrowRight}
                </a>
                <a
                  href="https://drive.google.com/file/d/1jxnndbJ3L6uwsCtw1agVX8hn5wzlYxZe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-medium px-6 py-3 rounded-full transition-all"
                >
                  Download CV
                </a>
                <a
                  href="https://wa.me/2348137337937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/10 hover:border-emerald-500/50 text-emerald-400 font-medium px-6 py-3 rounded-full transition-all"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    <AnimatedCounter target={s.value} />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== PIPELINE ====== */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
              <SectionHeading eyebrow="Process" title="Website Build Pipeline" />
              <span className="text-emerald-400 text-sm font-mono animate-pulse">Processing...</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { label: "Figma Design Received", status: "done" },
                { label: "Elementor/Bricks Build", status: "active" },
                { label: "Responsive QA", status: "pending" },
                { label: "Core Web Vitals Optimized", status: "pending" },
                { label: "Site Deployed", status: "pending" },
              ].map((stage, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl border p-5 ${
                    stage.status === "done"
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : stage.status === "active"
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {stage.status === "done" && (
                      <span className="text-emerald-400">{Icons.check}</span>
                    )}
                    {stage.status === "active" && (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                      </span>
                    )}
                    {stage.status === "pending" && (
                      <span className="h-2.5 w-2.5 rounded-full border border-white/20" />
                    )}
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        stage.status === "done"
                          ? "text-emerald-400"
                          : stage.status === "active"
                          ? "text-amber-400"
                          : "text-gray-600"
                      }`}
                    >
                      {stage.status === "done" ? "Done" : stage.status === "active" ? "In Progress" : "Pending"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">{stage.label}</p>
                  {i < 4 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-gray-700">
                      {Icons.arrowRight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CLIENTS MARQUEE ====== */}
        <section className="py-12 border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <span className="text-sm text-gray-500 uppercase tracking-widest">Trusted By / Worked With</span>
          </div>
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <span key={i} className="mx-8 text-lg md:text-xl text-gray-500 font-medium">
                  {client}
                  <span className="mx-8 text-emerald-500/40">•</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ====== SKILLS ====== */}
        <section id="skills" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="Expertise" title="What I Bring to the Table" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILLS.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors group"
                >
                  <h3 className="text-white font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-white/5 border border-white/5 text-gray-400 px-3 py-1.5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== SERVICES ====== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="Services" title="Solutions I Build" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                >
                  <div className="text-emerald-400 text-sm font-mono mb-4">0{i + 1}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{svc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== FEATURED PROJECT ====== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-widest">Featured Case Study</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">{FEATURED_PROJECT.name}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <p className="text-emerald-400 font-medium mb-2">{FEATURED_PROJECT.tagline}</p>
                  <h3 className="text-xl font-semibold text-white mb-3">Business Challenge</h3>
                  <p className="text-gray-400 leading-relaxed">{FEATURED_PROJECT.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Developed Solution</h3>
                  <p className="text-gray-400 leading-relaxed">{FEATURED_PROJECT.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {FEATURED_PROJECT.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-emerald-400 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== ALL PROJECTS ====== */}
        <section id="projects" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="Portfolio" title="Selected Projects" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJECTS.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-emerald-500/20 hover:ring-2 hover:ring-emerald-500/10 transition-all shadow-sm"
                >
                  {project.image && (
                    <div className="w-full aspect-[16/9] relative bg-black rounded-t-3xl overflow-hidden">
                      <Image src={project.image} alt={project.name} fill className="object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      <div className="absolute inset-0 pointer-events-none">
                        <span className="absolute right-4 top-4 text-gray-200/90 pointer-events-none">
                          {Icons.external}
                        </span>

                        <div className="absolute left-4 right-4 bottom-4 text-left">
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-2 py-0.5 rounded-full pointer-events-auto">
                              <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                              <span>LIVE</span>
                            </span>
                          </div>
                          <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 group-hover:text-emerald-400 transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-sm text-gray-300 mt-1 max-w-[90%]">{project.desc}</p>

                          {project.tags && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {project.tags.map((t) => (
                                <span key={t} className="text-xs text-cyan-300 border border-cyan-700/30 px-2.5 py-0.5 rounded-full bg-transparent">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {!project.image && (
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                          {project.name}
                        </h3>
                        <span className="text-gray-600 group-hover:text-emerald-400 transition-colors">
                          {Icons.external}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{project.desc}</p>
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* Local SEO Subsection */}
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px flex-1 bg-white/5" />
                <span className="text-sm text-gray-500 uppercase tracking-widest">Local SEO & Google Business Profile</span>
                <span className="h-px flex-1 bg-white/5" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {LOCAL_SEO_PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all"
                  >
                    <div>
                      <span className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </span>
                      <span className="block text-xs text-gray-600 mt-0.5">Local SEO & Google Business Profile optimization</span>
                    </div>
                    <span className="text-gray-600 group-hover:text-emerald-400 transition-colors">
                      {Icons.external}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== EXPERIENCE TIMELINE ====== */}
        <section id="experience" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="Career" title="Work History" />

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

              <div className="space-y-12">
                {EXPERIENCE.map((job, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-start md:items-center gap-6 md:gap-12`}
                  >
                    {/* dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-emerald-500 bg-[#0a0a0a] z-10" />

                    {/* card */}
                    <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          {job.current && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                              </span>
                              Current
                            </span>
                          )}
                          <span className="text-xs text-gray-500 font-mono">{job.period}</span>
                        </div>
                        <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                        <p className="text-emerald-400 text-sm mt-1">{job.company}</p>
                        <p className="text-gray-500 text-xs mt-1">{job.location}</p>
                      </div>
                    </div>

                    {/* spacer for the other side */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====== WORKFLOW ====== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="Process" title="How I Work" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {WORKFLOW.map((w) => (
                <div
                  key={w.step}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition-colors"
                >
                  <span className="text-4xl font-bold text-white/5">{w.step}</span>
                  <h3 className="text-white font-semibold mt-4 mb-3">{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== ABOUT ====== */}
        <section id="about" className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading eyebrow="The Engineer" title="Meet the Developer  Behind the Solutions" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
                  <Image
                    src="/profile.jpg"
                    alt="Isah Aruna"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* decorative glow */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hi, I&apos;m <strong className="text-white">Isah Aruna</strong>. WordPress Developer with 5+ years turning Figma designs into fast, responsive, production-ready sites for clients across Nigeria, the UK, and the Netherlands.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I use <strong className="text-white">Elementor daily</strong>, alongside Bricks Builder and Divi, to convert Figma mockups into pixel-perfect, fully responsive pages — and build custom themes and plugins with ACF/Gutenberg and clean PHP where a page builder isn&apos;t enough. I specialize in conversion-optimized landing pages, WooCommerce builds, and on-page/technical SEO including Core Web Vitals, managing multiple concurrent client projects to deadline.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Beyond the front end, I integrate tracking, payment gateways, and marketing automation via webhooks, REST APIs, and CRM connections, and manage the hosting, DNS, and CDN side that keeps sites fast and secure. I collaborate daily with international remote teams using <strong className="text-white">Slack, Notion, Google Workspace, and Discord</strong>.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My front-end skills in React.js and JavaScript, backed by security knowledge from my Google Cloud Cybersecurity certification, round out every build. I don&apos;t just build websites — I build digital assets that perform.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Based in Abuja, Nigeria — open to remote and on-site work.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {["WordPress Expert", "WooCommerce Builds", "Performance Optimization", "React.js Front-Ends", "Security Hardening"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CERTIFICATIONS ====== */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-sm text-gray-500 uppercase tracking-widest">Certifications</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {CERTS.map((cert) => (
                <span
                  key={cert}
                  className="text-sm bg-white/5 border border-white/5 text-gray-300 px-4 py-2 rounded-full hover:border-emerald-500/30 hover:text-emerald-400 transition-colors"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ====== CTA ====== */}
        <section id="contact" className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-emerald-400">Amazing</span> Together.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Ready to transform your online presence? I&apos;m currently accepting new projects. Let&apos;s discuss how I can help you build a fast, beautiful, high-converting website.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="https://wa.me/2348137337937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-full transition-all"
              >
                WhatsApp Me
              </a>
              <a
                href="mailto:arunaisah47@gmail.com"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-medium px-8 py-4 rounded-full transition-all"
              >
                {Icons.mail} arunaisah47@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ====== FOOTER ====== */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Isah Aruna</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                WordPress Developer specializing in Elementor, Bricks Builder, and Divi. Building fast, high-converting websites for clients worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:arunaisah47@gmail.com" className="text-gray-400 hover:text-emerald-400 text-sm flex items-center gap-2 transition-colors">
                    {Icons.mail} arunaisah47@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2348137337937" className="text-gray-400 hover:text-emerald-400 text-sm flex items-center gap-2 transition-colors">
                    {Icons.phone} +234 813 733 7937
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-center gap-2">
                  {Icons.mapPin} Abuja, Nigeria — Open to remote & relocation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://linkedin.com/in/arunaisah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 text-sm flex items-center gap-2 transition-colors">
                    {Icons.linkedin} linkedin.com/in/arunaisah
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hm2025" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 text-sm flex items-center gap-2 transition-colors">
                    {Icons.github} github.com/Hm2025
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Isah Aruna. All rights reserved.
            </p>
            <p className="text-gray-700 text-xs">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Marquee animation keyframes injected via style tag */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
}
