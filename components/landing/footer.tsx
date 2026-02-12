export function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="mx-auto w-[92%] max-w-6xl text-sm text-slate-400 md:flex md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NexaFlow. All rights reserved.</p>
        <nav aria-label="Footer" className="mt-3 flex gap-4 md:mt-0">
          <a href="/privacy" className="hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Privacy</a>
          <a href="/terms" className="hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Terms</a>
          <a href="mailto:hello@nexaflow.ai" className="hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
