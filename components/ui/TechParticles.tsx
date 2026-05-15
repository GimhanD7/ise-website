"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cpu, Globe, Shield, Cloud, Terminal, Binary, Layers } from "lucide-react";

const TechParticles = () => {
  const techIcons = [
    { Icon: Code2, size: 24, left: "10%", top: "15%", delay: 0, duration: 6 },
    { Icon: Database, size: 20, left: "85%", top: "20%", delay: 2, duration: 8 },
    { Icon: Cpu, size: 28, left: "75%", top: "60%", delay: 4, duration: 7 },
    { Icon: Globe, size: 22, left: "15%", top: "75%", delay: 1, duration: 9 },
    { Icon: Shield, size: 20, left: "45%", top: "10%", delay: 3, duration: 6 },
    { Icon: Cloud, size: 26, left: "5%", top: "50%", delay: 5, duration: 8 },
    { Icon: Terminal, size: 18, left: "90%", top: "80%", delay: 2.5, duration: 7 },
    { Icon: Binary, size: 24, left: "30%", top: "85%", delay: 1.5, duration: 9 },
    { Icon: Layers, size: 22, left: "60%", top: "35%", delay: 3.5, duration: 7 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-20">
      {/* Technical Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #010b60 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      ></div>

      {/* Floating Icons */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-[#010b60]"
          style={{ left: item.left, top: item.top }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.Icon size={item.size} strokeWidth={1.5} />
        </motion.div>
      ))}

      {/* Connection Lines (Simulated) */}
      <svg className="absolute h-full w-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#010b60" stopOpacity="0" />
            <stop offset="50%" stopColor="#010b60" stopOpacity="1" />
            <stop offset="100%" stopColor="#010b60" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 100 Q 250 150 500 100 T 1000 100"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 100 500 Q 350 450 600 500 T 1100 500"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>
    </div>
  );
};

export { TechParticles };
