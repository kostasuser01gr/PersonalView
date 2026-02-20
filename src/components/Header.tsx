"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          KF.
        </a>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#stack" className="hover:text-foreground transition-colors">
            Stack
          </a>
          <a href="#certification" className="hover:text-foreground transition-colors">
            Verified
          </a>
          <a href="#video" className="hover:text-foreground transition-colors">
            Video
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
