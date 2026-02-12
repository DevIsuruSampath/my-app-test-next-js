"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp } from "@/components/landing/motion-presets";

export function LandingCta() {
  return (
    <section id="cta" className="py-16">
      <motion.div
        {...fadeUp}
        className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 p-6 md:p-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-bold text-white md:text-4xl">Build faster, starting this week</h3>
          <p className="mt-2 text-indigo-100">
            Join builders getting weekly templates, launch playbooks, and AI workflow patterns.
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
  );
}
