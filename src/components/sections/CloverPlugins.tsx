"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Printer, Puzzle, Zap, ArrowRight, CheckCircle2, Clock } from "lucide-react";

const printFeatures = [
  "One-click receipt printing from Vioo orders",
  "Supports all major Clover printer models",
  "Customizable receipt templates & branding",
  "Auto-print on order confirmation",
  "Offline mode with print queue",
  "Real-time print status & error alerts",
];

const upcomingPlugins = [
  {
    icon: "📊",
    name: "Analytics Pro",
    desc: "Deep insights into video performance and conversion funnels",
    status: "Coming Q3 2026",
  },
  {
    icon: "📧",
    name: "Email & SMS",
    desc: "Automated follow-up campaigns triggered by video interactions",
    status: "Coming Q4 2026",
  },
  {
    icon: "🔗",
    name: "CRM Sync",
    desc: "Sync customer data seamlessly with your existing CRM",
    status: "Coming 2027",
  },
  {
    icon: "💳",
    name: "Loyalty Rewards",
    desc: "Reward customers who engage and order through video",
    status: "Coming 2027",
  },
];

export default function CloverPlugins() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="clover" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-clover-50 border border-clover-100 text-clover-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <div className="w-4 h-4 bg-clover-500 rounded-sm flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">C</span>
            </div>
            Clover Plugin Ecosystem
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Supercharge Clover with{" "}
            <span className="gradient-text-clover">Vioo Plugins</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Seamlessly extend your Clover POS with powerful Vioo integrations.
            Start with our Print Plugin and unlock an expanding ecosystem of
            tools designed for modern businesses.
          </p>
        </motion.div>

        {/* Print Plugin Spotlight */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-3xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-clover-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-14">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-clover-500/20 rounded-2xl flex items-center justify-center">
                    <Printer size={24} className="text-clover-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-xl">
                        Vioo Print Plugin
                      </span>
                      <span className="bg-clover-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        LIVE
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      for Clover POS · v1.0
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  The first official Vioo plugin for Clover POS. Automatically
                  print receipts, order summaries, and QR codes directly from
                  Vioo — no manual export needed. Built for speed, reliability,
                  and your brand.
                </p>

                <ul className="space-y-3 mb-8">
                  {printFeatures.map((feat, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-clover-400 flex-shrink-0"
                      />
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://www.clover.com/appmarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-clover-500 hover:bg-clover-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    Install on Clover
                    <ArrowRight size={16} />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors border border-white/10"
                  >
                    View Documentation
                  </motion.a>
                </div>
              </div>

              {/* Right: Visual mockup */}
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Receipt mockup */}
                  <div className="w-56 bg-white rounded-2xl shadow-2xl p-5 font-mono text-xs">
                    <div className="text-center mb-3">
                      <div className="font-bold text-sm text-gray-900">
                        VIOO STORE
                      </div>
                      <div className="text-gray-400 text-[10px]">
                        Order Receipt
                      </div>
                    </div>
                    <div className="border-t border-dashed border-gray-200 my-2" />
                    {[
                      ["Item A × 2", "$24.00"],
                      ["Item B × 1", "$12.00"],
                      ["Discount", "-$4.00"],
                    ].map(([label, val]) => (
                      <div key={label} className="flex justify-between text-gray-600 my-1">
                        <span>{label}</span>
                        <span>{val}</span>
                      </div>
                    ))}
                    <div className="border-t border-dashed border-gray-200 my-2" />
                    <div className="flex justify-between font-bold text-gray-900">
                      <span>TOTAL</span>
                      <span>$32.00</span>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg grid grid-cols-4 gap-0.5 p-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-sm ${
                              [0, 2, 4, 7, 8, 11, 13, 15].includes(i)
                                ? "bg-gray-800"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-gray-400 text-[9px] mt-2">
                      Scan QR to reorder
                    </p>
                  </div>

                  {/* Print animation */}
                  <motion.div
                    animate={{ scaleY: [0, 1, 0], opacity: [0, 0.4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-clover-400 to-transparent rounded"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upcoming Plugins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center">
              <Puzzle size={16} className="text-gray-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Coming Soon to the Plugin Store
              </h3>
              <p className="text-sm text-gray-400">
                The Vioo plugin ecosystem is growing — stay tuned
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingPlugins.map((plugin, i) => (
              <motion.div
                key={plugin.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-gray-50 hover:bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-default"
              >
                <div className="text-3xl mb-3">{plugin.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{plugin.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {plugin.desc}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={11} />
                  {plugin.status}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to plugin ecosystem */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <Zap size={14} className="text-yellow-500" />
              Want a custom plugin?{" "}
              <a
                href="mailto:plugins@vioo.vip"
                className="text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                Contact our plugin team →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
