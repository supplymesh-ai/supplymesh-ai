import React from "react";
import SectionTitle from "../components/SectionTitle";
import { blogs } from "../data/blogs";

export default function Blog() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Blog"
        title="Research notes, project thinking, and product perspectives"
        subtitle="A founder-led knowledge layer for startup credibility and ecosystem communication."
      />

      <div className="space-y-6">
        {blogs.map((blog) => (
          <article
            key={blog.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-2xl font-semibold text-white">{blog.title}</h3>
            <p className="mt-4 leading-8 text-slate-300">{blog.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}