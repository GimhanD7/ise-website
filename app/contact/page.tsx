"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Globe,
  MessageSquare
} from "lucide-react";

// Custom Icons for stability
const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMethods = [
    {
      id: "1",
      icon: <Mail size={24} />,
      label: "Direct Email",
      value: "isehub.official@sliit.lk",
      sub: "Average response: 2h"
    },
    {
      id: "2",
      icon: <Phone size={24} />,
      label: "Support Hotline",
      value: "+94 11 234 5678",
      sub: "Mon - Fri, 9am - 5pm"
    },
    {
      id: "3",
      icon: <MapPin size={24} />,
      label: "Physical HQ",
      value: "Level 04, FOC, SLIIT",
      sub: "New Academic Building"
    }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24 overflow-hidden">
      
      {/* 01. Cinematic Hero */}
      <section className="px-6 mb-24">
        <div className="mx-auto max-w-7xl">
           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#f46a0f]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#f46a0f]">Communication Hub</span>
                 </div>
                 <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-[#1e3a5f] leading-[0.85] uppercase">
                    Get In <br />
                    <span className="text-transparent" style={{ WebkitTextStroke: "1px #f46a0f" }}>Touch</span>
                 </h1>
              </div>
              <div className="max-w-xs pb-4">
                 <p className="text-sm font-medium text-[#1e3a5f]/60 leading-relaxed border-l-[1px] border-[#1e3a5f]/10 pl-8 text-left">
                    Whether you are a student seeking help or an industry partner looking to collaborate, the ISE HUB is here to connect.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-7xl">
           <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* 02. Communication Matrix */}
              <div className="lg:col-span-5 space-y-8">
                 <div className="grid gap-6">
                    {contactMethods.map((method, i) => (
                      <motion.div
                        key={method.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-center gap-6 p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-2xl transition-all duration-700"
                      >
                         <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#1e3a5f] group-hover:bg-[#f46a0f] group-hover:text-white transition-all duration-500">
                            {method.icon}
                         </div>
                         <div className="space-y-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f46a0f]">{method.label}</div>
                            <div className="text-base font-black text-[#1e3a5f] leading-none">{method.value}</div>
                            <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{method.sub}</div>
                         </div>
                      </motion.div>
                    ))}
                 </div>

                 <div className="p-10 rounded-[3rem] bg-[#1e3a5f] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#f46a0f]/20 blur-[60px] rounded-full" />
                    <div className="relative z-10 space-y-8">
                       <div className="space-y-2">
                          <h3 className="text-xl font-black uppercase tracking-tighter">Digital Presence</h3>
                          <p className="text-[10px] font-medium text-white/50 uppercase tracking-widest">Connect across our technical networks</p>
                       </div>
                       <div className="flex gap-4">
                          <button className="h-12 w-12 rounded-xl bg-white/10 hover:bg-[#f46a0f] flex items-center justify-center transition-all">
                             <LinkedinIcon />
                          </button>
                          <button className="h-12 w-12 rounded-xl bg-white/10 hover:bg-[#f46a0f] flex items-center justify-center transition-all">
                             <TwitterIcon />
                          </button>
                          <button className="h-12 w-12 rounded-xl bg-white/10 hover:bg-[#f46a0f] flex items-center justify-center transition-all">
                             <Globe size={20} />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-7">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="bg-white border border-slate-100 rounded-2xl p-8 md:p-16 shadow-sm shadow-[#1e3a5f]/5"
                 >
                    <div className="space-y-12">
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <MessageSquare size={16} className="text-[#f46a0f]" />
                             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f46a0f]">Send a Message</span>
                          </div>
                          <h2 className="text-4xl font-black text-[#1e3a5f] uppercase tracking-tighter leading-none">
                             Strategic <br /> Support Gateway
                          </h2>
                       </div>

                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Identity</label>
                             <input 
                               type="text" 
                               placeholder="e.g. John Doe"
                               className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-xs font-bold text-[#1e3a5f] outline-none focus:ring-2 ring-[#f46a0f]/20 transition-all"
                             />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Digital Mail</label>
                             <input 
                               type="email" 
                               placeholder="e.g. name@domain.com"
                               className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-xs font-bold text-[#1e3a5f] outline-none focus:ring-2 ring-[#f46a0f]/20 transition-all"
                             />
                          </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Purpose of Inquiry</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Partnership Request"
                            className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-xs font-bold text-[#1e3a5f] outline-none focus:ring-2 ring-[#f46a0f]/20 transition-all"
                          />
                       </div>

                       <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Inquiry Content</label>
                          <textarea 
                            placeholder="Detail your requirements here..."
                            rows={4}
                            className="w-full bg-slate-50 border-none rounded-xl px-8 py-6 text-xs font-bold text-[#1e3a5f] outline-none focus:ring-2 ring-[#f46a0f]/20 transition-all resize-none"
                          />
                       </div>

                       <button className="w-full py-6 bg-[#1e3a5f] text-white rounded-full text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl shadow-[#1e3a5f]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
                          Transmit Message <Send size={14} />
                       </button>
                    </div>
                 </motion.div>
              </div>

           </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
