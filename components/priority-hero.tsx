"use client";

import { Button } from "@/components/ui/button";
import { CampaignDialog } from "./campaign-dialog";
import { ReactNode } from "react";

interface Solution {
  icon: ReactNode;
  title: string;
  description: string;
}

interface PriorityHeroProps {
  title: string;
  subtitle: string;
  problem: string[];
  solutions: Solution[];
}

export function PriorityHero({
  title,
  subtitle,
  problem,
  solutions,
}: PriorityHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Section */}
      <div className="absolute inset-0 z-0">
        {/* Base layer: Clear Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-100 bg-[url('/priority-bag-hero-image-mobile.avif')] md:bg-[url('/Priority-bg-desktop.avif)]"
        />
        {/* Top layer: Blurred Image (masked to end at 50%) */}
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center brightness-75 blur-[2px] opacity-40 bg-[url('/priority-bag-hero-image-mobile.avif')] md:bg-[url('/Priority-bg-desktop.avif)] [mask-image:linear-gradient(to_right,black_0%,black_40%,transparent_50%)]"
        />
        {/* White Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_10%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] py-16 md:py-24">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-tight tracking-tighter italic">
                {title}
              </h1>
              <p className="text-xl md:text-3xl font-bold text-gray-700">
                {subtitle}
              </p>
            </div>

            <div className="space-y-2 max-w-xl">
              {problem.map((line, i) => (
                <p key={i} className="text-lg md:text-2xl text-gray-600 font-medium leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Desktop Solutions Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6 pt-8">
              {solutions.map((sol, i) => (
                <div key={i} className="bg-card/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white flex flex-col items-center text-center group hover:scale-105 transition-all duration-300">
                  <div className="mb-4 text-accent transition-transform group-hover:scale-110 duration-300">
                    {sol.icon}
                  </div>
                  <h3 className="font-bold text-primary text-sm lg:text-base mb-2">{sol.title}</h3>
                  <p className="text-xs text-gray-500 leading-normal">{sol.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <CampaignDialog type="volunteer">
                <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-black px-10 py-8 text-2xl rounded-2xl shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all">
                  Jetzt mitmachen
                </Button>
              </CampaignDialog>
            </div>
          </div>

        </div>

        {/* Mobile Solutions List */}
        <div className="md:hidden pb-16 space-y-4">
            {solutions.map((sol, i) => (
                <div key={i} className="bg-card p-6 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                  <div className="text-accent shrink-0">
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{sol.title}</h3>
                    <p className="text-sm text-gray-500">{sol.description}</p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
