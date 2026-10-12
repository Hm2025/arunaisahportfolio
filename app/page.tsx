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
    category: "Store Management",
    items: ["WooCommerce", "Product Uploads", "Inventory", "Order Processing", "Payment Gateways"],
  },
  {
    category: "Maintenance & Support",
    items: ["Bug Fixes", "Plugin & Theme Updates", "Backups", "Troubleshooting"],
  },
  {
    category: "Speed & Performance",
    items: ["Core Web Vitals", "Caching", "Image Optimization", "Cloudflare CDN"],
  },
  {
    category: "Design Updates",
    items: ["Elementor", "Bricks Builder", "Divi", "Banners & Layouts", "Figma-to-WordPress"],
  },
  {
    category: "Integrations",
    items: ["REST APIs", "Webhooks", "CRM / Marketing Tools", "Google Analytics"],
  },
  {
    category: "Hosting & Security",
    items: ["VPS", "DNS / MX", "SSL / TLS", "Cloudflare", "Firebase (Auth, Firestore, Hosting) · GitHub CI/CD"],
  },
  {
    category: "Team & Launches",
    items: ["Slack", "Notion", "Gmail Workspace", "Discord", "Launch Coordination"],
  },
];

const SERVICES = [
  {
    title: "Store & Product Management",
    desc: "Adding products, managing inventory, checking orders, and keeping shipping rules and payment gateways working so your store keeps selling.",
  },
  {
    title: "Maintenance & Support",
    desc: "Plugin and theme updates, backups, bug fixes, and minor issues handled quickly, before customers notice them.",
  },
  {
    title: "Design & Content Updates",
    desc: "Banners, layouts, and product pages refreshed in Elementor, Bricks, or Divi, matched to your designs and fully responsive.",
  },
  {
    title: "Site Speed & Core Web Vitals",
    desc: "Performance audits, caching, image optimization, and Cloudflare CDN for faster pages and a smoother checkout.",
  },
  {
    title: "Launch Coordination",
    desc: "Working with your team to get new collections, promos, and campaigns live on schedule, with QA before go-live.",
  },
  {
    title: "Integrations, Hosting & Security",
    desc: "CRMs, payment gateways, analytics, DNS, SSL, and hosting managed so everything stays connected and secure.",
  },
];

const FEATURED_PROJECT = {
  name: "DSTRCT Group",
  tagline: "Enterprise WooCommerce Store: Launch, Speed & Site Management (Netherlands)",
  challenge:
    "An international client needed a fast, on-brand online store live on a tight deadline, with no existing dev infrastructure. The site had to match the approved designs, work on every device, and be ready to run day to day once it launched.",
  solution:
    "Set up WooCommerce with products, shipping rules, payment gateways, and order flow. Integrated the CRM through REST APIs and configured hosting, DNS, and SSL. Optimized speed and Core Web Vitals, and matched the Figma designs closely, so the team could manage the store with confidence after launch.",
  stats: [
    { value: "40%", label: "Page Load Time Cut" },
    { value: "100%", label: "Mobile Responsiveness" },
    { value: "3", label: "Weeks to Launch" },
    { value: "A+", label: "GTmetrix Grade" },
  ],
};

const PROJECTS = [
  { name: "turtleandbloom.com", desc: "Global WooCommerce store: products, payments, orders, speed", url: "https://turtleandbloom.com", image: "/turtleandbloom.png", tags: ["WooCommerce","E-commerce","Store Management"] },
  { name: "mytwitwi.com", desc: "Live UK marketplace platform with automated workflows", url: "https://mytwitwi.com", image: "/mytwitwi.png", tags: ["Marketplace","Automation","Maintenance"] },
  { name: "thegrantonhotel.com", desc: "Full-stack WordPress booking site", url: "https://thegrantonhotel.com", image: "/thegranton hoel.png", tags: ["Booking","WordPress","Maintenance"] },
  { name: "wearecluebox.com", desc: "High-speed React/WordPress platform", url: "https://wearecluebox.com", image: "/cluebox.png", tags: ["WordPress","React.js","Hosting"] },
  { name: "dstrctgroup.com", desc: "Enterprise WordPress site (case study above)", url: "https://dstrctgroup.com", image: "/dstrsct.png", tags: ["WordPress","Speed","Core Web Vitals"] },
  { name: "cissigroup.com", desc: "Corporate site built in Elementor", url: "https://cissigroup.com", image: "/cissi.png", tags: ["Elementor","Design Updates"] },
];

