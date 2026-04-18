'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Priorities } from '@/components/priorities';
import { Events } from '@/components/events';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { MobileNav } from '@/components/mobile-nav';
import { LatestUpdates } from '@/components/latest-updates';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden">
      {/* Desktop Header */}
      <Header onMenuToggle={setMobileMenuOpen} />

      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Main Content - Add bottom padding on mobile for fixed nav */}
      <div className="md:pb-0 pb-12">
        {/* Hero Section */}
        <Hero />

        {/* Priorities and Events Section */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 md:pb-8 flex flex-col gap-16 lg:gap-24">
          <Priorities />
          {/* <Events /> */}
        </div>

        {/* Latest Updates Section */}
        <LatestUpdates />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
