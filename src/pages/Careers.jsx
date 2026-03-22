import React from "react";
import { Briefcase, Rocket, Brain, Handshake, Sparkles, Landmark } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import CultureCard from "../components/CultureCard";
import JobCard from "../components/JobCard";

const jobs = [
  {
    title: "AI / ML Intern",
    type: "Internship",
    mode: "Remote / Hybrid",
    desc: "Build prediction, anomaly detection, and intelligence modules for supply and governance systems.",
    skills: ["Python", "ML", "Data Analysis", "AI"]
  },
  {
    title: "Frontend Developer Intern",
    type: "Internship",
    mode: "Remote / Hybrid",
    desc: "Design and build dashboards, workflows, and startup-grade interfaces using React and Tailwind.",
    skills: ["React", "JavaScript", "TailwindCSS", "UI"]
  },
  {
    title: "IoT / Embedded Systems Intern",
    type: "Internship",
    mode: "Hybrid",
    desc: "Work on device integration, sensor pipelines, and field-level intelligent capture systems.",
    skills: ["IoT", "Embedded", "Sensors", "Raspberry Pi"]
  },
  {
    title: "Research and Strategy Associate",
    type: "Open Role",
    mode: "Remote",
    desc: "Contribute to research, proposals, grant strategy, and product positioning.",
    skills: ["Research", "Strategy", "Writing", "Analysis"]
  }
];

export default function Careers() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <section className="rounded-[36px] border border-white/10 bg-gradient-to-r from-brandGreen/15 via-brandCyan/10 to-brandBlue/15 p-8 md:p-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-brandGreen" />
            Careers at SupplyMesh-AI
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Build intelligent systems for India’s future
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Join us to work on AI, IoT, trust infrastructure, public delivery systems,
            industrial supply intelligence, and future mobility ideas aligned with
            IndiaAI Mission, Make in India, and Viksit Bharat 2047.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle
          eyebrow="Team culture"
          title="What it feels like to work here"
          subtitle="Less bureaucracy. More ownership. More building."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <CultureCard
            icon={Rocket}
            title="Fast learning"
            text="You will work across product, research, systems, and execution — not just a narrow role."
            colorClass="from-brandGreen/20 to-emerald-500/10"
          />
          <CultureCard
            icon={Brain}
            title="Deep-tech thinking"
            text="We solve real-world problems using AI, IoT, system design, and trust-first architectures."
            colorClass="from-brandCyan/20 to-sky-500/10"
          />
          <CultureCard
            icon={Handshake}
            title="Ownership culture"
            text="We value people who take initiative, communicate clearly, and care about meaningful outcomes."
            colorClass="from-purple-500/20 to-brandBlue/10"
          />
          <CultureCard
            icon={Landmark}
            title="Mission-led work"
            text="Our work direction connects with IndiaAI Mission, Make in India, and future public infrastructure."
            colorClass="from-orange-500/20 to-yellow-500/10"
          />
          <CultureCard
            icon={Briefcase}
            title="Startup exposure"
            text="Learn how products, pilots, proposals, hiring, and strategy come together inside an early startup."
            colorClass="from-pink-500/20 to-rose-500/10"
          />
          <CultureCard
            icon={Sparkles}
            title="Positive impact"
            text="Contribute to systems that can improve logistics, governance, public delivery, and industrial intelligence."
            colorClass="from-brandBlue/20 to-indigo-500/10"
          />
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle
          eyebrow="Why join"
          title="Benefits and growth"
          subtitle="Early team members grow with the company and shape the product."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Work directly on real startup projects and live product thinking",
            "Gain deep-tech exposure across AI, IoT, dashboards, and trusted systems",
            "Build portfolio-worthy work for internships, jobs, and startup ecosystems",
            "Contribute to mission-led innovation with national relevance"
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle
          eyebrow="Openings"
          title="Current job openings"
          subtitle="Apply for the role that matches your strengths."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.title} {...job} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[32px] border border-white/10 bg-gradient-to-r from-brandGreen/10 to-brandCyan/10 p-8 text-center">
        <h3 className="text-3xl font-semibold text-white">
          Don’t see your role here?
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
          If you believe you can contribute to SupplyMesh-AI, send an open application.
        </p>
        <a
          href="mailto:supplymesh.ai@gmail.com"
          className="mt-6 inline-flex rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950"
        >
          Send open application
        </a>
      </section>
    </main>
  );
}