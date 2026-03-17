import React from "react";
import SectionTitle from "../components/SectionTitle";
import { products } from "../data/products";

export default function Products() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Products"
        title="The SupplyMesh-AI product stack"
        subtitle="A growing portfolio of modules designed for visibility, trust, prediction, and deployment."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold text-white">{product.title}</h3>
            <p className="mt-3 text-slate-300">{product.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}