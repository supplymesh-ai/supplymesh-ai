import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(2,6,23,0.85),rgba(2,6,23,1))]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                alt="SupplyMesh-AI"
                className="h-12 w-auto object-contain"
              />
              <div>
                <div className="text-xl font-semibold text-white">
                  SupplyMesh-AI
                </div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-brandGreen">
                  Apna Chain, Apni Raftar
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Intelligent, transparent, and trusted systems for logistics,
              industry, governance, and future mobility. Built for India’s next
              digital decade.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                AI
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                IoT
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Trust Infrastructure
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Circular Systems
              </span>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">Explore</div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <Link to="/products" className="transition hover:text-white">
                Products
              </Link>
              <Link to="/projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link to="/pricing" className="transition hover:text-white">
                Pricing
              </Link>
              <Link to="/blog" className="transition hover:text-white">
                Blog
              </Link>
              <Link to="/careers" className="transition hover:text-white">
                Careers
              </Link>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">Connect</div>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <div>supplymesh.ai@gmail.com</div>
              <div>India-focused deep-tech startup</div>
              <div>Available for pilots, partnerships, and collaborations</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <div>© 2026 SupplyMesh-AI Solutions Private Limited</div>
            <div className="text-center md:text-right">
              Built with a long-term vision for IndiaAI, Make in India, and Viksit Bharat 2047
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}