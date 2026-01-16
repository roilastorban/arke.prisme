import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Mentions() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
          <h1 className="text-[32px] md:text-[64px] text-[#C6A75E] font-black leading-tight border-b-4 border-[#1F3D2B] pb-8">MENTIONS LÉGALES & PROPRIÉTÉ</h1>

          <div className="space-y-12 md:space-y-16">
            <div className="space-y-6 p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
              <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#1F3D2B]">01. ÉDITEUR DU SITE</h2>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex flex-col md:flex-row md:gap-2"><span className="font-black uppercase tracking-widest text-[#C6A75E]">Dénomination :</span> <span className="opacity-80">Arké – L’Artisan de l’Ombre.</span></li>
                <li className="flex flex-col md:flex-row md:gap-2"><span className="font-black uppercase tracking-widest text-[#C6A75E]">Statut Juridique :</span> <span className="opacity-80">Auto-entrepreneur</span></li>
                <li className="flex flex-col md:flex-row md:gap-2"><span className="font-black uppercase tracking-widest text-[#C6A75E]">Siège Social :</span> <span className="opacity-80">Porto-Novo, Bénin</span></li>
                <li className="flex flex-col md:flex-row md:gap-2"><span className="font-black uppercase tracking-widest text-[#C6A75E]">Responsable :</span> <span className="opacity-80">Le Collectif ^Prisme.</span></li>
                <li className="flex flex-col md:flex-row md:gap-2"><span className="font-black uppercase tracking-widest text-[#C6A75E]">Contact :</span> <span className="opacity-80">Contact Institutionnel Uniquement</span></li>
              </ul>
            </div>

            <div className="space-y-6 p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
              <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#1F3D2B]">02. PROPRIÉTÉ INTELLECTUELLE</h2>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                L’intégralité de ce site, incluant les textes, la structure narrative, les concepts méthodologiques (Effet de Halo, Diagnostic Clinique, Architecture de Valeur) et les éléments graphiques, est la propriété exclusive d'Arké. Toute reproduction, représentation, modification ou exploitation commerciale, même partielle, sans l’accord écrit préalable de l’éditeur, est strictement interdite.
              </p>
            </div>

            <div className="space-y-6 p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
              <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#1F3D2B]">03. TRANSFERT DE PROPRIÉTÉ</h2>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                Les droits d'exploitation des créations de marques (logos, chartes, assets) sont transférés au client uniquement après le paiement intégral des honoraires convenus. Arké conserve le droit d'utiliser les travaux réalisés à des fins de promotion, sauf clause de confidentialité spécifique.
              </p>
            </div>

            <div className="space-y-6 p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
              <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#1F3D2B]">04. PROTECTION DES DONNÉES</h2>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                Les données stratégiques collectées lors des audits P1 sont soumises au secret professionnel le plus strict. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
              </p>
            </div>

            <div className="space-y-6 p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
              <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] text-[#1F3D2B]">05. HÉBERGEMENT</h2>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">Ce site est hébergé par Vercel Inc.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
