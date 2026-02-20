"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

const scriptParagraphs = [
  {
    label: "Introduction",
    text: `Hi, I'm Konstantinos — most people call me Kostas — and I'm a Full Stack Engineer.`,
  },
  {
    label: "Background",
    text: `I've been building web applications professionally for a few years now, working across both the frontend and backend. My day-to-day stack is React and TypeScript on the client side, Python for APIs and backend services, and I've worked with relational and non-relational databases — PostgreSQL, MongoDB, Redis, depending on what the project needs.`,
  },
  {
    label: "Experience",
    text: `Most of my work has been on SaaS platforms, internal tools, and web applications that need to handle real traffic and real users. The kind of systems where uptime matters, data has to be consistent, and things need to keep running smoothly as the product grows. I've been involved in the full lifecycle — from initial architecture and API design through to deployment, monitoring, and iteration.`,
  },
  {
    label: "How I Work",
    text: `I put a lot of emphasis on writing clean, well-structured code. Not because it looks nice, but because it makes everything easier down the line — debugging, onboarding new people, adding features without breaking things. I think about performance from the start, and I take security seriously at every layer, not just at the perimeter.`,
  },
  {
    label: "What I Value",
    text: `I'm comfortable owning features end to end. I can take a spec, break it down, build it out, and ship it with proper tests and documentation. I'm also comfortable asking questions early when something isn't clear — I'd rather get alignment upfront than build the wrong thing quickly.`,
  },
  {
    label: "Looking For",
    text: `What I'm looking for next is a role where I can contribute to meaningful product work, solve real engineering problems, and work with a team that cares about doing things right. I'm open to full-time positions and contract work, and I'm happy to go deeper on any of this.`,
  },
  {
    label: "Close",
    text: `Thanks for watching — I'd be happy to talk further.`,
  },
];

export default function IntroScript() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="script" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-sm font-mono text-accent tracking-wide mb-4">
            Video Intro Script
          </h2>
          <p className="text-muted text-base mb-12 max-w-lg">
            A 90-second introduction — ready to record. Click each section to
            highlight it while practicing.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
        <div className="relative border border-border rounded-xl bg-surface/30 p-8 sm:p-10">
          {/* Decorative quote mark */}
          <div className="absolute top-6 right-8 text-6xl text-border font-serif select-none">
            &ldquo;
          </div>

          <div className="space-y-6">
            {scriptParagraphs.map((paragraph, i) => (
              <div
                key={paragraph.label}
                role="button"
                tabIndex={0}
                className={`group cursor-pointer transition-all duration-200 rounded-lg p-4 -m-4 ${
                  activeIndex === i
                    ? "bg-accent/5 border-l-2 border-accent pl-5"
                    : "hover:bg-surface-hover border-l-2 border-transparent pl-5"
                }`}
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(activeIndex === i ? null : i);
                  }
                }}
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
            ~90 seconds &middot; ~270 words &middot; Conversational pace
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
