export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-accent font-mono text-sm mb-4 tracking-wide">
            Full Stack Web Engineer
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          I build web applications
          <br />
          <span className="text-muted">that work reliably.</span>
        </h1>

        <p className="opacity-0 animate-fade-in-up delay-200 text-lg text-muted max-w-xl leading-relaxed mb-10">
          React &middot; TypeScript &middot; Python &middot; APIs &middot;
          Databases &middot; Deployment. From idea to production, across the
          full stack.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-300 flex flex-wrap gap-4">
          <a
            href="#script"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium text-sm transition-all glow"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Intro
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border hover:border-muted text-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
