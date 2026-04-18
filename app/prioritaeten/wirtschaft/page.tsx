"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { PriorityHero } from "@/components/priority-hero";
import { Briefcase, Building2, Cpu } from "lucide-react";

export default function WirtschaftPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    {
      icon: <Briefcase className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Unternehmen unterstützen",
      description: "Schnellere Verfahren",
    },
    {
      icon: <Building2 className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Standort stärken",
      description: "Neue Investitionen",
    },
    {
      icon: <Cpu className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Digitalisierung vorantreiben",
      description: "Moderne Infrastruktur",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden min-h-screen flex flex-col">
      <Header onMenuToggle={setMobileMenuOpen} />
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <PriorityHero
        title="Wirtschaft stärken."
        subtitle="Stabil. Lokal. Zukunftssicher."
        problem={[
            "Unternehmen kämpfen mit Bürokratie.",
            "Chancen bleiben ungenutzt."
        ]}
        solutions={solutions}
      />

      <Footer />
    </main>
  );
}
