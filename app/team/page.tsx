"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CampaignDialog } from "@/components/campaign-dialog";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Anna Becker",
    role: "Kampagnenkoordination",
    description: "Plant und steuert die Umsetzung der Kampagne.",
    image: "/team/anna_becker.png",
  },
  {
    name: "Daniel Schmidt",
    role: "Kommunikation",
    description: "Verantwortlich für Inhalte, Social Media und öffentliche Kommunikation.",
    image: "/team/daniel_schmidt.png",
  },
  {
    name: "Lisa Nguyen",
    role: "Organisation & Events",
    description: "Koordiniert Veranstaltungen und sorgt für reibungslose Abläufe vor Ort.",
    image: "/team/lisa_nguyen.png",
  },
  {
    name: "Thomas Weber",
    role: "Strategie",
    description: "Unterstützt die inhaltliche Ausrichtung und langfristige Planung.",
    image: "/team/thomas_weber.png",
  },
];

export default function TeamPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden min-h-screen">
      {/* Header */}
      <Header onMenuToggle={setMobileMenuOpen} />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Das Team hinter der Kampagne
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Engagierte Menschen aus unserer Gemeinde, die Verantwortung übernehmen und gemeinsam an konkreten Lösungen arbeiten.
            </p>
            <div className="h-px w-full max-w-2xl bg-slate-100 mx-auto mt-12 mb-8"></div>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto italic">
              Wir sind ein Team aus Bürgerinnen und Bürgern, die ihre Gemeinde aktiv mitgestalten – mit unterschiedlichen Perspektiven, klaren Zielen und dem gemeinsamen Anspruch, Dinge zu verbessern.
            </p>
          </div>
        </section>

        {/* Kernteam Section */}
        <section className="bg-background pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-left">
              <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-wide">
                Kernteam
              </h2>
              <p className="text-slate-600 text-sm">
                Das Kernteam organisiert, koordiniert und treibt die Kampagne voran.
              </p>
              <div className="h-0.5 w-16 bg-accent mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col sm:flex-row bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-slate-100 shadow-sm"
                >
                  <div className="relative w-full sm:w-[160px] h-[200px] sm:h-full shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-accent font-bold text-xs uppercase tracking-wider mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unterstützer Section */}
        <section className="bg-background py-12 px-4 border-t border-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-left mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Unterstützerinnen und Unterstützer
              </h2>
              <p className="text-slate-600 text-sm">
                Viele engagierte Bürgerinnen und Bürger unterstützen diese Kampagne – mit Ideen, Zeit und Einsatz für unsere Gemeinde. Gemeinsam für unsere Gemeinde.
              </p>
            </div>
          </div>
        </section>

        {/* Values Bar */}
        <section className="bg-background py-10 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Wofür wir stehen</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 text-slate-600">
              {["Bürgernah", "Transparent", "Lösungsorientiert", "Gemeinsam"].map((value, i, arr) => (
                <div key={value} className="flex items-center">
                  <span className="text-sm font-medium">{value}</span>
                  {i < arr.length - 1 && (
                    <span className="hidden md:block ml-10 h-4 w-px bg-slate-300"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-16 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4">Werden Sie Teil des Teams</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Bringen Sie sich ein, unterstützen Sie die Kampagne oder teilen Sie Ihre Ideen. Machen Sie mit und engagieren Sie sich für eine bessere Zukunft.
            </p>
            <div className="flex justify-center flex-col sm:flex-row gap-4">
              <CampaignDialog type="volunteer">
                <Button className="bg-accent hover:bg-red-700 text-white px-8 py-6 rounded-md font-bold text-lg transition-all flex items-center gap-2 group shadow-xl border-none">
                  Jetzt mitmachen <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CampaignDialog>
            </div>
          </div>
        </section>

        {/* Bottom Link */}
        <div className="py-12 bg-background text-center border-t border-slate-200">
          <Link 
            href="/kandidat" 
            className="text-slate-600 hover:text-accent font-medium text-sm flex items-center justify-center gap-2 transition-colors group"
          >
            Lernen Sie unseren Kandidaten kennen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
