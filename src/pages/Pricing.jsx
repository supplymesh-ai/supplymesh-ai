import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Boxes, Network } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const pricingStacks = [
  {
    type: "SaaS",
    title: "Software-as-a-Service",
    subtitle:
      "Dashboard access, predictive analytics, AI insights, compliance visibility, and operational intelligence.",
    icon: Sparkles,
    color: "from-brandGreen/20 to-emerald-500/10",
    plans: [
      {
        name: "Basic",
        price: "₹2,499",
        period: "/ month",
        target: "MSME teams",
        highlight: false,
        features: [
          "Dashboard access",
          "Core visibility tracking",
          "Basic operational insights",
          "Email support"
        ]
      },
      {
        name: "Pro",
        price: "₹9,999",
        period: "/ month",
        target: "Growing enterprises",
        highlight: true,
        features: [
          "Advanced analytics",
          "AI-powered alerts",
          "Operational intelligence",
          "Role-based access"
        ]
      },
      {
        name: "Enterprise",
        price: "₹25,000",
        period: "/ month",
        target: "Large manufacturers / 3PLs",
        highlight: false,
        features: [
          "Custom workflows",
          "Priority integrations",
          "Dedicated onboarding",
          "Advanced reporting"
        ]
      }
    ]
  },
  {
    type: "HaaS",
    title: "Hardware-as-a-Service",
    subtitle:
      "IoT smart tags, field devices, and edge gateways offered as deployable infrastructure.",
    icon: Boxes,
    color: "from-brandCyan/20 to-sky-500/10",
    plans: [
      {
        name: "Smart IoT Tag",
        price: "₹199",
        period: "/ month",
        target: "Per-device rental",
        highlight: false,
        features: [
          "Low-cost tracking hardware",
          "Field-ready deployment",
          "Scalable tagging model",
          "Asset-linked monitoring"
        ]
      },
      {
        name: "Edge Gateway",
        price: "₹799",
        period: "/ month",
        target: "Per-device rental",
        highlight: true,
        features: [
          "Edge data aggregation",
          "Offline-first sync support",
          "Smarter field connectivity",
          "Operational integration"
        ]
      }
    ]
  },
  {
    type: "PaaS",
    title: "Platform-as-a-Service",
    subtitle:
      "Developer APIs, integration layers, and white-label infrastructure for partners and platforms.",
    icon: Network,
    color: "from-purple-500/20 to-brandBlue/10",
    plans: [
      {
        name: "API Usage",
        price: "₹0.50",
        period: "/ call",
        target: "Developer and integration usage",
        highlight: false,
        features: [
          "Usage-based billing",
          "ERP / partner integrations",
          "Scalable API access",
          "Platform extensibility"
        ]
      },
      {
        name: "White-label License",
        price: "₹50,000",
        period: "",
        target: "Enterprise platform deployment",
        highlight: true,
        features: [
          "Custom branded deployment",
          "Dedicated integration support",
          "Partner-ready product layer",
          "Flexible enterprise rollout"
        ]
      }
    ]
  }
];

function PricingCard({ plan, accent = "brandGreen" }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className={`relative rounded-3xl border ${
        plan.highlight
          ? "border-brandGreen/40 bg-gradient-to-b from-brandGreen/10 to-white/5"
          : "border-white/10 bg-white/5"
      } p-6`}
    >
      {plan.highlight && (
        <div className="absolute right-4 top-4 rounded-full border border-brandGreen/30 bg-brandGreen/10 px-3 py-1 text-xs font-medium text-green-200">
          Most Popular
        </div>
      )}

      <div className="text-sm text-slate-400">{plan.target}</div>
      <h3 className="mt-3 text-2xl font-semibold text-white">{plan.name}</h3>

      <div className="mt-4 flex items-end gap-1">
        <div className="text-4xl font-bold text-white">{plan.price}</div>
        <div className="pb-1 text-slate-400">{plan.period}</div>
      </div>

      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-slate-300">
            <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brandGreen/15 text-brandGreen">
              <Check className="h-3.5 w-3.5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button className="mt-8 w-full rounded-2xl bg-white/10 px-4 py-3 font-medium text-white transition hover:bg-white/15">
        Get started
      </button>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <section className="rounded-[36px] border border-white/10 bg-gradient-to-r from-brandGreen/10 via-brandCyan/10 to-brandBlue/10 p-8 text-center md:p-12">
        <SectionTitle
          eyebrow="Pricing"
          title="Flexible pricing built for startups, enterprises, and future-scale deployments"
          subtitle="SupplyMesh-AI combines software, hardware, and platform access into modular pricing layers."
          center
        />
      </section>

      <section className="mt-12 space-y-14">
        {pricingStacks.map((stack, stackIndex) => {
          const Icon = stack.icon;
          return (
            <div key={stack.type}>
              <div className="mb-8 flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${stack.color} text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
                    {stack.type}
                  </div>
                  <h2 className="mt-1 text-3xl font-semibold text-white">
                    {stack.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-slate-300">
                    {stack.subtitle}
                  </p>
                </div>
              </div>

              <div
                className={`grid gap-6 ${
                  stack.plans.length === 3
                    ? "md:grid-cols-2 xl:grid-cols-3"
                    : "md:grid-cols-2"
                }`}
              >
                {stack.plans.map((plan) => (
                  <PricingCard
                    key={plan.name}
                    plan={plan}
                    accent={stackIndex === 0 ? "brandGreen" : stackIndex === 1 ? "brandCyan" : "brandBlue"}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Need a custom deployment or pilot structure?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          We can structure pilot pricing, integration plans, and partnership models
          based on use case, scale, and deployment environment.
        </p>
        <button className="mt-6 rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950">
          Contact for custom pricing
        </button>
      </section>
    </main>
  );
}