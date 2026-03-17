import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-white">SupplyMesh-AI</div>
            <p className="mt-3 text-sm text-slate-400">
              Intelligent, transparent, and trusted systems for logistics, industry,
              governance, and future mobility.
            </p>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">Explore</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
              <Link to="/products">Products</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold text-white">Connect</div>
            <div className="mt-3 text-sm text-slate-400">
              supplymesh.ai@gmail.com
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 flex justify-center">
          <p className="text-sm text-slate-500 text-center">
            © 2026 SupplyMesh-AI Solutions Private Limited
          </p>
        </div>
        
      </div>
    </footer>
  );
}