const MORE_PROJECTS = [
  { name: "bradama.com", desc: "Engineering/industrial services site (WordPress)", url: "https://bradama.com", image: "/bradama.png", tags: ["WordPress","Engineering"] },
  { name: "rampart.ng", desc: "Civil engineering & construction site (Elementor)", url: "https://rampart.ng", image: "/ramparts.png", tags: ["Elementor","Construction"] },
  { name: "parametric-gules.vercel.app", desc: "Strategic advisory/consulting firm site", url: "https://parametric-gules.vercel.app/", image: "/parametrics.png", tags: ["Consulting"] },
  { name: "kiddualove.com", desc: "Islamic children’s education brand (React)", url: "https://kiddualove.com", image: "/kidsdua.png", tags: ["React","Education"] },
  { name: "tilecraft.ng", desc: "Tile and stone installation company website", url: "https://tilecraft.ng/", image: "/tilecrafe.png", tags: ["Construction","WordPress"] },
];

const EXPERIENCE = [
  {
    title: "Web Developer / WordPress Developer & IT Support",
    company: "Cluebox",
    location: "Abuja, Nigeria",
    period: "Mar 2024 – Sep 2026 · Hybrid",
    current: false,
  },
  {
    title: "Web Platform Developer",
    company: "DSTRCT Group",
    location: "Netherlands · Remote",
    period: "06/2024 – 08/2025",
    current: false,
  },
  {
    title: "Technical Project Manager, Security & DevOps Engineer",
    company: "Twitwi Ltd",
    location: "UK · Remote",
    period: "08/2026 – Present",
    description: "Deploying the app through GitHub CI/CD, managing developer access, and administering Firebase (Auth, Firestore, Hosting).",
    current: true,
  },
  {
    title: "Web Developer & DevOps Engineer",
    company: "IPI Group",
    location: "Abuja, Nigeria",
    period: "Apr 2023 – Sep 2025 · Onsite",
    current: false,
  },
  {
    title: "Junior Web Developer & IT Support",
    company: "Craftechnologies Limited",
    location: "Nigeria · Remote (4 days/week)",
    period: "Mar 2022 – Mar 2023",
    current: false,
  },
];

const WORKFLOW = [
  {
    step: "01",
    title: "Review & Prioritize",
    desc: "Check what’s live and what’s pending: new products, orders, open issues, and upcoming launches.",
  },
  {
    step: "02",
    title: "Update & Manage",
    desc: "Add products, update inventory, handle orders, and make design and content changes in Elementor, Bricks, or Divi.",
  },
  {
    step: "03",
    title: "Test & QA",
    desc: "Cross-device and cross-browser checks, checkout testing, tested down to 375px.",
  },
  {
    step: "04",
    title: "Speed & Security",
    desc: "Core Web Vitals, caching, image compression, backups, and plugin and theme updates.",
  },
  {
    step: "05",
    title: "Launch & Report",
    desc: "Coordinate launches with your team, monitor after go-live, and keep everyone updated.",
  },
];

