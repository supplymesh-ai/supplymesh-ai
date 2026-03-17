import React from "react";

export default function PricingCard({ title, price, features, highlight = false }) {
  return (
    <div
      className={`rounded-3xl border p-6 ${
        highlight
          ? "border-brandGreen bg-brandGreen/10"
          : "border-white/10 bg-white/5"
      }`}
    >
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-3 text-3xl font-bold text-brandGreen">{price}</div>
      <ul className="mt-5 space-y-3 text-slate-300">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
    </div>
  );
}