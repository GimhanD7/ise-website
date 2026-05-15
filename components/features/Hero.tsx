"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  Layers, 
  ShieldCheck,
  Zap,
  BookOpen,
  Trophy,
  Users
} from "lucide-react";

const TechNode = ({ icon: Icon, mouseX, mouseY, initialX, initialY, color }: any) => {
  const x = useTransform(mouseX, [-0.5, 0.5], [initialX - 30, initialX + 30]);
  const y = useTransform(mouseY, [-0.5, 0.5], [initialY - 30, initialY + 30]);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ x, y }}
      className={`absolute z-0 pointer-events-none p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-[#1e3a5f]/10 shadow-xl ${color}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={24} strokeWidth={1.5} />
      </motion.div>
      <div className="absolute inset-0 bg-current opacity-5 blur-xl rounded-2xl" />
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const nodes = [
    { icon: Terminal, initialX: -450, initialY: -200, color: "text-[#1e3a5f]" },
    { icon: Code2, initialX: 500, initialY: -150, color: "text-[#f46a0f]" },
    { icon: Database, initialX: -400, initialY: 180, color: "text-[#1e3a5f]" },
    { icon: Cloud, initialX: 420, initialY: 220, color: "text-[#f46a0f]" },
    { icon: Cpu, initialX: -550, initialY: 0, color: "text-[#f46a0f]" },
    { icon: Globe, initialX: 580, initialY: 50, color: "text-[#1e3a5f]" },
    { icon: Layers, initialX: -250, initialY: -280, color: "text-[#1e3a5f]" },
    { icon: ShieldCheck, initialX: 300, initialY: -300, color: "text-[#f46a0f]" },
  ];

  const stats = [
    { label: "Active Members", value: "500+", icon: <Users size={20} /> },
    { label: "Events Yearly", value: "20+", icon: <Zap size={20} /> },
    { label: "Success Projects", value: "50+", icon: <Trophy size={20} /> },
    { label: "Expert Mentors", value: "15+", icon: <BookOpen size={20} /> },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {nodes.map((node, i) => (
          <TechNode key={i} {...node} mouseX={springX} mouseY={springY} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 px-5 py-2 rounded-xl bg-white border border-[#1e3a5f]/10 shadow-sm"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#f46a0f] animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1e3a5f]">ISE HUB / OFFICIAL PORTAL</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-black tracking-tighter text-[#1e3a5f] leading-[0.85] uppercase"
            >
              Information <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Systems Engineering</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-6"
            >
              <div className="h-px w-12 bg-[#f46a0f]" />
              <p className="text-xl md:text-3xl font-black text-[#1e3a5f]/80 uppercase tracking-tighter">
                Student Community
              </p>
              <div className="h-px w-12 bg-[#f46a0f]" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-6"
          >
            <button className="px-12 py-6 bg-[#1e3a5f] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-[#1e3a5f]/20 hover:scale-105 transition-all">
              Launch Experience
            </button>
            <button className="px-12 py-6 bg-white border border-slate-100 text-[#1e3a5f] rounded-xl text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-black/5 hover:bg-slate-50 transition-all">
              Community Hub
            </button>
          </motion.div>
        </div>

        {/* Stats Row with Modern Styling */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32 max-w-6xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="relative group p-10 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700">
               <div className="absolute top-0 right-0 p-8 text-[#f46a0f]/10 group-hover:text-[#f46a0f]/30 transition-colors">
                  {stat.icon}
               </div>
               <div className="text-4xl font-black text-[#1e3a5f] mb-2 tracking-tighter">{stat.value}</div>
               <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#f46a0f] transition-colors">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
