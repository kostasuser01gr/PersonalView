import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-sm font-mono text-accent tracking-wide mb-8">
            About
          </h2>
        </RevealOnScroll>

        <div className="space-y-6 text-muted text-lg leading-relaxed">
          <RevealOnScroll delay={100}>
            <p>
              I&apos;m a Full Stack Web Engineer focused on building software that
              solves real problems. I work across the entire stack — frontend,
              backend, databases, and infrastructure — and I care about shipping
              things that are reliable, maintainable, and straightforward.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p>
              Most of my experience has been with{" "}
              <span className="text-foreground">SaaS platforms</span>,{" "}
              <span className="text-foreground">internal tools</span>, and{" "}
              <span className="text-foreground">web applications</span> where
              uptime matters, data integrity matters, and users depend on things
              working correctly every day.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <p>
              I think about performance early, not as an afterthought. I write
              code that&apos;s easy for the next person to pick up. And I take
              security seriously at every layer, not just at the edge.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
