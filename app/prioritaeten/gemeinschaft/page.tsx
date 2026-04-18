"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { PriorityHero } from "@/components/priority-hero";
import { Users, Tent, Milestone } from "lucide-react";

export default function GemeinschaftPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    {
      icon: <Users className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Vereine fördern",
      description: "Unterstützung für ehrenamtliches Engagement",
    },
    {
      icon: <Tent className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Begegnungsorte schaffen",
      description: "Neue Räume für Austausch und Kultur",
    },
    {
      icon: <Milestone className="w-8 h-8 lg:w-12 lg:h-12" />,
      title: "Zukunft gestalten",
      description: "Jugend & Senioren aktiv einbinden",
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
        title="Gemeinschaft stärken."
        subtitle="Zusammenhalt. Engagement. Zukunft."
        problem={[
            "Das Ehrenamt steht vor großen Hürden.",
            "Viele soziale Treffpunkte fehlen."
        ]}
        solutions={solutions}
      />

      <Footer />
    </main>
  );
}
