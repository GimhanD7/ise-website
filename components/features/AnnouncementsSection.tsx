"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bell, ArrowRight, Newspaper } from "lucide-react";

const AnnouncementsSection = () => {
  const announcements = [
    {
      id: "1",
      title: "New Research Partnership with Tech Corp",
      date: "May 12, 2024",
      tag: "Partnership",
      description: "We are excited to announce a new collaborative research initiative focusing on Cloud Native Systems."
    },
    {
      id: "2",
      title: "ISE Hub Mentorship Program - Call for Mentees",
      date: "May 10, 2024",
      tag: "Mentorship",
      description: "Undergraduate students are invited to apply for our specialized mentorship program for the Fall 2024 semester."
    }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Strategic Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f46a0f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">News & Updates</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
              The Hub <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Announcements</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-2">
            <div className="flex items-center gap-3 text-[10px] font-black text-[#1e3a5f] uppercase tracking-widest border-l-[1px] border-[#1e3a5f]/10 pl-8">
               <Newspaper size={14} className="text-[#f46a0f]" /> 
               Stay Informed
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {announcements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-2xl hover:border-[#1e3a5f]/10 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-[#f46a0f]/5 text-[#f46a0f] text-[8px] font-black uppercase tracking-widest">{item.tag}</span>
                    <span className="text-[10px] font-bold text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tight group-hover:text-[#f46a0f] transition-colors">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-400 max-w-3xl leading-relaxed">{item.description}</p>
                </div>
                <button className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AnnouncementsSection };
