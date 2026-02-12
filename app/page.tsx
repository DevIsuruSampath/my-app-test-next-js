"use client";

import {
  Bot,
  Menu,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Turn repetitive tasks into reliable AI-powered workflows in minutes.",
  },
  {
    icon: TrendingUp,
    title: "Live Analytics",
    text: "Track performance with real-time metrics that keep your team aligned.",
  },
  {
    icon: Bot,
    title: "Smart Assistants",
    text: "Deploy purpose-built assistants for support, ops, and product teams.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    text: "Guardrails, role controls, and safe-by-design automations out of the box.",
  },
];

const plans = [
  { name: "Starter", price: "$0", desc: "Perfect for solo builders and trial projects." },
  { name: "Pro", price: "$24", desc: "For small teams shipping weekly.", popular: true },
  { name: "Enterprise", price: "Custom", desc: "For scale, compliance, and dedicated support." },
];

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_15%_-10%,#6366f144,transparent_36%),radial-gradient(circle_at_95%_0%,#22d3ee33,transparent_30%)] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto grid h-16 w-[92%] max-w-6xl grid-cols-2 items-center md:grid-cols-3">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            NexaFlow
          </a>

          <div className="hidden items-center justify-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#cta" className="hover:text-white">CTA</a>
          </div>

          <div className="hidden justify-self-end md:block">
            <button className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400">
              Get Started
            </button>
          </div>

          <button
            className="justify-self-end rounded-md border border-white/20 p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mx-auto w-[92%] max-w-6xl pb-3 md:hidden">
            <div className="grid gap-2 rounded-xl border border-white/10 bg-slate-900/85 p-3 text-sm text-slate-200">
              <a href="#features" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">Features</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">Pricing</a>
              <a href="#cta" onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-white/10">CTA</a>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto w-[92%] max-w-6xl">
        <section className="py-16 md:py-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1 variants={fadeUp} className="text-4xl font-black leading-tight md:text-6xl">
              Build Faster with an Animated AI Workspace
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
              Plan, execute, and ship with a modern platform designed for momentum. Beautiful interactions, intelligent automation, and team clarity in one place.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button className="rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400">
                Start Free
              </button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-10 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur md:p-6"
          >
            <div className="flex h-[280px] items-center justify-center rounded-xl border border-dashed border-indigo-400/45 bg-slate-900/70 text-slate-400 md:h-[420px]">
              Animated Dashboard Preview
            </div>
          </motion.div>
        </section>

        <section id="features" className="py-12 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Built for speed and scale
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{feature.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="pricing" className="py-12 md:py-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Pricing that grows with you
          </motion.h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-xl border bg-white/5 p-5 backdrop-blur ${plan.popular ? "border-indigo-400/60 ring-1 ring-indigo-400/40" : "border-white/15"}`}
              >
                {plan.popular && (
                  <p className="mb-2 inline-flex rounded-full bg-indigo-400/20 px-2 py-1 text-xs text-indigo-200">
                    Most Popular
                  </p>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-4xl font-black">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-300">{plan.desc}</p>
                <button className={`mt-5 w-full rounded-lg px-4 py-2 text-sm font-semibold ${plan.popular ? "bg-indigo-500 hover:bg-indigo-400" : "border border-white/20 bg-white/5 hover:bg-white/10"}`}>
                  Choose {plan.name}
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="cta" className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 p-6 md:p-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-3xl font-bold text-white md:text-4xl">Ready to launch faster?</h3>
              <p className="mt-2 text-indigo-100">Subscribe for templates, growth playbooks, and product updates.</p>
              <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-10 w-full rounded-md border border-white/35 bg-white/20 px-3 text-white placeholder:text-indigo-100/80 outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                />
                <button className="h-10 rounded-md bg-white px-4 font-semibold text-indigo-700 hover:bg-indigo-50">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 py-10">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NexaFlow. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
