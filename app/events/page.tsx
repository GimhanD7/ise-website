"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Search, Filter, Calendar, ArrowRight, Sparkles } from "lucide-react";

// Dynamic imports for performance
const EventCard = dynamic(() => import("@/components/features/EventCard").then(mod => mod.EventCard), {
  loading: () => <div className="h-96 bg-slate-50 rounded-[2.5rem] animate-pulse" />
});

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const upcomingEvents = [
    {
      id: "1",
      title: "Systems Architecture Summit 2024",
      date: "May 25, 2024",
      location: "Auditorium, SLIIT",
      description: "Deep dive into enterprise-level system design and architectural patterns for the next decade."
    },
    {
      id: "2",
      title: "Data Intelligence Workshop",
      date: "June 02, 2024",
      location: "Lab 04, Faculty of Computing",
      description: "Hands-on session on advanced data analytics, predictive modeling, and AI integration."
    },
    {
      id: "3",
      title: "ISE Hackathon: Logic 1.0",
      date: "June 15, 2024",
      location: "FOC Lounge",
      description: "A 24-hour challenge to solve real-world organizational problems through scalable software."
    },
    {
      id: "4",
      title: "Cloud Native Symposium",
      date: "July 10, 2024",
      location: "Main Hall, SLIIT",
      description: "Exploring the future of cloud computing, microservices, and distributed systems."
    }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      
      {/* 01. Cinematic Hero */}
      <section className="relative px-6 mb-24">
        <div className="mx-auto max-w-7xl">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#f46a0f]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Academic Hub</span>
                 </div>
                 <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-[#1e3a5f] leading-[0.85] uppercase">
                    Events <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Matrix</span>
                 </h1>
              </div>
              <div className="max-w-xs pb-4">
                 <p className="text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8">
                    Bridging the gap between academic theory and industrial systems engineering through high-impact summits and workshops.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 02. Discovery Suite */}
      <section className="px-6 mb-16">
        <div className="mx-auto max-w-7xl">
           <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white/50 backdrop-blur-xl border border-slate-100 rounded-[2.5rem] shadow-sm">
              <div className="flex-1 relative w-full">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search the matrix..."
                   className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-16 pr-6 text-xs font-bold text-[#1e3a5f] outline-none focus:border-[#f46a0f] transition-all"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                 <button className="flex items-center gap-3 px-8 py-4 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#1e3a5f] hover:border-[#f46a0f] transition-all">
                    <Filter size={14} /> Filter
                 </button>
                 <button className="flex-1 md:flex-none px-10 py-4 bg-[#1e3a5f] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-[#1e3a5f]/20 hover:scale-105 transition-all">
                    Archive
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 03. Events Grid */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
           </div>
        </div>
      </section>

      {/* 04. Engagement Footer */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-7xl">
           <div className="relative p-12 md:p-24 rounded-[3.5rem] bg-[#1e3a5f] text-white overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f46a0f]/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="space-y-6">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                       <Sparkles size={16} className="text-[#f46a0f]" />
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f46a0f]">Collaboration</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                       Host an Event <br /> with <span className="text-white/40">ISE HUB</span>
                    </h2>
                    <p className="max-w-md text-sm font-medium text-white/60">
                       We partner with industry leaders and academic experts to bring the most relevant technical knowledge to our community.
                    </p>
                 </div>
                 <button className="px-12 py-6 bg-white text-[#1e3a5f] rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-black/10 hover:scale-105 transition-all whitespace-nowrap">
                    Submit Proposal <ArrowRight size={14} className="inline ml-2" />
                 </button>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
};

export default EventsPage;
