"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Video, 
  Code, 
  BookOpen, 
  Newspaper, 
  Download, 
  ExternalLink,
  Search,
  Filter,
  Sparkles,
  Layers
} from "lucide-react";

interface Resource {
  id: string;
  title: string;
  category: "Lecture Notes" | "Past Papers" | "Tutorials" | "Coding" | "Industry";
  type: "PDF" | "Video" | "Link";
  url: string;
  year: "1st Year" | "2nd Year" | "3rd Year" | "4th Year" | "All Years";
  semester: "1st Sem" | "2nd Sem" | "Both";
  size?: string;
  duration?: string;
}

const ResourceCard = ({ resource, index }: { resource: Resource; index: number }) => {
  const getIcon = () => {
    switch (resource.category) {
      case "Lecture Notes": return <BookOpen size={18} />;
      case "Past Papers": return <FileText size={18} />;
      case "Tutorials": return <Video size={18} />;
      case "Coding": return <Code size={18} />;
      case "Industry": return <Newspaper size={18} />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.03 }}
      className="group relative p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-[0_30px_60px_rgba(30,58,95,0.08)] transition-all duration-700"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1e3a5f] group-hover:bg-[#f46a0f] group-hover:text-white transition-all duration-500">
          {getIcon()}
        </div>
        <div className="flex flex-col items-end gap-1">
           <span className="text-[7px] font-black uppercase tracking-widest text-slate-300">Academic Tier</span>
           <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-[#1e3a5f]/5 text-[#1e3a5f] text-[7px] font-black uppercase tracking-widest">{resource.year}</span>
              <span className="px-2 py-0.5 rounded-md bg-[#f46a0f]/5 text-[#f46a0f] text-[7px] font-black uppercase tracking-widest">{resource.semester}</span>
           </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <div className="text-[9px] font-black text-[#f46a0f] uppercase tracking-[0.2em]">{resource.category}</div>
          <h3 className="text-[13px] font-black text-[#1e3a5f] leading-tight group-hover:text-[#f46a0f] transition-colors line-clamp-2">
            {resource.title}
          </h3>
        </div>

        <div className="pt-4 flex items-center gap-2">
           <span className={`px-2.5 py-1 rounded-lg text-[7px] font-black uppercase tracking-widest ${
             resource.type === 'PDF' ? 'bg-red-50 text-red-500' : 
             resource.type === 'Video' ? 'bg-blue-50 text-blue-500' : 
             'bg-emerald-50 text-emerald-500'
           }`}>
             {resource.type}
           </span>
           <div className="flex-1 h-[1px] bg-slate-100" />
           <a 
             href={resource.url}
             className="h-10 w-10 rounded-xl bg-[#1e3a5f] text-white flex items-center justify-center hover:bg-[#f46a0f] transition-all shadow-lg shadow-[#1e3a5f]/10"
           >
             {resource.type === 'PDF' ? <Download size={14} /> : <ExternalLink size={14} />}
           </a>
        </div>
      </div>
    </motion.div>
  );
};

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeSem, setActiveSem] = useState("All Sems");

  const categories = ["All", "Lecture Notes", "Past Papers", "Tutorials", "Coding", "Industry"];
  const years = ["All Years", "1st Year", "2nd Year", "3rd Year", "4th Year"];
  const semesters = ["All Sems", "1st Sem", "2nd Sem"];

  const resources: Resource[] = [
    { id: "1", title: "Enterprise System Architecture - Lecture 01", category: "Lecture Notes", type: "PDF", year: "3rd Year", semester: "1st Sem", url: "#" },
    { id: "2", title: "Distributed Database Management Systems", category: "Lecture Notes", type: "PDF", year: "2nd Year", semester: "2nd Sem", url: "#" },
    { id: "3", title: "Advanced Java Programming Masterclass", category: "Tutorials", type: "Video", year: "1st Year", semester: "2nd Sem", url: "#" },
    { id: "4", title: "ISE Past Paper - Semester 2 (2023)", category: "Past Papers", type: "PDF", year: "2nd Year", semester: "2nd Sem", url: "#" },
    { id: "5", title: "Cloud-Native Microservices Guide", category: "Industry", type: "PDF", year: "4th Year", semester: "1st Sem", url: "#" },
    { id: "6", title: "React & Next.js Performance Optimization", category: "Coding", type: "Video", year: "3rd Year", semester: "Both", url: "#" },
    { id: "7", title: "System Analysis & Design - Tutorials", category: "Tutorials", type: "PDF", year: "2nd Year", semester: "1st Sem", url: "#" },
    { id: "8", title: "Docker & Kubernetes Deployment Workflow", category: "Coding", type: "Link", year: "4th Year", semester: "2nd Sem", url: "#" },
  ];

  const filteredResources = resources.filter(r => {
    const catMatch = activeCategory === "All" || r.category === activeCategory;
    const yearMatch = activeYear === "All Years" || r.year === activeYear;
    const semMatch = activeSem === "All Sems" || r.semester === activeSem || r.semester === "Both";
    return catMatch && yearMatch && semMatch;
  });

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      
      {/* 01. Cinematic Hero */}
      <section className="px-6 mb-24">
        <div className="mx-auto max-w-7xl">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#f46a0f]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Academic Vault</span>
                 </div>
                 <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-[#1e3a5f] leading-[0.85] uppercase">
                    Knowledge <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Logistics</span>
                 </h1>
              </div>
              <div className="max-w-xs pb-4">
                 <p className="text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8">
                    Strategically organized assets broken down by academic years and semesters for the modern ISE student.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 02. Precision Discovery Suite */}
      <section className="px-6 mb-16">
        <div className="mx-auto max-w-7xl">
           <div className="p-8 md:p-12 bg-white/50 backdrop-blur-2xl border border-slate-100 rounded-2xl shadow-sm space-y-10">
              
              {/* Top Row: Search & Metadata */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="relative w-full max-w-xl group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-[#f46a0f] transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search for specific modules..."
                      className="w-full bg-white border border-slate-100 rounded-xl py-4 pl-16 pr-6 text-xs font-bold text-[#1e3a5f] outline-none focus:border-[#f46a0f] transition-all"
                    />
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-[#f46a0f]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1e3a5f]">{filteredResources.length} Assets Found</span>
                 </div>
              </div>

              {/* Bottom Row: Triple-Axis Filters */}
              <div className="space-y-6">
                 {/* Year Filter */}
                 <div className="space-y-3">
                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Select Academic Year</div>
                    <div className="flex flex-wrap gap-2">
                       {years.map(y => (
                         <button
                           key={y}
                           onClick={() => setActiveYear(y)}
                           className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                             activeYear === y ? "bg-[#1e3a5f] text-white shadow-lg" : "bg-white text-slate-400 border border-slate-50 hover:border-[#1e3a5f]/20"
                           }`}
                         >
                           {y}
                         </button>
                       ))}
                    </div>
                 </div>

                 {/* Sem & Category Split */}
                 <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <div className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Select Semester</div>
                       <div className="flex gap-2">
                          {semesters.map(s => (
                            <button
                              key={s}
                              onClick={() => setActiveSem(s)}
                              className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                                activeSem === s ? "bg-[#f46a0f] text-white shadow-lg" : "bg-white text-slate-400 border border-slate-50 hover:border-[#f46a0f]/20"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-3">
                       <div className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-300">Resource Category</div>
                       <div className="flex flex-wrap gap-2">
                          {categories.map(c => (
                            <button
                              key={c}
                              onClick={() => setActiveCategory(c)}
                              className={`px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                                activeCategory === c ? "bg-[#1e3a5f] text-white shadow-lg" : "bg-white text-slate-400 border border-slate-50 hover:border-[#1e3a5f]/20"
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 03. Dynamic Resource Matrix */}
      <section className="px-6 min-h-[500px]">
        <div className="mx-auto max-w-7xl">
           <motion.div 
             layout
             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
           >
              <AnimatePresence mode="popLayout">
                {filteredResources.map((res, i) => (
                  <ResourceCard key={res.id} resource={res} index={i} />
                ))}
              </AnimatePresence>
           </motion.div>

           {filteredResources.length === 0 && (
             <div className="py-32 flex flex-col items-center text-center space-y-4">
                <Layers size={40} className="text-slate-100" />
                <h3 className="text-xl font-black text-[#1e3a5f] uppercase tracking-tighter">No Assets Found</h3>
                <p className="text-[10px] font-medium text-slate-300 uppercase tracking-widest">Adjust filters for better results</p>
             </div>
           )}
        </div>
      </section>

    </main>
  );
};

export default ResourcesPage;
