const stack = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "CI/CD", "Vercel", "AWS"],
  },
  {
    category: "Practices",
    items: ["Clean Code", "Testing", "Security", "Performance"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-32 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-accent tracking-wide mb-12">
          Tech Stack
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.category}>
              <h3 className="text-foreground font-semibold text-base mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
