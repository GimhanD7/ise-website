"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  MessageCircle, 
  Plus, 
  ChevronRight,
  Search,
  User,
  Sparkles
} from "lucide-react";

interface Discussion {
  id: string;
  user: {
    name: string;
    role: string;
  };
  category: "Academics" | "Careers" | "Projects" | "Internships";
  title: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
  isLiked: boolean;
}

const DiscussionCard = ({ post, onLike }: { post: Discussion; onLike: (id: string) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-[0_20px_40px_rgba(30,58,95,0.05)] transition-all duration-500 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1e3a5f] font-black border border-slate-100">
            {post.user.name[0]}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-black text-[#1e3a5f] leading-none">{post.user.name}</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-50 text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1 w-fit">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 flex-grow">
        <h3 className="text-base font-black text-[#1e3a5f] leading-tight group-hover:text-[#f46a0f] transition-colors">
          {post.title}
        </h3>
        <p className="text-[11px] font-medium text-slate-400 leading-relaxed line-clamp-3">
          {post.content}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onLike(post.id)}
            className={`flex items-center gap-1.5 transition-all ${post.isLiked ? 'text-red-500' : 'text-slate-300 hover:text-slate-500'}`}
          >
            <Heart size={14} fill={post.isLiked ? "currentColor" : "none"} />
            <span className="text-[10px] font-black">{post.likes}</span>
          </button>
          <div className="flex items-center gap-1.5 text-slate-300">
            <MessageCircle size={14} />
            <span className="text-[10px] font-black">{post.comments}</span>
          </div>
        </div>
        <span className="text-[9px] font-bold text-slate-300 uppercase">{post.time}</span>
      </div>
    </motion.div>
  );
};

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState("All Discussions");
  const [posts, setPosts] = useState<Discussion[]>([
    {
      id: "1",
      user: { name: "Alice Johnson", role: "ISE Hub" },
      category: "Academics",
      title: "Best study techniques for final exams?",
      content: "I'm struggling to retain information for my upcoming final exams. Any tried and true study techniques or resources you'd recommend for systems engineering?",
      likes: 25,
      comments: 8,
      time: "2 hours ago",
      isLiked: false
    },
    {
      id: "2",
      user: { name: "Bob Smith", role: "ISE Hub" },
      category: "Careers",
      title: "Advice for my first job interview?",
      content: "Just landed my first interview for a junior software developer role! Any tips on what to wear, common questions, or how to showcase my project portfolio effectively?",
      likes: 18,
      comments: 5,
      time: "4 hours ago",
      isLiked: true
    },
    {
      id: "3",
      user: { name: "Charlie Davis", role: "ISE Hub" },
      category: "Projects",
      title: "Seeking collaborators for a hackathon project!",
      content: "Our team is looking for a UI/UX designer and a backend developer for an upcoming university hackathon. We're building a campus navigation system.",
      likes: 30,
      comments: 12,
      time: "7 hours ago",
      isLiked: false
    }
  ]);

  const tabs = ["All Discussions", "Academics", "Careers", "Projects", "Internships"];

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, likes: p.isLiked ? p.likes - 1 : p.likes + 1, isLiked: !p.isLiked };
      }
      return p;
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50/30 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* 01. Refined Hero Card */}
        <section className="mb-16">
           <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-100 p-8 md:p-16 shadow-sm">
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                 <div className="space-y-8">
                    <div className="space-y-4">
                       <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-[#1e3a5f] leading-none uppercase">
                          Your Student <br />
                          <span className="text-[#f46a0f]">Community Hub</span>
                       </h1>
                       <p className="max-w-md text-sm font-medium text-[#1e3a5f]/60 leading-relaxed">
                          Connect with fellow students, get academic help, explore career paths, and collaborate on exciting projects. Your questions, answered.
                       </p>
                    </div>
                    <button className="px-10 py-5 bg-[#1e3a5f] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl shadow-[#1e3a5f]/20 hover:scale-105 transition-all flex items-center gap-4">
                       Ask a Question <Plus size={16} />
                    </button>
                 </div>
                 <div className="relative flex justify-center md:justify-end">
                    <img 
                      src="/community_hub_illustration_1778885738628.png" 
                      alt="Community Hub" 
                      className="w-full max-w-[500px] h-auto"
                    />
                 </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
           </div>
        </section>

        {/* 02. Precision Filter Pills */}
        <section className="mb-16">
           <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab 
                    ? "bg-[#1e3a5f] text-white shadow-xl shadow-[#1e3a5f]/20" 
                    : "bg-white text-slate-400 border border-slate-100 hover:border-[#1e3a5f]"
                  }`}
                >
                  {tab}
                </button>
              ))}
           </div>
        </section>

        {/* 03. Recent Discussions Matrix */}
        <section className="space-y-10">
           <div className="flex flex-col items-center space-y-2">
              <h2 className="text-2xl font-black text-[#1e3a5f] uppercase tracking-tighter">Recent Discussions</h2>
              <div className="h-1 w-12 bg-[#f46a0f] rounded-full" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <DiscussionCard key={post.id} post={post} onLike={handleLike} />
              ))}
           </div>

           <div className="flex justify-center mt-12">
              <button className="group flex items-center gap-4 px-10 py-5 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#1e3a5f] shadow-xl shadow-black/5 hover:border-[#f46a0f] transition-all">
                Load More Discussions <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </section>

      </div>
    </main>
  );
};

export default CommunityPage;
