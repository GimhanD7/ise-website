"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, Lightbulb } from "lucide-react";

const WhatWeDo = () => {
  const activities = [
    {
      icon: <Cpu size={32} />,
      title: "Technical Workshops",
      description: "Hands-on sessions on emerging technologies like AI, Blockchain, and IoT led by student experts and professionals."
    },
    {
      icon: <Rocket size={32} />,
      title: "Industry Projects",
      description: "Collaborative projects that solve real-world problems, allowing students to build professional portfolios."
    },
    {
      icon: <Globe size={32} />,
      title: "Community Events",
      description: "Hackathons, tech-talks, and networking mixers that connect students with the broader tech ecosystem."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation Hub",
      description: "A space for students to brainstorm, research, and turn their innovative ideas into functional prototypes."
    }
  ];

  return (
    <section className="py-32  ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#f46a0f]" />
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f46a0f]">Our Impact</div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1e3a5f] leading-tight">
              Empowering Students <br /> 
              <span className="text-slate-900">Through Action</span>
            </h2>
            
            <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-md">
              We go beyond the classroom to provide students with the tools, network, and experience they need to thrive in the modern tech landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div className="space-y-2">
                  <div className="text-3xl font-black text-[#1e3a5f]">100%</div>
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Student Managed</div>
               </div>
               <div className="space-y-2">
                  <div className="text-3xl font-black text-[#f46a0f]">24/7</div>
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Innovation Focus</div>
               </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {activities.map((act, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-[#1e3a5f]/10 transition-all duration-500 group"
              >
                <div className="mb-6 text-[#1e3a5f] group-hover:text-[#f46a0f] transition-colors">
                  {act.icon}
                </div>
                <h4 className="text-lg font-black text-[#1e3a5f] mb-3 tracking-tight">{act.title}</h4>
                <p className="text-xs font-medium text-slate-500 leading-relaxed">{act.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhatWeDo };
