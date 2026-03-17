import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function ProjectSupplyMeshGov() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Project Detail"
        title="SupplyMesh-Gov"
        subtitle="Government-oriented digital delivery and trust infrastructure for last-mile public operations."
      />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img
          src={`${import.meta.env.BASE_URL}project-gov.png`}
          alt="SupplyMesh-Gov"
          className="h-72 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-white">Project Overview</h3>
          <p className="mt-3 text-slate-300">
            SupplyMesh-Gov is a proposed digital trust and last-mile delivery optimisation system for public-sector operations. It is designed to help departments improve traceability, coordination, and field visibility across delivery workflows.
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-white">
            Women Development & Child Welfare Department — Last-Mile Delivery Optimisation
          </h3>
          <p className="mt-3 text-slate-300">
            This project direction is framed around the needs of the <strong>Women Development & Child Welfare Department, Government of Andhra Pradesh</strong>. The goal is to improve the visibility, coordination, and accountability of field-level delivery activities that affect welfare beneficiaries, service distribution, and departmental operations.
          </p>

          <p className="mt-3 text-slate-300">
            SupplyMesh-Gov can support use cases such as beneficiary-linked delivery validation, route coordination, event traceability, logistics status updates, and field operations monitoring. By creating structured digital records and intelligent visibility layers, the system can help reduce information gaps between headquarters, district teams, and last-mile execution environments.
          </p>

          <p className="mt-3 text-slate-300">
            The broader objective is to build a trusted and scalable operational platform that supports better governance decisions, reduces delays, and enables measurable last-mile performance improvement.
          </p>
        </div>
      </div>
    </main>
  );
}