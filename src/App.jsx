import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Linkedin,
  Boxes,
  Cpu,
  ShieldCheck,
  Recycle,
  Search,
  CalendarDays,
  Building2,
  Truck,
  Factory,
  Leaf,
  Network,
  Zap,
  CheckCircle2
} from "lucide-react";

const nav = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Use Cases", href: "#usecases" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

const products = [
  {
    title: "SupplyMesh Track™",
    desc: "Real-time shipment, asset, and lifecycle visibility across distributed supply networks.",
    icon: Boxes
  },
  {
    title: "SupplyMesh Predict™",
    desc: "AI-powered ETA, delay, disruption, and supply risk prediction for proactive decisions.",
    icon: Cpu
  },
  {
    title: "SupplyMesh Verify™",
    desc: "Trusted event validation and proof-of-delivery workflows for higher operational confidence.",
    icon: ShieldCheck
  },
  {
    title: "SupplyMesh Return™",
    desc: "Reverse logistics and circular recovery intelligence for take-back, reuse, and returns.",
    icon: Recycle
  },
  {
    title: "SupplyMesh Connect™",
    desc: "APIs and integration pathways for ERP, logistics systems, and ecosystem partners.",
    icon: Network
  },
  {
    title: "SupplyMesh Green™",
    desc: "Waste-reduction and sustainability intelligence aligned with circular economy goals.",
    icon: Leaf
  }
];

const techStack = [
  {
    title: "AI Prediction Engine",
    desc: "Delay risk, ETA forecasting, anomaly detection, and operational intelligence."
  },
  {
    title: "IoT / Edge Layer",
    desc: "Smart tags, edge gateways, event capture, and distributed monitoring."
  },
  {
    title: "Trust & Verification Layer",
    desc: "Proof-of-event logic, validation workflows, auditability, and future smart workflows."
  },
  {
    title: "API & Enterprise Integration",
    desc: "Interoperability with ERP tools, logistics software, and future finance/compliance systems."
  }
];

const useCases = [
  {
    title: "Manufacturing MSMEs",
    desc: "Track supplier flows, detect delays early, and improve production resilience.",
    icon: Factory
  },
  {
    title: "Logistics & 3PL Operators",
    desc: "Improve route visibility, event traceability, and service reliability.",
    icon: Truck
  },
  {
    title: "Circular Fashion & Textiles",
    desc: "Support transparent sourcing, returns intelligence, and reverse flow enablement.",
    icon: Building2
  },
  {
    title: "Sustainable Operations Teams",
    desc: "Create data-driven waste reduction and responsible consumption workflows.",
    icon: Leaf
  }
];

const researchPosts = [
  {
    title: "Why circular supply chains need intelligence, not spreadsheets",
    tag: "Research Note",
    date: "March 2026",
    summary:
      "A founder perspective on why reverse logistics, traceability, and predictive visibility must converge for responsible consumption."
  },
  {
    title: "Designing trust in proof-of-delivery systems",
    tag: "Architecture",
    date: "March 2026",
    summary:
      "How event validation, edge capture, and workflow confidence can reduce disputes and improve operational reliability."
  },
  {
    title: "MSME-ready supply tech for Tier-II and Tier-III India",
    tag: "Field Insight",
    date: "March 2026",
    summary:
      "What practical design decisions matter when building deep-tech systems for real-world operations."
  }
];

