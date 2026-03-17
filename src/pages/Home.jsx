import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Cpu,
  ShieldCheck,
  Recycle,
  Network,
  Zap,
  Radar,
  Globe,
  Building2
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeedbackCard from "../components/FeedbackCard";
import InteractiveMetricCard from "../components/InteractiveMetricCard";

const missionPoints = [
  "AI for responsible, scalable and deployable public-good systems",
  "Digital infrastructure for logistics, trust, and decision intelligence",
  "Industry-grade AI aligned with India’s innovation and growth priorities",
  "Modular supply intelligence for MSMEs, enterprises, and government systems"
];

const modules = [
  {
    title: "Visibility Layer",
    desc: "Capture live field events, shipment movement, warehouse status, and operational checkpoints.",
    icon: Boxes
  },
  {
    title: "Prediction Layer",
    desc: "Use AI to forecast delays, disruptions, anomalies, and supply risks before they impact operations.",
    icon: Cpu
  },
  {
    title: "Trust Layer",
    desc: "Enable verification-first workflows, audit trails, and blockchain-ready event confidence.",
    icon: ShieldCheck
  },
  {
    title: "Circular Layer",
    desc: "Support reverse logistics, returns, take-back workflows, and recovery intelligence.",
    icon: Recycle
  },
  {
    title: "Integration Layer",
    desc: "Connect with enterprise tools, APIs, logistics software, and future public infrastructure systems.",
    icon: Network
  },
  {
    title: "Future Systems Layer",
    desc: "Expand toward public delivery systems, trusted cross-border trade, and cooperative air mobility.",
    icon: Globe
  }
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-brandGreen" />
              AI • IoT • Trust Infrastructure • Circular Supply Systems
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              One intelligent network layer for{" "}
              <span className="text-brandCyan">trusted</span>,{" "}
              <span className="text-brandGreen">visible</span>, and{" "}
              <span className="text-emerald-300">scalable</span> supply systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              SupplyMesh-AI builds digital infrastructure for logistics visibility,
              AI-powered risk intelligence, trusted event verification, circular
              operations, and future-ready public or industrial supply systems.
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
              <Link
                to="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Book a discussion
              </Link>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 px-3 py-1">
                Deep-tech startup
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                Multi-sector deployment vision
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1">
                IndiaAI-aligned innovation
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-glow"
          >
            <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm text-brandGreen">Platform snapshot</div>
                  <div className="text-lg font-semibold text-white">
                    Intelligent supply operations cockpit
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Live concept view
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <InteractiveMetricCard
                  title="Tracked nodes"
                  value="128"
                  text="Warehouses, dispatch points, and field touchpoints."
                />
                <InteractiveMetricCard
                  title="Predicted delay risk"
                  value="14%"
                  text="Early warning before supply disruption compounds."
                />
                <InteractiveMetricCard
                  title="Trust alerts"
                  value="09"
                  text="Verification-focused signals for abnormal operations."
                />
                <InteractiveMetricCard
                  title="Verified events"
                  value="2.1k"
                  text="Critical movement milestones and delivery records."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="IndiaAI Mission alignment"
          title="Why SupplyMesh-AI matters in India’s next digital growth phase"
          subtitle="Our platform direction aligns with responsible AI, industrial transformation, and public-good digital infrastructure."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {missionPoints.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-slate-300">{point}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Core layers"
          title="A modular stack for intelligent supply visibility and trust"
          subtitle="Designed to evolve from logistics software to national-scale digital trust infrastructure."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((item, i) => {
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brandGreen/20 to-brandCyan/20 text-brandGreen">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Radar className="h-7 w-7 text-brandGreen" />
            <h3 className="mt-4 text-xl font-semibold text-white">AI Risk Radar</h3>
            <p className="mt-3 text-slate-300">
              Anticipates disruptions, unusual behavior, route-level anomalies, and delivery failure signals.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Building2 className="h-7 w-7 text-brandCyan" />
            <h3 className="mt-4 text-xl font-semibold text-white">Gov + Enterprise Ready</h3>
            <p className="mt-3 text-slate-300">
              Structured for industrial deployments today and public-system use cases tomorrow.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Zap className="h-7 w-7 text-yellow-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">Deployment Focused</h3>
            <p className="mt-3 text-slate-300">
              Built around practical workflows, scalable APIs, and field deployment thinking rather than theory alone.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Feedback"
          title="What early supporters say"
          subtitle="Signals of quality, relevance, and founder conviction."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeedbackCard
            name="Industry Mentor"
            role="Supply Chain Advisor"
            text="SupplyMesh-AI stands out by connecting logistics visibility with trust and decision intelligence."
          />
          <FeedbackCard
            name="Innovation Reviewer"
            role="Startup Ecosystem"
            text="The platform feels thoughtfully designed for both industrial use and future public-system deployment."
          />
          <FeedbackCard
            name="Academic Perspective"
            role="Technology Evaluation"
            text="This is not just another dashboard idea; it has strong systems-level thinking behind it."
          />
          <FeedbackCard
            name="Potential Pilot Stakeholder"
            role="Operations View"
            text="The modular architecture makes it easier to imagine pilots in logistics, manufacturing, and governance."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 lg:px-8 lg:pb-24">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-brandGreen/10 to-brandCyan/10 p-8 text-center">
          <h3 className="text-3xl font-semibold text-white">
            Building systems for India 2027 and beyond
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            From industrial supply intelligence to public delivery trust and future
            aerial coordination networks, SupplyMesh-AI is being shaped as a long-term
            digital infrastructure company.
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