"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";

export default function ImpressumPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden min-h-screen flex flex-col">
      <Header onMenuToggle={setMobileMenuOpen} />
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <div className="flex-grow container mx-auto px-4 max-w-4xl pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>

        <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Verantwortlich für den Inhalt:
              <br />
              Tobias Nadjib
              <br />
              Bürgermeisterkandidat für Meine
              <br />
              c/o SPD Unterbezirk Gifhorn
              <br />
              Steinweg 11
              <br />
              38518 Gifhorn
              <br />
              Deutschland
            </p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:Tobias@Verantwortung-Menschen-Zukunft.de"
                className="text-accent hover:underline"
              >
                Tobias@Verantwortung-Menschen-Zukunft.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>Tobias Nadjib, Anschrift wie oben.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Haftung für Inhalte
            </h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
            <p>
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Urheberrecht
            </h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht.
            </p>
            <p>
              Beiträge Dritter sind als solche gekennzeichnet. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Bildnachweise
            </h2>
            <p>
              Die auf dieser Website verwendeten Bilder und Grafiken sind
              urheberrechtlich geschützt.
            </p>
            <p>
              Sofern nicht anders angegeben, liegen die Bildrechte bei:
              <br />
              Tobias Nadjib / Kampagnen-Team
            </p>
          </section>

          <section className="bg-card p-6 rounded-lg border border-gray-200 italic">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Hinweis zur politischen Kommunikation
            </h2>
            <p>
              Diese Website dient der Information über die politische Arbeit und
              die Kandidatur von Tobias Nadjib als Bürgermeisterkandidat für
              Meine.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
