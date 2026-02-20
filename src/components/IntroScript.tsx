"use client";

import { useState } from "react";

const scriptParagraphs = [
  {
    label: "Introduction",
    text: `Hi, I'm Kostas, and I'm a Full Stack Web Engineer.`,
  },
  {
    label: "Stack",
    text: `I work primarily with React and TypeScript on the frontend, Python on the backend, and I'm comfortable across the full lifecycle — from designing APIs and modeling databases to deploying and monitoring services in production.`,
  },
  {
    label: "Experience",
    text: `Most of my experience has been building SaaS platforms, internal tools, and web applications that need to scale reliably. The kind of systems where uptime matters, data integrity matters, and real users depend on things working correctly every day.`,
  },
  {
    label: "Philosophy",
    text: `I care a lot about writing code that's easy to read, easy to maintain, and easy for the next person to pick up. I think about performance early, not as an afterthought — and I take security seriously at every layer, not just at the edge.`,
  },
  {
    label: "Looking for",
    text: `What I'm looking for is a role where I can contribute to meaningful product work, solve real engineering problems, and grow alongside a team that values clean architecture and thoughtful execution.`,
  },
  {
    label: "Close",
    text: `Thanks for your time — I'd be happy to talk further.`,
  },
];

export default function IntroScript() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="script" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-4">
          Intro Script
        </h2>
        <p className="text-muted text-base mb-12 max-w-lg">
          A 60-second introduction — ready to record or adapt for any
          opportunity.
        </p>

        <div className="relative border border-border rounded-xl bg-surface/30 p-8 sm:p-10">
          {/* Decorative quote mark */}
          <div className="absolute top-6 right-8 text-6xl text-border font-serif select-none">
            &ldquo;
          </div>

          <div className="space-y-6">
            {scriptParagraphs.map((paragraph, i) => (
              <div
                key={i}
                className={`group cursor-pointer transition-all duration-200 rounded-lg p-4 -m-4 ${
                  activeIndex === i
                    ? "bg-accent/5 border-l-2 border-accent pl-5"
                    : "hover:bg-surface-hover border-l-2 border-transparent pl-5"
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
              >
                <span className="block text-[11px] font-mono text-accent/70 uppercase tracking-widest mb-2">
                  {paragraph.label}
                </span>
                <p className="text-foreground/90 text-base leading-relaxed">
                  {paragraph.text}
                </p>
              </div>
            ))}
          </div>

          {/* Duration indicator */}
          <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-sm text-muted">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            ~60 seconds &middot; ~160 words &middot; Conversational pace
          </div>
        </div>
      </div>
    </section>
  );
}
