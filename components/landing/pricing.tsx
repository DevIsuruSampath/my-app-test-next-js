"use client";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeUp } from "@/components/landing/motion-presets";

const plans = [
  { name: "Starter", price: "$0", desc: "For solo builders" },
  { name: "Pro", price: "$29", desc: "For fast-moving teams", popular: true },
  { name: "Enterprise", price: "Custom", desc: "For scale and compliance" },
];

export function LandingPricing() {
  return (
    <section id="pricing" className="py-12 md:py-16">
      <motion.h2 {...fadeUp} className="text-3xl font-bold text-white md:text-4xl">
        Pricing that grows with your workflow
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
                <p className="text-4xl font-black text-white">{plan.price}</p>
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
