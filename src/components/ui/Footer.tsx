"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Features", "How It Works", "Pricing", "Changelog"],
  "Clover Plugins": ["Print Plugin", "Plugin Store", "Developer Docs", "Request a Plugin"],
  Company: ["About Us", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-lg font-bold text-white">Vioo</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Turning video into a bridge between business and consumers.
            </p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "▶"].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Vioo. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center">
              <span className="text-[8px] text-clover-400 font-bold">C</span>
            </div>
            Official Clover Partner
          </div>
        </div>
      </div>
    </footer>
  );
}
