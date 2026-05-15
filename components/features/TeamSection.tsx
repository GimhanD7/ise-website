"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { User, Sparkles, Mail, ShieldCheck, Cpu, Code2 } from "lucide-react";

// Custom LinkedIn Icon for maximum compatibility
const LinkedInIcon = ({ size = 12 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

interface Member {
  name: string;
  role: string;
  type: "exec" | "committee" | "sub";
}

const MemberCard = ({ name, role, type }: Member) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const isExec = type === "exec";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`group relative w-full ${isExec ? 'aspect-[3/4.5]' : 'aspect-[3/4]'} rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(30,58,95,0.08)] transition-all duration-700`}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
        <User size={isExec ? 100 : 80} strokeWidth={0.5} className="text-slate-200 group-hover:text-[#1e3a5f]/10 transition-all duration-700" />
      </div>

      <div className={`absolute inset-x-3 bottom-3 p-5 rounded-xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-black/5 transform transition-all duration-700 ${isExec ? 'group-hover:bottom-4' : 'group-hover:bottom-3.5'}`}>
        <div className="flex justify-between items-end">
          <div className="space-y-0.5 text-left">
            <h4 className={`${isExec ? 'text-[13px]' : 'text-[11px]'} font-black text-[#1e3a5f] leading-tight`}>{name}</h4>
            <div className={`${isExec ? 'text-[9px]' : 'text-[8px]'} font-bold text-slate-400 group-hover:text-[#1e3a5f] transition-colors`}>{role}</div>
          </div>
          <div className="flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
            <a href="#" className="h-7 w-7 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center hover:scale-110 transition-transform">
              <LinkedInIcon size={12} />
            </a>
            <a href="#" className="h-7 w-7 rounded-full bg-[#f46a0f] text-white flex items-center justify-center hover:scale-110 transition-transform">
              <Mail size={12} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const executives = [
    { name: "Chathurma Jayawickrama", role: "President" },
    { name: "Dasith Sathpura", role: "Vice President" },
    { name: "Dhanushi Piyaratne", role: "Secretary" },
    { name: "Dilshan Kavinda", role: "Treasurer" },
    { name: "Amila Rathnayake", role: "Editor" },
  ];

  const committee = [
    { name: "Nimal Siri", role: "Public Relations" },
    { name: "Ruwan Dias", role: "Logistics Lead" },
    { name: "Ishara Weerasinghe", role: "Tech Lead" },
    { name: "Sandun Perera", role: "Creative Director" },
    { name: "Thilini De Silva", role: "Media Manager" },
    { name: "Kumara Perera", role: "Coordinator" },
  ];

  const subCommittees = [
    { name: "Tech & Innovation", icon: <Cpu size={16} /> },
    { name: "Creative Arts", icon: <Sparkles size={16} /> },
    { name: "Event Operations", icon: <Code2 size={16} /> },
    { name: "ISE Marketing", icon: <Sparkles size={16} /> },
    { name: "Fullstack Collective", icon: <Cpu size={16} /> },
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Tier 1: Executive Committee */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
             <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#f46a0f]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Tier 01</span>
                <div className="h-[1px] w-12 bg-[#f46a0f]" />
             </div>
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1e3a5f] uppercase leading-none">
               Executive <span className="text-slate-900">Committee</span>
             </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
             {executives.map((member, i) => (
               <MemberCard key={i} {...member} type="exec" />
             ))}
          </div>
        </div>

        {/* Tier 2: General Committee */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
             <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#1e3a5f]/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1e3a5f]/40">Tier 02</span>
                <div className="h-[1px] w-12 bg-[#1e3a5f]/20" />
             </div>
             <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-[#1e3a5f] uppercase">
               General <span className="text-slate-400">Board</span>
             </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
             {committee.map((member, i) => (
               <MemberCard key={i} {...member} type="committee" />
             ))}
          </div>
        </div>

        {/* Tier 3: Sub Committees */}
        <div>
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
             <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#f46a0f]/20" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]/40">Tier 03</span>
                <div className="h-[1px] w-12 bg-[#f46a0f]/20" />
             </div>
             <h3 className="text-3xl font-black text-[#1e3a5f] uppercase tracking-tighter">
               Specialized <span className="text-[#f46a0f]">Wings</span>
             </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
             {subCommittees.map((sub, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.05, y: -5 }}
                 className="px-10 py-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-[#1e3a5f] hover:shadow-xl transition-all cursor-default flex items-center gap-4"
               >
                  <div className="h-10 w-10 rounded-2xl bg-[#f46a0f]/5 text-[#f46a0f] flex items-center justify-center">
                     {sub.icon}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#1e3a5f]">{sub.name}</div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Operational Unit</div>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export { TeamSection };
