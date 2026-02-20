import RevealOnScroll from "./RevealOnScroll";

const stack = [
  {
    category: "Frontend",
    icon: "◆",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "▲",
    items: ["Python", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Data",
    icon: "●",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    category: "Infrastructure",
    icon: "■",
    items: ["Docker", "CI/CD", "Vercel", "AWS"],
  },
  {
    category: "Practices",
    icon: "★",
    items: ["Clean Code", "Testing", "Security", "Performance"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-32 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-sm font-mono text-accent tracking-wide mb-12">
            Tech Stack
          </h2>
        </RevealOnScroll>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, i) => (
            <RevealOnScroll key={group.category} delay={i * 100} direction={i % 2 === 0 ? "up" : "right"}>
              <div className="group p-5 rounded-xl border border-transparent hover:border-border hover:bg-surface/80 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent/70 text-xs">{group.icon}</span>
                  <h3 className="text-foreground font-semibold text-base">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted text-sm flex items-center gap-2.5 group-hover:text-foreground/70 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
