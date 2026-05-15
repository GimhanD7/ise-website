"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: "1",
      title: "Smart Campus Analytics",
      category: "Data Systems",
      tags: ["Data Logic", "Analytics"],
      description: "Real-time data visualization platform for monitoring university resource usage and energy optimization.",
      image: "/projects/p1.jpg"
    },
    {
      id: "2",
      title: "Automated Exam Proctoring",
      category: "Computer Vision",
      tags: ["AI", "Security"],
      description: "AI-driven system for ensuring academic integrity during digital assessments using biometric verification.",
      image: "/projects/p2.jpg"
    },
    {
      id: "3",
      title: "ISE Hub Mobile Ecosystem",
      category: "Fullstack",
      tags: ["Mobile", "React Native"],
      description: "Comprehensive mobile platform for community collaboration, resource sharing, and real-time updates.",
      image: "/projects/p3.jpg"
    }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Strategic Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#f46a0f]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Our Innovation Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
              Technical <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Showcase</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="max-w-md text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8">
              Explore the engineering solutions developed by our community, showcasing the mastery of systems architecture and data logic.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 px-12 py-6 bg-[#1e3a5f] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-[#1e3a5f]/20 hover:scale-105 transition-all">
            Explore Portfolio <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };
