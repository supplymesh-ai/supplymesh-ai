import React from "react";

export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
        <span className="h-2 w-2 rounded-full bg-brandGreen" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-3 text-slate-300 ${center ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}