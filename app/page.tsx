"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  ExternalLink, 
  Github, 
  Linkedin,
  Code2, 
  ShieldCheck, 
  Zap, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Terminal,
  ArrowUpRight,
  Workflow,
  Medal,
  MapPin,
  ChevronRight,
  Monitor,
  Search,
  Activity,
  Box
} from 'lucide-react';

const projects = [
  {
    title: "InternalToolKit",
    tagline: "Enterprise operations monorepo centralizing fleet, shifts, and team communication.",
    tech: ["Next.js", "Cloudflare Workers", "pnpm", "PostgreSQL", "Prisma", "Zod"],
    impact: "Contract-Driven Architecture",
    category: "Operational OS",
    highlights: [
      "Shared Zod contracts between edge-optimized API and frontend for 100% type-safety.",
      "Custom RBAC & PIN-auth flow designed for high-frequency operational field use.",
      "Real-time state machines for fleet logistics and interactive shift planning timelines."
    ],
    live: "https://internal-tool-kit-web.vercel.app",
    repo: "https://github.com/kostasuser01gr/InternalToolKit-Portfolio"
  },
  {
    title: "FullSaas Feed Platform",
    tagline: "Scalable social feed engine optimized for high-volume data and rapid search.",
    tech: ["Next.js 14", "PostgreSQL", "Knex.js", "JWT", "react-virtuoso", "Tailwind"],
    impact: "O(1) Scalability",
    category: "Data-Heavy Systems",
    highlights: [
      "Sub-100ms full-text search across 50k+ records using PostgreSQL GIN Indexes.",
      "Cursor-based pagination to maintain constant-time performance regardless of depth.",
      "Advanced virtualization techniques achieving a consistent 60fps scrolling experience."
    ],
    live: "https://full-saas-feed-platform.vercel.app",
    repo: "https://github.com/kostasuser01gr/FullSaas_FeedPlatform"
  },
  {
    title: "CarRental Pro",
    tagline: "High-conversion e-commerce platform for vehicle logistics and automated booking.",
    tech: ["React", "Node.js", "Stripe", "WebSockets", "PWA", "PostgreSQL"],
    impact: "Transaction Integrity",
    category: "FinTech & Logistics",
    highlights: [
      "Robust Stripe integration with automated idempotent webhook processing.",
      "Real-time availability engine using WebSockets to eliminate race conditions.",
      "Atomic DB transactions ensuring zero double-bookings in high-traffic scenarios."
    ],
    live: "https://car-rental-web-app-six.vercel.app",
    repo: "https://github.com/kostasuser01gr/Car-Rental-Company---Web-App"
  },
  {
    title: "AI Chat Hub (MCP)",
    tagline: "High-performance AI gateway implementing the Model Context Protocol (MCP).",
    tech: ["JSON-RPC", "SSE", "AI Providers", "Vercel", "TypeScript", "Node.js"],
    impact: "System Interoperability",
    category: "AI Infrastructure",
    highlights: [
      "Smart Provider Router with automated fallback and priority-based retry logic.",
      "Optimized SSE stream processing for low-latency real-time AI interactions.",
      "Centralized observability dashboard for token usage and tool-calling metrics."
    ],
    live: "https://mcp-chat-hub.vercel.app",
    repo: "https://github.com/kostasuser01gr/mcpserver"
  }
];

