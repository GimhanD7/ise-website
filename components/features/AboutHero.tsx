"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative bg-transparent pt-48 pb-24 overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1e3a5f]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f46a0f]/5 rounded-full blur-[150px] translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-[2px] w-12 bg-[#f46a0f]" />
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.6em] text-[#f46a0f]">
              <Sparkles size={12} />
              <span>ISE HUB / IDENTITY</span>
            </div>
            <div className="h-[2px] w-12 bg-[#f46a0f]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter text-[#1e3a5f] mb-12 leading-[0.85] uppercase"
          >
            Defining The <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>ISE Standard</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end w-full max-w-4xl border-t border-slate-100 pt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-left"
            >
              <p className="text-base font-medium text-[#1e3a5f]/60 leading-relaxed max-w-sm">
                We are a community of <span className="text-[#f46a0f]">innovators</span> building the foundation for a smarter tomorrow through collaboration and architectural excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-start lg:justify-end gap-4"
            >
              <div className="px-10 py-5 bg-white border border-slate-100 text-[#1e3a5f] rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-black/5">
                EST <span className="text-[#f46a0f]">2024</span>
              </div>
              <div className="px-10 py-5 bg-[#1e3a5f] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-[#1e3a5f]/20">
                Join Us
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutHero };
