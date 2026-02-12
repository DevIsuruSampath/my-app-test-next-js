"use client";

import { Bot, Gauge, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const features = [
  {
    icon: Bot,
    title: "AI Task Automation",
    text: "Automate repetitive workflows with smart prompts and execution pipelines.",
    className: "md:col-span-2",
  },
  {
    icon: Gauge,
    title: "Realtime Insights",
    text: "Track performance and productivity with fast visual analytics.",
    className: "",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    text: "Built-in guardrails and policy-aware actions for safer delivery.",
    className: "",
  },
  {
    icon: Layers,
    title: "Scalable Integrations",
    text: "Connect tools, APIs, and internal services without friction.",
    className: "md:col-span-2",
  },
];

const plans = [
  { name: "Starter", price: "$0", desc: "For solo builders" },
  { name: "Pro", price: "$29", desc: "For fast-moving teams", popular: true },
  { name: "Enterprise", price: "Custom", desc: "For compliance and scale" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_-10%,#6366f144,transparent_35%),radial-gradient(circle_at_90%_0%,#0ea5e944,transparent_35%)] bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto grid h-16 w-[92%] max-w-6xl grid-cols-2 items-center md:grid-cols-3">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            NexaFlow
          </div>
          <div className="hidden items-center justify-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="justify-self-end">
            <Button size="sm">Get Started</Button>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-[92%] max-w-6xl">
        <section className="py-16 md:py-24">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Scale your Workflow with AI
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
              Build faster, automate smarter, and ship confidently with a modern workspace built for high-performance teams.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className="mt-10 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur-md md:p-6"
          >
            <div className="h-[300px] rounded-xl border border-dashed border-indigo-400/40 bg-slate-900/70 md:h-[420px] flex items-center justify-center text-slate-400">
              Dashboard Screenshot Placeholder
            </div>
          </motion.div>
        </section>

        <section id="features" className="py-12 md:py-16">
          <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
            Built for modern teams
          </motion.h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                  className={feature.className}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.text}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-16">
          <motion.h2 {...fadeUp} className="text-3xl font-bold md:text-4xl">
            Pricing that scales
          </motion.h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div key={plan.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <Card className={plan.popular ? "border-indigo-400/60 ring-1 ring-indigo-400/40" : ""}>
                  <CardHeader>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-black">{plan.price}</p>
                    <Button className="mt-5 w-full" variant={plan.popular ? "default" : "outline"}>
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <motion.div
            {...fadeUp}
            className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-6 md:p-10"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-3xl font-bold text-white md:text-4xl">Stay in the loop</h3>
              <p className="mt-2 text-indigo-100">
                Get product updates, launch templates, and practical growth playbooks.
              </p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="border-white/35 bg-white/20 text-white placeholder:text-indigo-100/80"
                />
                <Button variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
