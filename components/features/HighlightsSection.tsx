"use client";

import React from "react";
import { motion } from "framer-motion";
import { HighlightCard } from "./HighlightCard";
import { Sparkles, Trophy, Target, Zap } from "lucide-react";

const HighlightsSection = () => {
  const highlights = [
    {
      id: "1",
      title: "Industry Excellence",
      description: "Partnering with top tech firms to provide real-world exposure and system architecture insights.",
      icon: <Trophy size={24} />,
      color: "from-[#1e3a5f] to-blue-400"
    },
    {
      id: "2",
      title: "Technical Mastery",
      description: "Focusing on the complete software lifecycle, from business logic to scalable deployment.",
      icon: <Target size={24} />,
      color: "from-[#f46a0f] to-amber-400"
    },
    {
      id: "3",
      title: "Rapid Innovation",
      description: "Encouraging a culture of building, testing, and shipping impactful digital solutions.",
      icon: <Zap size={24} />,
      color: "from-[#1e3a5f] to-indigo-400"
    }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Strategic Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f46a0f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Community Impact</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
              Core Hub <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Highlights</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="max-w-md text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8">
              Our highlights reflect the dedication of ISE students to mastering the technical and strategic layers of the digital economy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, i) => (
            <HighlightCard key={highlight.id} highlight={highlight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { HighlightsSection };
