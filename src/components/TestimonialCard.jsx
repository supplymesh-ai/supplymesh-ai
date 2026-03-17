import React from "react";

export default function TestimonialCard({ name, role, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-slate-300">“{text}”</p>
      <div className="mt-4">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-brandGreen">{role}</div>
      </div>
    </div>
  );
}