import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  ShieldCheck,
  Radar,
  Truck,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-glow"
    >
      <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-brandGreen/10 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-brandCyan/10 blur-3xl" />

      <div className="relative rounded-[26px] border border-white/10 bg-slate-950/80 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-brandGreen">SupplyMesh Intelligence Cockpit</div>
            <div className="mt-1 text-lg font-semibold text-white">
              Live dashboard preview
            </div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            Real-time concept
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 * i }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-400">{item.label}</div>
                  <Icon className="h-4 w-4 text-brandGreen" />
                </div>
                <div className="mt-2 text-3xl font-bold text-white">{item.value}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                <BarChart3 className="h-4 w-4 text-brandCyan" />
                Predicted operational health
              </div>

              <div className="flex h-36 items-end gap-3">
                {[42, 60, 48, 78, 66, 89, 74].map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${v}%` }}
                    transition={{ duration: 0.7, delay: i * 0.07 }}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-brandGreen to-brandCyan"
                  />
                ))}
              </div>

              <div className="mt-3 flex justify-between text-xs text-slate-500">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                <LineChart className="h-4 w-4 text-brandGreen" />
                Route confidence trend
              </div>

              <div className="relative h-32 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                <svg viewBox="0 0 300 120" className="h-full w-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#4CAF50" />
                      <stop offset="100%" stopColor="#2da8d8" />
                    </linearGradient>
                  </defs>

                  <polyline
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    points="0,90 40,82 80,70 120,76 160,52 200,45 240,32 280,24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {[0, 40, 80, 120, 160, 200, 240, 280].map((x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={[90, 82, 70, 76, 52, 45, 32, 24][i]}
                      r="4"
                      fill="#ffffff"
                    />
                  ))}
                </svg>

                <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                  <span>Cluster 1</span>
                  <span>Cluster 2</span>
                  <span>Cluster 3</span>
                  <span>Cluster 4</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 3.4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Radar className="h-4 w-4 text-brandGreen" />
                AI Risk Radar
              </div>
              <div className="mt-3 space-y-3">
                <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-3 py-2 text-sm text-yellow-200">
                  Delay probability rising on Route Cluster 4
                </div>
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-200">
                  Verification anomaly detected at warehouse node
                </div>
                <div className="rounded-xl border border-green-400/20 bg-green-400/10 px-3 py-2 text-sm text-green-200">
                  Delivery completion confidence above threshold
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 3.8 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Activity className="h-4 w-4 text-brandCyan" />
                Trust activity
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 px-3 py-3">
                <div>
                  <div className="text-sm text-slate-400">Verification score</div>
                  <div className="mt-1 text-2xl font-bold text-white">92%</div>
                </div>
                <CheckCircle2 className="h-8 w-8 text-brandGreen" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}