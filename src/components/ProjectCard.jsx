import React from "react";

export default function ProjectCard({ image, title, summary, status }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-6">
        <div className="text-sm text-brandGreen">{status}</div>
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-slate-300">{summary}</p>
      </div>
    </div>
  );
}