"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Highlight {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface HighlightCardProps {
  highlight: Highlight;
  index: number;
}

const HighlightCard = ({ highlight, index }: HighlightCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-10 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.05)] transition-all duration-700 overflow-hidden h-full"
    >
      {/* Dynamic Background Mesh */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-700`} />
      
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
           <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
             {highlight.icon}
           </div>
           <div className="text-[10px] font-black text-[#f46a0f] uppercase tracking-widest opacity-20 group-hover:opacity-100 transition-opacity">
             Highlight 0{index + 1}
           </div>
        </div>

        <div className="space-y-4">
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-black text-[#1e3a5f] uppercase tracking-[0.3em]">Core Pillar</span>
              <div className="h-px w-8 bg-[#1e3a5f]/5" />
           </div>
           <h3 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tight group-hover:text-[#f46a0f] transition-colors leading-none">
             {highlight.title}
           </h3>
           <p className="text-xs font-medium text-slate-400 leading-relaxed group-hover:text-[#1e3a5f]/70 transition-colors">
             {highlight.description}
           </p>
        </div>
      </div>
    </motion.div>
  );
};

export { HighlightCard };
