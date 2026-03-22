import React from "react";
import { motion } from "framer-motion";

export default function CultureCard({ icon, title, text, colorClass = "from-brandGreen/20 to-brandCyan/20" }) {
  const Icon = icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${colorClass} p-6`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-200">{text}</p>
    </motion.div>
  );
}