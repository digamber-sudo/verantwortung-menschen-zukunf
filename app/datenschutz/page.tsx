'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileNav } from '@/components/mobile-nav';

export default function DatenschutzPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="w-full overflow-x-hidden min-h-screen flex flex-col">
      <Header onMenuToggle={setMobileMenuOpen} />
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} />

      <div className="flex-grow container mx-auto px-4 max-w-4xl pt-8 md:pt-12 pb-16">
        <h1 className="text-4xl font-bold text-primary mb-8 tracking-tight">Datenschutzerklärung</h1>
        
        <div className="prose prose-blue max-w-none space-y-10 text-gray-700">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">1. Allgemeine Hinweise</h2>
            <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.</p>
            <p>Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten beim Besuch dieser Website erhoben und wie diese verarbeitet werden.</p>
            <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie dem Bundesdatenschutzgesetz (BDSG).</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">2. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="bg-card p-6 rounded-lg border border-gray-100">
              <address className="not-italic leading-relaxed">
                <strong>Tobias Nadjib</strong><br />
                Bürgermeisterkandidat für Meine<br />
                c/o SPD Unterbezirk Gifhorn<br />
                Steinweg 11<br />
                38518 Gifhorn<br />
                Deutschland<br />
                <span className="inline-block mt-2 font-medium">E-Mail:</span> <a href="mailto:Tobias@Verantwortung-Menschen-Zukunft.de" className="text-accent hover:underline">Tobias@Verantwortung-Menschen-Zukunft.de</a>
              </address>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Beim Besuch unserer Website werden automatisch Informationen durch den Webserver erfasst. Dies sind insbesondere:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
              {[
                "IP-Adresse",
                "Datum und Uhrzeit der Anfrage",
                "Name der aufgerufenen Datei",
                "Website, von der aus der Zugriff erfolgt",
                "Verwendeter Browser und Betriebssystem"
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>Diese Daten dienen ausschließlich zur Sicherstellung eines störungsfreien Betriebs der Website sowie zur Verbesserung unseres Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">4. Kontaktformular</h2>
            <p>Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten gespeichert.</p>
            <p>Dies umfasst beispielsweise:</p>
            <ul className="list-disc pl-6 space-y-1 font-medium">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Nachricht</li>
            </ul>
            <p>Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">5. Cookies</h2>
            <p>Unsere Website verwendet sogenannte Cookies. Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher und effektiver zu machen.</p>
            <p>Sie können Ihren Browser so einstellen, dass:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sie über das Setzen von Cookies informiert werden</li>
              <li>Cookies nur im Einzelfall erlaubt werden</li>
              <li>Cookies generell ausgeschlossen werden</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">6. Analyse-Tools</h2>
            <p>Falls Webanalyse-Tools eingesetzt werden, z. B. Google Analytics, erfolgt dieses nur mit Ihrer Einwilligung. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">7. Social Media Links</h2>
            <p>Unsere Website enthält Links zu sozialen Netzwerken. Beim Besuch unserer Website werden keine Daten automatisch an soziale Netzwerke übertragen. Erst wenn Sie auf einen entsprechenden Link klicken, wird eine Verbindung zu der jeweiligen Plattform hergestellt.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">8. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none pl-0">
              {[
                "Auskunft über gespeicherte Daten",
                "Berichtigung unrichtiger Daten",
                "Löschung Ihrer Daten",
                "Einschränkung der Verarbeitung",
                "Widerspruch gegen die Verarbeitung",
                "Datenübertragbarkeit"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-gray-100 text-sm font-semibold text-primary">
                  {item}
                </li>
              ))}
            </ul>
            <p>Wenn Sie eines dieser Rechte ausüben möchten, kontaktieren Sie uns bitte unter den oben genannten Kontaktdaten.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">9. Beschwerderecht</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
            <p>Zuständige Aufsichtsbehörde in Niedersachsen:</p>
            <p className="font-bold text-primary italic">Die Landesbeauftragte für den Datenschutz Niedersachsen</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">10. Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
