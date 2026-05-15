"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Sparkles, ArrowRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="bg-transparent py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[500px] bg-[#1e3a5f]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Architectural Header */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#f46a0f]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Core Purpose</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#1e3a5f] leading-[0.9] uppercase">
                Strategic <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Foundation</span>
              </h2>
            </div>
            
            <p className="text-sm font-medium text-[#1e3a5f]/60 leading-relaxed max-w-sm">
              We operate at the critical intersection of business logic and system architecture, fostering a community of technical visionaries.
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
               {["Systems", "Data", "Leadership"].map((tag, i) => (
                 <div key={i} className="px-5 py-2 rounded-lg border border-[#1e3a5f]/10 text-[9px] font-black uppercase tracking-widest text-[#1e3a5f]/40">
                   {tag}
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Staggered Narrative Blocks */}
          <div className="lg:col-span-7 space-y-12 relative">
            {/* Connecting Vertical Line */}
            <div className="absolute left-8 top-12 bottom-12 w-[1px] bg-gradient-to-b from-[#f46a0f]/50 via-[#1e3a5f]/20 to-transparent hidden md:block" />

            {/* Mission Block */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-20 group"
            >
              <div className="absolute left-4 top-0 h-8 w-8 rounded-full bg-[#f46a0f] text-white flex items-center justify-center shadow-lg shadow-[#f46a0f]/20 z-10 hidden md:flex">
                <Target size={14} />
              </div>
              <div className="p-10 rounded-2xl bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_rgba(30,58,95,0.08)] transition-all duration-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-[#f46a0f] uppercase tracking-[0.3em]">Phase 01</span>
                    <div className="h-px w-8 bg-slate-100" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tight">Our Mission</h3>
                  <p className="text-sm font-medium text-[#1e3a5f]/70 leading-relaxed italic">
                    "To produce highly skilled Information Systems Engineers capable of solving complex organizational problems through innovative software and data-driven solutions."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Block */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative pl-0 md:pl-20 group"
            >
              <div className="absolute left-4 top-0 h-8 w-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center shadow-lg shadow-[#1e3a5f]/20 z-10 hidden md:flex">
                <Eye size={14} />
              </div>
              <div className="p-10 rounded-2xl bg-[#1e3a5f] text-white shadow-2xl shadow-[#1e3a5f]/20 group-hover:scale-[1.02] transition-all duration-700">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Phase 02</span>
                    <div className="h-px w-8 bg-white/10" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">Our Vision</h3>
                  <p className="text-white/80 text-sm font-medium leading-relaxed italic">
                    "To become a leading academic hub for ISE excellence, where students lead the way in developing scalable, secure, and intelligent enterprise systems."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { MissionVision };
