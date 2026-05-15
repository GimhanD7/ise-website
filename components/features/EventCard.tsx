"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

export interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

interface EventCardProps {
  event: EventData;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
    >
      <div className="p-10 space-y-6 flex flex-col h-full">
        {/* Date & Icon */}
        <div className="flex justify-between items-start text-left">
          <div className="space-y-1">
             <div className="text-[10px] font-black text-[#f46a0f] uppercase tracking-[0.3em]">Engagement Date</div>
             <div className="text-xl font-black text-[#1e3a5f] tracking-tighter">{event.date}</div>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1e3a5f] group-hover:bg-[#f46a0f] group-hover:text-white transition-all duration-500">
             <Calendar size={20} />
          </div>
        </div>

        <div className="h-px w-full bg-slate-100" />

        <div className="space-y-4 flex-grow text-left">
          <h3 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tight leading-tight group-hover:text-[#f46a0f] transition-colors">
            {event.title}
          </h3>
          <p className="text-xs font-medium text-slate-400 leading-relaxed italic">
            "{event.description}"
          </p>
        </div>

        <div className="pt-6 space-y-4 text-left">
           <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={14} className="text-[#f46a0f]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{event.location}</span>
           </div>
           
           <button className="w-full py-4 rounded-xl bg-slate-50 text-[#1e3a5f] text-[9px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 group-hover:bg-[#1e3a5f] group-hover:text-white transition-all duration-500">
              Register Now <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export { EventCard };
