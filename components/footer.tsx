import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background text-primary py-6 pb-24 md:pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side - Follow Us */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">
                Folge uns:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/share/1E3pZYvimU/?mibextid=wwXIfr"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 p-1.5 rounded-md"
                >
                  <Facebook className="w-5 h-5" fill="currentColor" />
                </a>
                <a
                  href="https://www.instagram.com/tobiasnadjib?igsh=MW12OG52M3BzdWZncg=="
                  target="_blank"
                  className="text-pink-600 hover:text-pink-700 transition-colors bg-pink-50 p-1.5 rounded-md"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Links */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
              <a
                href="/impressum"
                className="hover:text-primary transition-colors"
              >
                Impressum
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="/datenschutz"
                className="hover:text-primary transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>

          {/* Bottom Row - Copyright and Contact */}
          {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100 text-sm text-gray-500">
            <div>
              © 2026 Tobias Nadjib. Alle Rechte vorbehalten.
            </div>
            <div>
              Kontakt:{" "}
              <a
                href="mailto:Tobias@Verantwortung-Menschen-Zukunft.de"
                className="text-primary hover:underline transition-colors"
              >
                Tobias@Verantwortung-Menschen-Zukunft.de
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
