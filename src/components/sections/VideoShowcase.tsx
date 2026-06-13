"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3 block">
            See It In Action
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Turn Video Into Bridge
          </h2>
          <p className="mt-3 text-gray-500 text-lg">
            Link business and consumers with fun and convertible videos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80 border border-gray-100">
            <iframe
              src="https://www.tiktok.com/player/v1/7522355523543469319?music_info=1&description=1&loop=1"
              allow="fullscreen; autoplay"
              allowFullScreen
              style={{ width: "100%", height: "680px", border: "none" }}
              title="Vioo Demo Video"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://tiktok.com/@vioo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            <img src="/icons/tiktok.png" alt="TikTok" className="w-4 h-4" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            @vioo on TikTok
          </a>
        </motion.div>
      </div>
    </section>
  );
}
