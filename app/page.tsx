"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
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
  Mail,
  ChevronRight
} from 'lucide-react';

const projects = [
  {
    title: "InternalToolKit",
    tagline: "Enterprise operations monorepo centralizing fleet, shifts, and team communication.",
    tech: ["Next.js", "Cloudflare Workers", "pnpm", "PostgreSQL", "Prisma", "Zod"],
    impact: "Contract-Driven Architecture",
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
    highlights: [
      "Smart Provider Router with automated fallback and priority-based retry logic.",
      "Optimized SSE stream processing for low-latency real-time AI interactions.",
      "Centralized observability dashboard for token usage and tool-calling metrics."
    ],
    live: "https://mcp-chat-hub.vercel.app",
    repo: "https://github.com/kostasuser01gr/mcpserver"
  }
];

const TechnicalPillar = ({ icon: Icon, title, desc, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col gap-4 p-8 bg-neutral-900/40 rounded-3xl border border-neutral-800/50 hover:border-neutral-700 transition-all duration-300 group"
  >
    <div className={`p-4 rounded-2xl w-fit ${color} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}>
      <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#020202] text-neutral-100 selection:bg-blue-500/30 font-sans">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]" style={{ scaleX }} />

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[0%] w-[40%] h-[40%] bg-purple-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xs">KF</span>
            </div>
            <span className="font-mono text-xs tracking-widest font-bold uppercase opacity-60">Engineered by Konstantinos</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex gap-5">
              <a href="https://github.com/kostasuser01gr" target="_blank" className="text-neutral-400 hover:text-white transition-all hover:scale-110"><Github className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" target="_blank" className="text-neutral-400 hover:text-blue-500 transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-52 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Senior Full-Stack Web Engineer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] text-white">
              Konstantinos <br />
              <span className="text-neutral-600 italic font-serif">Foskolakis.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light">
              Architecting <span className="text-white font-medium">high-resilience systems</span> with an emphasis on performance engineering, 
              distributed architecture, and mission-critical reliability.
            </p>

            <div className="flex flex-wrap gap-6 mt-4">
               <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                  <MapPin className="w-4 h-4 text-blue-500" /> Athens, Greece
               </div>
               <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                  <Medal className="w-4 h-4 text-yellow-500" /> Micro1 Certified Engineer
               </div>
               <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> Top-Tier Vetted Talent
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="aspect-square rounded-3xl overflow-hidden grayscale border border-white/10 relative group">
              {/* Note: User should replace with their actual photo path in public/ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
              <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-6xl font-serif italic text-neutral-800">
                KF
              </div>
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Based in</p>
                <p className="text-xl font-bold">Athens, GR</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </header>

      {/* Certification Badge / Micro1 Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-gradient-to-br from-neutral-900/80 to-neutral-950 border border-yellow-500/20 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-8 relative z-10">
            <div className="p-5 bg-yellow-500/10 rounded-3xl border border-yellow-500/20 group-hover:scale-110 transition-transform duration-700">
              <Medal className="w-12 h-12 text-yellow-500" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Micro1 Certified Developer</h3>
              <p className="text-neutral-400 max-w-md">Vetted among the top 1% of global engineering talent. Certified in advanced React, Node.js, and System Design.</p>
            </div>
          </div>
          <a 
            href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" 
            target="_blank"
            className="px-8 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-3 hover:bg-neutral-200 transition-colors z-10 group/link"
          >
            Verify Talent Profile <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Technical Pillars */}
      <section id="stack" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechnicalPillar 
            icon={Zap} 
            title="Performance Engineering" 
            desc="Optimizing critical paths for sub-100ms interactions using edge computing, window virtualization, and cursor-based data hydration."
            color="bg-blue-500"
          />
          <TechnicalPillar 
            icon={ShieldCheck} 
            title="Security & Governance" 
            desc="Implementing defense-in-depth: strict RBAC, Zod-enforced API contracts, and secure session management via httpOnly JWT protocols."
            color="bg-emerald-500"
          />
          <TechnicalPillar 
            icon={Workflow} 
            title="System Architecture" 
            desc="Building resilient monorepos and micro-services with a focus on domain-driven design, type-safety, and automated CI/CD pipelines."
            color="bg-purple-500"
          />
        </div>
      </section>

      {/* Projects Showcase */}
      <main id="projects" className="max-w-7xl mx-auto px-6 py-32 bg-neutral-900/20 rounded-[3.5rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 relative z-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-bold tracking-tight">Technical Case Studies</h2>
            <p className="text-neutral-500 text-lg">Engineering solutions for scale, reliability, and security.</p>
          </div>
          <div className="flex gap-4 border border-white/10 rounded-2xl p-1.5 bg-black/40 backdrop-blur-sm">
             <div className="px-5 py-2.5 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">Selected Full-Stack Ops</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-32 relative z-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
            >
              <div className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex items-center gap-4 text-blue-500 font-mono text-xs font-black uppercase tracking-[0.3em]">
                   <Terminal className="w-5 h-5" /> {project.impact}
                </div>
                <h3 className="text-5xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-500">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-xl font-light">{project.tagline}</p>
                
                <div className="flex flex-wrap gap-2.5 mt-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-4 py-1.5 bg-white/5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">{t}</span>
                  ))}
                </div>

                <div className="flex gap-8 mt-6">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest group/btn bg-white text-black px-6 py-3 rounded-xl hover:bg-neutral-200 transition-all">
                    Live Demo <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
                    Code <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 p-10 md:p-16 bg-neutral-900/50 rounded-[3rem] border border-white/5 relative overflow-hidden group/card shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                   <Cpu className="w-48 h-48" />
                </div>
                <ul className="flex flex-col gap-8 relative z-10">
                  {project.highlights.map((highlight, k) => (
                    <li key={k} className="flex gap-6 text-neutral-300 text-xl leading-relaxed font-light">
                      <div className="mt-3 w-2 h-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Technical Philosophy & Contact */}
      <footer className="max-w-7xl mx-auto px-6 py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">Let's build <br /> with <span className="text-blue-500 italic">Intent.</span></h2>
            <p className="text-neutral-500 max-w-lg text-lg leading-relaxed font-light">
              I specialize in taking complex requirements and distilling them into 
              performant, secure, and maintainable systems. Currently open to 
              Senior Full-Stack and Lead Engineering roles.
            </p>
            <div className="flex gap-6 mt-4">
               <a 
                href="mailto:konstantinos.foskolakis@gmail.com" 
                className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-500"
               >
                 Send Message
               </a>
               <a 
                href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" 
                target="_blank"
                className="p-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
               >
                 <Linkedin className="w-6 h-6" />
               </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-16 border-l border-white/5 pl-0 lg:pl-16">
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-600">Core Expertise</h4>
              <ul className="flex flex-col gap-4 text-sm text-neutral-400 font-medium">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Distributed Systems</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-blue-500 rounded-full" /> React / Next.js Engine</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Cloud-Native API Design</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-blue-500 rounded-full" /> DB Performance Tuning</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
               <h4 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-600">Certifications</h4>
               <ul className="flex flex-col gap-4 text-sm text-neutral-400 font-medium">
                <li className="flex items-center gap-3 text-white"><Medal className="w-4 h-4 text-yellow-500" /> Micro1 Vetted</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-blue-500" /> Senior System Design</li>
                <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-blue-500" /> Advanced React/TS</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-48 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-neutral-600 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex gap-12">
            <p>© 2026 KONSTANTINOS FOSKOLAKIS</p>
            <p>Built with intent in Athens</p>
          </div>
          <div className="flex gap-12">
            <span className="text-white/20">Status: System Online</span>
            <div className="flex gap-8">
              <a href="https://github.com/kostasuser01gr" className="hover:text-white transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/konstantinos-foskolakis-b63891260/" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
