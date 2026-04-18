"use client";

import { ChevronRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const updates = [
  {
    id: 1,
    date: "13.02.2026",
    category: "Presse",
    title: "Dieser Sozialdemokrat möchte Bürgermeister der Gemeinde Meine werden",
    summary:
      "Tobias Nadjib tritt für die SPD an. Ein Porträt über den 52-jährigen Feuerwehrmann, der das Bürgermeisteramt erobern will.",
    image: "/aktuelles/aktuelles-1.png",
    link: "https://www.waz-online.de/lokales/gifhorn-lk/papenteich/kommunalwahl-2026-wer-tritt-in-meine-fuer-den-buergermeister-posten-an-KQJLJNYTYBEVFICE7SWYS235ZY.html", // Replace with actual link
  },
  {
    id: 2,
    date: "07.03.2026",
    category: "Politik",
    title: "GERECHT STATT GESCHLECHT   OHNE UNS STEHT ALLES STILL",
    summary:
      "Anlässlich des Internationalen Frauentags am 8.März hatte der SPD-Ortsverein Meine dort einen Stand mit Waffeln, Kaffee und Kindergetränken, vielen Informationen zum Thema „Gleichberechtigung/Gleichstellung“ sowie zur Geschichte der Frauenrechte in Deutschland aufgebaut und lud die Marktbesucher damit zu Gesprächen und Diskussionen ein.",
    image: "/aktuelles/aktuelles-6.png",
    link: "https://www.spd-meine.de/2026/03/15/spd-meine-zum-frauentag/", // Replace with actual link
  },
  // {
  //   id: 3,
  //   date: "07.03.2026",
  //   category: "Veranstaltung",
  //   title: "Weltfrauentag in Meine! Marktplatz am 07.03.2026",
  //   summary:
  //     "Einladung zum Weltfrauentag auf dem Marktplatz. Kommen Sie vorbei zum Austausch bei Waffeln und Kaffee.",
  //   image: "/aktuelles/aktuelles-3.png",
  // },
  // {
  //   id: 4,
  //   date: "10.03.2026",
  //   category: "Themen",
  //   title: "Umwelt- und Planungsausschuss: Fokus auf Nachhaltigkeit",
  //   summary:
  //     "Bericht aus dem Ausschuss: 26 Tagesordnungspunkte wurden beraten. Der Antrag für neue Waschboxen wurde abgelehnt.",
  //   image: "/aktuelles/aktuelles-4.png",
  // },
  // {
  //   id: 5,
  //   date: "11.03.2026",
  //   category: "Themen",
  //   title: "Ausschuss für Finanzen und Wirtschaft: Haushalt zugestimmt",
  //   summary:
  //     "Wichtiger Meilenstein: Der Ausschuss hat dem Haushaltsplan zugestimmt. Nun folgen die Beratungen in weiteren Gremien.",
  //   image: "/aktuelles/aktuelles-5.png",
  // },
];

export function LatestUpdates({ isFullPage = false }: { isFullPage?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(isFullPage ? updates.length : 4);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(4);
      } else {
        setVisibleCount(2);
      }
      setIsLoaded(true);
    };

    handleResize(); // Set initial count
    // Optional: window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleUpdates = updates.slice(0, visibleCount);
  const hasMore = visibleCount < updates.length;

  // Prevent hydration mismatch by only rendering after mount
  if (!isLoaded) return null;

  return (
    <section id="aktuelles" className="w-full py-12 lg:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-10">
          <div>
            <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
                Aktuelles zur <span className="text-accent">Kampagne</span>
              </h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Bleiben Sie informiert über unsere neuesten Aktivitäten,
              Pressemitteilungen und politischen Schwerpunkte.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleUpdates.map((update) => (
            <div
              key={update.id}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-20" />
                <Image
                  src={update.image}
                  alt={update.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider bg-red-50 px-2 py-1 rounded">
                    {update.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {update.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight min-h-[3.5rem]">
                  {update.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {update.summary}
                </p>

                {update.link ? (
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 border-t border-gray-50 flex items-center text-primary font-bold text-sm hover:text-accent transition-all group-hover:gap-3 gap-2"
                  >
                    Weiterlesen <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-primary font-bold text-sm group-hover:gap-3 gap-2 transition-all">
                    Weiterlesen <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Only on home) */}
        {!isFullPage && (
          <div className="flex justify-end mt-6">
            <Link href="/aktuelles">
              <Button
                variant="link"
                className="text-primary font-bold text-base lg:text-lg hover:text-accent flex items-center gap-2 p-0"
              >
                Alle Aktuelles <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        )}

        {hasMore && !isFullPage && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount(updates.length)}
              className="bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 border-2 border-white shadow-lg group"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Mehr laden
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
