import Link from "next/link";
import {
  Home,
  Briefcase,
  Handshake,
} from "lucide-react";

const priorities = [
  {
    id: 1,
    icon: Home,
    label: "Gemeinde",
    description: "Kurze Wege, verlässliche Strukturen, lebendige Orte",
    color: "#71BE43",
    href: "/prioritaeten/gemeinde",
  },
  {
    id: 2,
    icon: Briefcase,
    label: "Wirtschaft",
    description: "Solide Finanzen, starke Betriebe, Chancen klug nutzen",
    color: "#52B7C1",
    href: "/prioritaeten/wirtschaft",
  },
  {
    id: 3,
    icon: Handshake,
    label: "Gemeinschaft",
    description: "Zusammenhalt, Sicherheit, Lebensqualität",
    color: "#E3000F",
    href: "/prioritaeten/gemeinschaft",
  },
];

export function Priorities() {
  return (
    <div id="prioritaeten" className="w-full">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-6 lg:mb-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-2xl lg:text-3xl font-bold text-primary text-center">
            Unsere <span className="text-accent">Prioritäten</span>
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {priorities.map((priority) => {
            const Icon = priority.icon;
            return (
              <Link
                key={priority.id}
                href={priority.href}
                className="bg-card border-2 border-gray-100 rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 col-span-1 group cursor-pointer"
              >
                {/* Header: Icon + Label */}
                <div className="flex items-center gap-3 md:gap-4 mb-4 lg:mb-6">
                  <div className="p-2 md:p-3 rounded-full bg-background group-hover:bg-card transition-colors flex-shrink-0">
                    <Icon
                      style={{ color: priority.color }}
                      className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
                    {priority.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed max-w-[280px]">
                  {priority.description}
                </p>

                {/* Decorative Bar */}
                <div
                  className="h-1 lg:h-1.5 w-10 lg:w-16 mt-4 md:mt-6 rounded-full opacity-60"
                  style={{ backgroundColor: priority.color }}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
