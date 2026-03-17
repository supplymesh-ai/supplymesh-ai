import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function ProjectAeroCorridor() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Project Detail"
        title="AeroCorridor-6G"
        subtitle="A sensing-driven intelligence layer for cooperative, secure, and autonomous aerial mobility."
      />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img
          src={`${import.meta.env.BASE_URL}project-aerocorridor.png`}
          alt="AeroCorridor-6G"
          className="h-72 w-full object-cover"
        />
        <div className="p-6">
          <p className="text-xl font-medium text-slate-200">
            “A single intelligent network layer that organizes the sky.”
          </p>

          <p className="mt-4 text-slate-300">
            AeroCorridor-6G enables drones, fleets, and future air taxis to fly cooperatively,
            securely, and autonomously using sensing-driven intelligence rather than relying only
            on GPS or cameras. The concept is aimed at future aerial coordination infrastructure,
            autonomous route intelligence, and high-density sky-network organization.
          </p>

          <p className="mt-3 text-slate-300">
            The project explores how intelligent network layers, cooperative sensing, and secure
            orchestration can support the next era of urban and industrial aerial mobility.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/50 p-5">
            <h3 className="text-xl font-semibold text-white">Pitch Deck & Documentation</h3>
            <p className="mt-3 text-slate-300">
              Access the latest project deck and supporting concept documentation below.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`${import.meta.env.BASE_URL}pitchdeck.pdf`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10"
              >
                View Pitch Deck
              </a>
              <a
                href={`${import.meta.env.BASE_URL}documentation.pdf`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}