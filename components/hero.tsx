import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { CampaignDialog } from "./campaign-dialog";

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-background">
      {/* Container holding the background image and the main hero content */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image with Responsive URLs */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-[center_35%] md:bg-top md:bg-[url('/hero-image-desktop-tobias-nadjib.avif')] bg-[url('/hero-image-mobile-tobias-nadjib.avif')]"></div>

        {/* Curved Red Background Layer */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <svg
            className="w-[80%] h-full"
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1440V0C1000 50 600 200 0 400V0Z"
              className="fill-accent"
            />
          </svg>
        </div>

        {/* SPD Logo - Bottom Right */}
        <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 z-20 w-16 md:w-36 shadow-lg">
          <Image
            src="/spd-logo1.jpg"
            alt="SPD Logo"
            width={200}
            height={80}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex items-center pt-8 pb-12 md:pt-12 md:pb-14">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-center items-start">
                {/* Keyword Containers (now transparent, white text on red background shape) */}
                <div className="flex flex-col gap-1 md:gap-2 mb-8 md:mb-6">
                  <div className="px-4 py-1 md:px-6 md:py-2 w-fit bg-card">
                    <span className="text-l md:text-4xl lg:text-5xl font-black text-red-600 tracking-widest uppercase">
                      Verantwortung.
                    </span>
                  </div>
                  <div className="px-4 py-1 md:px-6 md:py-2 w-fit bg-card">
                    <span className="text-l md:text-4xl lg:text-5xl font-black text-red-600 tracking-widest uppercase">
                      Menschen.
                    </span>
                  </div>
                  <div className="px-4 py-1 md:px-6 md:py-2 w-fit bg-card">
                    <span className="text-l md:text-4xl lg:text-5xl font-black text-red-600 tracking-widest uppercase">
                      Zukunft.
                    </span>
                  </div>
                </div>

                {/* Name and Title in White Content Box */}
                <div className="bg-card py-2 px-3 md:py-10 md:px-12 shadow-2xl mb-4 md:mb-12 w-fit transform -skew-x-2 border-l-4 border-accent mt-6 md:mt-6">
                  <div className="transform skew-x-2">
                    <h1 className="text-lg md:text-4xl lg:text-5xl font-black text-black mb-1 md:mb-2 leading-none">
                      Tobias Nadjib
                    </h1>
                    <p className="text-[10px] md:text-3xl font-bold text-accent leading-tight">
                      Bürgermeisterkandidat für die <br className="md:hidden" />{" "}
                      Gemeinde{" "}
                      <span className="text-accent font-extrabold">Meine</span>
                    </p>
                    <p className="text-[10px] md:text-3xl text-black leading-tight mt-1 md:mt-2">
                      Kandidat für den Rat der <br className="md:hidden" />{" "}
                      Samtgemeinde Papenteich
                    </p>
                  </div>
                </div>

                {/* CTA Buttons - Web & Tablet: Both, Mobile: First Only */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-fit items-start">
                  <CampaignDialog type="volunteer">
                    <Button className="bg-accent hover:bg-red-700 text-white w-fit px-3 md:px-6 py-2 md:py-4 rounded-none font-black text-xs md:text-base transition-all flex items-center justify-center gap-2 border-none uppercase tracking-wider">
                      Jetzt mitmachen &rarr;
                    </Button>
                  </CampaignDialog>
                </div>
              </div>

              {/* Right Column - Empty for Image */}
              <div className="hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
