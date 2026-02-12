"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    document.addEventListener("keydown", onEscape);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onEscape);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto grid h-16 w-[92%] max-w-6xl grid-cols-2 items-center md:grid-cols-3">
        <a href="#" className="flex items-center gap-2 font-semibold text-white">
          <Sparkles className="h-5 w-5 text-indigo-400" />
          NexaFlow
        </a>

        <div className="hidden items-center justify-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Features</a>
          <a href="#pricing" className="hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Pricing</a>
          <a href="#cta" className="hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Newsletter</a>
        </div>

        <div className="hidden justify-self-end md:block">
          <Button size="sm">Get Started</Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="justify-self-end rounded-md border border-white/20 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto w-[92%] max-w-6xl pb-3 md:hidden">
          <div
            id="mobile-menu"
            className="rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-200 backdrop-blur"
          >
            <div className="grid gap-2">
              <a href="#features" onClick={() => setOpen(false)} className="rounded-md px-2 py-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Features</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="rounded-md px-2 py-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Pricing</a>
              <a href="#cta" onClick={() => setOpen(false)} className="rounded-md px-2 py-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">Newsletter</a>
              <Button size="sm" className="mt-1">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
