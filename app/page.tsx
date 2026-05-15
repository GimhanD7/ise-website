"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/features/Hero";

// Dynamic imports for home page sections to improve performance
const EventsSection = dynamic(() => import("@/components/features/EventsSection").then(mod => mod.EventsSection), {
  loading: () => <div className="h-96" />
});
const AnnouncementsSection = dynamic(() => import("@/components/features/AnnouncementsSection").then(mod => mod.AnnouncementsSection), {
  loading: () => <div className="h-96" />
});
const ProjectsSection = dynamic(() => import("@/components/features/ProjectsSection").then(mod => mod.ProjectsSection), {
  loading: () => <div className="h-96" />
});
const HighlightsSection = dynamic(() => import("@/components/features/HighlightsSection").then(mod => mod.HighlightsSection), {
  loading: () => <div className="h-96" />
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-slate-900">
      <main className="flex-grow">
        {/* Critical Path: Immediate Load */}
        <Hero />
        
        {/* Deferred Sections: Loaded as needed */}
        <EventsSection />
        <AnnouncementsSection />
        <ProjectsSection />
        <HighlightsSection />
      </main>
    </div>
  );
}
