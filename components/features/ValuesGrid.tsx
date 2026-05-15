"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Target, Lightbulb } from "lucide-react";

const ValuesGrid = () => {
  const values = [
    {
      icon: <Zap size={20} />,
      title: "Agility",
      description: "Implementing rapid software lifecycles and adapting to emerging system paradigms.",
      color: "from-[#1e3a5f] to-blue-400",
      phase: "01"
    },
    {
      icon: <Shield size={20} />,
      title: "Data Integrity",
      description: "Ensuring the highest standards of security and reliability in system governance.",
      color: "from-[#f46a0f] to-amber-400",
      phase: "02"
    },
    {
      icon: <Target size={20} />,
      title: "Architecture",
      description: "Focusing on high-impact, scalable enterprise designs that solve real-world problems.",
      color: "from-[#1e3a5f] to-indigo-400",
      phase: "03"
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Intelligence",
      description: "Integrating AI and data analytics to build smarter, more responsive systems.",
      color: "from-[#f46a0f] to-red-400",
      phase: "04"
    }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Architectural Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f46a0f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">The ISE Mindset</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
              Core <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Foundations</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="max-w-md text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8">
              Our core values are tailored to the multidisciplinary nature of Information Systems Engineering, blending technical mastery with strategic logic.
            </p>
          </div>
        </div>

        {/* Values Grid with Phase Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.05)] transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${val.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {val.icon}
                </div>
                <div className="text-[10px] font-black text-[#f46a0f] uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
                  Phase {val.phase}
                </div>
              </div>
              <h4 className="text-xl font-black text-[#1e3a5f] mb-4 tracking-tight uppercase">{val.title}</h4>
              <p className="text-xs font-medium text-slate-400 leading-relaxed group-hover:text-[#1e3a5f]/70 transition-colors">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ValuesGrid };
