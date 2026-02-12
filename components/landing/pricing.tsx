"use client";

import { motion, useReducedMotion } from "motion/react";

import { fadeUp } from "@/components/landing/motion-presets";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  { name: "Starter", price: "$0", desc: "For solo builders" },
  { name: "Pro", price: "$29", desc: "For fast-moving teams", popular: true },
  { name: "Enterprise", price: "Custom", desc: "For scale and compliance" },
];

export function LandingPricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="pricing" className="scroll-mt-24 py-12 md:py-16" aria-labelledby="pricing-title">
      <motion.h2
        {...fadeUp}
        transition={prefersReducedMotion ? { duration: 0 } : fadeUp.transition}
        id="pricing-title"
        className="text-3xl font-bold text-white md:text-4xl"
      >
        Pricing that grows with your workflow
      </motion.h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            {...fadeUp}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { ...fadeUp.transition, delay: i * 0.08 }
            }
          >
            <Card className={plan.popular ? "border-indigo-400/60 ring-1 ring-indigo-400/40" : ""}>
              <CardHeader>
                {plan.popular ? (
                  <span className="mb-2 inline-flex w-fit rounded-full bg-indigo-400/20 px-2 py-1 text-xs font-medium text-indigo-200">
                    Most Popular
                  </span>
                ) : null}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-black text-white">
                  {plan.price}
                  {plan.price.startsWith("$") ? (
                    <span className="ml-1 text-sm font-medium text-slate-300">/month</span>
                  ) : null}
                </p>
                <Button className="mt-5 w-full" variant={plan.popular ? "default" : "outline"}>
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
