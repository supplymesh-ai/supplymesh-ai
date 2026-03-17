import React from "react";
import { motion } from "framer-motion";

export default function InteractiveMetricCard({ title, value, text }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
    >
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-2 text-3xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{text}</div>
    </motion.div>
  );
}