import React from "react";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow ? (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 sm:text-sm ${
            center ? "mx-auto" : ""
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-brandGreen" />
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] ${
          center ? "mx-auto max-w-4xl" : "max-w-4xl"
        }`}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={`mt-4 text-base leading-8 text-slate-300 sm:text-lg ${
            center ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}