"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { QrCode, TrendingUp, ShoppingCart, Video } from "lucide-react";

const features = [
  {
    icon: QrCode,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "QR Code Scan",
    description:
      "Quickly bring customers to the checkout page via video.",
  },
  {
    icon: TrendingUp,
    color: "from-purple-500 to-pink-400",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    title: "Increase Conversion Rates",
    description:
      "Generate leads and build brand trust.",
  },
  {
    icon: ShoppingCart,
    color: "from-orange-400 to-red-400",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    title: "On Order",
    description:
      "Click and order online products.",
  },
  {
    icon: Video,
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Turn Video Into Bridge",
    description:
      "Link business and consumers with fun and convertible videos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3 block">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Everything you need to{" "}
            <span className="gradient-text">sell through video</span>
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100/80 transition-shadow cursor-default"
              >
                <div
                  className={`absolute top-0 left-8 right-8 h-0.5 rounded-b-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 ${feature.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={feature.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
