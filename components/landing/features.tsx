"use client";

import { Bot, Gauge, Layers, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { fadeUp } from "@/components/landing/motion-presets";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    text: "Track performance and productivity with instant visual analytics.",
    className: "",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    text: "Policy-aware actions and built-in safeguards for confident delivery.",
    className: "",
  },
  {
    icon: Layers,
    title: "Composable Integrations",
    text: "Connect internal tools and APIs with scalable, reusable flows.",
    className: "md:col-span-2",
  },
];

export function LandingFeatures() {
  const prefersReducedMotion = useReducedMotion();
  const motionTransition = prefersReducedMotion ? { duration: 0 } : fadeUp.transition;

  return (
    <section id="features" className="scroll-mt-24 py-12 md:py-16" aria-labelledby="features-title">
      <motion.h2
        {...fadeUp}
        transition={motionTransition}
        id="features-title"
        className="text-3xl font-bold text-white md:text-4xl"
      >
        Bento-ready features for high output teams
      </motion.h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.li
              key={feature.title}
              {...fadeUp}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { ...fadeUp.transition, delay: index * 0.07 }
              }
              className={feature.className}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.text}</CardDescription>
                </CardHeader>
              </Card>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
