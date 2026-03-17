import React from "react";
import SectionTitle from "../components/SectionTitle";

const missionThemes = [
  "IndiaAI Mission aligned digital intelligence for public-good and enterprise systems",
  "Viksit Bharat oriented infrastructure thinking for 2027 and beyond",
  "Responsible AI and scalable supply intelligence for real-world deployment",
  "Cross-sector product vision across logistics, governance, trade, and future mobility",
  "Deep-tech execution through AI, IoT, trust architecture, and deployment-first product design"
];

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="About"
        title="About SupplyMesh-AI"
        subtitle="A deep-tech startup building intelligent, transparent, and trusted systems for the future of operations."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Mission</h3>
          <p className="mt-3 text-slate-300">
            SupplyMesh-AI aims to build the intelligent network layer for trusted logistics, transparent operations, and scalable decision systems across industry and public ecosystems.
          </p>

          <div className="mt-5 space-y-3">
            {missionThemes.map((theme) => (
              <div
                key={theme}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-slate-300"
              >
                {theme}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">Founder</h3>
          <div className="mt-6 flex flex-col items-center text-center">
            <img
              src={`${import.meta.env.BASE_URL}founder.png`}
              alt="Mrigank Jaiswal"
              className="h-40 w-40 rounded-full border border-white/10 object-cover"
            />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Mrigank Jaiswal
            </h4>
            <p className="text-sm text-brandGreen">Founder • SupplyMesh-AI</p>
            <p className="mt-3 max-w-xl text-slate-300">
              Building AI, IoT, and trust-centric systems at the intersection of supply intelligence, industrial operations, and public digital infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-white">More Information</h3>
        <p className="mt-3 text-slate-300">
          Explore the latest pitch deck and supporting documentation for deeper context.
        </p>
        
      </div>
    </main>
  );
}