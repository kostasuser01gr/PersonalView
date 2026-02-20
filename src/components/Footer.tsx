export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Kostas. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js &middot; Deployed on Vercel</p>
      </div>
    </footer>
  );
}
