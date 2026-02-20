import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Profile Photo */}
        <div className="opacity-0 animate-fade-in flex-shrink-0">
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-border glow">
            <Image
              src="/profile.png"
              alt="Konstantinos Foskolakis"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="opacity-0 animate-fade-in-up">
            <p className="text-accent font-mono text-sm mb-4 tracking-wide">
              Full Stack Engineer
            </p>
          </div>

          <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
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
      </div>
    </section>
  );
}
