"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { CampaignForm } from "@/components/campaign-form";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function KontaktPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "E-Mail",
      value: "Tobias@Verantwortung-Menschen-Zukunft.de",
      href: "mailto:Tobias@Verantwortung-Menschen-Zukunft.de",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Anschrift",
      value: "c/o SPD Unterbezirk Gifhorn, Steinweg 11, 38518 Gifhorn",
      href: "https://maps.google.com/?q=Steinweg+11+38518+Gifhorn",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: "Social Media",
      value: "Folgen Sie uns für tägliche Updates",
      href: "#",
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

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6 tracking-tight">
            Kontaktieren Sie <span className="text-accent">uns</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Haben Sie Fragen, Ideen oder möchten Sie Teil unserer Kampagne werden? Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>
      </section>

      <section className="flex-grow py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">Direktkontakt</h2>
                <div className="space-y-6">
                  {contactItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-gray-100 hover:shadow-md transition-all group"
                    >
                      <div className="p-3 bg-red-50 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm uppercase tracking-wider">{item.title}</h3>
                        <p className="text-gray-600 break-words">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-8 rounded-2xl text-white space-y-4">
                <h3 className="text-xl font-bold">Gemeinsam für Meine</h3>
                <p className="text-primary-foreground/80 leading-relaxed text-sm">
                  Jede Stimme zählt, und jeder Beitrag hilft. Lasst uns gemeinsam die Zukunft unserer Gemeinde gestalten.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-card p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-2">Schreiben Sie uns eine Nachricht</h2>
                <p className="text-gray-600">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
              </div>
              <CampaignForm type="kontakt" />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
