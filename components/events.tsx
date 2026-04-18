import { ChevronRight, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CampaignDialog } from "./campaign-dialog";
import Link from "next/link";

const events = [
  {
    id: 1,
    day: "15",
    month: "APR",
    fullDate: "15. April 2026",
    time: "18:30 Uhr",
    title: "Bürgerdialog im Dorfgemeinschaftshaus",
    location: "Meine Zentrum, Hauptstraße 1",
    description: "Kommen Sie vorbei und diskutieren Sie mit uns über die Zukunft unserer Gemeinde. Ihre Meinung ist uns wichtig!",
    mapLink: "https://maps.google.com/?q=Meine+Zentrum",
  },
  {
    id: 2,
    day: "22",
    month: "APR",
    fullDate: "22. April 2026",
    time: "19:00 Uhr",
    title: "Townhall Meeting zur Mobilität",
    location: "Zellbergsiedlung, Am Zellberg 5",
    description: "Wie sieht die Mobilität von morgen aus? Wir stellen unsere Konzepte vor und hören uns Ihre Ideen an.",
    mapLink: "https://maps.google.com/?q=Zellbergsiedlung",
  },
  {
    id: 3,
    day: "05",
    month: "MAI",
    fullDate: "05. Mai 2026",
    time: "09:00 Uhr",
    title: "Marktstand-Gespräche",
    location: "Marktplatz Meine",
    description: "Besuchen Sie uns an unserem Stand auf dem Wochenmarkt. Wir freuen uns auf den direkten Austausch bei einem Kaffee.",
    mapLink: "https://maps.google.com/?q=Marktplatz+Meine",
  },
];

export function Events({ isFullPage = false }: { readonly isFullPage?: boolean }) {
  return (
    <div id={isFullPage ? undefined : "veranstaltungen"} className="w-full">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
            Nächste Veranstaltungen
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-2xl overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group h-full"
            >
              {/* Date Header Section */}
              <div className="bg-primary px-6 py-4 flex items-center justify-between text-white shrink-0 group-hover:bg-primary/95 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black leading-none">{event.day}</span>
                  <span className="text-sm font-bold uppercase tracking-widest border-l border-white/30 pl-3">
                    {event.month}
                  </span>
                </div>
                <span className="text-sm font-medium opacity-90 hidden sm:block">
                  {event.fullDate}
                </span>
              </div>

              {/* Content Section */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary leading-tight min-h-[3rem] lg:min-h-[3.5rem] flex items-center">
                    {event.title}
                  </h3>
                  
                  {/* Meta Info row */}
                  <div className="flex flex-col gap-2 text-sm lg:text-base text-gray-600">
                    <div className="flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-accent shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                      <MapPin className="w-4 h-4 text-accent shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                  {event.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <CampaignDialog type="event" eventName={event.title}>
                    <Button className="bg-accent hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg transition-colors flex-1 sm:flex-none">
                      Anmelden
                    </Button>
                  </CampaignDialog>
                  
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 font-bold px-6 py-2 rounded-lg transition-colors flex items-center gap-2 flex-1 sm:flex-none"
                    asChild
                  >
                    <a href={event.mapLink} target="_blank" rel="noopener noreferrer">
                      Anfahrt <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Only on home) */}
        {!isFullPage && (
          <div className="flex justify-end mt-6">
            <Link href="/veranstaltungen">
              <Button
                variant="link"
                className="text-primary font-bold text-base lg:text-lg hover:text-accent flex items-center gap-2 p-0"
              >
                Alle Veranstaltungen <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