const CERTS = [
  "Google Cloud Cybersecurity",
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
    <div className="mb-8 sm:mb-12 md:mb-16">
      <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">{eyebrow}</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection?.target.id) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-motion]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      sections.forEach((section) => section.classList.add("motion-visible"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("motion-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Isah Aruna — Wordpress Developer | Website Manager | Front-end Developer</title>
        <meta name="description" content="5+ years building WordPress sites with Elementor, Bricks Builder, and Divi. Figma-to-pixel-perfect responsive pages, landing pages optimized for conversions, SEO & Core Web Vitals." />
      </Head>

      {/* ====== NAVIGATION ====== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-lg tracking-tight rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400">
            Isah Aruna
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-5 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                className={`text-sm transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                  activeSection === link.href.slice(1) ? "text-emerald-400" : "text-gray-400 hover:text-emerald-400"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:arunaisah47@gmail.com"
              className="text-sm bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white w-11 h-11 inline-flex items-center justify-center rounded-xl border border-white/10 hover:border-emerald-500/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? Icons.close : Icons.menu}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-4 sm:px-6 pb-6 pt-3 max-h-[calc(100svh-4rem)] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
                className={`block min-h-12 py-3 border-b border-white/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                  activeSection === link.href.slice(1) ? "text-emerald-400" : "text-gray-300 hover:text-emerald-400"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:arunaisah47@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 text-center bg-emerald-500 text-black font-semibold px-4 py-3 rounded-full"
            >
              Hire Me
            </a>
          </nav>
        )}
      </header>

      <main className="bg-[#0a0a0a] text-gray-300">
        {/* ====== HERO ====== */}
        <section data-motion="hero" className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden">
          {/* subtle gradient orb */}
          <div className="absolute top-1/4 -left-40 sm:-left-32 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 -right-24 sm:right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-teal-500/5 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 sm:px-4 py-1.5 text-emerald-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Website Manager roles
              </div>

              <h1 className="text-[2.55rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Website Manager{" "}
                <span className="text-emerald-400">|</span>{" "}
                <span className="text-emerald-400">WordPress &amp; WooCommerce</span> Specialist
              </h1>

              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                I keep online stores running smoothly: adding products, managing inventory, fixing speed issues, updating designs, and making sure orders go through. 5+ years supporting brands across Nigeria, the UK, and Europe.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto min-h-12 inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  View My Work {Icons.arrowRight}
                </a>
                <a
                  href="https://drive.google.com/file/d/1lHMsRvMwVXcqWJ2e-CpxiGxNbO3J-jd_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-12 inline-flex justify-center items-center gap-2 border border-white/10 hover:border-white/30 text-white font-medium px-6 py-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  Download CV
                </a>
                <a
                  href="https://wa.me/2348137337937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-12 inline-flex justify-center items-center gap-2 border border-white/10 hover:border-emerald-500/50 text-emerald-400 font-medium px-6 py-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 border-t border-white/5 pt-8 sm:pt-12">
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
        <section data-motion="slide-left" className="py-16 sm:py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
              <SectionHeading eyebrow="Process" title="Website Management Workflow" />
              <span className="text-emerald-400 text-sm font-mono animate-pulse">Processing...</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                { label: "Products Added & Inventory Synced", status: "done" },
                { label: "Product & Design Updates", status: "active" },
                { label: "Orders Checked & Fulfilled", status: "done" },
                { label: "Speed & Maintenance Updates", status: "pending" },
                { label: "Launch Coordinated with Team", status: "pending" },
              ].map((stage, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl border p-4 sm:p-5 min-h-28 transition-transform duration-300 hover:-translate-y-1 ${
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
        <section data-motion="ticker" className="py-10 sm:py-12 border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-5 sm:mb-6">
            <span className="text-sm text-gray-500 uppercase tracking-widest">Trusted By / Worked With</span>
          </div>
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <span key={i} className="mx-5 sm:mx-8 text-base sm:text-lg md:text-xl text-gray-500 font-medium">
                  {client}
                  <span className="mx-5 sm:mx-8 text-emerald-500/40">•</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ====== SKILLS ====== */}
        <section id="skills" data-motion="scale" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading eyebrow="Expertise" title="What I Handle for Your Store" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SKILLS.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 hover:border-emerald-500/20 hover:bg-white/[0.035] transition-all group"
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
        <section data-motion="slide-right" className="py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading eyebrow="Services" title="Website Management Services" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SERVICES.map((svc, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 hover:bg-white/[0.04] hover:border-emerald-500/20 hover:-translate-y-1 transition-all group"
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
        <section data-motion="blur" className="py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-widest">Featured Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">{FEATURED_PROJECT.name}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-7 sm:space-y-8">
                <div>
                  <p className="text-emerald-400 font-medium mb-2">{FEATURED_PROJECT.tagline}</p>
                  <h3 className="text-xl font-semibold text-white mb-3">Business Challenge</h3>
                  <p className="text-gray-400 leading-relaxed">{FEATURED_PROJECT.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Developed Solution:</h3>
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
        <section id="projects" data-motion="rise" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading eyebrow="Portfolio" title="Live Sites I’ve Built & Maintained" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {PROJECTS.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-emerald-500/20 hover:ring-2 hover:ring-emerald-500/10 hover:-translate-y-1 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  {project.image && (
                    <div className="w-full aspect-[4/3] sm:aspect-[16/9] relative bg-black sm:rounded-t-3xl overflow-hidden">
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
                          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-2 group-hover:text-emerald-400 transition-colors break-words">
                            {project.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-[95%]">{project.desc}</p>

                          {project.tags && (
                            <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                              {project.tags.map((t) => (
                                <span key={t} className="text-[10px] sm:text-xs text-cyan-300 border border-cyan-700/30 px-2 sm:px-2.5 py-0.5 rounded-full bg-black/20">
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

            <div className="mt-10 sm:mt-12">
              <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-4">More Projects</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {MORE_PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                  >
                    <h4 className="text-sm text-white font-medium">{project.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{project.desc}</p>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ====== EXPERIENCE TIMELINE ====== */}
        <section id="experience" data-motion="timeline" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading eyebrow="Career" title="Work History" />

            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

              <div className="space-y-8 sm:space-y-12">
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
                      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 hover:border-emerald-500/20 transition-colors text-left">
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
                        {job.description && (
                          <p className="text-gray-400 text-sm leading-relaxed mt-3">{job.description}</p>
                        )}
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
        <section data-motion="cards" className="py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading eyebrow="Process" title="How I Work" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {WORKFLOW.map((w) => (
                <div
                  key={w.step}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 hover:border-emerald-500/20 hover:-translate-y-1 transition-all"
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
        <section id="about" data-motion="about" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeading eyebrow="About" title="Meet Your Website Manager" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] sm:aspect-[4/5] max-h-[34rem] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02]">
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

              <div className="space-y-5 sm:space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Hi, I&apos;m <strong className="text-white">Isah Aruna</strong>. Website Manager and WordPress/WooCommerce specialist with 5+ years keeping online stores and business sites fast, secure, and up to date for clients across Nigeria, the UK, and the Netherlands.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I manage WooCommerce stores day to day: adding products, keeping catalogs and orders in order, fixing minor issues, and updating designs in <strong className="text-white">Elementor</strong> (my daily tool), Bricks Builder, or Divi. When a page builder isn&apos;t enough, I step in with custom PHP, ACF, and Gutenberg.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I also look after the technical side that keeps a store running: hosting, DNS, CDN, backups, Core Web Vitals, and payment gateway, CRM, and marketing integrations. I work daily with international remote teams using <strong className="text-white">Slack, Notion, Google Workspace, and Discord</strong>, and I coordinate launches so nothing goes live unchecked.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Backed by a Google Cloud Cybersecurity certification, I keep sites secure as well as fast. I don&apos;t just build websites, I keep them running.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Based in Abuja, Nigeria, open to remote and on-site work.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {["WordPress Expert", "WooCommerce Management", "Performance Optimization", "Security Hardening", "Remote Collaboration"].map(
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
        <section data-motion="fade" className="py-12 sm:py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6 sm:mb-10">
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
        <section id="contact" data-motion="pop" className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
              Ready to Keep Your Store{" "}
              <span className="text-emerald-400">Running Smoothly?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto">
              I&apos;m available for a remote Website Manager role. Let&apos;s talk about how I can handle your products, orders, speed, and updates so your team can focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="https://wa.me/2348137337937"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-12 inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                WhatsApp Me
              </a>
              <a
                href="mailto:arunaisah47@gmail.com"
                className="w-full sm:w-auto min-h-12 inline-flex justify-center items-center gap-2 border border-white/10 hover:border-white/30 text-white font-medium px-5 sm:px-8 py-3 sm:py-4 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                {Icons.mail} arunaisah47@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ====== FOOTER ====== */}
      <footer data-motion="slide-down" className="bg-[#0a0a0a] border-t border-white/5 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Isah Aruna</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Website Manager and WordPress/WooCommerce specialist. Keeping online stores fast, secure, and up to date for brands worldwide.
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
