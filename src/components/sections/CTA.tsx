"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const perks = [
  "Free to join — no credit card required",
  "All users can register immediately",
  "Full access to video commerce tools",
  "Clover Print Plugin included",
];

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* BG blobs */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-4 block">
            Member Sign-Up
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            Start your mobile video business{" "}
            <span className="gradient-text">today</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join thousands of businesses already using Vioo to bridge the gap
            between content and commerce. All users can register for free.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm"
              >
                <Check size={14} className="text-clover-500 flex-shrink-0" />
                {perk}
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <motion.a
              href="https://vioo.vip/register"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-900/10 text-base"
            >
              Create Free Account
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="https://vioo.vip/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all text-base"
            >
              Sign In
            </motion.a>
          </motion.div>

          <p className="text-xs text-gray-400">
            All users can register for free — no credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
