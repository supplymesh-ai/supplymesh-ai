import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}logo-transparent.png`}
            alt="SupplyMesh-AI"
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
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "transition hover:text-white"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Book a conversation
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-2xl border border-white/10 p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-slate-300">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-white font-medium" : "hover:text-white"
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              Book a conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}