const roadmap = [
  {
    phase: "Phase 01",
    title: "Prototype and core architecture validation",
    desc: "AI logic, visibility stack, event validation, and core product workflow."
  },
  {
    phase: "Phase 02",
    title: "Pilot engagement and sector validation",
    desc: "Real-world learning across MSMEs, logistics operators, and circular operations."
  },
  {
    phase: "Phase 03",
    title: "Scale-ready integrations and deployment",
    desc: "API pathways, product maturity, analytics depth, and partner expansion."
  }
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
        <span className="h-2 w-2 rounded-full bg-brandGreen" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

function ArchitectureDiagram() {
  const nodes = useMemo(
    () => [
      {
        id: 1,
        x: 9,
        y: 18,
        title: "IoT / Edge Layer",
        lines: ["Smart tags", "Gateways", "Event capture"]
      },
      {
        id: 2,
        x: 35,
        y: 18,
        title: "Data & Event Bus",
        lines: ["Stream ingestion", "Storage", "Validation"]
      },
      {
        id: 3,
        x: 61,
        y: 18,
        title: "AI Intelligence",
        lines: ["ETA", "Risk", "Anomaly detection"]
      },
      {
        id: 4,
        x: 87,
        y: 18,
        title: "Decision Workflows",
        lines: ["Alerts", "Returns", "Actions"]
      },
      {
        id: 5,
        x: 22,
        y: 62,
        title: "Trust Layer",
        lines: ["Proof of event", "Verification", "Audit trail"]
      },
      {
        id: 6,
        x: 48,
        y: 62,
        title: "Circular Operations",
        lines: ["Take-back", "Reuse", "Recovery"]
      },
      {
        id: 7,
        x: 74,
        y: 62,
        title: "Enterprise APIs",
        lines: ["ERP", "Partners", "Integrations"]
      }
    ],
    []
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/30">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm text-brandGreen">
            SupplyMesh-AI system architecture
          </div>
          <div className="text-lg font-medium text-white">
            Modular intelligence for circular supply chains
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
          Illustrative diagram
        </div>
      </div>

      <div className="relative h-[430px] rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(45,168,216,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(76,175,80,0.15),transparent_28%),linear-gradient(180deg,#020617,#0f172a)]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="meshLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2da8d8" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          <line x1="19" y1="31" x2="35" y2="31" stroke="url(#meshLine)" strokeWidth="0.7" strokeDasharray="2 1.5" />
          <line x1="45" y1="31" x2="61" y2="31" stroke="url(#meshLine)" strokeWidth="0.7" strokeDasharray="2 1.5" />
          <line x1="71" y1="31" x2="87" y2="31" stroke="url(#meshLine)" strokeWidth="0.7" strokeDasharray="2 1.5" />
          <line x1="35" y1="40" x2="25" y2="62" stroke="#64748b" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="61" y1="40" x2="50" y2="62" stroke="#64748b" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="87" y1="40" x2="76" y2="62" stroke="#64748b" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          <line x1="35" y1="74" x2="48" y2="74" stroke="#4CAF50" strokeWidth="0.6" strokeDasharray="2 1.5" />
          <line x1="61" y1="74" x2="74" y2="74" stroke="#2da8d8" strokeWidth="0.6" strokeDasharray="2 1.5" />
        </svg>

        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="absolute w-[210px] -translate-x-1/2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="text-sm font-semibold text-white">{node.title}</div>
            <div className="mt-2 space-y-1 text-xs text-slate-300">
              {node.lines.map((line) => (
                <div key={line}>• {line}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzAOyQCjnLf-ocC6TX3zJajB82ZNpL3Y68igvbExTmTmtm_7QQiibwas3P3Ss4MXsjeiw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      console.log("Form response:", text);

      setSent(true);
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            type="email"
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Your email"
            required
          />
        </div>

        <input
          name="organization"
          className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          placeholder="Organization"
        />

        <textarea
          name="message"
          className="mt-4 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
          placeholder="Tell us about your use case, pilot interest, or partnership idea"
          required
        />

        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">
            Your response will be securely recorded for follow-up.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px] disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send inquiry"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {sent ? (
          <div className="mt-4 rounded-2xl border border-brandGreen/30 bg-brandGreen/10 px-4 py-3 text-sm text-green-200">
            Thank you. Your message has been submitted successfully.
          </div>
        ) : null}
      </form>

      <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
        <div className="text-lg font-semibold text-white">Direct contact</div>

        <div className="mt-5 space-y-4 text-slate-300">
          <a
            href="mailto:supplymesh.ai@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
          >
            <Mail className="h-4 w-4 text-brandGreen" />
            supplymesh.ai@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/company/supplymesh-ai/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4 text-brandCyan" />
            LinkedIn profile / company page
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
          Best for: pilot conversations, incubator or grant reviews, strategic partnerships, research visibility, and investor first-look credibility.
        </div>
      </div>
    </div>
  );
}

function LogoBlock() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="SupplyMesh-AI logo"
        className="h-12 w-auto object-contain"
      />
      <div className="hidden sm:block">
        <div className="text-base font-semibold tracking-tight text-white">
          SupplyMesh-AI
        </div>
        <div className="text-xs font-medium tracking-wide text-brandGreen">
          APNA CHAIN, APNI RAFTAR
        </div>
      </div>
    </a>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(45,168,216,0.12),transparent_24%),radial-gradient(circle_at_top_left,rgba(76,175,80,0.10),transparent_18%),linear-gradient(180deg,#020617,#0f172a)] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <LogoBlock />

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a conversation
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-2xl border border-white/10 p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-slate-300">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                <span className="h-2 w-2 rounded-full bg-brandGreen" />
                AI • IoT • Edge • Circular Economy
              </div>

              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
                The digital backbone for{" "}
                <span className="text-brandCyan">intelligent</span>,{" "}
                <span className="text-brandGreen">transparent</span>, and{" "}
                <span className="text-emerald-300">circular</span> supply chains.
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                SupplyMesh-AI helps MSMEs, logistics operators, and enterprises reduce waste, predict disruptions, validate events, and enable reverse logistics through a modern supply intelligence layer built for responsible consumption.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                >
                  Request demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#technology"
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Explore technology
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-white/10 px-3 py-1">Deep-tech startup</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Prototype / MVP</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Circular economy aligned</span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Visibility", "Live event intelligence across supply flows"],
                  ["Prediction", "Delay, risk, and operational foresight"],
                  ["Circularity", "Reverse logistics and recovery readiness"]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm text-slate-400">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-4 shadow-glow"
            >
              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm text-brandGreen">Product snapshot</div>
                    <div className="text-lg font-semibold text-white">
                      Supply intelligence cockpit
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    Demo view
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Predicted delay risk", "14%"],
                    ["Reverse logistics alerts", "06"],
                    ["Tracked nodes", "128"],
                    ["Validated event flow", "2.1k"]
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm text-slate-400">{k}</div>
                      <div className="mt-1 text-3xl font-semibold text-white">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-brandGreen/10 to-brandCyan/10 p-4 text-sm text-slate-200">
                  Built to move supply operations from fragmented execution to predictive, trust-aware, and circular control.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Products"
            title="A modular product stack designed for venture-scale evolution."
            subtitle="These modules help explain your startup clearly to incubators, investors, pilot partners, and early customers."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brandGreen/20 to-brandCyan/20 text-brandGreen">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{product.title}</h3>
                  <p className="mt-3 text-slate-300">{product.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Technology"
            title="Deep-tech architecture that goes beyond ordinary logistics software."
            subtitle="SupplyMesh-AI is framed as a technical operating layer: data capture, prediction, verification, circularity, and integrations."
          />

          <div className="mb-10 grid gap-5 md:grid-cols-2">
            {techStack.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-brandCyan" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="mt-3 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <ArchitectureDiagram />
        </section>

        <section id="usecases" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Use cases"
            title="Built for industries where visibility, trust, and circularity create real value."
            subtitle="These are concrete sectors where SupplyMesh-AI can explain strong problem-solution fit."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <Icon className="h-6 w-6 text-brandGreen" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-slate-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Roadmap"
            title="A credible path from prototype to pilots to scale."
            
          />

          <div className="grid gap-5 md:grid-cols-3">
            {roadmap.map((item) => (
              <div key={item.phase} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-brandGreen">{item.phase}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Research / blog"
            title="A founder-led knowledge layer that adds serious startup credibility."
            subtitle="This section can later grow into your public thought leadership and technical content hub."
          />

          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                placeholder="Search research notes"
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500"
              />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              Topics: circular economy, logistics intelligence, MSME systems, trust architecture
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {researchPosts.map((post) => (
              <article key={post.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-white/10 px-3 py-1">{post.tag}</span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" /> {post.date}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-slate-300">{post.summary}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brandGreen">
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="Built from a real problem, with a product-first and systems-first mindset."
            subtitle="Use this section to communicate founder-market fit and startup intent."
          />

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Our mission</h3>
              <p className="mt-3 text-slate-300">
                To make supply chains intelligent, transparent, and circular by giving businesses the digital tools they need to reduce waste, improve trust, and act with predictive confidence.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  "Built for operational clarity",
                  "Designed for circular economy enablement",
                  "Focused on MSME and enterprise relevance"
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-brandGreen" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Founder</h3>

              <div className="mt-6 flex flex-col items-center text-center">
                <img
                  src="/founder.jpg"
                  alt="Mrigank Jaiswal"
                  className="h-40 w-40 rounded-full border border-white/10 object-cover"
                />

                <h4 className="mt-4 text-xl font-semibold text-white">
                  Mrigank Jaiswal
                </h4>

                <p className="text-sm text-brandGreen">Founder • SupplyMesh-AI</p>

                <p className="mt-3 max-w-xl text-slate-300">
                  B.Tech in Electronics & Communication Engineering from the Central University of Jammu.
                  Founder of SupplyMesh-AI, focused on building intelligent, transparent, and circular
                  supply chain systems using AI, IoT, and predictive analytics. The mission is to simplify
                  supply chain operations for MSMEs and enterprises while enabling responsible consumption
                  and circular logistics.
                </p>

                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/mrigank-jaiswal"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="mailto:contact.mrigankjaiswal@gmail.com"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="A startup-ready channel for pilots, partnerships, and investor conversations."
            
          />
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 SupplyMesh-AI Solutions Private Limited</div>
        </div>
      </footer>
    </div>
  );
}