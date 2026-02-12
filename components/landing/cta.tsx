"use client";

import { motion, useReducedMotion } from "motion/react";
import { FormEvent, useState } from "react";

import { fadeUp } from "@/components/landing/motion-presets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LandingCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  const motionProps = {
    ...fadeUp,
    transition: prefersReducedMotion ? { duration: 0 } : fadeUp.transition,
  };

  return (
    <section id="cta" className="scroll-mt-24 py-16" aria-labelledby="newsletter-title">
      <motion.div
        {...motionProps}
        className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 p-6 md:p-10"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h3 id="newsletter-title" className="text-3xl font-bold text-white md:text-4xl">
            Build faster, starting this week
          </h3>
          <p className="mt-2 text-indigo-100">
            Join builders getting weekly templates, launch playbooks, and AI workflow patterns.
          </p>

          <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={onSubmit} noValidate>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border-white/35 bg-white/20 text-white placeholder:text-indigo-100/80"
            />
            <Button type="submit" variant="secondary" className="bg-white text-indigo-700 hover:bg-indigo-50">
              Subscribe
            </Button>
          </form>

          <p aria-live="polite" className="mt-3 min-h-5 text-sm text-indigo-100/95">
            {submitted ? "Thanks! You’re subscribed and will hear from us soon." : ""}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
