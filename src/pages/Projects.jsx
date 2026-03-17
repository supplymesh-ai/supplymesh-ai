import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Projects"
        title="Proposed and active project tracks"
        subtitle="These initiatives show how SupplyMesh-AI can serve government, industrial, trade, and future mobility use cases."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectCard
              image={project.image}
              title={project.title}
              summary={project.summary}
              status={project.status}
            />
            {project.slug === "supplymesh-gov" && (
  <Link
    to="/projects/supplymesh-gov"
    className="mt-3 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
  >
    Read full project
  </Link>
)}

{project.slug === "aerocorridor-6g" && (
  <Link
    to="/projects/aerocorridor-6g"
    className="mt-3 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
  >
    Read full project
  </Link>
)}
          </div>
        ))}
      </div>
    </main>
  );
}