import React from "react";
import SectionTitle from "../components/SectionTitle";
import PricingStackCard from "../components/PricingStackCard";

const saasPlans = [
  {
    name: "Basic Plan",
    target: "MSME (1–10 users)",
    price: "₹2,499 / month",
    features: [
      "Dashboard access",
      "Basic visibility tracking",
      "Core analytics",
      "Email support"
    ]
  },
  {
    name: "Pro Plan",
    target: "LSE (10–100 users)",
    price: "₹9,999 / month",
    features: [
      "Advanced analytics",
      "AI insights",
      "Operational alerts",
      "Team access controls"
    ]
  },
  {
    name: "Enterprise Plan",
    target: "3PLs & large manufacturers",
    price: "₹25,000 / month",
    features: [
      "Custom workflows",
      "Dedicated onboarding",
      "Priority integrations",
      "Advanced operational intelligence"
    ]
  }
];

const haasPlans = [
  {
    name: "Smart IoT Tag",
    target: "Field-deployed asset tracking",
    price: "₹199 / month",
    features: [
      "Low-cost tag rental",
      "Batch and shipment linking",
      "Scalable deployment"
    ]
  },
  {
    name: "Edge Gateway",
    target: "Edge / warehouse connectivity",
    price: "₹799 / month",
    features: [
      "Data aggregation",
      "Offline sync support",
      "Smart edge event handling"
    ]
  }
];

const paasPlans = [
  {
    name: "API Usage Model",
    target: "Developers / startups / ERP integrations",
    price: "₹0.50 / call",
    features: [
      "Pay-per-API use",
      "Developer integration support",
      "Scalable access model"
    ]
  },
  {
    name: "White-label License",
    target: "Enterprise and platform partners",
    price: "₹50,000",
    features: [
      "Custom branded deployment",
      "Dedicated integration support",
      "Enterprise deployment flexibility"
    ]
  }
];

export default function Pricing() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Pricing"
        title="Structured revenue models for software, hardware, and platform access"
        subtitle="SupplyMesh-AI is designed with multiple monetization layers that support both early pilots and large-scale deployments."
        center
      />

      <div className="grid gap-8">
        <PricingStackCard
          type="SaaS"
          title="Software-as-a-Service"
          subtitle="Dashboard access, predictive analytics, AI insights, compliance visibility, and operational intelligence."
          plans={saasPlans}
        />

        <PricingStackCard
          type="HaaS"
          title="Hardware-as-a-Service"
          subtitle="IoT smart tags, gateways, and field devices offered on subscription or rental basis."
          plans={haasPlans}
          accent="brandCyan"
        />

        <PricingStackCard
          type="PaaS"
          title="Platform-as-a-Service"
          subtitle="Developer APIs, enterprise integrations, and white-label platform extensions."
          plans={paasPlans}
          accent="brandGreen"
        />
      </div>
    </main>
  );
}