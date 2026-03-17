import React from "react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

export default function FeedbackCard({ name, role, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <StarRating count={4} />
      <p className="mt-4 text-slate-300">“{text}”</p>
      <div className="mt-5">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-brandGreen">{role}</div>
      </div>
    </motion.div>
  );
}