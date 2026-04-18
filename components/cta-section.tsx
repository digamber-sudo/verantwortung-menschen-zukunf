import { Button } from "@/components/ui/button";
import { Heart, Hand, Mail } from "lucide-react";
import { CampaignDialog } from "./campaign-dialog";

export function CTASection() {
  return (
    <>
      {/* Desktop/Tablet CTA */}
      <section
        id="mitmachen"
        className="hidden md:block relative w-full bg-[#003060] py-6 px-4 md:px-6 overflow-hidden mt-8"
      >
        {/* Red shape on right edge */}
        <div className="absolute top-0 right-0 w-64 h-full hidden lg:block">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            className="w-full h-full fill-accent"
          >
            <path d="M 100 0 L 100 100 L 20 100 Q 0 50 20 0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-between">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white max-w-[30%] leading-tight">
            Mitmachen & <br className="hidden xl:block" /> Unterstützen
          </h2>

          <div className="flex items-center gap-2 lg:gap-4 flex-1 justify-end z-20">
            {/* Volunteer Button */}
            <CampaignDialog type="volunteer">
              <Button className="bg-accent hover:bg-red-700 text-white font-bold h-14 lg:h-16 px-4 lg:px-8 text-base lg:text-xl rounded-xl transition-colors flex items-center justify-center gap-2 border-2 border-white">
                <Hand className="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
                <span>Jetzt mitmachen</span>
              </Button>
            </CampaignDialog>

            {/* Contact Button */}
            <CampaignDialog type="kontakt">
              <Button className="bg-[#1B8E3D] hover:bg-green-700 text-white font-bold h-14 lg:h-16 px-4 lg:px-8 text-base lg:text-xl rounded-xl transition-colors flex items-center justify-center gap-2 border-2 border-white">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
                <span>Kontakt</span>
              </Button>
            </CampaignDialog>
            
            {/* Donate Button */}
            <CampaignDialog type="spenden">
              <Button className="bg-accent hover:bg-red-700 text-white font-bold h-14 lg:h-16 px-4 lg:px-8 text-base lg:text-xl rounded-xl transition-colors flex items-center justify-center gap-2 border-2 border-white">
                <Heart className="w-5 h-5 lg:w-6 lg:h-6 fill-white" />
                <span>Spenden</span>
              </Button>
            </CampaignDialog>
          </div>
        </div>
      </section>
    </>
  );
}