const TechnicalPillar = ({ icon: Icon, title, desc, color, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-[0.03] blur-3xl group-hover:opacity-[0.08] transition-opacity duration-500`} />
    <div className={`p-4 rounded-2xl w-fit ${color} bg-opacity-10 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
      <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-neutral-100 selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      {/* Cinematic Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />

      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] bg-purple-600/5 blur-[160px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-400/5 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 90 }}
              className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <span className="text-black font-black text-sm">KF</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Konstantinos Foskolakis</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">Staff-Level Engineer</span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
              <a href="#projects" className="hover:text-white transition-all">Architecture</a>
              <a href="#mastery" className="hover:text-white transition-all">Mastery</a>
              <a href="#stack" className="hover:text-white transition-all">Systems</a>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/kostasuser01gr" target="_blank" className="hover:scale-110 transition-transform"><Github className="w-5 h-5 text-neutral-400 hover:text-white" /></a>
              <a href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" target="_blank" className="hover:scale-110 transition-transform"><Linkedin className="w-5 h-5 text-neutral-400 hover:text-blue-500" /></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-52 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            <div className="flex items-center gap-4 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 w-fit backdrop-blur-sm shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Available for Strategic Roles</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-white">
              System <br />
              <span className="text-neutral-500 italic font-serif font-light">Architect.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-neutral-400 max-w-2xl leading-relaxed font-light">
              Engineering <span className="text-white font-medium">mission-critical</span> resilience through advanced performance patterns and distributed system integrity.
            </p>

            <div className="flex flex-wrap gap-8 items-center mt-6">
               <div className="flex items-center gap-3 text-neutral-500 text-sm font-bold uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-blue-500" /> Athens, GR
               </div>
               <div className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block" />
               <div className="flex items-center gap-3 text-neutral-500 text-sm font-bold uppercase tracking-widest">
                  <Medal className="w-4 h-4 text-yellow-500" /> Micro1 Vetted
               </div>
               <div className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block" />
               <div className="flex items-center gap-3 text-neutral-500 text-sm font-bold uppercase tracking-widest">
                  <Workflow className="w-4 h-4 text-purple-500" /> Lead Engineer
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative group shadow-2xl">
              <Image 
                src="/profile.png" 
                alt="Konstantinos Foskolakis" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-2">Core Identity</p>
                <p className="text-3xl font-bold tracking-tight">K. Foskolakis</p>
              </div>
            </div>
            {/* Master-level decorative accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-blue-500/20 rounded-bl-[4rem]" />
          </motion.div>
        </div>
      </header>

      {/* Mastery Section / Micro1 Certification */}
      <section id="mastery" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group p-1 md:p-1.5 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-[4rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-neutral-950 rounded-[3.9rem] m-px" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 md:p-20 items-center">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/20 mb-4">
                  <Medal className="w-8 h-8 text-yellow-500" />
                </div>
                <h2 className="text-5xl font-bold tracking-tight">Certified Mastery.</h2>
                <p className="text-neutral-400 text-xl leading-relaxed font-light">
                  Vetted through Micro1's rigorous AI-driven evaluation, certifying expertise in the top 1% of global Full-Stack Engineers. 
                  Mastery in <span className="text-white font-medium underline decoration-yellow-500/30 underline-offset-8">distributed architecture</span> and performant React ecosystems.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-white tracking-tighter">99th</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Percentile Skill Score</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-white tracking-tighter">Top 1%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Globally Vetted Talent</span>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" 
                target="_blank"
                className="w-fit px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-neutral-200 transition-all flex items-center gap-4"
              >
                Verify Credentials <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/cert"
            >
              <Image 
                src="/micro1-cert.jpg" 
                alt="Micro1 Certification" 
                fill 
                className="object-cover brightness-90 group-hover/cert:brightness-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/cert:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Engineering Pillars */}
      <section id="stack" className="max-w-7xl mx-auto px-6 py-40">
        <div className="text-center mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-6">Technical Pillars</h2>
          <p className="text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Architectural integrity meets <br /> performant execution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <TechnicalPillar 
            icon={Zap} 
            title="Performance Ops" 
            desc="Deep optimization of the critical render path. Implementing windowed rendering and edge-caching to maintain <100ms TTFB."
            color="bg-blue-500"
            delay={0.1}
          />
          <TechnicalPillar 
            icon={ShieldCheck} 
            title="Security Governance" 
            desc="Building 'Secure by Design' systems with exhaustive RBAC, encrypted sessions, and Zod-enforced schema validation at every boundary."
            color="bg-emerald-500"
            delay={0.2}
          />
          <TechnicalPillar 
            icon={Workflow} 
            title="Distributed Systems" 
            desc="Orchestrating complex monorepos and edge-functions with 100% type-safety and contract-driven development patterns."
            color="bg-purple-500"
            delay={0.3}
          />
        </div>
      </section>

      {/* Showcase / Projects */}
      <main id="projects" className="max-w-7xl mx-auto px-6 py-48 bg-neutral-900/10 rounded-[4rem] border border-white/5 relative">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-6xl font-bold tracking-tighter">Case Studies.</h2>
            <p className="text-neutral-500 text-xl font-light">Architectural intent translated into production code.</p>
          </div>
          <div className="flex gap-4 p-2 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-xl">
             <div className="px-6 py-3 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] text-white">Full-Scale Architecture</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-48">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group grid grid-cols-1 lg:col-span-12 lg:grid-cols-12 gap-20 items-center"
            >
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-blue-500 font-mono text-[10px] font-black uppercase tracking-[0.4em]">
                     <Terminal className="w-5 h-5" /> {project.category}
                  </div>
                  <h3 className="text-6xl font-bold tracking-tighter group-hover:text-blue-400 transition-colors duration-700">{project.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-xl font-light">{project.tagline}</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-5 py-2 bg-white/5 text-neutral-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/5 group-hover:border-blue-500/30 transition-colors">{t}</span>
                  ))}
                </div>

                <div className="flex gap-10 items-center pt-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group/btn bg-white text-black px-8 py-4 rounded-2xl hover:bg-blue-500 hover:text-white transition-all shadow-xl">
                    Deploy <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors">
                    Source <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 relative">
                <div className="p-10 md:p-16 bg-neutral-950 rounded-[3.5rem] border border-white/5 relative overflow-hidden group/card shadow-2xl ring-1 ring-white/10 hover:ring-blue-500/30 transition-all duration-700">
                  <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover/card:opacity-[0.06] transition-opacity duration-1000">
                     <Box className="w-64 h-64" />
                  </div>
                  <div className="flex flex-col gap-10 relative z-10">
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/60">Technical Impact: {project.impact}</span>
                       <Activity className="w-5 h-5 text-neutral-800" />
                    </div>
                    <ul className="flex flex-col gap-8">
                      {project.highlights.map((highlight, k) => (
                        <li key={k} className="flex gap-8 text-neutral-300 text-xl leading-relaxed font-light group/item">
                          <div className="mt-3 w-1.5 h-1.5 rounded-full bg-blue-500/40 shrink-0 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                          <span className="group-hover/item:text-white transition-colors">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Decorative depth elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Final Call / Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-60 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-7 flex flex-col gap-12">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
              Let's craft <br /> 
              the <span className="text-blue-500 italic">Next.</span>
            </h2>
            <p className="text-neutral-500 max-w-lg text-2xl leading-relaxed font-light">
              Distilling complex requirements into resilient, performant systems. 
              Currently open to Lead and Senior Engineering opportunities.
            </p>
            <div className="flex flex-wrap gap-8 mt-6">
               <a 
                href="mailto:konstantinos.foskolakis@gmail.com" 
                className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-700 shadow-2xl"
               >
                 Initiate Contact
               </a>
               <div className="flex gap-6">
                 <a 
                  href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" 
                  target="_blank"
                  className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-1"
                 >
                   <Linkedin className="w-7 h-7" />
                 </a>
                 <a 
                  href="https://github.com/kostasuser01gr" 
                  target="_blank"
                  className="p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-1"
                 >
                   <Github className="w-7 h-7" />
                 </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-20">
            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700">Engineering Philosophy</h4>
              <p className="text-neutral-400 text-lg leading-relaxed font-light italic">
                "Software should be correct by construction. I prioritize strict typing and exhaustive validation 
                to eliminate entire classes of failure before they reach production."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col gap-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700">Core Engine</h4>
                <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                  <li className="flex items-center gap-3"><Monitor className="w-4 h-4" /> Next.js / TS</li>
                  <li className="flex items-center gap-3"><Server className="w-4 h-4" /> Node / Cloudflare</li>
                  <li className="flex items-center gap-3"><Database className="w-4 h-4" /> Postgres / SQL</li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-700">Observability</h4>
                <ul className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
                  <li className="flex items-center gap-3 text-white"><Medal className="w-4 h-4 text-yellow-500" /> Micro1 Vetted</li>
                  <li className="flex items-center gap-3"><Search className="w-4 h-4" /> System Audit</li>
                  <li className="flex items-center gap-3"><Zap className="w-4 h-4 text-blue-500" /> Perf Tuning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-60 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-10 text-neutral-700 text-[9px] font-black uppercase tracking-[0.5em]">
          <div className="flex gap-16">
            <p>© 2026 K. FOSKOLAKIS</p>
            <p className="text-neutral-800">Athens // 37.9838° N, 23.7275° E</p>
          </div>
          <div className="flex gap-12 items-center">
            <div className="flex gap-2 items-center">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
               <span className="text-white/40">Core Systems Nominal</span>
            </div>
            <div className="h-4 w-px bg-white/5" />
            <a href="https://github.com/kostasuser01gr/PersonalView" className="hover:text-white transition-colors">Project Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
