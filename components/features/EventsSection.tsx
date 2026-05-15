"use client";

import React from "react";
import { motion } from "framer-motion";
import { EventCard, EventData } from "./EventCard";
import { ArrowRight } from "lucide-react";

const EventsSection = () => {
  // Explicitly defined clean data array
  const events: EventData[] = [
    {
      id: "1",
      title: "Systems Architecture Summit 2024",
      date: "May 25, 2024",
      location: "Auditorium, SLIIT",
      description: "Deep dive into enterprise-level system design and architectural patterns."
    },
    {
      id: "2",
      title: "Data Intelligence Workshop",
      date: "June 02, 2024",
      location: "Lab 04, Faculty of Computing",
      description: "Hands-on session on advanced data analytics and predictive modeling."
    },
    {
      id: "3",
      title: "ISE Hackathon: Logic 1.0",
      date: "June 15, 2024",
      location: "FOC Lounge",
      description: "A 24-hour challenge to solve real-world organizational problems."
    }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Strategic Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f46a0f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Upcoming Events</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
              Academic <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Engagements</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="max-w-md text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8 text-left">
              Join our specialized workshops and summits designed to bridge the gap between academic theory and industrial systems engineering.
            </p>
          </div>
        </div>

        {/* Explicitly passing only the required EventData properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <EventCard 
              key={e.id} 
              event={{
                id: e.id,
                title: e.title,
                date: e.date,
                location: e.location,
                description: e.description
              }} 
              index={i} 
            />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 px-10 py-5 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#1e3a5f] shadow-xl shadow-black/5 hover:border-[#f46a0f] transition-all">
            View All Events <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { EventsSection };
