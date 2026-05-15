"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

// Custom GitHub Icon for maximum compatibility
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  tags?: string[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const projectTags = project.tags || [project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
    >
      <div className="relative aspect-video bg-slate-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <Folder size={64} strokeWidth={0.5} className="text-slate-200 group-hover:text-[#1e3a5f]/20 transition-all duration-700" />
        
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <button className="h-12 w-12 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center hover:scale-110 transition-transform">
            <ExternalLink size={18} />
          </button>
          <button className="h-12 w-12 rounded-full bg-white text-[#1e3a5f] shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
            <GithubIcon size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {projectTags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-black uppercase tracking-widest text-[#f46a0f] bg-[#f46a0f]/5 px-3 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2 text-left">
          <h3 className="text-xl font-black text-[#1e3a5f] uppercase tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-slate-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCard };
