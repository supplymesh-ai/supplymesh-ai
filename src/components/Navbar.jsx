import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(76,175,80,0.10),transparent_22%),radial-gradient(circle_at_top_right,rgba(45,168,216,0.10),transparent_24%)]" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label="SupplyMesh-AI home"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-brandGreen/20 blur-xl transition duration-300 group-hover:bg-brandCyan/20" />
              <img
                src={`${import.meta.env.BASE_URL}logo-transparent.png`}
                alt="SupplyMesh-AI"
                className="relative h-11 w-auto object-contain sm:h-12"
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight text-white sm:text-base">
                SupplyMesh-AI
              </div>
              <div className="truncate text-[10px] font-medium uppercase tracking-[0.22em] text-brandGreen sm:text-xs">
                Apna Chain, Apni Raftar
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-x-0 -bottom-2 mx-auto h-[2px] w-6 rounded-full bg-brandGreen"
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-r from-brandGreen to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-brandGreen/10 transition duration-200 hover:-translate-y-0.5"
            >
              Book a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay + drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed inset-x-0 top-[73px] z-50 mx-4 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] p-4 shadow-2xl shadow-black/40 lg:hidden sm:mx-6"
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="mb-3 px-2">
                <div className="text-sm font-semibold text-white">
                  Navigate SupplyMesh-AI
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Intelligent infrastructure for logistics, trust, and future mobility
                </div>
              </div>

              <div className="grid gap-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        [
                          "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                          isActive
                            ? "border border-brandGreen/20 bg-brandGreen/10 text-white"
                            : "border border-white/5 bg-white/[0.03] text-slate-300 hover:bg-white/5 hover:text-white"
                        ].join(" ")
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.label}</span>
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              isActive ? "bg-brandGreen" : "bg-slate-600"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brandGreen to-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-brandGreen/10 transition hover:-translate-y-0.5"
                >
                  Book a conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs leading-6 text-slate-400">
                  Built for IndiaAI, Make in India, and trusted digital infrastructure.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}