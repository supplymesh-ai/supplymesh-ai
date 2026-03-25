import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Brain,
  Network,
  ShieldCheck,
  Globe2,
  Radar,
  Landmark,
  ArrowUpRight
} from "lucide-react";

const missionThemes = [
  "IndiaAI Mission aligned digital intelligence for public-good and enterprise systems",
  "Viksit Bharat oriented infrastructure thinking for 2027 and beyond",
  "Responsible AI and scalable supply intelligence for real-world deployment",
  "Cross-sector product vision across logistics, governance, trade, and future mobility",
  "Deep-tech execution through AI, IoT, trust architecture, and deployment-first product design"
];

const buildAreas = [
  {
    title: "AI-driven intelligence",
    text: "Prediction, anomaly detection, operational signals, and smarter coordination layers.",
    icon: Brain
  },
  {
    title: "IoT-connected systems",
    text: "Field visibility, sensor-linked infrastructure, and real-world operational monitoring.",
    icon: Network
  },
  {
    title: "Trust architecture",
    text: "Verification, auditability, blockchain-ready workflows, and transparent event trails.",
    icon: ShieldCheck
  },
  {
    title: "Global-ready infrastructure",
    text: "Built for enterprise logistics, governance systems, cross-border trade, and future mobility.",
    icon: Globe2
  }
];

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-brandGreen/10 via-brandCyan/10 to-brandBlue/10 p-8 md:p-12">
        <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-brandGreen/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-brandCyan/10 blur-3xl" />

        <SectionTitle
          eyebrow="About"
          title="Building the intelligence layer for trusted movement, delivery, and infrastructure systems"
          subtitle="SupplyMesh-AI is a deep-tech startup focused on building intelligent, transparent, and trusted systems for logistics, industry, governance, trade, and future mobility."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
            AI-powered supply intelligence
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
            IoT and trust-first infrastructure
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
            Built for India and globally scalable systems
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3">
            <Radar className="h-5 w-5 text-brandGreen" />
            <h3 className="text-xl font-semibold text-white">Vision</h3>
          </div>
          <p className="mt-4 text-slate-300">
            We envision a future where supply systems are not only efficient,
            but intelligent, transparent, and self-improving. SupplyMesh-AI is
            being built as the digital intelligence layer that connects
            operations, trust, and decision-making across industries and public systems.
          </p>
          <p className="mt-4 text-slate-300">
            From industrial logistics and governance delivery networks to
            cross-border digital trade and drone-based mobility systems, our
            platform is designed for long-term infrastructure relevance.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex items-center gap-3">
            <Landmark className="h-5 w-5 text-brandCyan" />
            <h3 className="text-xl font-semibold text-white">Mission</h3>
          </div>
          <p className="mt-4 text-slate-300">
            SupplyMesh-AI aims to build intelligent network systems for trusted
            logistics, transparent operations, public-good delivery, and
            future-ready infrastructure aligned with India’s digital growth.
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
        </motion.div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="mt-12">
        <SectionTitle
          eyebrow="What we build"
          title="A multi-layer product direction across intelligence, trust, and real-world systems"
          subtitle="SupplyMesh-AI is not being shaped as just another software tool — it is being built as a platform capable of supporting real deployment environments."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buildAreas.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brandGreen/20 to-brandCyan/20 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mt-12">
        <SectionTitle
          eyebrow="Leadership"
          title="The people shaping the SupplyMesh-AI vision"
          subtitle="A mission-led team focused on building practical, scalable, and high-trust systems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-brandGreen/10 to-brandBlue/10 p-6"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={`${import.meta.env.BASE_URL}founder.png`}
                alt="Mrigank Jaiswal"
                className="h-40 w-40 rounded-full border border-white/10 object-cover"
              />
              <h4 className="mt-4 text-2xl font-semibold text-white">
                Mrigank Jaiswal
              </h4>
              <p className="text-sm font-medium text-brandGreen">
                Co-Founder
              </p>
              <p className="mt-4 max-w-xl text-slate-300">
                Driving the strategic vision and system architecture of
                SupplyMesh-AI, with a focus on AI-driven infrastructure,
                scalable product systems, and intelligent supply networks across
                enterprise, governance, and future mobility use cases.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-brandCyan/10 p-6"
          >
            <div className="flex flex-col items-center text-center">
               <img
                src={`${import.meta.env.BASE_URL}divyansh.png`}
                alt="Divyansh Jaiswal"
                className="h-40 w-40 rounded-full border border-white/10 object-cover"
              />
              <h4 className="mt-4 text-2xl font-semibold text-white">
                Divyansh Jaiswal
              </h4>
              <p className="text-sm font-medium text-brandCyan">
                Director & Chairman
              </p>
              <p className="mt-4 max-w-xl text-slate-300">
                Leading the IoT and blockchain initiatives at SupplyMesh-AI,
                while also driving SupplyMesh Finance. His focus is on building
                trusted infrastructure systems, decentralized operational
                workflows, and real-world financial intelligence layers for
                supply ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY SUPPLYMESH */}
      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-2xl font-semibold text-white">Why SupplyMesh-AI</h3>
        <p className="mt-4 text-slate-300">
          We are not building just another logistics application. SupplyMesh-AI
          is being designed as an intelligence layer that connects movement,
          trust, monitoring, and decision-making across real-world systems.
        </p>
        <p className="mt-4 text-slate-300">
          The platform direction spans industrial logistics, public system
          delivery, trusted trade workflows, and future air mobility — making it
          relevant not just for today’s operations, but for the next decade of
          digital infrastructure.
        </p>
      </section>

      {/* MORE INFORMATION */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-white">More Information</h3>
        <p className="mt-3 text-slate-300">
          Explore the latest pitch deck, technical documentation, and project
          pages to understand the broader vision, architecture, and deployment
          direction of SupplyMesh-AI.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View projects <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Read blog <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}