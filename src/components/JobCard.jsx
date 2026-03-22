import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function JobCard({ title, type, mode, desc, skills }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          {type}
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          {mode}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-sm text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        to={`/apply?role=${encodeURIComponent(title)}`}
        className="mt-6 inline-flex rounded-2xl bg-brandGreen px-4 py-2 text-sm font-semibold text-slate-950"
      >
        Apply Now
      </Link>
    </motion.div>
  );
}