import React from "react";
import { motion } from "framer-motion";

export default function PricingStackCard({
  type,
  title,
  subtitle,
  plans,
  accent = "brandGreen"
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className={`text-sm font-semibold text-${accent}`}>{type}</div>
      <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{subtitle}</p>

      <div className="mt-6 grid gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-white">{plan.name}</div>
                <div className="text-sm text-slate-400">{plan.target}</div>
              </div>
              <div className="text-xl font-bold text-brandGreen">{plan.price}</div>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}