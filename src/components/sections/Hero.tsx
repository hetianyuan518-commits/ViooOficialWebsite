"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const floatingCards = [
  { icon: "📱", label: "Scan & Pay", delay: 0, x: -30, y: 20 },
  { icon: "📈", label: "+240% CVR", delay: 0.2, x: 30, y: -10 },
  { icon: "🛒", label: "Instant Order", delay: 0.4, x: -20, y: -30 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-50 to-purple-50 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={14} className="text-brand-500" />
              Now with Clover Plugin Support
            </motion.div>

            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
            >
              Start Your{" "}
              <span className="gradient-text">Mobile Video</span>{" "}
              Business
            </motion.h1>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-500 leading-relaxed mb-8 max-w-xl"
            >
              Turn video into a bridge linking business and consumers with fun
              and convertible videos. Generate leads, build brand trust, and
              click to order — all in one platform.
            </motion.p>

            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="https://vioo.vip/register"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-gray-700 transition-colors shadow-lg shadow-gray-900/10"
              >
                Get Started Free
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="https://vioo.vip/login"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <Play size={14} className="text-brand-500 fill-brand-500" />
                Sign In
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["🧑‍💼", "👩‍💼", "🧑‍🔧", "👨‍💼"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-400 border-2 border-white flex items-center justify-center text-xs"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">
                  Trusted by 10,000+ businesses
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Illustration / mock UI */}
          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Phone mockup */}
              <div className="relative w-64 h-[500px] bg-gray-900 rounded-[44px] shadow-2xl border-4 border-gray-800 overflow-hidden">
                {/* Screen */}
                <div className="absolute inset-2 bg-white rounded-[38px] overflow-hidden">
                  {/* App bar */}
                  <div className="bg-gradient-to-r from-brand-500 to-purple-600 h-20 flex items-end pb-3 px-4">
                    <span className="text-white text-xs font-semibold">Vioo Store</span>
                  </div>
                  {/* Video card */}
                  <div className="m-3 bg-gray-100 rounded-2xl h-36 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
                      <Play size={20} className="text-brand-500 fill-brand-500 ml-1" />
                    </div>
                  </div>
                  {/* Product info */}
                  <div className="px-4 mt-1">
                    <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2" />
                    <div className="h-3 bg-gray-100 rounded-full w-1/2 mb-4" />
                    <div className="bg-brand-500 text-white text-xs font-semibold text-center py-2.5 rounded-xl">
                      Order Now
                    </div>
                  </div>
                  {/* QR code area */}
                  <div className="mx-4 mt-3 p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-1" />
                      <div className="h-2 bg-gray-100 rounded-full w-14" />
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full" />
              </div>

              {/* Floating stat cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 12 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  style={{ x: card.x, y: card.y }}
                  className={`absolute ${
                    i === 0
                      ? "left-0 top-24 -translate-x-12"
                      : i === 1
                      ? "right-0 top-16 translate-x-12"
                      : "right-0 bottom-28 translate-x-10"
                  }`}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    className="glass rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2 whitespace-nowrap"
                  >
                    <span className="text-lg">{card.icon}</span>
                    <span className="text-sm font-semibold text-gray-700">
                      {card.label}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gray-400 rounded-full" />
          </motion.div>
          <span className="text-xs text-gray-400">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
