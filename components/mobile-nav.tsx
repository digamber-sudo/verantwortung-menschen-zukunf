import { Menu, X, Heart, Hand, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CampaignDialog } from "./campaign-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onToggle: () => void;
}

export function MobileNav({ isOpen, onClose, onToggle }: MobileNavProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    cn(
      "block px-6 py-3 text-base font-medium transition-colors",
      isActive(path)
        ? "bg-accent/10 text-accent font-bold border-r-4 border-accent"
        : "text-foreground hover:bg-background hover:text-accent",
    );

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-40 w-full bg-card border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-20 h-12 relative">
            <Link href="/">
              <Image
                src="/spd-logo1.jpg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => onToggle()}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-primary" />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={onClose}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClose();
          }}
          aria-label="Close menu"
        />
      )}

      {/* Mobile Menu Panel */}
      {isOpen && (
        <nav className="fixed top-0 right-0 bottom-0 z-40 w-64 bg-card shadow-2xl overflow-y-auto md:hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <span className="font-bold text-primary">Menu</span>
            <button
              onClick={() => onClose()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-primary" />
            </button>
          </div>

          <div className="py-6 space-y-1">
            <Link href="/" className={linkClass("/")} onClick={() => onClose()}>
              Home
            </Link>

            <Link
              href="/kandidat"
              className={linkClass("/kandidat")}
              onClick={() => onClose()}
            >
              Kandidat
            </Link>

            {/* <Link
              href="/team"
              className={linkClass("/team")}
              onClick={() => onClose()}
            >
              Team
            </Link> */}

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="prioritaeten" className="border-none">
                <AccordionTrigger
                  className={cn(
                    "px-6 py-3 text-base font-medium transition-colors hover:no-underline",
                      isActive("/prioritaeten")
                        ? "text-accent font-bold"
                        : "text-foreground hover:bg-background hover:text-accent",
                  )}
                >
                  Prioritäten
                </AccordionTrigger>
                <AccordionContent className="bg-background pb-0">
                  <div className="flex flex-col">
                    {[
                      { href: "/prioritaeten/gemeinde", label: "Gemeinde" },
                      { href: "/prioritaeten/wirtschaft", label: "Wirtschaft" },
                      {
                        href: "/prioritaeten/gemeinschaft",
                        label: "Gemeinschaft",
                      },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-10 py-3 text-sm font-medium transition-colors border-l-2 border-transparent",
                          pathname === item.href
                            ? "text-accent border-accent bg-accent/5 font-bold"
                            : "text-foreground hover:text-accent hover:border-accent",
                        )}
                        onClick={() => onClose()}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link
              href="/aktuelles"
              className={linkClass("/aktuelles")}
              onClick={() => onClose()}
            >
              Aktuelles
            </Link>

            {/* <Link
              href="/veranstaltungen"
              className={linkClass("/veranstaltungen")}
              onClick={() => onClose()}
            >
              Veranstaltungen
            </Link> */}

            <Link
              href="/kontakt"
              className={linkClass("/kontakt")}
              onClick={() => onClose()}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden flex flex-col z-50 shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.1)]">
        <div className="bg-[#003060] text-white text-[11px] font-black uppercase tracking-[0.15em] py-1.5 text-center border-b border-white/5">
          Mitmachen & Unterstützen
        </div>
        <div className="flex w-full">
          <CampaignDialog type="volunteer">
            <button className="flex-1 bg-accent hover:bg-red-700 text-white rounded-none h-14 flex flex-col items-center justify-center gap-1 transition-colors border-r border-white/20">
              <Hand className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-tight">
                Mitmachen
              </span>
            </button>
          </CampaignDialog>
          <CampaignDialog type="kontakt">
            <button className="flex-1 bg-[#1B8E3D] hover:bg-green-700 text-white rounded-none h-14 flex flex-col items-center justify-center gap-1 transition-colors border-r border-white/20">
              <Mail className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-tight">
                Kontakt
              </span>
            </button>
          </CampaignDialog>
          <CampaignDialog type="spenden">
            <button className="flex-1 bg-accent hover:bg-red-700 text-white rounded-none h-14 flex flex-col items-center justify-center gap-1 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="text-[10px] font-bold uppercase tracking-tight">
                Spenden
              </span>
            </button>
          </CampaignDialog>
        </div>
      </div>
    </>
  );
}
