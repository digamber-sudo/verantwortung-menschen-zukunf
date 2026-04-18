"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { LatestUpdates } from "@/components/latest-updates";

export default function AktuellesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden min-h-screen flex flex-col">
      <Header onMenuToggle={setMobileMenuOpen} />
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight">
            Aktuelles zur <span className="text-accent">Kampagne</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Bleiben Sie informiert über unsere neuesten Aktivitäten, Pressemitteilungen und politischen Schwerpunkte.
          </p>
        </div>
      </section>

      <div className="flex-grow">
        <LatestUpdates isFullPage={true} />
      </div>

      <Footer />
    </main>
  );
}
