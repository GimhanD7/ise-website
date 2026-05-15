"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Trophy, Users, BookOpen } from "lucide-react";

const LegacySection = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#1e3a5f] leading-tight uppercase">
                A Legacy of <span className="text-[#f46a0f]">Systems</span> <br /> 
                <span className="text-[#1e3a5f]">Intelligence</span>
              </h2>
              <p className="text-sm font-medium text-[#1e3a5f]/70 leading-relaxed max-w-md">
                Since our inception, we have empowered ISE students to master the complexities of <span className="text-[#f46a0f]">enterprise solutions</span> and architectural design.
              </p>
              <button className="flex items-center gap-2 text-[#f46a0f] font-black uppercase tracking-widest text-[9px] hover:gap-3 transition-all">
                View ISE Milestones <ArrowRight size={12} />
              </button>
            </div>

            <div className="relative aspect-[4/3] rounded-[2rem] bg-[#1e3a5f]/5 backdrop-blur-sm border border-[#1e3a5f]/10 overflow-hidden group">
               <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:20px_20px]" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Users size={80} strokeWidth={0.5} className="text-[#1e3a5f] opacity-10 group-hover:scale-110 transition-transform duration-700" />
               </div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="absolute bottom-6 right-6 bg-[#f46a0f] text-white p-6 rounded-2xl shadow-xl shadow-[#f46a0f]/20"
               >
                  <div className="text-3xl font-black mb-0.5 tracking-tighter">500+</div>
                  <div className="text-[8px] font-black uppercase tracking-widest opacity-80 text-center">Future System<br/>Architects</div>
               </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <div className="relative aspect-[16/9] rounded-[2rem] bg-[#1e3a5f] overflow-hidden group border border-[#1e3a5f]/20 shadow-2xl shadow-[#1e3a5f]/10">
               <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 text-white p-5 rounded-xl"
               >
                  <div className="text-2xl font-black mb-0.5 tracking-tighter">50+</div>
                  <div className="text-[8px] font-black uppercase tracking-widest opacity-60 text-center">Tech-Business<br/>Integrations</div>
               </motion.div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <Trophy size={70} strokeWidth={0.5} className="text-white opacity-10 group-hover:rotate-12 transition-transform duration-700" />
               </div>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-medium text-[#1e3a5f]/70 leading-relaxed italic border-l-3 border-[#f46a0f] pl-5">
                Our commitment to <span className="text-[#f46a0f]">ISE excellence</span> is driven by a deep understanding of data-centric engineering and business process automation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                 <div className="flex items-start gap-3 group">
                    <div className="p-2.5 rounded-lg bg-[#1e3a5f]/5 text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                       <BookOpen size={20} />
                    </div>
                    <div>
                       <div className="text-xs font-black text-[#1e3a5f]">7000+ Hours</div>
                       <p className="text-[9px] font-medium text-[#1e3a5f]/50 uppercase tracking-wider">System Research</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3 group">
                    <div className="p-2.5 rounded-lg bg-[#1e3a5f]/5 text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white transition-all">
                       <GraduationCap size={20} />
                    </div>
                    <div>
                       <div className="text-xs font-black text-[#1e3a5f]">150+ Careers</div>
                       <p className="text-[9px] font-medium text-[#1e3a5f]/50 uppercase tracking-wider">ISE Professionals</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { LegacySection };
