"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Terminal,
  ArrowUpRight,
  Workflow
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
    className="flex flex-col gap-4 p-8 bg-neutral-900/40 rounded-3xl border border-neutral-800/50 hover:border-neutral-700 transition-all duration-300"
  >
    <div className={`p-3 rounded-2xl w-fit ${color} bg-opacity-10`}>
      <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 selection:bg-blue-500/30 font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-tighter font-bold uppercase">KV // Engineering</span>
          <div className="flex gap-6">
            <a href="https://github.com/kostasuser01gr" className="text-neutral-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Available for Senior Roles</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
            Architecting <br /> 
            <span className="text-neutral-500 italic font-serif">Digital</span> Resilience.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light">
            Staff-level engineer specializing in <span className="text-white font-medium">high-concurrency systems</span>, 
            distributed architectures, and performance-critical web applications.
          </p>
        </motion.div>
      </header>

      {/* Technical Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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
      <main className="max-w-7xl mx-auto px-6 py-24 bg-neutral-900/20 rounded-[3rem] border border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold tracking-tight">Core Projects</h2>
            <p className="text-neutral-500">Selected works demonstrating architectural intent and data integrity.</p>
          </div>
          <div className="flex gap-4 border border-white/10 rounded-xl p-1 bg-black/20">
             <div className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold uppercase tracking-widest">Full-Stack</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="flex items-center gap-4 text-blue-500 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                   <Terminal className="w-4 h-4" /> {project.impact}
                </div>
                <h3 className="text-4xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-500">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-lg font-light">{project.tagline}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 text-neutral-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/5">{t}</span>
                  ))}
                </div>

                <div className="flex gap-6 mt-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold group/btn">
                    Launch App <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-white transition-colors">
                    View Source <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 bg-neutral-900/40 rounded-[2rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Cpu className="w-32 h-32" />
                </div>
                <ul className="flex flex-col gap-6 relative z-10">
                  {project.highlights.map((highlight, k) => (
                    <li key={k} className="flex gap-5 text-neutral-300 text-lg leading-relaxed font-light">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Technical Philosophy Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold tracking-tight">Technical <br /> Philosophy.</h2>
            <p className="text-neutral-500 max-w-md leading-relaxed">
              I believe in software that is "correct by construction." This means leveraging strict typing, 
              exhaustive validation, and predictable state management to eliminate entire classes of bugs 
              before they reach production.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Core Stack</h4>
              <ul className="flex flex-col gap-2 text-sm text-neutral-400">
                <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> Next.js / TypeScript</li>
                <li className="flex items-center gap-2"><Server className="w-4 h-4" /> Node.js / Python</li>
                <li className="flex items-center gap-2"><Database className="w-4 h-4" /> PostgreSQL / Redis</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
               <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Infrastructure</h4>
               <ul className="flex flex-col gap-2 text-sm text-neutral-400">
                <li>Docker / Kubernetes</li>
                <li>Vercel / Cloudflare</li>
                <li>CI / CD (GitHub Actions)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-40 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-neutral-600 text-xs font-mono">
          <p>© 2026 KONSTANTINOS // BUILT WITH INTENT.</p>
          <div className="flex gap-8 uppercase">
            <span>Lat: 37.9838° N</span>
            <span>Lon: 23.7275° E</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
