export default function Certification() {
  return (
    <section id="certification" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-4">
          Verification
        </h2>
        <p className="text-muted text-base mb-12 max-w-lg">
          Independently verified through micro1&apos;s AI technical interview
          process.
        </p>

        {/* Certificate Card */}
        <div className="relative rounded-2xl border border-border bg-[#0c0c0c] overflow-hidden">
          {/* Top green glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative px-8 sm:px-16 py-14 text-center">
            {/* Verified badge */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Badge shape */}
                  <path
                    d="M36 4L44.5 10.5L55 10L58.5 20L67 27L64 37L67 47L58.5 54L55 64L44.5 63.5L36 70L27.5 63.5L17 64L13.5 54L5 47L8 37L5 27L13.5 20L17 10L27.5 10.5L36 4Z"
                    fill="#22c55e"
                  />
                  {/* Checkmark */}
                  <path
                    d="M26 36L33 43L46 28"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-1">
              Certified by{" "}
              <a
                href="https://micro1.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#818cf8] hover:text-[#a5b4fc] transition-colors"
              >
                micro1
              </a>
            </h3>

            {/* Subtitle */}
            <p className="text-muted text-sm mt-6 mb-3">This is to certify that</p>

            {/* Name */}
            <h4 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Konstantinos Foskolakis
            </h4>

            {/* Description */}
            <p className="text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-2">
              has successfully passed micro1&apos;s AI Interview and is officially
              certified as a
            </p>
            <p className="text-foreground/80 text-base sm:text-lg font-medium italic">
              Full-Stack Web Engineer
            </p>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted">
              <div className="text-left">
                <p className="font-semibold text-foreground/80 text-base tracking-tight">
                  micro1.
                </p>
                <p className="text-xs mt-1">
                  Become certified at{" "}
                  <a
                    href="https://micro1.ai/apply-as-talent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#818cf8] hover:underline"
                  >
                    micro1.ai/apply-as-talent
                  </a>
                </p>
              </div>
              <p className="text-muted">On February 11th, 2026</p>
              <div className="text-right">
                <p className="font-medium text-foreground/70 italic text-lg">
                  Ali Ansari
                </p>
                <p className="text-xs text-muted">founder/ceo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
