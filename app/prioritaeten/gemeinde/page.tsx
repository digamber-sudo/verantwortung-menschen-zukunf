"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { PriorityHero } from "@/components/priority-hero";
import { MonitorCheck, Building, ClipboardCheck } from "lucide-react";

export default function GemeindePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    {
      icon: <MonitorCheck className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Digitale Verwaltung",
      description: "Online-Services und schnellere Prozesse",
    },
    {
      icon: <Building className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Bürgerbüro stärken",
      description: "Bessere Erreichbarkeit, weniger Wartezeit",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Klare Zuständigkeiten",
      description: "Weniger Bürokratie, mehr Effizienz",
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
        title="Gemeinde stärken."
        subtitle="Einfach. Schnell. Bürgernah."
        problem={[
            "Verwaltung ist oft zu kompliziert.",
            "Viele Prozesse dauern zu lange."
        ]}
        solutions={solutions}
      />

      <Footer />
    </main>
  );
}
