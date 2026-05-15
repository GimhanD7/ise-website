"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag, ArrowRight } from "lucide-react";

interface AnnouncementItemProps {
  title: string;
  tag: string;
  description: string;
  date: string;
}

const AnnouncementItem = ({ title, tag, description, date }: AnnouncementItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-6 rounded-xl border border-slate-100 bg-white p-6 transition-all duration-500 hover:border-[#1e3a5f]/20 hover:shadow-[0_20px_50px_rgba(30,58,95,0.06)] md:flex-row md:items-center"
    >
      {/* Date Indicator (Left) */}
      <div className="flex shrink-0 flex-col items-center justify-center rounded-lg bg-slate-50 px-4 py-3 transition-colors group-hover:bg-[#1e3a5f]/5 md:w-28">
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Posted</span>
        <span className="text-xs font-bold text-[#1e3a5f] text-center mt-1">
          {date.split(',')[0]}
        </span>
      </div>

      {/* Content Area */}
      <div className="flex-grow space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-[#f46a0f]/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#f46a0f]">
            <Tag size={10} />
            <span>{tag}</span>
          </div>
          <div className="h-px w-8 bg-slate-100 transition-all group-hover:w-12 group-hover:bg-[#f46a0f]/30" />
        </div>
        
        <h4 className="text-lg font-black leading-tight text-slate-800 transition-colors duration-300 group-hover:text-[#1e3a5f]">
          {title}
        </h4>
        
        <p className="max-w-2xl text-[13px] font-medium leading-relaxed text-slate-500 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Action (Right) */}
      <div className="flex shrink-0 items-center justify-end md:w-16">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 text-slate-300 transition-all duration-500 group-hover:bg-[#1e3a5f] group-hover:text-white group-hover:border-transparent group-hover:translate-x-1 group-hover:shadow-lg group-hover:shadow-[#1e3a5f]/20">
          <ArrowRight size={20} strokeWidth={2.5} />
        </div>
      </div>
      
      {/* Decorative Accent */}
      <div className="absolute left-0 top-1/4 h-1/2 w-1 rounded-r-full bg-[#f46a0f] opacity-0 transition-all duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export { AnnouncementItem };
