"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/components/landing/motion-presets";

export function LandingHero() {
  return (
    <section className="py-16 md:py-24">
      <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
          Scale your Workflow with AI
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300 md:text-lg">
          Automate repetitive tasks, align teams faster, and ship high-quality work with a cohesive AI-native workspace.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Start Free</Button>
          <Button size="lg" variant="outline">Book Demo</Button>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.14 }}
        className="mt-10 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur-md md:p-6"
      >
        <div className="flex h-[300px] items-center justify-center rounded-xl border border-dashed border-indigo-400/40 bg-slate-900/70 text-slate-400 md:h-[430px]">
          Dashboard Screenshot Placeholder
        </div>
      </motion.div>
    </section>
  );
}
