"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CampaignDialog } from "./campaign-dialog";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Header({
  onMenuToggle,
}: {
  readonly onMenuToggle: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    cn(
      navigationMenuTriggerStyle(),
      "font-medium transition-all duration-200 bg-transparent hover:bg-accent hover:text-white focus:bg-accent focus:text-white px-3 py-2 h-auto rounded-md",
      isActive(path) &&
        "font-bold text-primary border-b-2 border-accent rounded-none",
    );

  return (
    <header className="hidden md:flex sticky top-0 z-50 w-full bg-card border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
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

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={linkClass("/")}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={linkClass("/kandidat")}>
                <Link href="/kandidat">Kandidat</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuLink asChild className={linkClass("/team")}>
                <Link href="/team">Team</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "text-sm font-medium transition-colors hover:bg-accent hover:text-white focus:bg-accent focus:text-white px-3 py-2 rounded-md h-auto",
                  isActive("/prioritaeten") && "font-bold text-primary",
                )}
              >
                Prioritäten
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-48 p-2">
                  {[
                    { href: "/prioritaeten/gemeinde", label: "Gemeinde" },
                    { href: "/prioritaeten/wirtschaft", label: "Wirtschaft" },
                    {
                      href: "/prioritaeten/gemeinschaft",
                      label: "Gemeinschaft",
                    },
                  ].map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          "block select-none rounded-md px-3 py-2 text-sm font-medium no-underline outline-none transition-all hover:bg-accent hover:text-white",
                          pathname === item.href &&
                            "bg-accent/10 text-primary font-bold",
                        )}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={linkClass("/aktuelles")}>
                <Link href="/aktuelles">Aktuelles</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={linkClass("/veranstaltungen")}
              >
                <Link href="/veranstaltungen">Veranstaltungen</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={linkClass("/kontakt")}>
                <Link href="/kontakt">Kontakt</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <CampaignDialog type="volunteer">
          <Button className="bg-accent hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold transition-colors">
            Jetzt mitmachen
          </Button>
        </CampaignDialog>
      </div>
    </header>
  );
}
