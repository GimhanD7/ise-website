"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { AboutHero } from "@/components/features/AboutHero";

// Dynamic imports for non-critical sections to improve initial load speed
const LegacySection = dynamic(() => import("@/components/features/LegacySection").then(mod => mod.LegacySection), { 
  loading: () => <div className="h-96 bg-transparent" /> 
});
const ValuesGrid = dynamic(() => import("@/components/features/ValuesGrid").then(mod => mod.ValuesGrid), { 
  loading: () => <div className="h-96 bg-transparent" /> 
});
const Manifesto = dynamic(() => import("@/components/features/Manifesto").then(mod => mod.Manifesto), { 
  loading: () => <div className="h-96 bg-transparent" /> 
});
const TeamSection = dynamic(() => import("@/components/features/TeamSection").then(mod => mod.TeamSection), { 
  loading: () => <div className="h-96 bg-transparent" /> 
});
const MissionVision = dynamic(() => import("@/components/features/MissionVision").then(mod => mod.MissionVision), { 
  loading: () => <div className="h-96 bg-transparent" /> 
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* 01. Critical Path: Immediate Load */}
      <AboutHero />

      {/* 02. Non-Critical Sections: Lazy Loaded */}
      {/* <LegacySection /> */}
      <Manifesto />
      <ValuesGrid />
      <MissionVision />
      <TeamSection />

      {/* 06. Symmetrical Footer CTA */}
      <section className="py-40 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1e3a5f]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#f46a0f]/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
              Build The <br /> <span className="text-[#f46a0f]">Future With Us</span>
            </h2>
            <p className="text-[#1e3a5f]/60 max-w-xl mx-auto text-base font-medium">
              Join the ISE Student Community and become part of a legacy dedicated to innovation, engineering excellence, and student leadership.
            </p>
            <div className="pt-8">
              <button className="group relative px-12 py-6 bg-[#f46a0f] text-white rounded-full text-[9px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-[#f46a0f]/20 overflow-hidden">
                <span className="relative z-10">Join The Community</span>
                <div className="absolute inset-0 bg-[#1e3a5f] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="absolute inset-0 z-20 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  Let's Begin
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
