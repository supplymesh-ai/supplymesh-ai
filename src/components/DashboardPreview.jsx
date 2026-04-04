import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  ShieldCheck,
  AlertTriangle,
  Truck,
  BarChart3,
  Activity,
  CheckCircle2,
  Radar,
  LineChart
} from "lucide-react";

const stats = [
  { label: "Tracked nodes", value: "128", icon: Boxes },
  { label: "Verified events", value: "2.1k", icon: ShieldCheck },
  { label: "Live alerts", value: "09", icon: AlertTriangle },
  { label: "Routes active", value: "34", icon: Truck }
];

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-brandGreen/10 blur-3xl" />
      <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-brandCyan/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.22em] text-brandGreen">
                SupplyMesh Intelligence Cockpit
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                Live dashboard preview
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                A compact product-style interface for visibility, alerts,
                verification, and network coordination.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
              System healthy
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {item.label}
                    </div>
                    <Icon className="h-4 w-4 text-brandGreen" />
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    {item.value}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <BarChart3 className="h-4 w-4 text-brandCyan" />
                  Predicted operational health
                </div>

                <div className="mt-4 flex h-32 items-end gap-2">
                  {[48, 62, 58, 82, 68, 88, 76].map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${v}%` }}
                      transition={{ duration: 0.7, delay: i * 0.05 }}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-brandGreen via-emerald-400 to-brandCyan"
                    />
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                  <span>S</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <LineChart className="h-4 w-4 text-brandGreen" />
                  Route confidence trend
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                  <svg viewBox="0 0 300 100" className="h-24 w-full">
                    <defs>
                      <linearGradient id="routeLineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4CAF50" />
                        <stop offset="100%" stopColor="#2da8d8" />
                      </linearGradient>
                    </defs>

                    <polyline
                      fill="none"
                      stroke="url(#routeLineGradient)"
                      strokeWidth="4"
                      points="10,78 55,70 95,62 135,66 175,48 215,42 255,30 290,22"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {[10, 55, 95, 135, 175, 215, 255, 290].map((x, i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={[78, 70, 62, 66, 48, 42, 30, 22][i]}
                        r="3.8"
                        fill="#ffffff"
                      />
                    ))}
                  </svg>

                  <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                    <span>C1</span>
                    <span>C2</span>
                    <span>C3</span>
                    <span>C4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Radar className="h-4 w-4 text-brandGreen" />
                  AI risk radar
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-3 py-3 text-sm text-yellow-200">
                    Delay probability rising on Cluster 4
                  </div>
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-3 py-3 text-sm text-red-200">
                    Verification anomaly detected
                  </div>
                  <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-3 text-sm text-green-200">
                    Delivery confidence above threshold
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Activity className="h-4 w-4 text-brandCyan" />
                  Trust activity
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-400">Verification score</div>
                      <div className="mt-1 text-3xl font-bold text-white">92%</div>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-brandGreen" />
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brandGreen to-brandCyan" />
                  </div>

                  <div className="mt-2 text-xs text-slate-500">
                    Verified workflow confidence remains above system threshold.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}