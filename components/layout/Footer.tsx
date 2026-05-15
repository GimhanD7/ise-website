"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  ArrowRight, 
  Send,
  MapPin,
  Mail,
  ExternalLink,
  Sparkles
} from "lucide-react";

// Brand Icons as custom SVG components for maximum stability
const Facebook = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#050a1a] text-slate-400 overflow-hidden pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* 01. Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                ISE <span className="text-[#f46a0f]">HUB</span>
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f46a0f]">Official Student Portal</p>
            </div>
            <p className="text-sm font-medium leading-relaxed opacity-60">
              The elite digital ecosystem for Information Systems Engineering students, bridging high-end academic resources with a vibrant social core.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#f46a0f] transition-all duration-500">
                  <Icon />
                </a>
              ))}
              <a href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-[#f46a0f] transition-all duration-500 font-bold text-sm">𝕏</a>
            </div>
          </div>

          {/* Quick Hub Navigation */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">The Matrix</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
              <li><Link href="/" className="hover:text-[#f46a0f] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Home Hub</Link></li>
              <li><Link href="/about" className="hover:text-[#f46a0f] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> About Hub</Link></li>
              <li><Link href="/events" className="hover:text-[#f46a0f] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Events Matrix</Link></li>
              <li><Link href="/resources" className="hover:text-[#f46a0f] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Knowledge Vault</Link></li>
              <li><Link href="/community" className="hover:text-[#f46a0f] transition-colors flex items-center gap-2 group"><ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /> Social Hub</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Support Gateway</h4>
            <div className="space-y-6 text-xs font-medium opacity-70">
              <div className="flex items-start gap-4">
                 <MapPin size={16} className="text-[#f46a0f] shrink-0" />
                 <span>Level 04, New Building, <br /> Faculty of Computing, SLIIT</span>
              </div>
              <div className="flex items-center gap-4">
                 <Mail size={16} className="text-[#f46a0f] shrink-0" />
                 <span>isehub.official@sliit.lk</span>
              </div>
              <div className="flex items-center gap-4">
                 <Phone size={16} className="text-[#f46a0f] shrink-0" />
                 <span>+94 11 234 5678</span>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#f46a0f] text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/10 hover:scale-105 transition-all">
               Contact Us <Send size={14} />
            </Link>
          </div>

          {/* Newsletter / Insights */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Hub Insights</h4>
            <p className="text-xs font-medium leading-relaxed opacity-60">
              Subscribe to get technical summits and resource updates directly to your mail.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Digital Mail Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs font-bold text-white outline-none focus:border-[#f46a0f] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#f46a0f] text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* 02. Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-[9px] font-black uppercase tracking-widest opacity-40">
            <Link href="#" className="hover:text-[#f46a0f] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#f46a0f] transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-[#f46a0f] transition-colors">Accessibility</Link>
          </div>
          <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest opacity-40">
             <span>© 2024 ISE HUB</span>
             <div className="h-1 w-1 rounded-full bg-slate-500" />
             <span>Official Student Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export { Footer };
