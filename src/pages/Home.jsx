import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cpu,
  ShieldCheck,
  Building2,
  Globe2,
  Radar,
  Zap,
  Layers3,
  Sparkles,
  Orbit
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeedbackCard from "../components/FeedbackCard";
import DashboardPreview from "../components/DashboardPreview";

const coreCards = [
  {
    title: "See everything",
    text: "Track critical events, nodes, and movement across distributed operations.",
    icon: Boxes,
    color: "from-brandGreen/20 to-emerald-500/10"
  },
  {
    title: "Predict early",
    text: "Use AI to detect delays, anomalies, and operational risks before they escalate.",
    icon: Cpu,
    color: "from-brandCyan/20 to-sky-500/10"
  },
  {
    title: "Build trust",
    text: "Enable verification, auditability, and confidence across multi-stakeholder workflows.",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-brandBlue/10"
  }
];

const applications = [
  {
    title: "Industrial logistics",
    text: "Smarter visibility and coordination for manufacturing and enterprise supply chains.",
    icon: Building2
  },
  {
    title: "Government delivery",
    text: "Support last-mile public systems, welfare operations, and trusted field execution.",
    icon: Layers3
  },
  {
    title: "Cross-border trade",
    text: "Trusted infrastructure for verifiable digital trade and supply records.",
    icon: Globe2
  },
  {
    title: "Future mobility",
    text: "AeroCorridor-6G extends the platform into drone delivery and aerial coordination.",
    icon: Radar
  }
];

const visualBlocks = [
  {
    title: "Intelligent visibility",
    desc: "Monitor movement, nodes, and operational states through a more unified system view.",
    icon: Boxes,
    color: "from-brandGreen/20 to-emerald-500/10"
  },
  {
    title: "AI-driven decision support",
    desc: "Predict delays, detect anomalies, and raise early warning signals before disruption escalates.",
    icon: Cpu,
    color: "from-brandCyan/20 to-sky-500/10"
  },
  {
    title: "Trusted operations",
    desc: "Build verifiable event records and confidence-driven workflows across stakeholders.",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-brandBlue/10"
  },
  {
    title: "Future-ready systems",
    desc: "Extend from ground logistics to public delivery and future mobility ecosystems.",
    icon: Orbit,
    color: "from-orange-500/20 to-yellow-500/10"
  }
];

const missionTiles = [
  "IndiaAI Mission aligned innovation",
  "Make in India focused product direction",
  "Viksit Bharat 2047 long-term relevance",
  "Digital infrastructure thinking for India 2027 and beyond"
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-brandGreen" />
              AI • IoT • Trust Infrastructure • Circular Systems
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Intelligent systems for trusted movement, delivery, and coordination.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              SupplyMesh-AI builds visibility, prediction, and trust layers for
              logistics, public systems, industrial operations, and future mobility
              networks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px]"
              >
                Explore projects <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/products"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                View products
              </Link>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Deep-tech startup
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Government + enterprise relevance
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Built for India’s digital future
              </span>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>

      {/* CORE VALUE CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {coreCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} p-6`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-200">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* APPLICATION AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Where it applies"
          title="One platform, multiple future-facing directions"
          subtitle="Designed for industrial operations today and broader trust infrastructure tomorrow."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <Icon className="h-7 w-7 text-brandGreen" />
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PRETTY VISUAL REPLACEMENT */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Visual platform value"
          title="Built to feel modern, modular, and future-ready"
          subtitle="A cleaner way to understand what the platform enables."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visualBlocks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.01 }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} p-6`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-200">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MINI VISUAL STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <Sparkles className="h-7 w-7 text-brandGreen" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Cleaner workflows
            </h3>
            <p className="mt-3 text-slate-300">
              Fewer silos, more signal. Turn fragmented operations into clearer
              digital workflows.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <Radar className="h-7 w-7 text-brandCyan" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Risk visibility
            </h3>
            <p className="mt-3 text-slate-300">
              Detect what matters earlier with AI-supported monitoring and
              trust-aware alerts.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <Zap className="h-7 w-7 text-yellow-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Deployment thinking
            </h3>
            <p className="mt-3 text-slate-300">
              Designed to evolve from startup software into infrastructure-grade
              systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NATIONAL RELEVANCE */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="National relevance"
          title="Built with India’s next digital decade in mind"
          subtitle="More than a product — a long-term infrastructure direction."
          center
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {missionTiles.map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-slate-300">{item}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Feedback"
          title="What early supporters say"
          subtitle="Signals of credibility from mentors, reviewers, and ecosystem stakeholders."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeedbackCard
            name="Industry Mentor"
            role="Supply Chain Advisor"
            text="SupplyMesh-AI stands out by connecting visibility, trust, and decision intelligence in one coherent platform."
          />
          <FeedbackCard
            name="Innovation Reviewer"
            role="Startup Ecosystem"
            text="The product direction feels ambitious but practical, especially in how it spans logistics, government, and future systems."
          />
          <FeedbackCard
            name="Academic Perspective"
            role="Technology Evaluation"
            text="This is not just another dashboard idea; it shows systems-level thinking and a credible deep-tech direction."
          />
          <FeedbackCard
            name="Potential Pilot Stakeholder"
            role="Operations View"
            text="The modular architecture makes it easy to imagine pilots in industrial and public delivery environments."
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 lg:px-8 lg:pb-24">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-brandGreen/10 via-brandCyan/10 to-brandBlue/10 p-8 text-center">
          <Zap className="mx-auto h-10 w-10 text-brandGreen" />
          <h3 className="mt-4 text-3xl font-semibold text-white">
            Building systems for India 2047 and beyond
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            SupplyMesh-AI is being shaped as a long-term digital infrastructure
            company — connecting visibility, AI, trust, and coordination across
            industrial, public, and future mobility ecosystems.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950"
            >
              Learn more
            </Link>
            <Link
              to="/blog"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              Read our blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}