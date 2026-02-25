"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
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
  Box,
  Layers,
  CpuIcon
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
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

// --- Components ---

const SectionHeader = ({ badge, title, subtitle, centered = false }: any) => (
  <div className={cn("flex flex-col gap-4 mb-20", centered && "items-center text-center")}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-blue-500 font-black text-[10px] tracking-[0.5em] uppercase px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit"
    >
      {badge}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-bold tracking-tighter"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-neutral-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const TechnicalPillar = ({ icon: Icon, title, desc, color, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group p-10 rounded-[2.5rem] bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col items-start gap-6"
  >
    <div className={cn("p-5 rounded-[1.5rem] w-fit bg-opacity-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500", color)}>
      <Icon className={cn("w-10 h-10", color.replace('bg-', 'text-'))} />
    </div>
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
      <p className="text-neutral-400 text-base leading-relaxed font-light">{desc}</p>
    </div>
    <div className={cn("absolute bottom-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity", color)} />
  </motion.div>
);

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-neutral-100 selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
      {/* Cinematic Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 origin-left z-[100]" style={{ scaleX }} />

      {/* Atmospheric Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/5 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] contrast-150 brightness-150" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-3xl">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <motion.div whileHover={{ scale: 1.05 }} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-black font-black text-base">KF</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-white leading-none mb-1">Konstantinos Foskolakis</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Staff Systems Architect</span>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500">
              <a href="#projects" className="hover:text-white transition-all">Showcase</a>
              <a href="#mastery" className="hover:text-white transition-all">Credentials</a>
              <a href="#stack" className="hover:text-white transition-all">Philosophy</a>
            </div>
            <div className="flex gap-8">
              <a href="https://github.com/kostasuser01gr" target="_blank" className="hover:scale-110 transition-transform"><Github className="w-6 h-6 text-neutral-400 hover:text-white" /></a>
              <a href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" target="_blank" className="hover:scale-110 transition-transform"><Linkedin className="w-6 h-6 text-neutral-400 hover:text-blue-500" /></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-[1400px] mx-auto px-8 md:px-12 pt-64 pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-8 flex flex-col gap-12"
          >
            <div className="flex items-center gap-4 px-6 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/10 w-fit shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-400/80">Vetted Top 1% Global Engineering Talent</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] text-white">
              Engineering <br />
              <span className="text-neutral-500 italic font-serif font-light tracking-tight">Mastery.</span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-neutral-400 max-w-3xl leading-relaxed font-light tracking-tight">
              Distilling <span className="text-white font-medium">high-concurrency complexity</span> into resilient architecture. Built with an obsessive focus on data integrity and observability.
            </p>

            <div className="flex flex-wrap gap-10 items-center mt-4">
               <div className="flex items-center gap-4 text-neutral-500 text-[11px] font-black uppercase tracking-[0.3em]">
                  <MapPin className="w-5 h-5 text-blue-500/60" /> Athens, Greece
               </div>
               <div className="w-2 h-2 rounded-full bg-white/5 hidden md:block" />
               <div className="flex items-center gap-4 text-neutral-500 text-[11px] font-black uppercase tracking-[0.3em]">
                  <Medal className="w-5 h-5 text-yellow-500/60" /> Micro1 Certified
               </div>
               <div className="w-2 h-2 rounded-full bg-white/5 hidden md:block" />
               <div className="flex items-center gap-4 text-neutral-500 text-[11px] font-black uppercase tracking-[0.3em]">
                  <Workflow className="w-5 h-5 text-indigo-500/60" /> Full-Scale Ops
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="lg:col-span-4 relative hidden lg:block perspective-1000"
          >
            <div className="aspect-[4/5.5] rounded-[3.5rem] overflow-hidden border border-white/10 relative group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
              <Image src="/profile.png" alt="Konstantinos Foskolakis" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-[1.02] group-hover:scale-100" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90" />
              <div className="absolute bottom-12 left-12 z-20 flex flex-col gap-2">
                <p className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30">Founder & Architect</p>
                <p className="text-4xl font-bold tracking-tight text-white leading-none">Konstantinos</p>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full animate-pulse z-[-1]" />
          </motion.div>
        </div>
      </header>

      {/* Mastery / Micro1 - Full Scale Upgrade */}
      <section id="mastery" className="max-w-[1400px] mx-auto px-8 md:px-12 py-32">
        <SectionHeader badge="Industry Certification" title="Verified Mastery" subtitle="Certified as a top-tier Full-Stack Engineer through Micro1's AI-driven assessment protocol." />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group p-1.5 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-[4.5rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[#050505] rounded-[4.4rem] m-px" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 p-16 md:p-24 items-center">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div className="w-20 h-20 bg-yellow-500/10 rounded-3xl flex items-center justify-center border border-yellow-500/20 mb-4 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                  <Medal className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="text-6xl font-bold tracking-tighter">Micro1 Vetted.</h3>
                <p className="text-neutral-400 text-2xl leading-relaxed font-light">
                  Validated expertise in <span className="text-white font-medium">distributed architecture</span>, 
                  performant React ecosystems, and secure Node.js infrastructure. Ranked in the top 1% of the global talent pool.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
                <div className="flex flex-col gap-3">
                  <span className="text-5xl font-bold text-white tracking-tighter tabular-nums">99.2</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-600">Performance Index</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-5xl font-bold text-white tracking-tighter tabular-nums">1.0%</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-600">Global Ranking</span>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" target="_blank" className="w-fit px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl hover:bg-neutral-200 transition-all flex items-center gap-5 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                Verify Credential <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <motion.div whileHover={{ scale: 1.02, rotate: 1.5 }} className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] group/cert">
              <Image src="/micro1-cert.jpg" alt="Micro1 Certification" fill className="object-cover brightness-90 group-hover/cert:brightness-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/cert:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Engineering Pillars - Spacing Correction */}
      <section id="stack" className="max-w-[1400px] mx-auto px-8 md:px-12 py-48">
        <SectionHeader badge="The Core Stack" title="Architectural Pillars" subtitle="Building with intent using a curated set of high-performance tools and design patterns." centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <TechnicalPillar icon={Zap} title="Performance First" desc="Focusing on sub-100ms LCP through edge-computing, windowed virtualization, and aggressive data hydration strategies." color="bg-blue-600" delay={0.1} />
          <TechnicalPillar icon={ShieldCheck} title="Zero-Trust Security" desc="Implementing strict RBAC, Zod-enforced schemas, and encrypted session management at every architectural boundary." color="bg-indigo-600" delay={0.2} />
          <TechnicalPillar icon={Workflow} title="System Integrity" desc="Leveraging contract-driven development in pnpm monorepos to ensure 100% type-safety from database to UI." color="bg-purple-600" delay={0.3} />
        </div>
      </section>

      {/* Showcase - Full Scale Correction */}
      <main id="projects" className="max-w-[1400px] mx-auto px-8 md:px-12 py-48 bg-neutral-900/10 rounded-[5rem] border border-white/5 relative mb-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">Case Studies.</h2>
            <p className="text-neutral-500 text-2xl font-light tracking-tight">Technical excellence translated into production systems.</p>
          </div>
          <div className="px-10 py-5 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl text-[11px] font-black uppercase tracking-[0.4em] text-white/80 shadow-2xl">
             Flagship Portfolio // 2026
          </div>
        </div>

        <div className="grid grid-cols-1 gap-64">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-24 items-center"
            >
              <div className="lg:col-span-5 flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5 text-blue-500 font-mono text-xs font-black uppercase tracking-[0.4em]">
                     <Terminal className="w-6 h-6" /> {project.category}
                  </div>
                  <h3 className="text-6xl md:text-7xl font-bold tracking-tighter group-hover:text-blue-500 transition-colors duration-700">{project.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-2xl font-light tracking-tight">{project.tagline}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-6 py-2.5 bg-white/5 text-neutral-300 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl border border-white/5 group-hover:border-blue-500/40 transition-all duration-500">{t}</span>
                  ))}
                </div>

                <div className="flex gap-12 items-center pt-8">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] group/btn bg-white text-black px-10 py-5 rounded-[1.5rem] hover:bg-blue-600 hover:text-white transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)]">
                    Access <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-neutral-500 hover:text-white transition-colors">
                    Source <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-16 md:p-20 bg-[#050505] rounded-[4.5rem] border border-white/5 relative overflow-hidden group/card shadow-[0_60px_100px_rgba(0,0,0,0.6)] ring-1 ring-white/10 hover:ring-blue-500/40 transition-all duration-1000">
                  <div className="absolute top-0 right-0 p-20 opacity-[0.02] group-hover/card:opacity-[0.08] transition-opacity duration-1000 pointer-events-none">
                     <Box className="w-80 h-80" />
                  </div>
                  <div className="flex flex-col gap-12 relative z-10">
                    <div className="flex items-center justify-between">
                       <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500/80">Impact Assessment: {project.impact}</span>
                       <Activity className="w-6 h-6 text-neutral-800" />
                    </div>
                    <ul className="flex flex-col gap-10">
                      {project.highlights.map((highlight, k) => (
                        <li key={k} className="flex gap-8 text-neutral-300 text-2xl leading-relaxed font-light group/item">
                          <div className="mt-4 w-2 h-2 rounded-full bg-blue-500/30 shrink-0 group-hover/item:bg-blue-500 group-hover/item:scale-150 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                          <span className="group-hover/item:text-white transition-colors duration-500">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer / Contact - Rhythm Correction */}
      <footer className="max-w-[1400px] mx-auto px-8 md:px-12 py-64 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-7 flex flex-col gap-16">
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] text-white">
              Built with <br /> 
              <span className="text-blue-600 italic font-serif">Absolute</span> Intent.
            </h2>
            <p className="text-neutral-500 max-w-2xl text-2xl md:text-3xl leading-relaxed font-light tracking-tight">
              Distilling high-scale requirements into elegant, resilient systems. 
              Currently open to Lead & Senior Architect roles.
            </p>
            <div className="flex flex-wrap gap-10 items-center mt-6">
               <a href="mailto:konstantinos.foskolakis@gmail.com" className="px-14 py-7 bg-white text-black font-black uppercase tracking-[0.3em] text-[12px] rounded-[2rem] hover:bg-blue-600 hover:text-white transition-all duration-700 shadow-2xl">
                 Initiate Dialogue
               </a>
               <div className="flex gap-8">
                 <a href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" target="_blank" className="p-7 border border-white/10 rounded-[2rem] hover:bg-white/5 transition-all hover:-translate-y-2 group">
                   <Linkedin className="w-8 h-8 text-neutral-400 group-hover:text-blue-500 transition-colors" />
                 </a>
                 <a href="https://github.com/kostasuser01gr" target="_blank" className="p-7 border border-white/10 rounded-[2rem] hover:bg-white/5 transition-all hover:-translate-y-2 group">
                   <Github className="w-8 h-8 text-neutral-400 group-hover:text-white transition-colors" />
                 </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-24 border-l border-white/10 pl-0 lg:pl-20">
            <div className="flex flex-col gap-10">
              <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-neutral-700">The Philosophy</h4>
              <p className="text-neutral-400 text-2xl leading-relaxed font-light italic opacity-80">
                "Code is an asset only when it's maintainable. I prioritize architectural clarity over clever optimizations, ensuring systems last for years, not months."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-20">
              <div className="flex flex-col gap-8">
                <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-neutral-800">The Engine</h4>
                <ul className="flex flex-col gap-5 text-[12px] font-bold uppercase tracking-widest text-neutral-500">
                  <li className="flex items-center gap-4"><Monitor className="w-5 h-5 text-blue-500" /> Next.js / TS</li>
                  <li className="flex items-center gap-4"><Server className="w-5 h-5 text-indigo-500" /> Cloudflare API</li>
                  <li className="flex items-center gap-4"><Database className="w-5 h-5 text-purple-500" /> PostgreSQL</li>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <h4 className="text-[12px] font-black uppercase tracking-[0.5em] text-neutral-800">Observability</h4>
                <ul className="flex flex-col gap-5 text-[12px] font-bold uppercase tracking-widest text-neutral-500">
                  <li className="flex items-center gap-4 text-white"><Medal className="w-5 h-5 text-yellow-500" /> Micro1 Vetted</li>
                  <li className="flex items-center gap-4"><Search className="w-5 h-5 text-indigo-500" /> System Audit</li>
                  <li className="flex items-center gap-4"><Zap className="w-5 h-5 text-blue-500" /> High Perf</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-64 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between gap-12 text-neutral-700 text-[10px] font-black uppercase tracking-[0.6em] items-center">
          <div className="flex gap-20">
            <p>© 2026 KONSTANTINOS FOSKOLAKIS</p>
            <p className="text-neutral-800 hidden md:block">37.9838° N, 23.7275° E // ATHENS</p>
          </div>
          <div className="flex gap-16 items-center">
            <div className="flex gap-4 items-center">
               <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse" />
               <span className="text-white/40 tracking-[0.3em]">Core Systems Nominal</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <a href="https://github.com/kostasuser01gr/PersonalView" target="_blank" className="hover:text-white transition-colors">Project Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
