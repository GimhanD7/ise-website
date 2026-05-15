"use client";

import React from "react";
import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Architectural Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20vw] font-black leading-none text-[#1e3a5f] whitespace-nowrap uppercase">
          ISE • ARCHITECT
        </h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Impact Quote */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#f46a0f]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">The ISE Manifesto</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1e3a5f] leading-[0.85] uppercase">
                We Build <br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>The Systems</span> <br />
                That Matter.
              </h2>
            </div>

            <div className="relative pl-12 border-l-[1px] border-[#1e3a5f]/10">
              <p className="text-lg md:text-xl font-medium text-[#1e3a5f]/60 leading-relaxed italic">
                "In the intersection of complex business logic and robust software engineering, we find our purpose. We don't just write code; we design the systems that power the modern world."
              </p>
            </div>
          </div>

          {/* Right Side: Structural Detail */}
          <div className="lg:col-span-5 relative">
            <div className="p-12 rounded-2xl bg-white border border-slate-100 shadow-2xl shadow-black/5 relative overflow-hidden group">
               {/* Decorative Tech Grid */}
               <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none">
                  <div className="grid grid-cols-3 gap-2">
                     {[...Array(9)].map((_, i) => (
                       <div key={i} className="h-2 w-2 rounded-full bg-[#1e3a5f]" />
                     ))}
                  </div>
               </div>

               <div className="space-y-8 relative z-10">
                  <div className="space-y-2">
                     <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[#f46a0f]">Identity Established</div>
                     <div className="text-5xl font-black text-[#1e3a5f] tracking-tighter">2024</div>
                  </div>
                  
                  <div className="h-px w-full bg-slate-100" />
                  
                  <p className="text-xs font-medium text-slate-400 leading-relaxed">
                    A collective of SLIIT engineers dedicated to redefining the standards of <span className="text-[#1e3a5f] font-bold">Enterprise Excellence</span> and industrial integration.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                     {["Logic", "Systems", "Impact"].map((pill, i) => (
                       <div key={i} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#f46a0f] group-hover:border-[#f46a0f]/20 transition-all">
                         {pill}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Manifesto };
