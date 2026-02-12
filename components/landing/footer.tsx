export function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="mx-auto w-[92%] max-w-6xl text-sm text-slate-400 md:flex md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NexaFlow. All rights reserved.</p>
        <div className="mt-3 flex gap-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
