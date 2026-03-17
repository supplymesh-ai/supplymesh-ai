import React from "react";
import SectionTitle from "../components/SectionTitle";
import { faqs } from "../data/faq";

export default function FAQ() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Clear answers for partners, evaluators, and future users."
        center
      />

      <div className="grid gap-5 md:grid-cols-2">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <h3 className="text-lg font-semibold text-white">{item.q}</h3>
            <p className="mt-3 text-slate-300">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}