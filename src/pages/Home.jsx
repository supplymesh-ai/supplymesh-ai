import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cpu,
  ShieldCheck,
  Globe2,
  Radar,
  Zap,
  Sparkles,
  Orbit,
  Workflow,
  Truck,
  Landmark,
  BrainCircuit,
  ScanSearch,
  BadgeCheck,
  Layers3
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeedbackCard from "../components/FeedbackCard";
import DashboardPreview from "../components/DashboardPreview";

const coreCards = [
  {
    title: "See everything",
    text: "Track movement, delivery nodes, and operational events across distributed systems.",
    icon: Boxes,
    color: "from-brandGreen/20 to-emerald-500/10"
  },
  {
    title: "Predict early",
    text: "Use AI to detect delays, anomalies, and disruption signals before they escalate.",
    icon: Cpu,
    color: "from-brandCyan/20 to-sky-500/10"
  },
  {
    title: "Build trust",
    text: "Enable verification, auditability, and accountability across workflows.",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-brandBlue/10"
  }
];

const platformAreas = [
  {
    title: "Industrial logistics",
    text: "Visibility and coordination for manufacturers, operators, and enterprise supply flows.",
    icon: Truck
  },
  {
    title: "Government delivery",
    text: "Support last-mile public systems, welfare operations, and trusted field execution.",
    icon: Landmark
  },
  {
    title: "Cross-border trade",
    text: "Create trusted digital records and interoperable infrastructure for global supply chains.",
    icon: Globe2
  },
  {
    title: "Future mobility",
    text: "Extend the platform into drone delivery and cooperative aerial systems with AeroCorridor-6G.",
    icon: Radar
  }
];

const visualBlocks = [
  {
    title: "Intelligence layer",
    desc: "A unified operating layer for visibility, prediction, and verification.",
    icon: BrainCircuit,
    color: "from-brandGreen/20 to-emerald-500/10"
  },
  {
    title: "Workflow orchestration",
    desc: "Turn fragmented operations into cleaner and more coordinated digital workflows.",
    icon: Workflow,
    color: "from-brandCyan/20 to-sky-500/10"
  },
  {
    title: "Trust-first systems",
    desc: "Build transparency, confidence, and accountability into real-world operations.",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-brandBlue/10"
  },
  {
    title: "Scalable infrastructure",
    desc: "Designed to evolve from startup product into deployment-ready infrastructure.",
    icon: Orbit,
    color: "from-orange-500/20 to-yellow-500/10"
  }
];

const missionTiles = [
  "IndiaAI Mission aligned innovation",
  "Make in India product direction",
  "Viksit Bharat 2047 relevance",
  "Digital infrastructure thinking for India 2027 and beyond"
];

const statTiles = [
  { value: "12+", label: "product modules" },
  { value: "4", label: "application tracks" },
  { value: "AI + IoT", label: "core stack" },
  { value: "Gov + Enterprise", label: "deployment relevance" }
];

const valueStrip = [
  {
    title: "Visibility",
    text: "Real-time operational awareness across flows, assets, and delivery systems.",
    icon: ScanSearch
  },
  {
    title: "Prediction",
    text: "AI-supported early signals for delays, disruptions, and intervention planning.",
    icon: Cpu
  },
  {
    title: "Verification",
    text: "Trust-first workflows designed for accountability, compliance, and confidence.",
    icon: BadgeCheck
  },
  {
    title: "Scale",
    text: "Built for logistics, public delivery, and future mobility ecosystems.",
    icon: Layers3
  }
];

function GlowCard({ icon: Icon, title, text, color }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${color} p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-200">{text}</p>
    </motion.div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur-sm">
      <div className="text-lg font-bold leading-tight text-white sm:text-2xl lg:text-[1.9rem]">
        {value}
      </div>
      <div className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
        {label}
      </div>
    </div>
  );
}

function ValueStripCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
        <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-brandGreen/10 blur-3xl" />
        <div className="absolute right-0 top-12 h-44 w-44 rounded-full bg-brandCyan/10 blur-3xl" />

        <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 sm:text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-brandGreen" />
                AI • IoT • Trust Infrastructure • Circular Systems
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                The intelligence layer powering{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  trusted logistics
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                  public delivery
                </span>
                , and{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                  future mobility
                </span>
                .
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                SupplyMesh-AI builds intelligent systems for visibility,
                prediction, verification, and coordination across logistics,
                governance, trade, and next-generation mobility networks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brandGreen to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-brandGreen/10 transition hover:-translate-y-0.5 sm:px-6 sm:text-base"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/products"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:px-6 sm:text-base"
                >
                  View products
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
              >
                {statTiles.map((item) => (
                  <MiniStat key={item.label} value={item.value} label={item.label} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-brandGreen" />
                  Built for logistics, governance, and future mobility
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 }}
            >
              <DashboardPreview />
            </motion.div>
          </div>

          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Visibility
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Real-time signals
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Prediction
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Earlier intervention
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Trust
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Verified workflows
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {coreCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlowCard
                icon={item.icon}
                title={item.title}
                text={item.text}
                color={item.color}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/5 p-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div className="text-sm text-brandGreen">Visibility</div>
            <div className="mt-2 text-lg font-semibold text-white">
              Real-world operational awareness
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div className="text-sm text-brandCyan">Prediction</div>
            <div className="mt-2 text-lg font-semibold text-white">
              AI signals for earlier intervention
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
            <div className="text-sm text-yellow-300">Trust</div>
            <div className="mt-2 text-lg font-semibold text-white">
              Verification-first infrastructure thinking
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Where it applies"
          title="Built for systems where movement, accountability, and intelligence matter"
          subtitle="One platform direction, multiple real-world deployment contexts."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {platformAreas.map((item, i) => {
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

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Platform value"
          title="Designed to look modern, operate intelligently, and scale with ambition"
          subtitle="A cleaner visual expression of what SupplyMesh-AI is building."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visualBlocks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlowCard
                icon={item.icon}
                title={item.title}
                text={item.desc}
                color={item.color}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-brandGreen/10 via-brandCyan/10 to-brandBlue/10 p-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                <Sparkles className="h-4 w-4 text-brandGreen" />
                National relevance
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                Built with India’s next digital decade in mind
              </h3>
              <p className="mt-4 text-slate-300">
                SupplyMesh-AI is aligned with AI-led infrastructure thinking,
                public-good innovation, and trusted intelligent systems across
                logistics and operations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {missionTiles.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div whileHover={{ y: -5 }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Sparkles className="h-7 w-7 text-brandGreen" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Cleaner workflows
            </h3>
            <p className="mt-3 text-slate-300">
              Move from fragmented operations toward clearer, smarter, and more coordinated execution.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Radar className="h-7 w-7 text-brandCyan" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Risk visibility
            </h3>
            <p className="mt-3 text-slate-300">
              Detect what matters earlier with AI-supported monitoring and trust-aware alerting.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Zap className="h-7 w-7 text-yellow-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Deployment thinking
            </h3>
            <p className="mt-3 text-slate-300">
              Designed to evolve from startup software into infrastructure-grade systems with broader relevance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Feedback"
          title="What early supporters say"
          subtitle="Signals of credibility from ecosystem stakeholders, mentors, and reviewers."
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
            text="The platform direction feels ambitious but practical, especially in how it spans logistics, government, and future systems."
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

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-brandGreen/10 via-brandCyan/10 to-brandBlue/10 p-8 text-center md:p-12">
          <h3 className="text-3xl font-semibold text-white md:text-4xl">
            Building systems for India 2047 and beyond
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            SupplyMesh-AI is being shaped as a long-term digital infrastructure company connecting visibility, AI, trust, and coordination across industrial, public, and future mobility ecosystems.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/about"
              className="rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Learn more
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-brandGreen" />
              Why SupplyMesh-AI
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Built for intelligent, trusted, and scalable digital operations
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              SupplyMesh-AI combines visibility, prediction, verification, and
              scalable deployment thinking into one platform direction for
              logistics, public systems, and future mobility.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {valueStrip.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <ValueStripCard
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}