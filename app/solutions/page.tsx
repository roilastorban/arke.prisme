import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Solutions() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* SECTION L'INVESTISSEMENT : LA FIN DES DÉPENSES INUTILES */}
      <HeroSection 
        videoSrc="/videos/hero-solutions-final.mp4"
        title="L'INVESTISSEMENT"
        subtitle="LA FIN DES DÉPENSES INUTILES."
        description="Une marque n'est pas une dépense, c'est un actif immatériel. Si vous payez pour 'un logo', vous perdez de l'argent. Si vous investissez dans une architecture, vous bâtissez un patrimoine."
        ctaText="BÂTIR MON PATRIMOINE"
      />

      <section className="bg-[#F5F1E8] py-12 md:py-20 px-[5vw] md:px-[10vw] text-center border-b-2 border-[#1F3D2B]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-black text-[#1F3D2B] leading-relaxed uppercase tracking-widest">
            Le Verdict : Arké livre des structures qui augmentent votre prix de vente et votre valeur aux yeux des investisseurs.
          </p>
        </div>
      </section>

      {/* SECTION LE CATALOGUE : LES 3 NIVEAUX D'ÉCLOSION */}
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] mb-16 md:mb-24 text-center font-black">NOS SOLUTIONS D'INGÉNIERIE</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-stretch">
            
            {/* NIVEAU P1 : DIAGNOSTIC DU SAGE */}
            <div id="diagnostic" className="p-8 md:p-12 flex flex-col justify-between space-y-12 border-2 border-[#1F3D2B] bg-white lg:border-r-0 scroll-mt-32">
              <div className="space-y-6">
                <span className="text-[#C6A75E] font-cinzel tracking-[0.3em] text-xs md:text-sm font-black">NIVEAU P1</span>
                <h3 className="text-xl md:text-2xl font-black">DIAGNOSTIC DU SAGE</h3>
                <p className="text-xs md:text-sm opacity-70 font-bold uppercase tracking-widest">Cible : Celui qui doute et veut arrêter de perdre des clients.</p>
                <div className="h-[2px] bg-[#1F3D2B] w-full" />
                <div className="space-y-4">
                  <p className="text-sm font-black text-[#C6A75E] uppercase tracking-widest">Le Rôle</p>
                  <p className="text-sm opacity-80">Audit clinique et révélation des fractures.</p>
                  <p className="text-sm font-black text-[#C6A75E] uppercase tracking-widest">L'Impact</p>
                  <p className="text-sm opacity-80">Rapport complet sur vos défauts de packaging et de communication. Une clarté immédiate pour savoir quoi réparer.</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl font-black">147 000 FCFA</p>
                <Link href="/audit?level=P1">
                  <Button className="neo-brutalism-button w-full bg-transparent border-2 border-[#1F3D2B] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-[#F5F1E8] rounded-none py-6 md:py-8 uppercase tracking-widest font-black h-auto">
                    INITIER L'AUDIT
                  </Button>
                </Link>
              </div>
            </div>

            {/* NIVEAU P2 : ARCHITECTURE & AUTONOMIE */}
            <div id="architecture" className="p-8 md:p-12 flex flex-col justify-between space-y-12 border-2 border-[#1F3D2B] bg-white lg:border-l-0 scroll-mt-32">
              <div className="space-y-6">
                <span className="text-[#C6A75E] font-cinzel tracking-[0.3em] text-xs md:text-sm font-black">NIVEAU P2</span>
                <h3 className="text-xl md:text-2xl font-black">ARCHITECTURE & AUTONOMIE</h3>
                <p className="text-xs md:text-sm opacity-70 font-bold uppercase tracking-widest">Cible : L'entrepreneur en phase de structuration forte.</p>
                <div className="h-[2px] bg-[#1F3D2B] w-full" />
                <div className="space-y-4">
                  <p className="text-sm font-black text-[#C6A75E] uppercase tracking-widest">Le Rôle</p>
                  <p className="text-sm opacity-80">Livraison de l'infrastructure vitale.</p>
                  <p className="text-sm font-black text-[#C6A75E] uppercase tracking-widest">L'Impact</p>
                  <p className="text-sm opacity-80">Identité visuelle souveraine + Écosystème digital prêt à l'emploi + Guide d'immuabilité pour une gestion autonome.</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl font-black">497 000 FCFA</p>
                <Link href="/audit?level=P2">
                  <Button className="neo-brutalism-button w-full bg-transparent border-2 border-[#1F3D2B] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-[#F5F1E8] rounded-none py-6 md:py-8 uppercase tracking-widest font-black h-auto">
                    BÂTIR MA STRUCTURE
                  </Button>
                </Link>
              </div>
            </div>

            {/* NIVEAU P3 : ÉCLOSION MAJEURE - Featured */}
            <div id="accompagnement" className="p-8 md:p-12 flex flex-col justify-between space-y-12 bg-[#1F3D2B] text-[#F5F1E8] border-2 border-[#1F3D2B] lg:scale-110 lg:z-10 shadow-[12px_12px_0px_#C6A75E] scroll-mt-32">
              <div className="space-y-6">
                <span className="text-[#C6A75E] font-cinzel tracking-[0.3em] text-xs md:text-sm font-black">NIVEAU P3</span>
                <h3 className="text-xl md:text-2xl font-black text-[#C6A75E]">ÉCLOSION MAJEURE</h3>
                <p className="text-xs md:text-sm opacity-70 font-bold uppercase tracking-widest">Cible : Le Champion National prêt pour l'exportation.</p>
                <div className="h-[2px] bg-[#C6A75E] w-full" />
                <div className="space-y-4">
                  <p className="text-sm font-black text-[#C6A75E] uppercase tracking-widest">Le Rôle</p>
                  <p className="text-sm opacity-80">Arké devient l'architecte et le gardien permanent de votre prestige.</p>
                  <p className="text-sm font-black text-[#C6A75E] uppercase tracking-widest">L'Impact</p>
                  <p className="text-sm opacity-80">Architecture complète + Storytelling institutionnel + Gouvernance mensuelle pour garantir que la marque ne dévie jamais.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-[#C6A75E]">747 000 FCFA</p>
                  <p className="text-[10px] md:text-xs opacity-60 mt-2 font-bold uppercase tracking-widest">+ 197 000 FCFA / mois</p>
                </div>
                <Link href="/audit?level=P3">
                  <Button className="neo-brutalism-button w-full bg-[#C6A75E] text-[#1F3D2B] border-2 border-[#F5F1E8] rounded-none py-6 md:py-8 uppercase tracking-widest font-black h-auto">
                    SOLLICITER LE GARDIENNAGE
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LA LOGIQUE DU ROI : POURQUOI CES CHIFFRES ? */}
      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          <h2 className="text-[28px] md:text-[36px] text-[#C6A75E] font-black">LA LOGIQUE DU ROI : POURQUOI CES CHIFFRES ?</h2>
          <p className="text-lg md:text-xl opacity-80 leading-relaxed">
            Le coût de l'amateurisme est bien plus élevé que celui de l'excellence. Une marque mal structurée vous coûte des opportunités de partenariats, des refus en grande distribution et une érosion constante de vos marges.
          </p>
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-bold text-[#C6A75E] uppercase tracking-widest">L'Engagement</p>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              Nous ne facturons pas des pixels. Nous facturons la fin de votre invisibilité et le début de votre autorité sur le marché.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
