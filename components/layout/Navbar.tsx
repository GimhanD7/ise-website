"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 z-[100] w-full px-4 py-4 transition-all duration-300 sm:px-6 sm:py-6">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 transition-all duration-500 sm:h-16",
          scrolled || isMenuOpen
            ? "rounded-xl border border-white/40 bg-white/70 shadow-2xl shadow-[#1e3a5f]/5 backdrop-blur-xl"
            : "rounded-xl border border-transparent bg-transparent"
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#1e3a5f] to-[#3a44a1] shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 sm:h-10 sm:w-10 sm:rounded-xl">
              <span className="text-lg font-black text-white sm:text-xl">I</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-black tracking-tighter text-slate-900 sm:text-lg">
                ISE <span className="text-[#1e3a5f]">HUB</span>
              </span>
              <span className="hidden text-[8px] font-bold uppercase tracking-[0.2em] text-[#f46a0f] sm:block sm:text-[10px]">
                Official Student Portal
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden items-center gap-1 rounded-full bg-slate-100/50 p-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 sm:px-5 sm:py-2 sm:text-sm",
                activeTab === link.name ? "text-[#1e3a5f]" : "text-slate-500 hover:text-slate-900"
              )}
            >
              {activeTab === link.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white shadow-sm"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3a5f]/5 text-[#1e3a5f] md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-6 right-6 top-24 z-[-1] overflow-hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "flex h-12 items-center rounded-2xl px-4 text-sm font-bold transition-all",
                    activeTab === link.name
                      ? "bg-[#1e3a5f] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navbar };
