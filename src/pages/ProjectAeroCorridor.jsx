import React from "react";
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight, Radar, ShieldCheck, Network, BrainCircuit } from "lucide-react";

export default function ProjectAeroCorridor() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
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

        <div className="p-6 md:p-8">
          <p className="text-xl font-medium text-slate-200">
            “A single intelligent network layer that organizes the sky.”
          </p>

          <p className="mt-4 text-slate-300">
            AeroCorridor-6G extends the SupplyMesh-AI vision into drone delivery and
            future air mobility systems. It is designed as a sensing-driven intelligence
            layer that enables drones, fleets, and future aerial platforms to move
            cooperatively, securely, and autonomously.
          </p>

          <p className="mt-3 text-slate-300">
            Instead of relying only on GPS or camera-centric control, AeroCorridor-6G
            explores how intelligent network layers, cooperative sensing, and trusted
            coordination can support the next generation of urban, industrial, and
            mission-critical aerial mobility systems.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <Radar className="h-6 w-6 text-brandGreen" />
              <h3 className="mt-3 text-lg font-semibold text-white">Sensing-first intelligence</h3>
              <p className="mt-2 text-sm text-slate-300">
                Designed around cooperative sensing and network awareness rather than basic point navigation.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <Network className="h-6 w-6 text-brandCyan" />
              <h3 className="mt-3 text-lg font-semibold text-white">Coordinated sky networks</h3>
              <p className="mt-2 text-sm text-slate-300">
                Aims to organize drones and future air vehicles as part of one intelligent corridor system.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <ShieldCheck className="h-6 w-6 text-purple-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">Secure coordination</h3>
              <p className="mt-2 text-sm text-slate-300">
                Explores trusted communication and safe routing for higher-confidence aerial operations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
              <BrainCircuit className="h-6 w-6 text-yellow-300" />
              <h3 className="mt-3 text-lg font-semibold text-white">Future mobility relevance</h3>
              <p className="mt-2 text-sm text-slate-300">
                Positioned for drone logistics, air corridors, and future intelligent mobility ecosystems.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-brandGreen/10 to-brandCyan/10 p-6">
            <h3 className="text-2xl font-semibold text-white">Visit the AeroCorridor-6G project site</h3>
            <p className="mt-3 max-w-3xl text-slate-300">
              Explore the dedicated AeroCorridor-6G website for the concept vision,
              positioning, and project presentation.
            </p>

            <a
              href="https://supplymesh-ai.github.io/aerrocorridor-6g-site/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px]"
            >
              Open AeroCorridor Website <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}