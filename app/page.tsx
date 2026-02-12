"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";

type RevealProps = { children: ReactNode; delay?: number };

function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <div
      className="animate-[fadeUp_.7s_ease-out_forwards] opacity-0 [animation-delay:var(--d)]"
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [typed, setTyped] = useState("");

  const codeDemo = useMemo(
    () =>
      `> npx create-nexaflow-app\n\n✔ ui-system initialized\n✔ auth-flow ready\n✔ analytics connected\n✔ deploy profile configured\n\n🚀 Ready to launch`,
    []
  );

  useEffect(() => {
    const saved = localStorage.getItem("nexa-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(codeDemo.slice(0, i));
      if (i >= codeDemo.length) clearInterval(timer);
    }, 14);

    return () => clearInterval(timer);
  }, [codeDemo]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("nexa-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  const features = [
    {
      title: "Design System First",
      text: "Consistent spacing, typography, and components from day one.",
    },
    {
      title: "API-Ready Workflow",
      text: "Clear frontend/backend boundaries and scalable integration patterns.",
    },
    {
      title: "Secure by Default",
      text: "Strong UX with validation, clear feedback, and safe auth flow.",
    },
  ];

  const pricing = [
    { name: "Starter", price: "$0", desc: "For personal projects and learning." },
    { name: "Pro", price: "$19", desc: "For teams shipping every week.", popular: true },
    { name: "Enterprise", price: "Custom", desc: "For scale, compliance, and SLAs." },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_-10%,#7c5cff33,transparent_40%),radial-gradient(circle_at_85%_0%,#22d3ee33,transparent_38%)] bg-slate-950 text-slate-100 dark:bg-slate-950 dark:text-slate-100">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px);} to {opacity:1; transform: translateY(0);} }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-[92%] max-w-6xl items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400" />
            NexaFlow
          </div>

          <button
            aria-label="Toggle menu"
            className="rounded-lg border border-white/15 px-3 py-1.5 text-sm md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-slate-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white">Pricing</a>
            <a href="#faq" className="text-sm text-slate-300 hover:text-white">FAQ</a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-lg border border-white/15 px-3 py-1.5 text-sm"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
            <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
              Get Started
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-4 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              <a href="#features" className="rounded-lg px-2 py-1 hover:bg-white/10">Features</a>
              <a href="#pricing" className="rounded-lg px-2 py-1 hover:bg-white/10">Pricing</a>
              <a href="#faq" className="rounded-lg px-2 py-1 hover:bg-white/10">FAQ</a>
              <button onClick={toggleTheme} className="rounded-lg border border-white/15 px-2 py-1 text-left">
                Switch to {theme === "dark" ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-[92%] max-w-6xl">
        <section className="grid gap-8 py-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-cyan-200">
              Premium UI • Conversion Focused
            </span>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Build and ship faster with
              <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent"> beautiful UX</span>
              .
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              NexaFlow helps product teams launch polished interfaces faster with modern design patterns, smart automation, and clean developer workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20">
                Start Free
              </button>
              <button className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10">
                See Demo
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 shadow-2xl shadow-cyan-900/20 backdrop-blur-xl">
              <div className="rounded-xl border border-white/15 bg-slate-900">
                <div className="flex gap-2 border-b border-white/10 p-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <pre className="min-h-52 whitespace-pre-wrap p-4 text-sm text-cyan-100">{typed}</pre>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="features" className="py-16">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Everything your team needs</h2>
            <p className="mt-2 text-slate-300">Fast, clean, and scalable UI foundations.</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={80 + i * 80}>
                <article className="h-full rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-16">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">Simple pricing</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pricing.map((p, i) => (
              <Reveal key={p.name} delay={80 + i * 80}>
                <article className={`rounded-2xl border bg-white/5 p-6 backdrop-blur ${p.popular ? "border-cyan-300/60 ring-1 ring-cyan-300/40" : "border-white/15"}`}>
                  {p.popular && <span className="rounded-full bg-cyan-300/15 px-2 py-1 text-xs text-cyan-200">Most Popular</span>}
                  <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-3xl font-black">{p.price}<span className="text-base font-normal text-slate-400">{p.price.startsWith("$") ? "/mo" : ""}</span></p>
                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
                  <button className={`mt-4 w-full rounded-xl px-4 py-2 font-semibold ${p.popular ? "bg-gradient-to-r from-violet-500 to-cyan-400" : "border border-white/20"}`}>
                    Choose {p.name}
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className="py-16">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
          </Reveal>
          <div className="mt-6 space-y-3">
            {[
              ["Can I use this with my existing stack?", "Yes. It integrates cleanly with modern frontend/backend workflows."],
              ["Is this mobile responsive?", "Yes, all sections are tuned for mobile, tablet, and desktop."],
              ["How fast can I launch?", "Most teams ship their first polished version in hours, not days."],
            ].map(([q, a], i) => (
              <Reveal key={q} delay={80 + i * 60}>
                <details className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <summary className="cursor-pointer font-semibold">{q}</summary>
                  <p className="mt-2 text-sm text-slate-300">{a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 left-1/2 z-40 w-[92%] max-w-3xl -translate-x-1/2 rounded-2xl border border-white/15 bg-slate-900/80 p-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-semibold">Ready to launch faster?</p>
            <p className="text-xs text-slate-300">Start your premium landing flow in minutes.</p>
          </div>
          <button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold">
            Start Free
          </button>
        </div>
      </div>
    </div>
  );
}
