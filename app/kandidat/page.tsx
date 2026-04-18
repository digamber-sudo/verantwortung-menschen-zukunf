"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { CampaignDialog } from "@/components/campaign-dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function KandidatPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <Header onMenuToggle={setMobileMenuOpen} />

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden flex items-center min-h-[450px] sm:min-h-[550px] lg:min-h-[750px]">
        {/* Background Wrapper */}
        {/* Background Section (Matching PriorityHero) */}
        <div className="absolute inset-0 z-0">
          {/* Base layer: Clear Image */}
          <div className="absolute inset-0 bg-cover bg-center brightness-100 bg-[url('/hero-image-mobile-tobias-nadjib.avif')] md:bg-[url('/hero-image-desktop-tobias-nadjib.avif')]" />
          {/* Top layer: Blurred Image (masked to end at 50%) */}
          <div className="hidden lg:block absolute inset-0 bg-cover bg-center brightness-75 blur-[2px] opacity-40 bg-[url('/hero-image-mobile-tobias-nadjib.avif')] md:bg-[url('/hero-image-desktop-tobias-nadjib.avif')] [mask-image:linear-gradient(to_right,black_0%,black_40%,transparent_50%)]" />
          {/* White Gradient Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,white_10%,transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 relative z-10">
          <div className="w-full sm:w-2/3 lg:w-1/2 text-left pt-24 sm:pt-0">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-primary mb-4 lg:mb-6">
              Tobias Nadjib
            </h1>
            <div className="h-1 w-16 md:w-24 bg-accent mb-6 md:mb-8"></div>
            <p className="text-lg sm:text-2xl lg:text-3xl text-black font-medium italic mb-2 md:mb-4 leading-tight lg:leading-relaxed [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
              Für Meine.<br className="sm:hidden" /> Mit Verantwortung.
            </p>
            <p className="text-sm sm:text-lg lg:text-xl text-black leading-relaxed max-w-md [text-shadow:_0_0_8px_rgba(255,255,255,0.8)]">
              Verlässlich. Engagiert.<br className="sm:hidden" /> Nah bei den Menschen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="w-full">
        {/* 2. Short Profile */}
        <section className="bg-background py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
            <p className="text-xl md:text-3xl text-gray-700 font-bold">
              Seit vielen Jahren in Meine zuhause.
            </p>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Engagiert für eine starke Gemeinde,
              <br className="hidden md:block" />
              eine funktionierende Wirtschaft
              <br className="hidden md:block" />
              und ein gutes Miteinander.
            </p>
          </div>
        </section>

        {/* 3. Experience & 4. Community Engagement */}
        <section className="bg-background py-12 md:py-20">
          <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {/* Experience */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary border-b-2 border-accent inline-block pb-1">
                  Erfahrung
                </h2>
                <ul className="space-y-4">
                  {[
                    "Berufserfahrung in verantwortungsvollen Positionen",
                    "Erfahrung in Führung und Organisation",
                    "Praxisnahes Verständnis für lokale Herausforderungen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed font-medium text-lg md:text-2xl">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Engagement */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary border-b-2 border-accent inline-block pb-1">
                  Engagement
                </h2>
                <ul className="space-y-4">
                  {[
                    "Engagement für die Gemeinde",
                    "Unterstützung von Vereinen und Initiativen",
                    "Im direkten Austausch mit Bürgerinnen und Bürgern",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#1B8E3D] shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed font-medium text-lg md:text-2xl">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Motivation */}
        <section className="bg-background py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight max-w-2xl mx-auto italic">
              "Ich kandidiere, weil Meine eine starke Zukunft braucht."
            </h2>
            <div className="flex flex-col items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-30"></div>
            </div>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto font-medium">
              Mit klaren Entscheidungen,
              <br />
              funktionierenden Strukturen
              <br />
              und echtem Zusammenhalt.
            </p>
          </div>
        </section>

        {/* 6. Values */}
        <section className="bg-background py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-12">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 xl:gap-20">
              {["Verantwortung.", "Menschen.", "Zukunft."].map((val) => (
                <div key={val} className="group cursor-default">
                  <span className="text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-accent transition-all duration-300 tracking-tighter">
                    {val}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-background px-6 text-2xl text-gray-500 font-medium italic">
                  Dafür stehe ich.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="bg-background py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
            <CampaignDialog type="volunteer">
              <Button className="bg-accent hover:bg-red-700 text-white font-bold h-16 md:h-20 px-8 md:px-12 text-xl md:text-2xl rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Jetzt mitmachen
              </Button>
            </CampaignDialog>
            <p className="text-xl md:text-2xl text-primary font-bold">
              Gemeinsam Meine gestalten.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
