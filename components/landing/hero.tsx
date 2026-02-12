"use client";

import { motion, useReducedMotion } from "motion/react";

import { fadeUp } from "@/components/landing/motion-presets";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = {
    ...fadeUp,
    transition: prefersReducedMotion ? { duration: 0 } : fadeUp.transition,
  };

  return (
    <section className="scroll-mt-24 py-16 md:py-24" aria-labelledby="hero-title">
      <motion.div {...motionProps} className="mx-auto max-w-3xl text-center">
        <h1 id="hero-title" className="text-4xl font-black leading-tight text-white md:text-6xl">
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

      <motion.figure
        {...motionProps}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { ...fadeUp.transition, delay: 0.14 }
        }
        className="mt-10 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-4 backdrop-blur-md md:p-6"
      >
        <div className="flex h-[300px] items-center justify-center rounded-xl border border-dashed border-indigo-400/40 bg-slate-900/70 text-slate-400 md:h-[430px]">
          Dashboard Screenshot Placeholder
        </div>
        <figcaption className="sr-only">Product dashboard preview placeholder</figcaption>
      </motion.figure>
    </section>
  );
}
