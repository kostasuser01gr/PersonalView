import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Photo — portrait ratio */}
        <div className="opacity-0 animate-fade-in flex-shrink-0">
          <div className="relative group">
            <div className="relative w-48 h-64 sm:w-56 sm:h-[310px] rounded-2xl overflow-hidden border-2 border-border group-hover:border-accent/40 transition-colors duration-500">
              <Image
                src="/profile.png"
                alt="Konstantinos Foskolakis"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 192px, 224px"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Glow behind photo */}
            <div className="absolute -inset-2 bg-accent/8 rounded-3xl blur-xl -z-10 group-hover:bg-accent/12 transition-colors duration-500" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          {/* Availability badge */}
          <div className="opacity-0 animate-fade-in-up mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for work
            </span>
          </div>

          <div className="opacity-0 animate-fade-in-up">
            <p className="text-accent font-mono text-sm mb-4 tracking-wide">
              Full Stack Engineer
            </p>
          </div>

          <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5">
            Konstantinos
            <br />
            <span className="text-muted">Foskolakis</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up delay-200 text-lg text-muted max-w-xl leading-relaxed mb-8">
            React &middot; TypeScript &middot; Python APIs &middot;
            Databases &middot; Deployment. From idea to production, across the
            full stack.
          </p>

          <div className="opacity-0 animate-fade-in-up delay-300 flex flex-wrap gap-4">
            <a
              href="#video"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium text-sm transition-all glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border hover:border-accent/40 text-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all hover:bg-surface hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
        <div className="flex flex-col items-center gap-2 text-muted/40">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
